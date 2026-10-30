import {buildEnterableBuilding} from './enterable-buildings.js';
import * as T from 'three';

export const ISLAND_THEMES = {
  home: {name:'河畔小村莊', landmark:'village-square'},
  todo: {name:'森林工坊', landmark:'forest-workshop'},
  note: {name:'風車農莊', landmark:'windmill-farm'},
  friends: {name:'花園咖啡聚落', landmark:'garden-cafe'},
  memories: {name:'海邊露營地', landmark:'coastal-camp'},
  park: {name:'湖畔公園', landmark:'lakeside-park'},
};

export function buildIslandLandmark({id, point, parent, top, box, ball, cyl, animations=[], buildings=[], rivers=[], footbridges=[]}) {
  const root=new T.Group();root.name=`landmark-${ISLAND_THEMES[id].landmark}`;
  root.position.set(point.x,top,point.z);parent.add(root);
  const wood='#a5825d',cream='#eee1c5',stone='#abae9d',green='#7c9c88',rose='#c58e85';
  const b=(w,h,d,c,x,y,z,p=root)=>box(w,h,d,c,x,y,z,p);
  const c=(r,rb,h,color,x,y,z,p=root,n=12)=>cyl(r,rb,h,color,x,y,z,p,n);
  const s=(r,color,x,y,z,p=root,scale=[1,1,1])=>ball(r,color,x,y,z,p,scale);
  function group(name,x=0,z=0,solid=true) {
    const g=new T.Group();g.name=name;g.position.set(x,0,z);g.userData.walkObstacle=solid;root.add(g);return g;
  }
  function cottage(g,color=green) {
    g.userData.walkObstacle=false;
    buildings.push(buildEnterableBuilding({id:`${id}-interior`,island:id,type:id==='friends'?'cafe':'workshop',
      name:id==='friends'?'花園咖啡廳':'森林工坊',parent:g,baseY:0,color,box,ball,cyl}));
  }
  function flowerBed(x,z,color=rose,width=1.25) {
    const g=group('flower-border',x,z);
    b(width,.12,.65,wood,0,.08,0,g);
    for(let i=0;i<6;i++) {
      s(.2,'#83956a',-.45+(i%3)*.43,.27,-.16+Math.floor(i/3)*.32,g,[1,.65,1]);
      s(.11,color,-.45+(i%3)*.43,.39,-.16+Math.floor(i/3)*.32,g);
    }
  }
  function bench(x,z,heading=0) {
    const g=group('garden-bench',x,z);g.rotation.y=heading;
    b(1.25,.09,.37,wood,0,.43,0,g);b(1.25,.27,.08,wood,0,.75,-.17,g);
    for(const side of [-1,1]) b(.08,.43,.3,stone,side*.45,.22,0,g);
  }
  function table(x,z,parasol=false) {
    const g=group('cafe-seating',x,z);
    c(.5,.5,.09,cream,0,.72,0,g);c(.07,.1,.7,wood,0,.35,0,g);
    for(const side of [-1,1]) {
      c(.23,.26,.11,wood,side*.79,.4,0,g);c(.055,.08,.35,wood,side*.79,.2,0,g);
    }
    if(parasol) {c(.035,.04,1.9,wood,0,1,0,g);c(0,1,.38,rose,0,2,0,g,8);}
    c(.08,.06,.14,'#8aa89a',.15,.84,0,g);
  }
  // A paving patch is a usable destination, not an enclosing circular marking.
  if(id!=='park') b(4.8,.035,4.2,id==='note'?'#bfb184':'#d4c6a5',0,.012,.15);
  if(id==='home') {
    const fountain=group('village-fountain');
    c(.88,.96,.35,stone,0,.2,0,fountain);c(.73,.73,.025,'#94c4bc',0,.39,0,fountain);
    c(.12,.19,1,cream,0,.85,0,fountain);c(.42,.2,.12,cream,0,1.33,0,fountain);
    s(.16,'#adcfc7',0,1.53,0,fountain,[.7,1.4,.7]);
    bench(-1.75,.3,Math.PI/2);bench(1.75,.3,-Math.PI/2);
    flowerBed(-1.3,-1.4);flowerBed(1.2,-1.4,'#dfc476');
    for(const side of [-1,1]) {
      const g=group('market-awning',side*1.25,1.7);
      b(1.05,.5,.6,wood,0,.28,0,g);
      for(const x of [-.45,.45]) b(.05,1.15,.05,wood,x,.65,-.22,g);
      b(1.2,.09,.85,side<0?rose:green,0,1.23,0,g);
      for(let i=0;i<3;i++) s(.12,'#ddb97d',-.3+i*.3,.62,0,g);
    }
  } else if(id==='todo') {
    cottage(group('workshop-cottage',0,-.35),'#839b83');
    const workbench=group('outdoor-workbench',3.8,2.8);
    b(1.5,.12,.65,wood,0,.7,0,workbench);
    for(const side of [-1,1]) b(.1,.65,.55,wood,side*.55,.35,0,workbench);
    for(let i=0;i<3;i++) b(.24,.18,.24,'#d4c6a1',-.45+i*.4,.86,0,workbench);
    flowerBed(-1.6,3.5,'#b3bc79',1.05);
    const shed=group('stacked-firewood',3.4,-.6);
    for(let i=0;i<7;i++) {const log=c(.13,.13,.75,wood,(i%3)*.22-.2,.17+Math.floor(i/3)*.23,0,shed,8);log.rotation.x=Math.PI/2;}
  } else if(id==='note') {
    const mill=group('farm-windmill');
    c(.6,.95,3.1,cream,0,1.56,0,mill);c(0,1,1.05,'#b38b70',0,3.45,0,mill,8);
    b(.43,.75,.08,wood,0,.42,.92,mill);
    const rotor=new T.Group();rotor.position.set(0,2.65,.78);rotor.userData.sceneryAnimated=true;rotor.userData.walkThrough=true;mill.add(rotor);
    for(let i=0;i<4;i++) {
      const blade=new T.Group();blade.rotation.z=i*Math.PI/2;rotor.add(blade);
      b(.09,1.95,.08,wood,0,.93,0,blade);b(.33,1.1,.065,'#e8dcba',.14,1.22,.035,blade);
    }
    s(.15,wood,0,0,.08,rotor);
    animations.push(time=>{rotor.rotation.z=time*.28;});
    for(const side of [-1,1]) {
      const field=group('wheat-plot',side*1.65,.8);b(1.1,.06,1.7,'#aa976a',0,.05,0,field);
      for(let i=0;i<15;i++) {const x=(i%3)*.3-.3,z=Math.floor(i/3)*.3-.6;c(.02,.025,.45,'#b8a065',x,.25,z,field,5);s(.075,'#e0c480',x,.51,z,field,[.6,1.8,.6]);}
    }
  } else if(id==='friends') {
    cottage(group('flower-garden-cafe',0,-.6),'#b58e89',3.1,1.8);
    b(5.7,.12,.95,'#cba2a0',0,2.45,2.2);
    table(-2.05,3.8,true);table(2.05,3.8);
    flowerBed(-3.4,-.7,'#dca7b7',.85);flowerBed(3.4,-.7,'#dec67f',.85);
  } else if(id==='memories') {
    const tower=group('coastal-lighthouse');
    c(.54,.85,3.7,cream,0,1.87,0,tower,12);
    c(.65,.7,.35,'#b88d7c',0,2.05,0,tower);
    c(.63,.68,.58,'#b1cdc5',0,3.92,0,tower);
    c(0,.84,.65,'#a88371',0,4.53,0,tower,12);
    s(.22,'#f0dca6',0,3.98,0,tower);
    b(.4,.75,.08,wood,0,.42,.84,tower);
    bench(-1.6,1.2,-.4);
    const tent=group('seaside-tent',1.6,.4);
    const canvas=c(0,.95,1.25,'#c9b88e',0,.66,0,tent,3);canvas.rotation.y=Math.PI/2;
    for(let i=0;i<5;i++) s(.12,stone,1.2+Math.cos(i*1.256)*.4,.12,-1.2+Math.sin(i*1.256)*.4);
  } else if(id==='park') {
    const lake=new T.Group();lake.name='garden-lake';root.add(lake);
    const bank=c(2.2,2.25,.09,'#b6b79c',0,.045,0,lake,40);bank.scale.set(1.17,1,.73);
    const water=c(2.05,2.05,.025,'#86b9b6',0,.105,0,lake,40);water.scale.set(1.17,1,.73);
    lake.userData.walkThrough=true;
    rivers.push({curve:new T.CatmullRomCurve3([new T.Vector3(-1.05,0,0),new T.Vector3(1.05,0,0)]),parent:root,width:2.7,coastal:false,island:id});
    const bridge=new T.Group();bridge.name='lake-flower-bridge';bridge.position.y=.18;bridge.userData.walkThrough=true;bridge.userData.walkHalfWidth=.84;bridge.userData.walkCrossingHalfLength=2.3;bridge.userData.deckHalfLength=2.15;root.add(bridge);
    for(let i=0;i<16;i++) b(2.6,.1,.25,'#c3a47c',0,Math.sin(i/15*Math.PI)*.15,-2+i*4/15,bridge);
    for(const side of [-1,1]) {
      for(const z of [-1.9,0,1.9]) c(.04,.05,.7,wood,side*1.42,.42,z,bridge,6);
      b(.06,.07,4.15,wood,side*1.42,.72,0,bridge);
    }
    footbridges.push({group:bridge,island:id});
    bench(-1.9,1.9,.45);flowerBed(1.9,1.8,'#dca4b1',1);
    for(let i=0;i<5;i++) {const pad=c(.17,.17,.018,'#739a79',-1.65+i*.7,.13,(i%2?.72:-.72),lake);pad.scale.z=.7;}
  }
  // A few small butterflies bring life to garden clearings without crowding them.
  if(id==='friends'||id==='park') for(let i=0;i<3;i++) {
    const butterfly=new T.Group();butterfly.userData.sceneryAnimated=true;butterfly.userData.walkThrough=true;root.add(butterfly);
    butterfly.position.set(Math.cos(i*2.1)*2.5,.95,Math.sin(i*2.1)*2);
    const wings=[s(.11,i%2?'#dec485':'#c9abc1',-.09,0,0,butterfly,[1,.12,1.35]),s(.11,i%2?'#dec485':'#c9abc1',.09,0,0,butterfly,[1,.12,1.35])];
    animations.push(time=>{const phase=time*.5+i*2.1;butterfly.position.set(point.x+Math.cos(phase)*2.5,top+.95+Math.sin(phase*1.7)*.2,point.z+Math.sin(phase)*2);wings.forEach((wing,j)=>wing.rotation.z=Math.sin(time*9+i)*(j?1:-1)*.65);});
  }
  return {kind:ISLAND_THEMES[id].landmark,name:ISLAND_THEMES[id].name,x:point.x,z:point.z};
}

export function addRiversideWatermill({parent,top,box,ball,cyl,animations}) {
  const g=new T.Group();g.name='riverside-watermill';g.position.set(3.7,top,.75);parent.add(g);
  const body=new T.Group();body.userData.walkObstacle=true;g.add(body);
  for(const x of [-.65,.65]) box(.1,1.3,.1,'#a1815f',x,.65,-.3,body);
  box(1.6,.1,1.25,'#8b9f91',0,1.35,0,body);
  const wheel=new T.Group();wheel.position.set(.95,.68,1.25);wheel.userData.sceneryAnimated=true;wheel.userData.walkThrough=true;g.add(wheel);
  for(const side of [-1,1]) {const ring=new T.Mesh(new T.TorusGeometry(.65,.045,6,24),new T.MeshStandardMaterial({color:'#a1815f'}));ring.rotation.y=Math.PI/2;ring.position.x=side*.2;wheel.add(ring);}
  for(let i=0;i<10;i++) {const angle=i*Math.PI/5;const paddle=box(.48,.13,.32,'#ba9b73',0,Math.cos(angle)*.62,Math.sin(angle)*.62,wheel);paddle.rotation.x=angle;}
  ball(.12,'#ad916a',0,0,0,wheel);
  animations.push(time=>{wheel.rotation.x=-time*.55;});
}

export function addCoastalDetails({id,parent,top,box,ball,cyl}) {
  if(id!=='memories') return;
  const dock=new T.Group();dock.name='memory-island-pier';dock.userData.walkObstacle=true;dock.position.set(8.1,top+.05,8.7);dock.rotation.y=-.16;parent.add(dock);
  for(let i=0;i<12;i++) box(1.7,.08,.24,'#b79b76',0,0,i*.27,dock);
  for(const x of [-.82,.82]) for(const z of [0,1.5,3]) {cyl(.055,.07,.7,'#9c8464',x,-.18,z,dock,6);ball(.075,'#cfb792',x,.18,z,dock);}
  const rod=box(.025,1.8,.025,'#8c8069',.55,.8,2.7,dock);rod.rotation.x=.7;
}
