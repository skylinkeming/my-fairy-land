import * as T from "three";

// Shared smooth meshes and fine, short pile keep the dolls soft at close range.
export function createPlushArt() {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 256;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#909090";
  ctx.fillRect(0, 0, 256, 256);
  let seed = 1729;
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  for (let i = 0; i < 12000; i++) {
    const value = 90 + Math.floor(random() * 100);
    ctx.strokeStyle = `rgb(${value},${value},${value})`;
    const x = random() * 256, y = random() * 256;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + random() * 2 - 1, y + 1 + random() * 3);
    ctx.stroke();
  }
  const pile = new T.CanvasTexture(canvas);
  pile.wrapS = pile.wrapT = T.RepeatWrapping;
  pile.repeat.set(3, 2);
  const sphere = new T.SphereGeometry(1, 40, 28);
  const fiber = new T.SphereGeometry(1, 5, 3);
  const materials = new Map();
  const instances = [];
  function material(color, kind) {
    const key = `${color}:${kind}`;
    if (!materials.has(key)) materials.set(key, new T.MeshStandardMaterial({
      color, flatShading: false,
      roughness: kind === "eye" ? .3 : 1,
      ...(kind === "pile" ? { transparent: true, opacity: .38, depthWrite: false } : {}),
      ...(kind === "fur" || kind === "fabric" ? {
        bumpMap: pile, bumpScale: kind === "fur" ? .008 : .004,
      } : {}),
    }));
    return materials.get(key);
  }
  function ball(r, color, x, y, z, parent, scale = [1, 1, 1], kind = "fur") {
    const part = new T.Mesh(sphere, material(color, kind));
    part.position.set(x, y, z);
    part.scale.set(...scale.map((v) => v * r));
    part.castShadow = part.receiveShadow = true;
    parent.add(part);
    if (kind === "fur") {
      const count = r > .3 ? 1200 : r > .15 ? 300 : 140;
      const fibers = new T.InstancedMesh(fiber, material(color, "pile"), count);
      const dummy = new T.Object3D();
      const up = new T.Vector3(0, 1, 0);
      for (let i = 0; i < count; i++) {
        const y = 1 - 2 * (i + .5) / count;
        const angle = i * Math.PI * (3 - Math.sqrt(5));
        const radius = Math.sqrt(1 - y * y);
        const normal = new T.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
        dummy.position.copy(normal).multiplyScalar(.998);
        dummy.quaternion.setFromUnitVectors(up, normal);
        // World-space pile stays short even on the larger head and body.
        dummy.scale.set(.004 / r, (.004 + random() * .003) / r, .004 / r);
        dummy.updateMatrix();
        fibers.setMatrixAt(i, dummy.matrix);
      }
      fibers.instanceMatrix.needsUpdate = true;
      part.add(fibers);
      instances.push(fibers);
    }
    return part;
  }
  return {
    ball,
    dispose() {
      for (const instance of instances) instance.dispose();
      sphere.dispose();
      fiber.dispose();
      pile.dispose();
      for (const mat of materials.values()) mat.dispose();
    },
  };
}
