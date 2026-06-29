import * as THREE from "three";

export const DNA_PALETTE = ["#7A003C", "#17B6C9", "#7B6EF6", "#FF6B6B", "#F4B740"] as const;
export const DNA_PALETTE_BRIGHT = ["#FF8FAB", "#5EEAD4", "#C4B5FD", "#FDE68A", "#FCA5A5"] as const;

export type HelixNode = {
  y: number;
  x1: number;
  z1: number;
  x2: number;
  z2: number;
  color1: string;
  color2: string;
};

export function buildHelixNodes(
  count: number,
  opts?: {
    turns?: number;
    height?: number;
    radius?: number;
    colorAt?: (i: number, strand: 0 | 1) => string;
  }
): HelixNode[] {
  const turns = opts?.turns ?? 5;
  const height = opts?.height ?? 9;
  const radius = opts?.radius ?? 1.35;
  const colorAt =
    opts?.colorAt ??
    ((i, strand) => DNA_PALETTE[(i + strand * 2) % DNA_PALETTE.length]);

  const nodes: HelixNode[] = [];
  for (let i = 0; i < count; i++) {
    const t = (i / Math.max(count - 1, 1)) * Math.PI * turns;
    const y = (i / Math.max(count - 1, 1)) * height - height / 2;
    nodes.push({
      y,
      x1: Math.cos(t) * radius,
      z1: Math.sin(t) * radius,
      x2: Math.cos(t + Math.PI) * radius,
      z2: Math.sin(t + Math.PI) * radius,
      color1: colorAt(i, 0),
      color2: colorAt(i, 1),
    });
  }
  return nodes;
}

export function addHelixSpheres(
  group: THREE.Group,
  nodes: HelixNode[],
  sphereRadius = 0.09,
  emissiveIntensity = 0.35
): THREE.Mesh[] {
  const meshes: THREE.Mesh[] = [];
  const geo = new THREE.SphereGeometry(sphereRadius, 14, 14);

  for (const node of nodes) {
    for (const [x, y, z, color] of [
      [node.x1, node.y, node.z1, node.color1],
      [node.x2, node.y, node.z2, node.color2],
    ] as [number, number, number, string][]) {
      const mat = new THREE.MeshStandardMaterial({
        color,
        emissive: new THREE.Color(color),
        emissiveIntensity,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      group.add(mesh);
      meshes.push(mesh);
    }
  }

  return meshes;
}

export function addHelixRungs(group: THREE.Group, nodes: HelixNode[], opacity = 0.25) {
  for (const node of nodes) {
    const points = [
      new THREE.Vector3(node.x1, node.y, node.z1),
      new THREE.Vector3(node.x2, node.y, node.z2),
    ];
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    const mat = new THREE.LineBasicMaterial({
      color: "#ffffff",
      transparent: true,
      opacity,
    });
    group.add(new THREE.Line(geo, mat));
  }
}

export function addMemberMarkers(
  group: THREE.Group,
  nodes: HelixNode[],
  colors: string[],
  radius = 0.14
): THREE.Mesh[] {
  const meshes: THREE.Mesh[] = [];
  const geo = new THREE.SphereGeometry(radius, 16, 16);

  nodes.forEach((node, i) => {
    const mx = (node.x1 + node.x2) / 2;
    const mz = (node.z1 + node.z2) / 2;
    const color = colors[i] ?? node.color1;
    const mat = new THREE.MeshStandardMaterial({
      color,
      emissive: new THREE.Color(color),
      emissiveIntensity: 0.4,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(mx, node.y, mz);
    mesh.userData.memberIndex = i;
    group.add(mesh);
    meshes.push(mesh);
  });

  return meshes;
}

export function addHelixBackbone(
  group: THREE.Group,
  nodes: HelixNode[],
  opacity = 0.12,
  // Optional palette — when supplied, backbone spheres cycle through these colours
  // instead of plain white. Each strand gets its own offset so the two strands differ.
  palette?: readonly string[]
) {
  addHelixRungs(group, nodes, opacity);
  const geo = new THREE.SphereGeometry(0.055, 10, 10);
  nodes.forEach((node, ni) => {
    ([
      [node.x1, node.y, node.z1, 0],
      [node.x2, node.y, node.z2, 1],
    ] as [number, number, number, number][]).forEach(([x, y, z, si]) => {
      const c = palette
        ? palette[(ni + si * 2) % palette.length]
        : "#ffffff";
      const mat = new THREE.MeshStandardMaterial({
        color: c,
        emissive: new THREE.Color(c),
        emissiveIntensity: palette ? 0.25 : 0.08,
        transparent: true,
        opacity: palette ? 0.55 : 0.35,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      group.add(mesh);
    });
  });
}

export function helixYAtProgress(nodes: HelixNode[], progress: number): number {
  if (!nodes.length) return 0;
  if (nodes.length === 1) return nodes[0].y;
  const floatIndex = progress * (nodes.length - 1);
  const i = Math.floor(floatIndex);
  const frac = floatIndex - i;
  const yA = nodes[i].y;
  const yB = nodes[Math.min(i + 1, nodes.length - 1)].y;
  return yA + (yB - yA) * frac;
}

export function activeIndexAtProgress(count: number, progress: number): number {
  if (count <= 1) return 0;
  return Math.min(count - 1, Math.round(progress * (count - 1)));
}

export function setMemberHighlight(
  meshes: THREE.Mesh[],
  nodeIndex: number,
  dimOthers = true
) {
  meshes.forEach((mesh, i) => {
    const mat = mesh.material as THREE.MeshStandardMaterial;
    const active = i === nodeIndex;
    mesh.scale.setScalar(active ? 1.65 : 1);
    mat.emissiveIntensity = active ? 0.85 : dimOthers ? 0.15 : 0.4;
  });
}

export function setNodeHighlight(
  meshes: THREE.Mesh[],
  nodeIndex: number,
  active: boolean,
  dimOthers = true
) {
  const pairStart = nodeIndex * 2;
  meshes.forEach((mesh, i) => {
    const mat = mesh.material as THREE.MeshStandardMaterial;
    const isPair = i === pairStart || i === pairStart + 1;
    const scale = isPair && active ? 1.85 : 1;
    const emissive = isPair && active ? 0.75 : dimOthers && !isPair ? 0.12 : 0.35;
    mesh.scale.setScalar(scale);
    mat.emissiveIntensity = emissive;
  });
}

export function disposeHelixGroup(group: THREE.Group) {
  const disposedGeo = new Set<string>();
  const disposedMat = new Set<string>();

  group.traverse((obj) => {
    if (obj instanceof THREE.Mesh || obj instanceof THREE.Line) {
      if (!disposedGeo.has(obj.geometry.uuid)) {
        obj.geometry.dispose();
        disposedGeo.add(obj.geometry.uuid);
      }
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const mat of mats) {
        if (!disposedMat.has(mat.uuid)) {
          mat.dispose();
          disposedMat.add(mat.uuid);
        }
      }
    }
  });
}
