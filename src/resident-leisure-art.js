import * as T from 'three';

export function createLeisureArt({scene,residents,sites,top}) {
  const materials=new Map();
  const material=color=>{
    if(!materials.has(color))materials.set(color,new T.MeshStandardMaterial({color,roughness:.85}));
    return materials.get(color);
  };
  const mesh=(geometry,color,parent,x=0,y=0,z=0)=>{
    const object=new T.Mesh(geometry,material(color));object.position.set(x,y,z);parent.add(object);return object;
  };
  const box=(parent,w,h,d,color,x=0,y=0,z=0)=>mesh(new T.BoxGeometry(w,h,d),color,parent,x,y,z);
  const sphere=(parent,r,color,x=0,y=0,z=0)=>mesh(new T.SphereGeometry(r,10,7),color,parent,x,y,z);
  const cylinder=(parent,r,h,color,x=0,y=0,z=0)=>mesh(new T.CylinderGeometry(r,r,h,10),color,parent,x,y,z);
  const group=(parent,name)=>{const g=new T.Group();g.name=name;parent.add(g);return g;};
  const props=residents.map(resident=>{
    const rod=group(resident.g,'leisure-fishing-rod');rod.position.set(.27,.6,.35);
    const pole=cylinder(rod,.018,1.6,'#9a7652',0,.65,.1);pole.rotation.x=.6;
    const line=new T.Line(new T.BufferGeometry().setFromPoints([new T.Vector3(0,1.25,.55),new T.Vector3(0,-.4,1.6)]),new T.LineBasicMaterial({color:'#e7e0cb'}));rod.add(line);
    const bobber=sphere(rod,.06,'#cf7e6f',0,-.4,1.6);
    const catches={};
    for(const kind of ['fish','seaweed','boot']) {
      const caught=group(rod,`fishing-catch-${kind}`);caught.position.set(0,.2,1.1);catches[kind]=caught;
      if(kind==='fish') {
        sphere(caught,.14,'#89b6ba').scale.set(1,.65,1.8);
        const tail=mesh(new T.ConeGeometry(.12,.16,3),'#b3cdcd',caught,0,0,-.25);tail.rotation.x=Math.PI/2;
        sphere(caught,.022,'#3b514c',.09,.035,.13);
      } else if(kind==='boot') {
        box(caught,.17,.26,.16,'#a98064',0,.05,0);box(caught,.17,.1,.3,'#775f4c',0,-.1,.08);
      } else for(let i=0;i<3;i++) {const leaf=box(caught,.045,.34,.02,'#78996d',i*.055-.055,-.1,0);leaf.rotation.z=i*.22;}
    }
    const can=group(resident.g,'leisure-watering-can');can.position.set(.35,.55,.4);
    cylinder(can,.14,.23,'#83aba4');const spout=cylinder(can,.035,.3,'#83aba4',.15,.04,.08);spout.rotation.z=-1;
    const handle=mesh(new T.TorusGeometry(.12,.025,5,12),'#83aba4',can,-.1,.08,0);handle.rotation.y=Math.PI/2;
    const drops=Array.from({length:4},(_,i)=>sphere(can,.027,'#a8d6dc',.29,-i*.08,.08));
    const seeds=group(resident.g,'leisure-seed-packet');box(seeds,.16,.2,.04,'#d7ba7f',-.25,.5,.4);sphere(seeds,.035,'#b37c68',-.25,.5,.43);
    const camera=group(resident.g,'leisure-camera');camera.position.set(0,1,.95);
    box(camera,.36,.23,.14,'#536966');const lens=cylinder(camera,.1,.12,'#303e3e',0,0,.13);lens.rotation.x=Math.PI/2;
    sphere(camera,.065,'#9ebfbc',0,0,.2);box(camera,.12,.05,.07,'#c7b895',.09,.14,0);
    const flash=sphere(camera,.16,'#fff5c9',.1,.12,.18);
    const cookie=group(resident.g,'leisure-biscuit');cylinder(cookie,.1,.045,'#d8b57e',.28,.7,.38).rotation.x=Math.PI/2;
    for(let i=0;i<3;i++)sphere(cookie,.015,'#8c6748',.25+i*.025,.7,.41);
    return {rod,line,bobber,catches,can,drops,seeds,camera,flash,cookie};
  });
  const decorations=sites.map(site=>{
    const root=group(scene,`leisure-site-${site.kind}`);root.userData.walkThrough=true;root.position.set(site.center.x,top,site.center.z);
    let mat,basket,tripod,tripodFlash,butterfly,flowers=[];
    if(site.kind==='picnic') {
      mat=group(root,'picnic-blanket');box(mat,2.5,.025,1.7,'#d5a49b',0,.025,0);
      for(let i=0;i<5;i++)box(mat,.025,.03,1.7,'#f3dfb9',i*.5-1,.03,0);
      basket=group(root,'picnic-basket');box(basket,.4,.27,.32,'#b49163',0,.18,-.5);
      const handle=mesh(new T.TorusGeometry(.19,.025,5,12),'#896d4d',basket,0,.41,-.5);
      box(basket,.43,.035,.34,'#d7b984',0,.33,-.5);
      for(const x of [-.2,.2])cylinder(root,.14,.025,'#f1e3bb',x,.055,.12);
    }
    if(site.kind==='garden') {
      box(root,1.4,.055,.65,'#9f8061',0,.03,1.35);
      for(let i=0;i<6;i++) {
        const flower=group(root,'growing-flower');flower.position.set((i%3-1)*.4,.07,1.15+Math.floor(i/3)*.35);
        cylinder(flower,.018,.4,'#779168',0,.2,0);
        for(let j=0;j<5;j++)sphere(flower,.065,['#dfacae','#dfc477','#bfabc8'][i%3],Math.cos(j*1.256)*.07,.43,Math.sin(j*1.256)*.07);
        sphere(flower,.045,'#e8ce87',0,.45,0);flowers.push(flower);
      }
      butterfly=group(root,'garden-butterfly');
      sphere(butterfly,.1,'#dbc38e',-.09,0,0).scale.set(1,.15,1.2);sphere(butterfly,.1,'#c9aac2',.09,0,0).scale.set(1,.15,1.2);
    }
    if(site.kind==='photo') {
      tripod=group(root,'family-photo-tripod');tripod.position.z=4;
      cylinder(tripod,.025,1.2,'#8e806a',0,.6,0);
      for(let i=0;i<3;i++){const leg=cylinder(tripod,.025,.7,'#8e806a',Math.sin(i*2.094)*.17,.3,Math.cos(i*2.094)*.17);leg.rotation.z=.35;}
      box(tripod,.45,.28,.18,'#536966',0,1.25,0);
      const lens=cylinder(tripod,.12,.17,'#344c49',0,1.25,-.12);lens.rotation.x=Math.PI/2;
      tripodFlash=sphere(tripod,.2,'#fff0c3',.13,1.4,-.12);
    }
    return {site,root,mat,basket,tripod,tripodFlash,butterfly,flowers};
  });
  return {
    update(actor,resident,reduced=false) {
      const p=props[actor.id],time=actor.leisureTime||0,state=actor.state;
      p.rod.visible=state==='fishing';p.can.visible=state==='gardening'&&time>=6&&time<20;
      p.seeds.visible=state==='gardening'&&time<6;p.camera.visible=state==='photographing';p.cookie.visible=state==='picnicking'&&time>3&&time<23;
      p.flash.visible=!reduced&&state==='photographing'&&time%6>2.9&&time%6<3.07;
      if(state==='fishing') {
        const phase=time%14,angle=phase<2?-.6+phase*.3:phase<9?0:phase<12?-(phase-9)*.24:-.72;
        p.rod.rotation.x=angle;
        p.bobber.visible=phase<12;
        p.bobber.position.y=-.4+(reduced?0:Math.sin(time*4)*.03);
        const positions=p.line.geometry.attributes.position;
        positions.setXYZ(1,0,phase>11?.2:-.4,phase>11?1.1:1.6);positions.needsUpdate=true;
        Object.entries(p.catches).forEach(([kind,object])=>object.visible=phase>=12&&actor.leisureResult===kind);
        resident.arms.forEach(arm=>arm.rotation.x=-.65+angle*.4);
      }
      if(state==='gardening') {
        p.can.rotation.z=-.5;p.can.rotation.y=-Math.PI/2;p.can.position.z=.8;
        p.drops.forEach((drop,i)=>{drop.visible=!reduced;drop.position.y=-((time*1.7+i*.21)%1)*.4;});
        resident.g.rotation.x=time<6||time>=20?.18:0;
        resident.arms.forEach(arm=>arm.rotation.x=-.65+(reduced?0:Math.sin(time*3)*.12));
      }
      if(state==='photographing') {p.camera.position.y=time%6<4?1:.65;resident.arms.forEach(arm=>arm.rotation.x=time%6<4?-1.25:-.65);}
      if(state==='photo-posing') {resident.arms.forEach((arm,i)=>{arm.rotation.x=-.3;arm.rotation.z=i?-.8:.6;});}
      if(state==='picnicking') {p.cookie.position.y=reduced?0:Math.max(0,Math.sin(time*1.5))*.13;resident.arms.forEach(arm=>arm.rotation.x=-.65+(reduced?0:Math.sin(time*1.5)*.12));}
    },
    updateSites(actors,reduced=false) {
      for(const item of decorations) {
        const active=actors.filter(actor=>actor.target?.leisureSite===item.site.id&&actor.state==='picnicking');
        if(item.mat) {
          item.mat.visible=active.length>0;item.basket.visible=active.length>0;
          const time=Math.min(...active.map(actor=>actor.leisureTime||0));
          item.mat.scale.z=active.length?Math.max(.08,Math.min(1,time/2,(28-time)/4)):1;
        }
        if(item.tripod) {
          const groupActors=actors.filter(actor=>actor.target?.leisureSite==='group-photo');
          item.tripod.visible=groupActors.length>0;
          item.tripodFlash.visible=!reduced&&groupActors.length>0&&groupActors.every(actor=>actor.state==='photo-posing'&&actor.leisureTime>2.8&&actor.leisureTime<3);
        }
        if(item.butterfly) {
          const gardener=actors.find(actor=>actor.target?.leisureSite===item.site.id&&actor.state==='gardening');
          const time=reduced?0:gardener?.leisureTime||0;
          item.butterfly.visible=Boolean(gardener&&gardener.leisureTime>=20);
          item.butterfly.position.set(Math.sin(time)*.4,.9+Math.sin(time*1.7)*.12,1.3);
          item.butterfly.children.forEach((wing,i)=>wing.rotation.z=Math.sin(time*7)*(i?1:-1)*.6);
        }
        for(const flower of item.flowers)flower.scale.setScalar(.2+(item.site.growth||0)*.8);
      }
    },
    dispose(){for(const value of materials.values())value.dispose();for(const prop of props)prop.line.material.dispose();},
  };
}
