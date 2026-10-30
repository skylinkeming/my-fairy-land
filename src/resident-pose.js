import { Box3 } from 'three';

// Align the actual shaped torso, rather than its center, with the seat surface.
export function seatedRootHeight(root, seatSurface) {
  root.updateWorldMatrix(true, true);
  const bounds = new Box3();
  for (const part of root.children) {
    if (['body', 'pillow'].includes(part.userData.shapePart)) bounds.expandByObject(part, true);
  }
  if (bounds.isEmpty()) return root.position.y;
  return root.position.y + seatSurface - bounds.min.y;
}
