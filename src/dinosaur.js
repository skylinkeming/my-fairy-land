import * as T from "three";

// Main side reference: oversized rounded muzzle, squat body, ivory bib and lavender felt scallops.
// The photographed key chain, attachment loop and sewn label are intentionally absent.
export function createDinosaur(art) {
  const g = new T.Group();
  g.name = "pink-dinosaur";
  g.scale.setScalar(.85);
  const pink = "#e981a3", ivory = "#f2ecdf", purple = "#ac86cd";
  const torso = art.ball(1, pink, 0, 0, 0, g);
  const torsoGeometry = torso.geometry.clone();
  function torsoPoint(x, y, z) {
    const u = T.MathUtils.clamp((y + 1) / 2, 0, 1);
    return new T.Vector3(
      .43 * x * (1 - .22 * u),
      .12 + 1.28 * Math.pow(u, 1.7),
      -.10 + .36 * z,
    );
  }
  const vertices = torsoGeometry.attributes.position;
  for (let i = 0; i < vertices.count; i++) {
    const point = torsoPoint(vertices.getX(i), vertices.getY(i), vertices.getZ(i));
    vertices.setXYZ(i, point.x, point.y, point.z);
  }
  torsoGeometry.computeVertexNormals();
  torso.geometry = torsoGeometry;
  for (const fibers of torso.children) if (fibers.isInstancedMesh) {
    const matrix = new T.Matrix4(), position = new T.Vector3();
    const rotation = new T.Quaternion(), scale = new T.Vector3();
    for (let i = 0; i < fibers.count; i++) {
      fibers.getMatrixAt(i, matrix);
      matrix.decompose(position, rotation, scale);
      position.copy(torsoPoint(position.x, position.y, position.z));
      matrix.compose(position, rotation, scale);
      fibers.setMatrixAt(i, matrix);
    }
    fibers.instanceMatrix.needsUpdate = true;
    fibers.computeBoundingSphere();
  }
  // A softly squared oval makes the snout broad and blunt like the plush photo.
  const head = art.ball(.47, pink, 0, 1.28, .23, g, [1.04, 1.02, 1.36]);
  const headGeometry = head.geometry.clone();
  const roundHead = point => {
    for (const axis of ["x", "y", "z"]) {
      point[axis] = Math.sign(point[axis]) * Math.pow(Math.abs(point[axis]), .82);
    }
    return point;
  };
  const headVertices = headGeometry.attributes.position;
  for (let i = 0; i < headVertices.count; i++) {
    const point = roundHead(new T.Vector3().fromBufferAttribute(headVertices, i));
    headVertices.setXYZ(i, point.x, point.y, point.z);
  }
  headGeometry.computeVertexNormals();
  head.geometry = headGeometry;
  for (const fibers of head.children) if (fibers.isInstancedMesh) {
    const matrix = new T.Matrix4(), position = new T.Vector3();
    const rotation = new T.Quaternion(), scale = new T.Vector3();
    for (let i = 0; i < fibers.count; i++) {
      fibers.getMatrixAt(i, matrix);
      matrix.decompose(position, rotation, scale);
      roundHead(position);
      matrix.compose(position, rotation, scale);
      fibers.setMatrixAt(i, matrix);
    }
    fibers.instanceMatrix.needsUpdate = true;
    fibers.computeBoundingSphere();
  }
  art.ball(.35, ivory, 0, .94, .43, g, [1.18, .34, 1.15]);
  art.ball(.29, ivory, 0, .57, .20, g, [1, 1.48, .55]);
  // Small side-set embroidered eyes and a single white stitch in each eye.
  for (const side of [-1, 1]) {
    art.ball(.064, "#201e24", side * .482, 1.36, .32, g, [.30, 1, 1], "fabric");
    art.ball(.015, "#fff9ed", side * .499, 1.369, .339, g, [.3, .85, .8], "smooth");
  }
  const arms = [-1, 1].map(side =>
    art.ball(.115, pink, side * .33, .61, .23, g, [.55, 1.52, .85]),
  );
  const feet = [-1, 1].map(side => {
    const foot = art.ball(.22, pink, side * .285, .13, .22, g, [1.02, .70, 1.78]);
    foot.rotation.y = side * .32;
    foot.userData.restY = .13;
    foot.userData.restZ = .22;
    return foot;
  });
  const tail = art.ball(.18, pink, 0, .39, -.45, g, [.80, .85, 1.7]);
  tail.rotation.x = .65;
  // The soft scallops are thin felt plates along the centre of the back.
  for (const [y, z, radius] of [[1.65,-.23,.16],[1.41,-.39,.17],[1.14,-.43,.14]]) {
    art.ball(radius, purple, 0, y, z, g, [.26, 1.15, 1]);
  }
  const stitch = new T.MeshStandardMaterial({color: "#ab637d", roughness: 1});
  for (const side of [-1, 1]) {
    const curve = new T.QuadraticBezierCurve3(
      new T.Vector3(side * .29, 1.035, .76),
      new T.Vector3(side * .32, 1.012, .70),
      new T.Vector3(side * .34, 1.04, .65),
    );
    g.add(new T.Mesh(new T.TubeGeometry(curve, 12, .005, 6, false), stitch));
  }
  return {g, arms, feet, dispose() { torsoGeometry.dispose(); headGeometry.dispose(); stitch.dispose(); }};
}
