
import { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  addHelixSpheres,
  buildHelixNodes,
  DNA_PALETTE,
  DNA_PALETTE_BRIGHT,
  disposeHelixGroup,
} from "@/lib/dnaHelix";

const COUNT = 48;

export type DnaSceneProps = {
  orientation?: "vertical" | "horizontal";
  bright?: boolean;
};

/**
 * Vanilla Three.js DNA helix — avoids @react-three/fiber's reconciler,
 * which causes ReactCurrentOwner errors with React 18 + Next.js 15.
 */
export default function DnaScene({ orientation = "vertical", bright = false }: DnaSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const w = mount.clientWidth || 400;
    const h = mount.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mount.appendChild(renderer.domElement);

    const palette = bright ? DNA_PALETTE_BRIGHT : DNA_PALETTE;
    const emissiveIntensity = bright ? 0.78 : 0.35;

    scene.add(new THREE.AmbientLight(0xffffff, bright ? 0.72 : 0.55));
    const key = new THREE.PointLight(0xffffff, bright ? 1.45 : 1.1);
    key.position.set(8, 6, 8);
    scene.add(key);
    const fill = new THREE.PointLight(bright ? 0x7dd3fc : 0x17b6c9, bright ? 0.85 : 0.5);
    fill.position.set(-6, -4, 4);
    scene.add(fill);

    const orientGroup = new THREE.Group();
    if (orientation === "horizontal") {
      orientGroup.rotation.z = Math.PI / 2;
    }
    scene.add(orientGroup);

    const spinGroup = new THREE.Group();
    orientGroup.add(spinGroup);

    const nodes = buildHelixNodes(COUNT, {
      turns: 5,
      height: 9,
      colorAt: (i, strand) => palette[(i + strand * 2) % palette.length],
    });
    addHelixSpheres(spinGroup, nodes, bright ? 0.1 : 0.09, emissiveIntensity);

    let raf = 0;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      if (!reduceMotion) {
        spinGroup.rotation.y += 0.012;
        spinGroup.rotation.z = Math.sin(Date.now() * 0.00008) * 0.08;
      }
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      if (!nw || !nh) return;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      disposeHelixGroup(spinGroup);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [orientation, bright]);

  return <div ref={mountRef} className="h-full w-full" aria-hidden />;
}
