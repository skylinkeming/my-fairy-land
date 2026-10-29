import * as T from "three";

// A cuddly resident with the family bear's gray fur, botanical prints and stitched face.
export function createFloralBear(art) {
  const g = new T.Group();
  g.name = "floral-bear";
  g.scale.setScalar(.85);
  const canvas = document.createElement("canvas");
  canvas.width = 1024; canvas.height = 512;
  const c = canvas.getContext("2d");
  c.fillStyle = "#b7b5a9"; c.fillRect(0, 0, 1024, 512);
  // Keep the gray fabric uniform beneath the blue / terracotta prints.
  for (const [x,y,color,angle,size] of [
    [680,90,"#ba816b",-.5,30],[850,185,"#647e90",.65,37],
    [610,255,"#667e8c",-.55,42],[880,310,"#bd826a",.35,28],
    [660,405,"#657e8d",.6,35],[810,410,"#bc7d66",-.4,44],
    [302,100,"#ba816b",-.4,19],[290,192,"#657e8d",.8,25],
    [205,255,"#657e8d",-.35,33],[275,350,"#bc7d66",-.5,34],
    [222,380,"#657e8d",.65,26],
    [120,180,"#657e8d",.5,37],[350,320,"#be8169",-.2,38],
    [390,120,"#657e8d",-.4,32],[150,400,"#bc7d66",.3,30],
  ]) {
    c.save(); c.translate(x,y); c.rotate(angle);
    c.strokeStyle = color; c.fillStyle = color; c.globalAlpha = .83;
    c.lineWidth = 7; c.lineCap = "round";
    c.beginPath();c.moveTo(0,size);c.quadraticCurveTo(-9,0,0,-size);c.stroke();
    for (let i=0;i<3;i++) for (const side of [-1,1]) {
      c.beginPath(); c.ellipse(side*(12+i*2),-size*.65+i*size*.58,7,size*.42,side*.8,0,Math.PI*2); c.fill();
    }
    c.restore();
  }
  // Fine fabric variation, deterministic and subtle rather than shiny plastic.
  for(let i=0;i<18000;i++) {
    const x=(i*73.73)%1024,y=(i*37.37)%512;
    c.fillStyle=i%2 ? "#ffffff0c" : "#4c504807";
    c.fillRect(x,y,1,2);
  }
  const texture = new T.CanvasTexture(canvas); texture.colorSpace=T.SRGBColorSpace;
  const printedMaterials = [];
  function printedBall(radius, x, y, z, scale) {
    const part = art.ball(radius, "#b7b5a9", x, y, z, g, scale);
    const material = part.material.clone();
    material.color.set("#ffffff");
    material.map = texture;
    part.material = material;
    printedMaterials.push(material);
    return part;
  }
  // Match the other residents' big round heads and compact, cuddly limbs.
  printedBall(.32, 0, .43, 0, [1, 1.2, .8]);
  printedBall(.445, 0, 1.02, .025, [1, .9, .9]);
  for (const side of [-1, 1]) {
    art.ball(.14, "#b7b5a9", side * .31, 1.3, 0, g, [1, 1, .8]);
    art.ball(.078, "#a6a498", side * .31, 1.3, .09, g, [1, 1, .4], "fabric");
  }
  const arms = [-1, 1].map(side =>
    printedBall(.12, side * .34, .52, 0, [.85, 1.5, .85]),
  );
  const feet = [-1, 1].map(side =>
    printedBall(.135, side * .18, .1, .08, [1, .7, 1.4]),
  );
  for (const side of [-1, 1]) {
    art.ball(.036, "#252729", side * .145, 1.08, .405, g, [1, 1.1, .5], "fabric");
    art.ball(.008, "#fff8e9", side * .145 - .009, 1.091, .421, g, [1, 1, .4], "smooth");
  }
  // Keep the reference bear's small triangular nose and upside-down Y stitching.
  const noseShape = new T.Shape();
  noseShape.moveTo(-.042, 0);
  noseShape.quadraticCurveTo(0, .01, .042, 0);
  noseShape.quadraticCurveTo(.03, -.032, 0, -.05);
  noseShape.quadraticCurveTo(-.03, -.032, -.042, 0);
  const stitchMaterial = new T.MeshStandardMaterial({color: "#292b2b", roughness: 1, side: T.DoubleSide});
  const nose = new T.Mesh(new T.ShapeGeometry(noseShape), stitchMaterial);
  nose.position.set(0, 1.015, .429);
  g.add(nose);
  for (const points of [
    [[0, .966, .426], [0, .925, .42]],
    [[0, .925, .42], [-.047, .888, .401]],
    [[0, .925, .42], [.047, .888, .401]],
  ]) {
    const curve = new T.LineCurve3(...points.map(point => new T.Vector3(...point)));
    g.add(new T.Mesh(new T.TubeGeometry(curve, 1, .006, 8, false), stitchMaterial));
  }
  return {g, arms, feet, dispose() {
    texture.dispose();
    for (const material of printedMaterials) material.dispose();
    stitchMaterial.dispose();
  }};
}
