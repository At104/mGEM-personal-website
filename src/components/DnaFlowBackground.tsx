
import { useEffect, useRef, type RefObject } from "react";
import * as THREE from "three";
import {
  buildHelixNodes,
  DNA_PALETTE_BRIGHT,
  disposeHelixGroup,
} from "@/lib/dnaHelix";
import ClientOnly from "./ClientOnly";

const COUNT = 80;
const HELIX_LENGTH = 28;
const STAGGER_MS = 11;
const STRAND_GAP_MS = 70;
const RUNG_FADE_MS = 260;
const FLOW_TRAVEL = 8;
const RUNG_RADIUS = 0.032;
const BACKBONE_RADIUS = 0.022;

const FULL_OPACITY = 0.95;
const DIM_OPACITY = 0.45;
const FULL_EMISSIVE = 0.82;
const DIM_EMISSIVE = 0.24;
const FULL_RUNG = 0.28;
const DIM_RUNG = 0.12;

type StrandMesh = THREE.Mesh<THREE.SphereGeometry, THREE.MeshStandardMaterial>;
type BarMesh = THREE.Mesh<THREE.CylinderGeometry, THREE.MeshStandardMaterial>;

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = THREE.MathUtils.clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function getTextZone(viewportWidth: number) {
  const containerW = Math.min(viewportWidth, 1280);
  const offset = (viewportWidth - containerW) / 2;
  const zoneStart = offset + 24;
  const zoneEnd = zoneStart + Math.min(576, containerW - 48);
  const feather = Math.min(64, viewportWidth * 0.04);
  return { zoneStart, zoneEnd, feather };
}

function dimBehindText(screenX: number, viewportWidth: number) {
  const { zoneStart, zoneEnd, feather } = getTextZone(viewportWidth);
  if (screenX <= zoneStart - feather || screenX >= zoneEnd + feather) return 0;
  const enter = smoothstep(zoneStart - feather, zoneStart + feather, screenX);
  const exit = 1 - smoothstep(zoneEnd - feather, zoneEnd + feather, screenX);
  return Math.min(enter, exit);
}

function createBar(
  start: THREE.Vector3,
  end: THREE.Vector3,
  radius: number,
  mat: THREE.MeshStandardMaterial
) {
  const dir = new THREE.Vector3().subVectors(end, start);
  const len = dir.length();
  const geo = new THREE.CylinderGeometry(radius, radius, len, 8);
  const mesh = new THREE.Mesh(geo, mat);
  const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
  mesh.position.copy(mid);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  mesh.userData.homeMid = mid.clone();
  mesh.userData.homeQuat = mesh.quaternion.clone();
  return mesh;
}

function buildStrandMeshes(
  group: THREE.Group,
  nodes: ReturnType<typeof buildHelixNodes>,
  sphereRadius: number
): { strand0: StrandMesh[]; strand1: StrandMesh[] } {
  const geo = new THREE.SphereGeometry(sphereRadius, 14, 14);
  const strand0: StrandMesh[] = [];
  const strand1: StrandMesh[] = [];

  nodes.forEach((node, i) => {
    for (const [x, y, z, color, strand] of [
      [node.x1, node.y, node.z1, node.color1, 0],
      [node.x2, node.y, node.z2, node.color2, 1],
    ] as [number, number, number, string, 0 | 1][]) {
      const mat = new THREE.MeshStandardMaterial({
        color,
        emissive: new THREE.Color(color),
        emissiveIntensity: 0,
        transparent: true,
        opacity: 0,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      mesh.userData.home = new THREE.Vector3(x, y, z);
      mesh.userData.index = i;
      mesh.visible = false;
      group.add(mesh);
      (strand === 0 ? strand0 : strand1).push(mesh);
    }
  });

  return { strand0, strand1 };
}

function buildConnectors(group: THREE.Group, nodes: ReturnType<typeof buildHelixNodes>) {
  const rungMat = () =>
    new THREE.MeshStandardMaterial({
      color: "#ffffff",
      emissive: new THREE.Color("#ffffff"),
      emissiveIntensity: 0.15,
      transparent: true,
      opacity: 0,
    });

  const rungs: { mesh: BarMesh; index: number }[] = [];
  const backbones: { mesh: BarMesh; index: number }[] = [];

  nodes.forEach((node, i) => {
    const rung = createBar(
      new THREE.Vector3(node.x1, node.y, node.z1),
      new THREE.Vector3(node.x2, node.y, node.z2),
      RUNG_RADIUS,
      rungMat()
    );
    rung.userData.index = i;
    rung.visible = false;
    group.add(rung);
    rungs.push({ mesh: rung, index: i });

    if (i < nodes.length - 1) {
      const next = nodes[i + 1];
      for (const [ax, az, bx, bz] of [
        [node.x1, node.z1, next.x1, next.z1],
        [node.x2, node.z2, next.x2, next.z2],
      ] as [number, number, number, number][]) {
        const bb = createBar(
          new THREE.Vector3(ax, node.y, az),
          new THREE.Vector3(bx, next.y, bz),
          BACKBONE_RADIUS,
          rungMat()
        );
        bb.userData.index = i;
        bb.visible = false;
        group.add(bb);
        backbones.push({ mesh: bb, index: i });
      }
    }
  });

  return { rungs, backbones };
}

type DnaFlowSceneProps = {
  triggerRef: RefObject<HTMLElement | null>;
};

function DnaFlowScene({ triggerRef }: DnaFlowSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const w = mount.clientWidth || 1200;
    const h = mount.clientHeight || 800;

    const scene = new THREE.Scene();
    const worldSpan = 22;
    const camera = new THREE.OrthographicCamera(
      -worldSpan / 2,
      worldSpan / 2,
      (worldSpan * h) / w / 2,
      (-worldSpan * h) / w / 2,
      0.1,
      100
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.68));
    const key = new THREE.PointLight(0xffffff, 1.35);
    key.position.set(10, 4, 12);
    scene.add(key);
    const fill = new THREE.PointLight(0x5eead4, 0.65);
    fill.position.set(-8, -2, 6);
    scene.add(fill);

    const root = new THREE.Group();
    scene.add(root);

    const orientGroup = new THREE.Group();
    orientGroup.rotation.z = Math.PI / 2;
    root.add(orientGroup);

    const spinGroup = new THREE.Group();
    orientGroup.add(spinGroup);

    const nodes = buildHelixNodes(COUNT, {
      turns: 5,
      height: HELIX_LENGTH,
      radius: 1.15,
      colorAt: (i, strand) => DNA_PALETTE_BRIGHT[(i + strand * 2) % DNA_PALETTE_BRIGHT.length],
    });

    const { strand0, strand1 } = buildStrandMeshes(spinGroup, nodes, 0.088);
    const connectorGroup = new THREE.Group();
    spinGroup.add(connectorGroup);
    const { rungs, backbones } = buildConnectors(connectorGroup, nodes);

    let animationStart: number | null = reduceMotion ? performance.now() : null;
    let hasStarted = reduceMotion;
    let raf = 0;
    const worldPos = new THREE.Vector3();
    const midPos = new THREE.Vector3();

    const fitToViewport = () => {
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      if (!nw || !nh) return;

      const aspect = nw / nh;
      camera.top = worldSpan / aspect / 2;
      camera.bottom = -worldSpan / aspect / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);

      root.scale.setScalar((worldSpan * 1.1) / HELIX_LENGTH);
    };

    fitToViewport();

    const introDuration = COUNT * STAGGER_MS * 2 + STRAND_GAP_MS + RUNG_FADE_MS;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          hasStarted = true;
          animationStart = performance.now();
        }
      },
      { threshold: 0.25 }
    );

    const triggerEl = triggerRef.current ?? mount.closest("section");
    if (triggerEl) {
      observer.observe(triggerEl);
    } else {
      hasStarted = true;
      animationStart = performance.now();
    }

    /**
     * After z=π/2 rotation, world X = −local Y.
     * Index 0 (low local Y) sits on the RIGHT; higher indices move LEFT.
     * Reveal index 0 first → wave travels right to left.
     */
    const revealAmount = (strand: 0 | 1, index: number, elapsed: number) => {
      if (reduceMotion) return 1;
      const strandStart = strand === 0 ? 0 : COUNT * STAGGER_MS + STRAND_GAP_MS;
      const nodeStart = strandStart + index * STAGGER_MS;
      const t = (elapsed - nodeStart) / (STAGGER_MS * 2.4);
      return THREE.MathUtils.clamp(t, 0, 1);
    };

    const connectorReveal = (index: number, elapsed: number) => {
      if (reduceMotion) return 1;
      const rungStart = COUNT * STAGGER_MS * 2 + STRAND_GAP_MS;
      const t = (elapsed - rungStart - index * (STAGGER_MS * 0.3)) / RUNG_FADE_MS;
      return THREE.MathUtils.clamp(t, 0, 1);
    };

    const screenX = (v: THREE.Vector3, nw: number) => {
      v.project(camera);
      return ((v.x + 1) / 2) * nw;
    };

    const applyBead = (
      mesh: StrandMesh,
      strand: 0 | 1,
      index: number,
      elapsed: number,
      nw: number
    ) => {
      const home = mesh.userData.home as THREE.Vector3;
      const amount = revealAmount(strand, index, elapsed);
      const eased = easeOutCubic(amount);

      if (eased <= 0) {
        mesh.visible = false;
        return;
      }

      mesh.visible = true;
      // More negative local Y → further right on screen; ease toward home (travel left).
      const flowOffset = -(1 - eased) * FLOW_TRAVEL;
      mesh.position.set(home.x, home.y + flowOffset, home.z);

      mesh.getWorldPosition(worldPos);
      const dim = dimBehindText(screenX(worldPos, nw), nw);

      mesh.material.opacity = eased * THREE.MathUtils.lerp(FULL_OPACITY, DIM_OPACITY, dim);
      mesh.material.emissiveIntensity =
        eased * THREE.MathUtils.lerp(FULL_EMISSIVE, DIM_EMISSIVE, dim);
    };

    const applyConnector = (
      mesh: BarMesh,
      index: number,
      elapsed: number,
      nw: number
    ) => {
      const eased = connectorReveal(index, elapsed);
      if (eased <= 0) {
        mesh.visible = false;
        return;
      }

      mesh.visible = true;
      const homeMid = mesh.userData.homeMid as THREE.Vector3;
      const homeQuat = mesh.userData.homeQuat as THREE.Quaternion;
      const flowOffset = -(1 - easeOutCubic(eased)) * FLOW_TRAVEL;

      mesh.position.set(homeMid.x, homeMid.y + flowOffset, homeMid.z);
      mesh.quaternion.copy(homeQuat);

      midPos.copy(mesh.position);
      spinGroup.localToWorld(midPos);
      const dim = dimBehindText(screenX(midPos, nw), nw);
      mesh.material.opacity = eased * THREE.MathUtils.lerp(FULL_RUNG, DIM_RUNG, dim);
    };

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const nw = mount.clientWidth;
      const elapsed = animationStart ? performance.now() - animationStart : -1;

      if (elapsed < 0) {
        root.position.x = worldSpan * 0.55;
        renderer.render(scene, camera);
        return;
      }

      if (!reduceMotion) {
        const slideT = easeOutCubic(THREE.MathUtils.clamp(elapsed / introDuration, 0, 1));
        root.position.x = THREE.MathUtils.lerp(worldSpan * 0.55, 0, slideT);
      } else {
        root.position.x = 0;
      }

      strand0.forEach((mesh, index) => applyBead(mesh, 0, index, elapsed, nw));
      strand1.forEach((mesh, index) => applyBead(mesh, 1, index, elapsed, nw));
      rungs.forEach(({ mesh, index }) => applyConnector(mesh, index, elapsed, nw));
      backbones.forEach(({ mesh, index }) => applyConnector(mesh, index, elapsed, nw));

      if (!reduceMotion && elapsed > introDuration) {
        spinGroup.rotation.y += 0.004;
        spinGroup.rotation.z = Math.sin(elapsed * 0.00006) * 0.05;
      }

      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener("resize", fitToViewport);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", fitToViewport);
      renderer.dispose();
      disposeHelixGroup(spinGroup);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [triggerRef]);

  return <div ref={mountRef} className="h-full w-full" aria-hidden />;
}

const fallback = (
  <div className="h-full w-full animate-pulse bg-maroon/10" aria-hidden />
);

type DnaFlowBackgroundProps = {
  triggerRef: RefObject<HTMLElement | null>;
};

/** Full-bleed horizontal DNA that reveals strand-by-strand behind section copy. */
export default function DnaFlowBackground({ triggerRef }: DnaFlowBackgroundProps) {
  return (
    <ClientOnly fallback={fallback}>
      <DnaFlowScene triggerRef={triggerRef} />
    </ClientOnly>
  );
}
