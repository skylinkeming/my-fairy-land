// Only known numeric controls are accepted from storage or imported settings.
export const SHAPE_STORAGE_KEY = 'little-island-shapes-v1';
export const RESIDENT_SHAPE_IDS = ['milk-bear', 'cotton-rabbit', 'matcha-bear', 'floral-bear', 'guagua', 'pink-dinosaur'];
export const SHAPE_CONTROLS = [
  ['size', '整體大小', .75, 1.25, 1],
  ['headWidth', '頭部寬度', .65, 1.55, 1],
  ['headHeight', '頭部高度', .7, 1.4, 1],
  ['headDepth', '頭部厚度', .7, 1.5, 1],
  ['headY', '頭部上下位置', -.15, .2, 0],
  ['bodyWidth', '肚子胖度', .65, 1.65, 1],
  ['bodyHeight', '身體高度', .75, 1.35, 1],
  ['bodyDepth', '肚子厚度', .65, 1.65, 1],
  ['armSize', '手臂大小', .65, 1.5, 1],
  ['footLength', '腳掌長度', .65, 1.6, 1],
  ['eyeSpacing', '眼睛間距', .75, 1.25, 1],
  ['eyeY', '眼睛上下位置', -.08, .08, 0],
  ['tailSize', '尾巴大小', .6, 1.7, 1],
];
export function normalizeShape(value = {}) {
  return Object.fromEntries(SHAPE_CONTROLS.map(([key, , min, max, fallback]) => {
    const n = value?.[key];
    return [key, typeof n === 'number' && Number.isFinite(n) ? Math.max(min, Math.min(max, n)) : fallback];
  }));
}
export function parseShapeSettings(text) {
  const data = JSON.parse(text);
  if (!data || data.version !== 1 || !data.residents || typeof data.residents !== 'object' || Array.isArray(data.residents))
    throw new Error('請選擇由角色造型編輯器匯出的設定檔。');
  return Object.fromEntries(RESIDENT_SHAPE_IDS.filter(id => Object.hasOwn(data.residents, id)).map(id => [id, normalizeShape(data.residents[id])]));
}
export function serializeShapeSettings(settings) {
  return JSON.stringify({version: 1, residents: settings}, null, 2);
}
const baselines = new WeakMap();
function baseline(root) {
  if (baselines.has(root)) return baselines.get(root);
  const parts = root.children.filter(node => node.userData.shapePart).map(node => {
    const part = {node, position: node.position.clone(), scale: node.scale.clone()};
    if (node.userData.shapePart === 'pillow') {
      // The photo bear has one continuous head/body mesh; deform it smoothly.
      node.geometry = node.geometry.clone();
      part.vertices = node.geometry.attributes.position.array.slice();
      part.fibers = node.children.filter(child => child.isInstancedMesh).map(child => ({
        node: child, matrices: child.instanceMatrix.array.slice(),
      }));
    }
    return part;
  });
  const value = {scale: root.scale.clone(), parts};
  baselines.set(root, value);
  return value;
}
export function applyResidentShape(root, value) {
  const shape = normalizeShape(value), base = baseline(root);
  root.scale.copy(base.scale).multiplyScalar(shape.size);
  const headPivot = root.userData.shapeHeadPivot || [0, 1.1, 0];
  for (const part of base.parts) {
    const {node, position, scale} = part, kind = node.userData.shapePart;
    node.position.copy(position); node.scale.copy(scale);
    if (kind === 'head') {
      node.position.set(position.x * shape.headWidth,
        headPivot[1] + (position.y - headPivot[1]) * shape.headHeight + shape.headY,
        headPivot[2] + (position.z - headPivot[2]) * shape.headDepth);
      node.scale.set(scale.x * shape.headWidth, scale.y * shape.headHeight, scale.z * shape.headDepth);
      if (node.userData.shapeEye) { node.position.x *= shape.eyeSpacing; node.position.y += shape.eyeY; }
    } else if (kind === 'body') {
      node.position.set(position.x * shape.bodyWidth, .5 + (position.y - .5) * shape.bodyHeight, position.z * shape.bodyDepth);
      node.scale.set(scale.x * shape.bodyWidth, scale.y * shape.bodyHeight, scale.z * shape.bodyDepth);
    } else if (kind === 'arms') {
      node.position.x *= shape.bodyWidth;
      node.scale.multiplyScalar(shape.armSize);
    } else if (kind === 'feet') {
      node.position.x *= Math.sqrt(shape.bodyWidth);
      node.scale.z *= shape.footLength;
    } else if (kind === 'tail') node.scale.multiplyScalar(shape.tailSize);
    else if (kind === 'pillow') {
      const deform = (x, y, z) => {
        const worldY = y * scale.y + position.y;
        let blend = Math.max(0, Math.min(1, (worldY - .85) / .4));
        blend = blend * blend * (3 - 2 * blend);
        const width = shape.bodyWidth * (1 - blend) + shape.headWidth * blend;
        const depth = shape.bodyDepth * (1 - blend) + shape.headDepth * blend;
        const bodyY = .5 + (worldY - .5) * shape.bodyHeight;
        const headY = headPivot[1] + (worldY - headPivot[1]) * shape.headHeight + shape.headY;
        return [x * width, ((bodyY * (1 - blend) + headY * blend) - position.y) / scale.y, z * depth];
      };
      const vertices = node.geometry.attributes.position;
      for (let i = 0; i < vertices.count; i++) vertices.setXYZ(i, ...deform(...part.vertices.subarray(i * 3, i * 3 + 3)));
      node.geometry.computeVertexNormals(); node.geometry.computeBoundingSphere();
      for (const fiber of part.fibers) {
        fiber.node.instanceMatrix.array.set(fiber.matrices);
        for (let i = 0; i < fiber.node.count; i++) {
          const offset = i * 16 + 12, array = fiber.node.instanceMatrix.array;
          array.set(deform(...fiber.matrices.subarray(offset, offset + 3)), offset);
        }
        fiber.node.instanceMatrix.needsUpdate = true;
        fiber.node.computeBoundingSphere();
      }
    }
  }
}
export function disposeShapeGeometry(root) {
  const base = baselines.get(root);
  for (const part of base?.parts || []) if (part.vertices) part.node.geometry.dispose();
  baselines.delete(root);
}
