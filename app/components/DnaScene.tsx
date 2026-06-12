"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { addHelixSpheres, buildHelixNodes, disposeHelixGroup } from "@/lib/dnaHelix";

const COUNT = 48;

/**
 * Vanilla Three.js DNA helix — avoids @react-three/fiber's reconciler,
 * which causes ReactCurrentOwner errors with React 18 + Next.js 15.
 */
export default function DnaScene() {
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

    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const key = new THREE.PointLight(0xffffff, 1.1);
    key.position.set(8, 6, 8);
    scene.add(key);
    const fill = new THREE.PointLight(0x17b6c9, 0.5);
    fill.position.set(-6, -4, 4);
    scene.add(fill);

    const group = new THREE.Group();
    scene.add(group);

    const nodes = buildHelixNodes(COUNT, { turns: 5, height: 9 });
    addHelixSpheres(group, nodes, 0.09);

    let raf = 0;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      if (!reduceMotion) {
        group.rotation.y += 0.012;
        group.rotation.z = Math.sin(Date.now() * 0.00008) * 0.08;
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
      disposeHelixGroup(group);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="h-full w-full" aria-hidden />;
}
