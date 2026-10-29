import * as T from "three";

// A soft, flattened pillow bear, modelled from the family's reference photograph.
export function createFloralBear(art) {
  const g = new T.Group();
  g.name = "floral-bear";
  g.scale.setScalar(.85);
  const canvas = document.createElement("canvas");
  canvas.width = 1024; canvas.height = 512;
  const c = canvas.getContext("2d");
  c.fillStyle = "#b7b5a9"; c.fillRect(0, 0, 1024, 512);
  // Faded ivory patches and irregular blue / terracotta botanical prints.
  c.fillStyle = "#d2cdb9"; c.globalAlpha = .55;
  for (const [x, y, w, h] of [[760,210,48,75],[735,325,36,85],[245,270,36,80],[190,410,42,45]]) {
    c.beginPath(); c.ellipse(x,y,w,h,-.35,0,Math.PI*2); c.fill();
  }
  c.globalAlpha = 1;
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
  const body = art.ball(1,"#b7b5a9",0,.87,0,g,[.44,.69,.22]);
  // Superellipsoid: rounded rectangular silhouette with no separate neck or muzzle.
  const geometry=body.geometry.clone();const positions=geometry.attributes.position;
  for(let i=0;i<positions.count;i++) {
    const shape=v=>Math.sign(v)*Math.pow(Math.abs(v),.63);
    const y=shape(positions.getY(i));
    positions.setXYZ(i,shape(positions.getX(i))*(1-.09*Math.max(0,y)),y,shape(positions.getZ(i)));
  }
  geometry.computeVertexNormals();body.geometry=geometry;
  const material=body.material.clone();material.color.set("#ffffff");material.map=texture;body.material=material;
  // Surface pile follows the same pillow silhouette.
  for(const fibers of body.children) if(fibers.isInstancedMesh) {
    const matrix=new T.Matrix4(),position=new T.Vector3(),rotation=new T.Quaternion(),scale=new T.Vector3();
    for(let i=0;i<fibers.count;i++) {
      fibers.getMatrixAt(i,matrix);matrix.decompose(position,rotation,scale);
      const shape=v=>Math.sign(v)*Math.pow(Math.abs(v),.63);
      const y=shape(position.y);position.set(shape(position.x)*(1-.09*Math.max(0,y)),y,shape(position.z));
      matrix.compose(position,rotation,scale);fibers.setMatrixAt(i,matrix);
    }
    fibers.instanceMatrix.needsUpdate=true;
    fibers.computeBoundingSphere();
  }
  for(const side of [-1,1]) art.ball(.16,"#b7b5a9",side*.3,1.54,0,g,[1,.92,.65]);
  const arms=[-1,1].map(side=>{
    const arm=art.ball(.16,"#b7b5a9",side*.48,.66,0,g,[.82,2.15,.85]);
    arm.rotation.z=side*.15;
    return arm;
  });
  const feet=[-1,1].map(side=>art.ball(.19,"#b7b5a9",side*.235,.13,0,g,[1,1.25,.95]));
  for(const side of [-1,1]) art.ball(.039,"#252729",side*.165,1.29,.219,g,[1,1,.22],"fabric");
  const noseShape=new T.Shape();noseShape.moveTo(-.05,0);noseShape.quadraticCurveTo(0,.012,.05,0);noseShape.quadraticCurveTo(.035,-.04,0,-.065);noseShape.quadraticCurveTo(-.035,-.04,-.05,0);
  const nose=new T.Mesh(new T.ShapeGeometry(noseShape),new T.MeshStandardMaterial({color:"#252729",roughness:1,side:T.DoubleSide}));
  nose.position.set(0,1.19,.227);g.add(nose);
  const mouthMaterial=new T.MeshStandardMaterial({color:"#292b2b",roughness:1});
  for(const points of [ [[0,1.13,.228],[0,1.045,.229]], [[0,1.045,.229],[-.075,.98,.228]], [[0,1.045,.229],[.075,.98,.228]] ]) {
    const curve=new T.LineCurve3(...points.map(point=>new T.Vector3(...point)));
    g.add(new T.Mesh(new T.TubeGeometry(curve,1,.008,8,false),mouthMaterial));
  }
  return {g,arms,feet,dispose(){texture.dispose();material.dispose();geometry.dispose();mouthMaterial.dispose();nose.material.dispose();}};
}
