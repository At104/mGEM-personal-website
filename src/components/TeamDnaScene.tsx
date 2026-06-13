
import { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  addHelixBackbone,
  addMemberMarkers,
  buildHelixNodes,
  disposeHelixGroup,
  helixYAtProgress,
  setMemberHighlight,
} from "@/lib/dnaHelix";

type TeamDnaSceneProps = {
  colors: string[];
  scrollProgress: number;
  activeIndex: number;
  className?: string;
};

/** Scroll-driven vertical DNA strand — one glowing node per team member. */
export default function TeamDnaScene({
  colors,
  scrollProgress,
  activeIndex,
  className,
}: TeamDnaSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(scrollProgress);
  const activeRef = useRef(activeIndex);
  const markersRef = useRef<THREE.Mesh[]>([]);
  const groupRef = useRef<THREE.Group | null>(null);
  const helixRef = useRef<ReturnType<typeof buildHelixNodes>>([]);

  useEffect(() => {
    progressRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    activeRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || colors.length === 0) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const count = colors.length;

    const w = mount.clientWidth || 400;
    const h = mount.clientHeight || 600;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, w / h, 0.1, 120);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const key = new THREE.PointLight(0xffffff, 1.3);
    key.position.set(5, 6, 10);
    scene.add(key);
    const fill = new THREE.PointLight(0x17b6c9, 0.5);
    fill.position.set(-6, -2, 6);
    scene.add(fill);

    const group = new THREE.Group();
    groupRef.current = group;
    scene.add(group);

    const helixNodes = buildHelixNodes(count, {
      turns: Math.max(5, count / 5),
      height: Math.max(14, count * 0.32),
      colorAt: (i) => colors[i] ?? "#7A003C",
    });
    helixRef.current = helixNodes;

    addHelixBackbone(group, helixNodes, 0.15);
    markersRef.current = addMemberMarkers(group, helixNodes, colors, 0.13);

    let raf = 0;
    let currentY = 0;
    let currentRot = 0;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const p = progressRef.current;
      const idx = activeRef.current;
      const targetY = -helixYAtProgress(helixNodes, p);
      const targetRot = p * Math.PI * 6;

      currentY += (targetY - currentY) * 0.1;
      currentRot += (targetRot - currentRot) * 0.08;

      if (groupRef.current) {
        groupRef.current.position.y = currentY;
        if (!reduceMotion) {
          groupRef.current.rotation.y = currentRot;
        }
      }

      setMemberHighlight(markersRef.current, idx, true);
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
      disposeHelixGroup(group);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, [colors]);

  useEffect(() => {
    setMemberHighlight(markersRef.current, activeIndex, true);
  }, [activeIndex]);

  return <div ref={mountRef} className={className} aria-hidden />;
}
