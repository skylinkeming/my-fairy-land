import {createNaturalLayout, sceneryRandom} from './scenery-layout.js';
import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

const THEMES = {
  home: ['bakery', 'orchard', 'fountain', 'greenhouse', 'picnic', 'well', 'windmill', 'cart'],
  todo: ['workshop', 'mushrooms', 'camp', 'library', 'beehive', 'lookout', 'orchard', 'cart'],
  note: ['windmill', 'wheat', 'library', 'greenhouse', 'cart', 'wheat', 'telescope', 'well'],
  friends: ['picnic', 'playground', 'fountain', 'party', 'mushrooms', 'beehive', 'bakery', 'lookout'],
  memories: ['telescope', 'camp', 'lighthouse', 'rocks', 'library', 'sculpture', 'lookout', 'orchard'],
  park: ['pond', 'picnic', 'mushrooms', 'playground', 'well', 'greenhouse', 'fountain', 'party'],
};

export function addExpandedScenery({groups, nodes, obstacles = [], scene, top, box, ball, cyl, mesh, tree, curvedPath}) {
  const summary = [];
  function pocket(kind, x, z, parent, angle) {
    const group = new T.Group();
    group.name = `scenery-${kind}`;
    group.userData.walkObstacle = true;
    group.position.set(x, top, z);
    group.rotation.y = -angle;
    parent.add(group);
    const wood = '#b38c60', cream = '#f0dfb9', green = '#758c6a', rose = '#c88f83';
    const b = (w,h,d,c,px=0,py=0,pz=0) => box(w,h,d,c,px,py,pz,group);
    const c = (r,rb,h,color,px=0,py=0,pz=0,n=8) => cyl(r,rb,h,color,px,py,pz,group,n);
    const s = (r,color,px=0,py=0,pz=0,scale=[1,1,1]) => ball(r,color,px,py,pz,group,scale);
    const roof = (color=rose) => c(0,1, .65,color,0,1.8,0,4).rotation.y = Math.PI/4;
    if (['bakery','workshop','library','cart'].includes(kind)) {
      b(1.65,.65,.85,wood,0,.36);
      for (const side of [-1,1]) b(.07,1.6,.07,wood,side*.73,.9,-.32);
      b(1.9,.12,1.2,kind === 'bakery' ? rose : '#789b99',0,1.65);
      for (let i=0;i<5;i++) {
        if (kind === 'library') {
          b(.16,.3+(i%2)*.1,.32,['#a56f5a','#e1c48c','#789b99'][i%3],-.6+i*.29,.83);
        } else if (kind === 'workshop') {
          b(.23,.2,.25,cream,-.55+i*.28,.79);
          c(.035,.035,.28,wood,-.55+i*.28,1.02,0);
        } else s(.15,kind === 'bakery' ? '#dfb777' : '#df9b70',-.55+i*.28,.79,0,[1,.65,1]);
      }
      if (kind === 'cart') for(const side of [-1,1]) c(.24,.24,.1,'#635e50',side*.85,.2,0).rotation.z=Math.PI/2;
    } else if (kind === 'windmill') {
      c(.5,.75,1.75,cream,0,.88);
      roof('#b57e65');
      for (let i=0;i<4;i++) {
        const blade=b(.16,1.4,.08,wood,0,1.48,.57);
        blade.rotation.z=i*Math.PI/2+Math.PI/4;
      }
      s(.12,'#e6cf9f',0,1.48,.66);
      b(.3,.5,.08,wood,0,.3,.7);
    } else if (kind === 'well' || kind === 'fountain') {
      c(.68,.78,.35,'#aba894',0,.2);
      c(.53,.53,.03,'#8dc6bd',0,.39);
      if (kind === 'well') {
        for(const side of [-1,1]) b(.09,1.4,.09,wood,side*.66,1);
        roof(green);
        b(1.4,.08,.08,wood,0,1.25);
        c(.025,.025,.55,cream,0,.95);
        c(.16,.13,.25,wood,0,.64);
      } else {
        c(.1,.15,.9,'#b9bbaa',0,.82);
        c(.4,.15,.12,'#e7d6b1',0,1.18);
        s(.19,'#9bcdc3',0,1.42,0,[.65,1.5,.65]);
      }
    } else if (kind === 'greenhouse') {
      b(1.5,.8,1.15,'#b3ccc1',0,.43);
      c(0,1,.6,'#90b4ac',0,1.1,0,4).rotation.y=Math.PI/4;
      for(const side of [-1,1]) b(.06,1.1,1.2,cream,side*.75,.6);
      b(.06,.9,1.2,cream,0,.5);
      b(1.55,.06,1.2,cream,0,.8);
      for(const side of [-1,1]) s(.2,green,side*.35,.35,.65);
    } else if (kind === 'picnic') {
      b(1.55,.09,.85,wood,0,.7);
      for(const side of [-1,1]) {
        b(1.6,.1,.2,wood,0,.37,side*.68);
        b(.1,.7,.75,wood,side*.5,.35);
      }
      b(.7,.02,.65,cream,0,.76);
      s(.13,'#df9b70',-.18,.86);
      c(.13,.1,.2,'#94ada0',.26,.86);
    } else if (kind === 'mushrooms') {
      for(const [px,pz,size] of [[-.55,0,.65],[.45,.25,.85],[.2,-.6,.45]]) {
        c(.1,.15,size,cream,px,size/2,pz);
        s(size*.55,rose,px,size,pz,[1,.45,1]);
        s(.055,cream,px-.12,size+.12,pz+.1);
      }
    } else if (kind === 'camp') {
      const tent = c(0,1.05,1.25,'#b9a472',0,.65,0,3);
      tent.rotation.y = Math.PI/2;
      b(.09,.07,1.65,wood,0,.05);
      for (const side of [-1,1]) s(.13,'#9a9c8d',side*.3,.1,.85);
      c(0,.2,.45,'#d99a60',0,.3,.95,5);
    } else if (kind === 'orchard' || kind === 'beehive') {
      c(.38,.48,.65,wood,0,.35);
      if (kind === 'beehive') {
        for(let i=0;i<4;i++) c(.38-i*.055,.4-i*.055,.16,'#d5b875',0,.78+i*.14);
        s(.07,'#665b43',0,.9,.38);
      } else {
        b(.95,.1,.7,wood,0,.7);
        for(let i=0;i<5;i++) s(.15,['#d99976','#e1c17e'][i%2],Math.sin(i*2.4)*.3,.88,Math.cos(i*2.4)*.2);
      }
    } else if (kind === 'playground') {
      c(.1,.2,.55,'#8d9e87',0,.3);
      const plank=b(1.9,.12,.4,'#d7ad78',0,.65);
      plank.rotation.z=.16;
      for(const side of [-1,1]) b(.08,.35,.08,rose,side*.65,.85);
      for(const [px,pz] of [[-.6,-.7],[0,-.85],[.6,-.7]]) c(.15,.17,.25,'#b2aa82',px,.13,pz);
    } else if (kind === 'party') {
      for(const side of [-1,1]) b(.07,1.75,.07,wood,side*.9,.9);
      b(1.9,.035,.035,cream,0,1.7);
      for(let i=0;i<5;i++) {
        const flag=c(.16,0,.3,[rose,green,'#dfc286'][i%3],-.68+i*.34,1.5,0,3);
        flag.scale.z=.12;
      }
      b(1.1,.12,.7,wood,0,.4);
      c(.24,.24,.25,cream,0,.6);
      s(.07,rose,0,.79);
    } else if (kind === 'telescope' || kind === 'lookout') {
      for(let i=0;i<3;i++) {
        const leg=b(.06,.85,.06,wood,Math.sin(i*2.094)*.25,.4,Math.cos(i*2.094)*.25);
        leg.rotation.z=Math.sin(i*2.094)*.3;
      }
      const scope=c(.15,.2,.85,'#789b99',0,1.05,0);
      scope.rotation.x=Math.PI/3;
      s(.18,'#e2c891',0,.84,.37,[1,1,.25]);
      if(kind==='lookout') b(1.6,.08,1.3,wood,0,.06);
    } else if (kind === 'lighthouse') {
      c(.38,.65,2,cream,0,1);
      c(.43,.46,.18,rose,0,1.5);
      c(.36,.4,.45,'#b2cfbf',0,2.15);
      c(0,.55,.45,rose,0,2.6);
      b(.3,.5,.06,wood,0,.3,.62);
    } else if (kind === 'wheat') {
      b(1.65,.08,1.2,'#a99a65',0,.06);
      for(let i=0;i<12;i++) {
        const px=-.65+(i%4)*.43,pz=-.4+Math.floor(i/4)*.4;
        c(.025,.025,.5,'#b3a15c',px,.3,pz,5);
        s(.1,'#e3c77e',px,.63,pz,[.6,1.8,.6]);
      }
    } else if (kind === 'pond') {
      c(1.05,1.1,.12,'#b9b398',0,.07,0,16);
      c(.9,.9,.025,'#8ebeb3',0,.145,0,16);
      for(const side of [-1,1]) {
        c(.18,.18,.02,'#809b78',side*.4,.17,side*.25);
        s(.09,'#e5b4ac',side*.4,.21,side*.25,[1,.6,1]);
      }
      s(.15,cream,.15,.3,0,[1,.65,1.2]);
      s(.09,cream,.15,.43,.12);
    } else {
      for(let i=0;i<3;i++) {
        const rock=mesh(new T.DodecahedronGeometry(.45+i*.13,0),['#8e9b91','#b2b39a','#c8bb99'][i],group);
        rock.position.set(Math.sin(i*2.4)*.5,.4+i*.15,Math.cos(i*2.4)*.35);
      }
      if(kind==='sculpture') s(.25,'#d5bc83',0,1.55,0,[1,1.5,1]);
    }
  }

  for (const [id,island] of Object.entries(groups)) {
    const parent = new T.Group();
    parent.name = 'expanded-island-dressing';
    island.add(parent);
    const node=nodes.find(node=>node.id===id), kinds=THEMES[id];
    const layout=createNaturalLayout({id,node,nodes,obstacles});
    const random=sceneryRandom(id+'-meadow');
    const placed=[];
    layout.pockets.forEach((point,index)=>{
      const kind=kinds[index%kinds.length];
      pocket(kind,point.x,point.z,parent,point.heading);
      placed.push(kind);
      // Short, gently curved approaches avoid a repeated ring or spoke pattern.
      const length=Math.hypot(point.x,point.z),dx=point.x/length,dz=point.z/length;
      curvedPath([[point.x-dx*2.7+dz*.5,point.z-dz*2.7-dx*.5],
        [point.x-dx*1.9,point.z-dz*1.9],
        [point.x-dx*1.2,point.z-dz*1.2]],parent,.5);
    });
    layout.groves.forEach(point=>tree(point.x,point.z,point.scale,parent,point.type));
    // Irregular meadow patches soften the spaces between buildings and groves.
    const patches=layout.anchors.slice(0,3).map(anchor=>({x:anchor.x*.86,z:anchor.z*.86}));
    patches.forEach((patch,index)=>{
      const shape=new T.Shape();
      for(let i=0;i<=12;i++) {
        const angle=i*Math.PI/6,radius=1.7+random()*.6;
        const x=Math.cos(angle)*radius,z=Math.sin(angle)*radius*.75;
        if(i===0) shape.moveTo(x,z); else shape.lineTo(x,z);
      }
      const meadow=new T.Mesh(new T.ShapeGeometry(shape),new T.MeshStandardMaterial({
        color:id==='note'?'#c1b76e':['#98a777','#a6af7e','#8fa274'][index],roughness:1,side:T.DoubleSide,
        transparent:true,opacity:.38,depthWrite:false,
      }));
      meadow.rotation.x=-Math.PI/2;meadow.position.set(patch.x,top+.008,patch.z);
      meadow.userData.walkThrough=true;parent.add(meadow);
    });
    const dummy=new T.Object3D();
    for(const [color,height] of [['#91a16f',.12],['#ead8ad',.1]]) {
      const dots=new T.InstancedMesh(new T.ConeGeometry(.075,height,4),new T.MeshStandardMaterial({color,roughness:1}),160);
      dots.userData.walkThrough=true;dots.name='meadow-flowers';
      for(let i=0;i<160;i++) {
        const patch=patches[i%patches.length],angle=random()*Math.PI*2,radius=Math.sqrt(random())*2.7;
        dummy.position.set(patch.x+Math.cos(angle)*radius,top+.08,patch.z+Math.sin(angle)*radius);
        dummy.rotation.y=angle;dummy.updateMatrix();dots.setMatrixAt(i,dummy.matrix);
      }
      parent.add(dots);
    }
    summary.push({id,pockets:placed,positions:layout.pockets,trees:layout.groves.length,layout:'natural-clusters'});
  }

  // A continuous plain surrounds the expanded sea, with hills behind the coast.
  const mainland=new T.Group();mainland.name='outer-plains-and-hills';scene.add(mainland);
  cyl(86,88,.5,'#9baa7b',0,-1.65,1,mainland,48);
  cyl(67,68,.08,'#d5c69a',0,-1.34,1,mainland,6);
  const landscapeRandom=sceneryRandom("outer-countryside");
  for(let i=0;i<28;i++) {
    const angle=(i+landscapeRandom()*.6)*Math.PI/14,radius=70+landscapeRandom()*9;
    const x=Math.cos(angle)*radius,z=Math.sin(angle)*radius+1;
    const hill=mesh(new T.DodecahedronGeometry(1,1),['#81916d','#70866b','#99a57a'][i%3],mainland);
    hill.position.set(x,-.8,z);hill.scale.set(4.5+(i%3),2.3+(i%4)*1.2,4+(i%2)*2);
    for(let j=0;j<2;j++) {
      const trunk=cyl(.16,.22,1.4,'#8b785b',x+j*2.1-1,-.5,z+2.2,mainland,6);
      cyl(0,1.15,2.7,'#56765c',trunk.position.x,1.3,trunk.position.z,mainland,7);
    }
  }
  for(let i=0;i<16;i++) {
    const angle=i*Math.PI/8+.13,radius=80;
    const patch=cyl(3.5,4,.035,i%2?'#b4b982':'#a5af79',Math.cos(angle)*radius,-1.38,Math.sin(angle)*radius+1,mainland,12);
    patch.rotation.y=angle;
  }
  return {islands:summary,seaRadius:64,outerRadius:86,hills:28};
}

// Keep individual footprints until collision collection, then batch only the new
// static art. Resident models, swing rigs and other animated props stay separate.
export function batchExpandedScenery(scene) {
  const roots = [];
  scene.traverse(object => {
    if (['expanded-island-dressing', 'outer-plains-and-hills'].includes(object.name)) roots.push(object);
  });
  for (const root of roots) {
    root.updateWorldMatrix(true, true);
    const inverse = root.matrixWorld.clone().invert();
    const batches = new Map(), instances = [];
    root.traverse(object => {
      if (object.isInstancedMesh) { instances.push(object); return; }
      if (!object.isMesh || Array.isArray(object.material)) return;
      const geometry = object.geometry.index ? object.geometry.toNonIndexed() : object.geometry.clone();
      geometry.applyMatrix4(new T.Matrix4().multiplyMatrices(inverse, object.matrixWorld));
      if (!batches.has(object.material)) batches.set(object.material, []);
      batches.get(object.material).push(geometry);
      object.geometry.dispose();
    });
    root.clear();
    for (const [material, geometries] of batches) {
      const merged = mergeGeometries(geometries);
      geometries.forEach(geometry => geometry.dispose());
      const mesh = new T.Mesh(merged, material);
      mesh.castShadow = mesh.receiveShadow = true;
      root.add(mesh);
    }
    if (instances.length) root.add(...instances);
  }
}
