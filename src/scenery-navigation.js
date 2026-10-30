import * as T from "three";

export function collectSceneryNavigation(groups, rivers, footbridges, top) {
  const obstacles = [];
  let serial = 0;
  function visit(object, island) {
    if (object.userData.walkThrough) return;
    if (object.userData.walkObstacle || object.isMesh) {
      const bounds = new T.Box3().setFromObject(object),
        height = bounds.max.y - bounds.min.y;
      if (
        object.userData.walkObstacle ||
        (height > 0.2 && bounds.min.y < top + 1.4 && bounds.max.y > top + 0.2)
      ) {
        obstacles.push({
          id: object.userData.obstacleId || `${island}-scenery-${serial++}`,
          island,
          minX: bounds.min.x,
          maxX: bounds.max.x,
          minZ: bounds.min.z,
          maxZ: bounds.max.z,
        });
        return;
      }
    }
    for (const child of object.children) visit(child, island);
  }
  for (const [island, group] of Object.entries(groups)) {
    group.updateWorldMatrix(true, true);
    visit(group, island);
  }
  for (const { curve, parent, width } of rivers) {
    const points = curve.getPoints(40).map((point) => {
      point.applyMatrix4(parent.matrixWorld);
      return { x: point.x, z: point.z };
    });
    obstacles.push({
      id: `river-${serial++}`,
      kind: "river",
      radius: width / 2,
      points,
    });
  }
  const crossings = footbridges.map(({ group, island }) => {
    const a = new T.Vector3(0, 0, -1.5).applyMatrix4(group.matrixWorld);
    const b = new T.Vector3(0, 0, 1.5).applyMatrix4(group.matrixWorld);
    return { island, a: { x: a.x, z: a.z }, b: { x: b.x, z: b.z } };
  });
  return { obstacles, crossings };
}
