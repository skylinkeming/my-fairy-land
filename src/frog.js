import * as T from "three";

// Guagua: the family's mint plush frog, with raised eyes and sewn cream patches.
export function createFrog(art) {
  const g = new T.Group();
  g.name = "guagua";
  g.scale.setScalar(.85);
  const mint = "#9fb9ae";
  // Match the head's width with a rounder, deeper plush belly.
  art.ball(.37, mint, 0, .49, 0, g, [1.4, 1.3, 1.02]);
  art.ball(.47, mint, 0, 1.1, .015, g, [1.1, .85, .65]);
  for (const side of [-1, 1]) {
    art.ball(.16, mint, side * .335, 1.46, .005, g, [1.13, 1, .85]);
    art.ball(.019, "#252b29", side * .335, 1.5, .143, g, [1, .85, .4], "fabric");
    art.ball(.113, "#c7b58b", side * .34, 1.13, .232, g, [1, 1.05, .2], "fabric");
    art.ball(.101, "#e2d2c1", side * .34, 1.13, .25, g, [1, 1.05, .18], "fabric");
  }
  // The cream belly is a soft fabric applique, not a shiny surface.
  art.ball(.31, "#dfd0bc", 0, .48, .30, g, [1.12, 1.15, .34], "fabric");
  const arms = [-1, 1].map(side =>
    art.ball(.12, mint, side * .51, .53, 0, g, [.85, 1.5, .82]),
  );
  const feet = [-1, 1].map(side =>
    art.ball(.155, mint, side * .29, .1, .08, g, [1.25, .7, 1.3]),
  );
  const mouthMaterial = new T.MeshStandardMaterial({color: "#29312d", roughness: 1});
  const smile = new T.QuadraticBezierCurve3(
    new T.Vector3(-.09, 1.365, .237),
    new T.Vector3(0, 1.338, .258),
    new T.Vector3(.09, 1.365, .237),
  );
  g.add(new T.Mesh(new T.TubeGeometry(smile, 20, .007, 8, false), mouthMaterial));
  return {g, arms, feet, dispose() { mouthMaterial.dispose(); }};
}
