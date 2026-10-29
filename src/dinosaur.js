import * as T from "three";

// Front and four angled references: pink plush, projecting muzzle, ivory underside, three felt fins.
// The photographed key chain, attachment loop and sewn label are intentionally absent.
export function createDinosaur(art) {
  const g = new T.Group();
  g.name = "pink-dinosaur";
  g.scale.setScalar(.85);
  const pink = "#e78ba8", ivory = "#f0e8d7", purple = "#ad8acb";
  const torso = art.ball(1, pink, 0, 0, 0, g);
  const torsoGeometry = torso.geometry.clone();
  function torsoPoint(x, y, z) {
    const u = T.MathUtils.clamp((y + 1) / 2, 0, 1);
    return new T.Vector3(
      .38 * x * (1 - .18 * u),
      .12 + 1.27 * Math.pow(u, 1.6),
      -.09 + .31 * z,
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
  art.ball(.43, pink, 0, 1.25, .18, g, [1.04, .97, 1.25]);
  art.ball(.33, ivory, 0, .99, .33, g, [1.18, .39, 1.12]);
  art.ball(.265, ivory, 0, .59, .13, g, [1, 1.85, .55]);
  // Small side-set embroidered eyes and a single white stitch in each eye.
  for (const side of [-1, 1]) {
    art.ball(.049, "#25232b", side * .43, 1.30, .25, g, [.33, 1, 1], "fabric");
    art.ball(.012, "#fff9ed", side * .447, 1.309, .265, g, [.3, .85, .8], "smooth");
  }
  const arms = [-1, 1].map(side =>
    art.ball(.105, pink, side * .265, .66, .14, g, [.55, 1.45, .9]),
  );
  const feet = [-1, 1].map(side => {
    const foot = art.ball(.205, pink, side * .29, .12, .18, g, [.95, .69, 1.5]);
    foot.rotation.y = side * .32;
    foot.userData.restY = .12;
    foot.userData.restZ = .18;
    return foot;
  });
  const tail = art.ball(.19, pink, 0, .37, -.40, g, [.72, .78, 1.65]);
  tail.rotation.x = .55;
  // The soft scallops are thin felt plates along the centre of the back.
  for (const [y, z, radius] of [[1.59,-.12,.135],[1.38,-.255,.145],[1.15,-.30,.125]]) {
    art.ball(radius, purple, 0, y, z, g, [.3, 1.15, 1]);
  }
  const stitch = new T.MeshStandardMaterial({color: "#ab637d", roughness: 1});
  for (const side of [-1, 1]) {
    const curve = new T.QuadraticBezierCurve3(
      new T.Vector3(side * .20, 1.037, .605),
      new T.Vector3(side * .235, 1.015, .56),
      new T.Vector3(side * .25, 1.045, .515),
    );
    g.add(new T.Mesh(new T.TubeGeometry(curve, 12, .005, 6, false), stitch));
  }
  return {g, arms, feet, dispose() { torsoGeometry.dispose(); stitch.dispose(); }};
}
