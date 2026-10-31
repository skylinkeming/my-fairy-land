import * as T from 'three';

export function createResidentStoriesArt({scene,residents,life,top}){
  const materials=new Map();
  const mat=color=>{if(!materials.has(color))materials.set(color,new T.MeshStandardMaterial({color,roughness:.9}));return materials.get(color);};
  const group=(parent,name)=>{const root=new T.Group();root.name=name;parent.add(root);return root;};
  const mesh=(parent,geometry,color,x=0,y=0,z=0)=>{const obj=new T.Mesh(geometry,mat(color));obj.position.set(x,y,z);parent.add(obj);return obj;};
  const ball=(p,r,c,x=0,y=0,z=0)=>mesh(p,new T.SphereGeometry(r,10,7),c,x,y,z);
  const pole=(p,r,h,c,x=0,y=0,z=0)=>mesh(p,new T.CylinderGeometry(r,r,h,8),c,x,y,z);
  const props=residents.map(resident=>{
    const umbrella=group(resident.g,'story-umbrella');
    const canopy=group(umbrella,'umbrella-canopy');
    for(let i=0;i<8;i++)mesh(canopy,new T.SphereGeometry(1.15,4,5,i*Math.PI/4,Math.PI/4,0,Math.PI/2),i%2?'#e5c5a4':'#a4c8c5');
    canopy.scale.y=.35;pole(umbrella,.023,1.2,'#8b775f',0,-.6,0);
    const hook=mesh(umbrella,new T.TorusGeometry(.1,.022,5,12,Math.PI),'#8b775f',0,-1.2,0);hook.rotation.z=Math.PI;
    const butterfly=group(resident.g,'story-butterfly');
    const wings=[-1,1].map(side=>{const wing=ball(butterfly,.13,side<0?'#e1bd80':'#cba9cf',side*.11,0,0);wing.scale.set(1,.14,1.6);return wing;});
    pole(butterfly,.018,.17,'#776453').rotation.x=Math.PI/2;
    const creature=group(resident.g,'story-little-animal');
    ball(creature,.12,'#b39875',0,.1,0).scale.set(1,.7,1.4);ball(creature,.075,'#c5aa88',0,.18,.14);
    for(const x of [-.04,.04])ball(creature,.025,'#a68b70',x,.25,.14);
    const gifts={};
    for(const kind of ['flower','shell','leaf']){
      const gift=group(resident.g,`story-gift-${kind}`);gifts[kind]=gift;
      if(kind==='flower'){
        pole(gift,.014,.3,'#819968',0,-.1,0);
        for(let j=0;j<5;j++)ball(gift,.055,'#df9fae',Math.cos(j*1.256)*.075,.06,Math.sin(j*1.256)*.075);
        ball(gift,.04,'#f2d58c',0,.09,0);
      }else if(kind==='shell'){
        const shell=ball(gift,.12,'#f1d5b9');shell.scale.set(1,.5,1);
        for(let i=-2;i<=2;i++){const rib=pole(gift,.009,.16,'#d3ae9a',i*.035,.035,0);rib.rotation.z=i*.19;rib.rotation.x=Math.PI/2;}
      }else{const leaf=ball(gift,.13,'#a2b77c');leaf.scale.set(.6,.15,1.5);pole(gift,.01,.24,'#7d9461').rotation.x=Math.PI/2;}
    }
    const fan=group(resident.g,'story-hand-fan');
    const paper=mesh(fan,new T.CircleGeometry(.25,9,0,Math.PI),'#e5c99b');paper.rotation.z=-Math.PI/2;
    for(let i=0;i<6;i++){const rib=pole(fan,.008,.25,'#a98a60');rib.rotation.z=i*Math.PI/5;rib.position.set(Math.sin(i*Math.PI/5)*.1,Math.cos(i*Math.PI/5)*.1,0);}
    return {umbrella,canopy,butterfly,wings,creature,gifts,fan};
  });
  const sites=life.leisure.sites.map(site=>{
    if(!['shade','shelter','pond','ball'].includes(site.kind))return null;
    const root=group(scene,`story-site-${site.kind}`);root.position.set(site.center.x,top,site.center.z);root.userData.walkThrough=true;
    let toy;
    if(site.kind==='shelter'){
      mesh(root,new T.ConeGeometry(2.2,.75,4),'#99b8a0',0,2.5,0).rotation.y=Math.PI/4;
      for(const x of [-1.5,1.5])pole(root,.05,2.2,'#b49b79',x,1.1,-1.25);
    }
    if(site.kind==='shade'){
      pole(root,.11,2.2,'#ac8b68',0,1.1,-1.35);
      ball(root,1.15,'#9db78e',0,2.4,-1.35).scale.y=.65;
      ball(root,.85,'#b1c59a',.65,2.2,-1.35).scale.y=.8;
    }
    if(site.kind==='pond'){
      mesh(root,new T.CylinderGeometry(.8,.8,.07,20),'#a2ccd0',0,.04,1.5);
      mesh(root,new T.TorusGeometry(.8,.06,5,20),'#b8b795',0,.07,1.5).rotation.x=Math.PI/2;
      for(let i=0;i<3;i++)ball(root,.13,'#bdcb9c',.3-i*.25,.1,1.6+i*.12).scale.y=.12;
      toy=ball(root,.09,'#e7b18b',0,.09,1.4);toy.scale.set(1,.4,1.8);
    }
    if(site.kind==='ball')toy=ball(root,.19,'#e7b375',0,.2,0);
    return {root,site,toy};
  }).filter(Boolean);
  // A small number of line segments provides rain without flashes or full-screen effects.
  const drops=160,positions=new Float32Array(drops*6);
  const rainGeometry=new T.BufferGeometry();rainGeometry.setAttribute('position',new T.BufferAttribute(positions,3));
  const rainMaterial=new T.LineBasicMaterial({color:'#a4c5d4',transparent:true,opacity:.48});
  const rain=new T.LineSegments(rainGeometry,rainMaterial);rain.name='story-rain';rain.frustumCulled=false;scene.add(rain);
  const cloudRoot=group(scene,'story-clouds');
  for(let i=0;i<5;i++){
    const cloud=group(cloudRoot,'rain-cloud');cloud.position.set((i-2)*15,top+13,((i%2)*2-1)*16);
    for(let j=0;j<3;j++)ball(cloud,2.4,'#c5cbc9',(j-1)*2,.2*(j%2),0).scale.set(1,.45,.8);
  }
  return {
    update(actor,resident,reduced=false){
      const p=props[actor.id],time=actor.leisureTime||0,paused=life.isPaused(actor.id),t=reduced?0:time;
      const kind=actor.target?.leisureKind,observing=['watching','pond-watching'].includes(actor.state);
      p.butterfly.visible=observing||kind==='wildlife'&&actor.state==='walking';
      p.creature.visible=observing;
      p.butterfly.position.set(Math.sin(t*1.4)*.65,1.1+Math.cos(t*1.3)*.15,.9+Math.cos(t)*.18);
      p.wings.forEach((wing,i)=>wing.rotation.z=Math.sin(t*8)*(i?1:-1)*.65);
      p.creature.position.set(-.6,0,.8);p.creature.rotation.y=Math.sin(t*.5)*.4;
      if(observing){
        if(actor.type==='frog'){resident.g.position.y-=.1;resident.g.rotation.x=.15;resident.feet.forEach(foot=>foot.position.z=.25);}
        else if(actor.type==='rabbit')resident.g.rotation.x=.08;
        else resident.g.rotation.z=Math.sin(t*.7+.5)*.09;
        resident.arms.forEach(arm=>arm.rotation.x=-.35);
      }
      p.fan.visible=actor.state==='fanning';p.fan.position.set(.4,.8,.55);p.fan.rotation.y=Math.sin(t*6)*.55;
      if(actor.state==='fanning'){resident.g.position.y-=.08;resident.feet.forEach(foot=>{foot.position.y=.15;foot.position.z=.3;});resident.arms[1].rotation.x=-.6;}
      Object.entries(p.gifts).forEach(([kind,gift])=>{
        gift.visible=actor.giftKind===kind&&['picking','carrying','receiving'].includes(actor.giftPhase);
        gift.position.set(actor.giftPhase==='picking'?.2:0,actor.giftPhase==='picking'?.12:.8,.6);
      });
      if(actor.giftPhase==='picking')resident.g.rotation.x=.18*Math.max(0,Math.sin(t));
      if(['carrying','receiving'].includes(actor.giftPhase))resident.arms.forEach(arm=>arm.rotation.x=-.8);
      if(actor.giftPhase==='receiving'&&time>=1.5&&time<2.4&&!reduced)resident.g.position.y+=Math.sin((time-1.5)/.9*Math.PI)*.23;
      const partner=actor.umbrellaPartner==null?null:life.actors[actor.umbrellaPartner];
      const sharing=partner&&Math.hypot(actor.x-partner.x,actor.z-partner.z)<2.2;
      p.umbrella.visible=life.weather.state==='rainy'&&!['indoors','sheltering','photo-posing'].includes(actor.state)&&!(sharing&&actor.id>partner.id);
      const sx=Math.abs(resident.g.scale.x)||1,sy=Math.abs(resident.g.scale.y)||1,sz=Math.abs(resident.g.scale.z)||1;
      const height=sharing?Math.max(resident.headHeight||1.7,residents[partner.id].headHeight||1.7):resident.headHeight||1.7;
      p.umbrella.position.set(.12,(height+.35)/sy,0);
      p.canopy.scale.set((sharing?1.5:1)/(1.15*sx),.35,(sharing?1.5:1)/(1.15*sz));
      if(sharing){const dx=(partner.x-actor.x)/2,dz=(partner.z-actor.z)/2,c=Math.cos(actor.heading),s=Math.sin(actor.heading);p.umbrella.position.x=(dx*c-dz*s)/sx;p.umbrella.position.z=(dx*s+dz*c)/sz;}
      if(p.umbrella.visible)resident.arms[1].rotation.x=-.9;
    },
    updateWorld(reduced=false){
      const weather=life.weather.state,time=reduced?0:life.elapsed;
      cloudRoot.visible=weather!=='sunny';rain.visible=weather==='rainy';
      for(let i=0;i<drops;i++){
        const x=((i*17.71)%85)-42,z=((i*13.13)%70)-30,y=top+2+((i*.773-time*7)%12+12)%12;
        positions.set([x,y,z,x-.12,y-.55,z+.08],i*6);
      }
      rainGeometry.attributes.position.needsUpdate=true;
      for(const {root,site,toy} of sites){
        if(site.kind==='ball'){
          const actor=life.actors.find(actor=>actor.target?.leisureSite===site.id);root.visible=Boolean(actor);
          if(actor){const goal=site.points[actor.ballGoal??1],from=site.points[actor.ballFrom??actor.ballGoal??1],f=reduced?1:Math.min(1,Math.max(0,(life.elapsed-(actor.ballRolledAt??0))/.8));toy.position.set(from.x+(goal.x-from.x)*f-site.center.x,.2,from.z+(goal.z-from.z)*f-site.center.z);toy.rotation.x=time*2;}
        }
        if(site.kind==='pond'&&toy){toy.position.x=Math.sin(time*.6)*.35;toy.position.z=1.5+Math.cos(time*.5)*.2;}
      }
    },
    dispose(){for(const material of materials.values())material.dispose();rainGeometry.dispose();rainMaterial.dispose();},
  };
}
