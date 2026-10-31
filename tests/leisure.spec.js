import {test,expect} from '@playwright/test';
test.setTimeout(180000);

test.beforeEach(async({page},info)=>{
  const initial=info.title.startsWith('refresh starts');
  await page.emulateMedia({reducedMotion:'reduce'});
  // Use the real simulation and renderer, with access to their instances so
  // journeys can be simulated without waiting several real-world minutes.
  for(const [file,factory,variable] of [['resident-life.js','createResidentLife','testLife'],['world.js','createWorld','testWorld'],['resident-leisure-art.js','createLeisureArt','testArt'],['resident-stories-art.js','createResidentStoriesArt','testStories']]) {
    await page.route(url=>url.pathname===`/src/${file}`&&!url.searchParams.has('leisure-original'),route=>route.fulfill({contentType:'text/javascript',body:`
      export * from '/src/${file}?leisure-original';
      import {${factory} as original} from '/src/${file}?leisure-original';
      export function ${factory}(...args){${factory==='createResidentLife'?(initial?'args[0]={...args[0],leisureInitial:true};':"let seed=7;args[0]={...args[0],leisureInitial:false,random:()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;}};"):''}const value=original(...args);window.${variable}=${['testArt','testStories'].includes(variable)?'args[0]':'value'};return value;}
    `}));
  }
  await page.goto('/');
  await page.waitForFunction(()=>window.testLife&&window.testWorld&&window.testArt,null,{timeout:90000});
});

test('refresh starts with residents already doing random activities, with visible props',async({page},info)=>{
  const snapshot=()=>page.evaluate(()=>{
    const life=window.testLife,active=life.actors.filter(actor=>actor.target?.leisureSite);
    const names={fishing:'leisure-fishing-rod',picnic:'leisure-biscuit',garden:'leisure-watering-can',photo:'leisure-camera',wildlife:'story-butterfly',pond:'story-butterfly',shade:'story-hand-fan'};
    return {
      active:active.map(actor=>({id:actor.id,state:actor.state,kind:actor.target.leisureKind,time:actor.leisureTime})),
      visible:active.every(actor=>actor.target.leisureKind==='ball'?window.testStories.scene.getObjectByName('story-site-ball').visible:window.testArt.residents[actor.id].g.getObjectByName(names[actor.target.leisureKind]).visible),
      safe:life.actors.every(actor=>life.navigation.walkable(actor)&&life.actors.every(other=>other===actor||Math.hypot(actor.x-other.x,actor.z-other.z)>=1.18-1e-6)),
    };
  });
  await expect(page.locator('.resident-activity-badge:visible').first()).toBeVisible();
  const before=await snapshot();expect(before.active).toHaveLength(3);
  expect(before.active.every(actor=>actor.state!=='walking')).toBe(true);
  expect(new Set(before.active.map(actor=>actor.kind)).size).toBeGreaterThanOrEqual(2);
  expect(before.visible).toBe(true);expect(before.safe).toBe(true);
  await page.locator('.island-card[data-open="friends"]').click();
  await expect(page.locator('.resident-status').filter({hasText:/釣魚|野餐|澆水|相機|蝴蝶|池塘|追著小球|樹蔭/})).toHaveCount(3);
  await page.locator('#close-panel').click();
  await page.reload();await page.waitForFunction(()=>window.testLife&&window.testWorld&&window.testArt,null,{timeout:90000});
  const after=await snapshot();expect(after.active).toHaveLength(3);expect(after.visible).toBe(true);expect(after.safe).toBe(true);
  expect(JSON.stringify(after.active)).not.toBe(JSON.stringify(before.active));
  await page.locator('#world-canvas').screenshot({path:info.outputPath('initial-activities.png')});
});

test('all four activities use real scenery, props and safe walking routes',async({page},info)=>{
  test.setTimeout(180000);
  const sites=await page.evaluate(()=>window.testLife.leisure.sites.map(site=>site.kind));
  expect([...new Set(sites)]).toEqual(expect.arrayContaining(['fishing','garden','photo','picnic','wildlife','pond','ball','gift','shade','shelter','rainwalk']));
  expect(sites.filter(kind=>kind==='fishing').length).toBeGreaterThanOrEqual(2);
  for(const [kind,label,state,prop] of [['fishing','去釣魚','fishing','leisure-fishing-rod'],['picnic','去野餐','picnicking','leisure-biscuit'],['garden','照顧花園','gardening','leisure-watering-can'],['photo','去拍風景','photographing','leisure-camera']]) {
    const index=await page.evaluate(kind=>{
      const life=window.testLife,site=life.leisure.sites.find(site=>site.kind===kind);
      const actors=life.actors.filter(actor=>!actor.target?.leisureSite);
      return actors.sort((a,b)=>Math.hypot(a.x-site.center.x,a.z-site.center.z)-Math.hypot(b.x-site.center.x,b.z-site.center.z))[0]?.id;
    },kind);
    if(await page.locator('#map-expand').getAttribute('aria-pressed')==='true')await page.locator('#map-expand').click();
    await page.locator('.island-card[data-open="friends"]').click();await page.locator(`[data-greet="${index}"]`).click();
    await page.getByText('選擇一個小日常',{exact:true}).click();
    await page.getByRole('button',{name:label,exact:true}).click();
    const result=await page.evaluate(({index,state,kind})=>{
      const life=window.testLife,actor=life.actors[index];
      for(let i=0;i<1800&&actor.state!==state;i++)life.update(.1,true);
      if(actor.state!==state)throw Error(`${kind} never reached its spot: ${JSON.stringify(actor)}`);
      if(kind==='picnic')for(let i=0;i<1800&&!life.leisure.active.find(record=>record.kind==='picnic')?.started;i++)life.update(.1,true);
      for(let i=0;i<130;i++)life.update(.1,true);
      window.testWorld.zoom(1);
      for(const a of life.actors) {
        if(!life.navigation.walkable(a))throw Error('Resident left the walking surface');
        for(const b of life.actors)if(a.id<b.id&&Math.hypot(a.x-b.x,a.z-b.z)<1.18-1e-6)throw Error('Residents overlap');
      }
      return {state:actor.state,site:actor.target.leisureSite,debug:life.actors.map(a=>({id:a.id,x:a.x,z:a.z,state:a.state,target:a.target,index:a.routeIndex,route:a.route,avoidance:a.avoidance}))};
    },{index,state,kind});
    expect(result.state,JSON.stringify(result.debug)).toBe(state);
    await expect.poll(()=>page.evaluate(({index,prop})=>window.testArt.residents[index].g.getObjectByName(prop).visible,{index,prop})).toBe(true);
    await page.locator('#world-canvas').screenshot({path:info.outputPath(`${kind}.png`)});
    await page.evaluate(()=>{
      const life=window.testLife;
      for(let i=0;i<600&&life.leisure.active.length;i++)life.update(.1,true);
      window.testWorld.endResidentVisit();
    });
  }
});

test('group photo gathers six residents and downloads an actual PNG',async({page},info)=>{
  test.setTimeout(180000);
  await page.setViewportSize({width:390,height:844});
  await page.locator('#group-photo').click();
  await expect(page.locator('#group-photo')).toHaveText('取消合照集合');
  const states=await page.evaluate(()=>{
    const life=window.testLife;
    for(let i=0;i<1800&&life.leisure.photo.phase!=='ready';i++) {
      const before=life.actors.map(actor=>({x:actor.x,z:actor.z}));life.update(.1,true);
      for(const actor of life.actors) {
        if(!life.navigation.walkable(actor))throw Error('Photo route left the walking network');
        if(Math.hypot(actor.x-before[actor.id].x,actor.z-before[actor.id].z)>.09501)throw Error('Photo gathering teleported');
        for(const other of life.actors)if(other.id>actor.id&&Math.hypot(actor.x-other.x,actor.z-other.z)<1.18-1e-6)throw Error('Photo gathering overlaps');
      }
    }
    return {phase:life.leisure.photo.phase,states:life.actors.map(actor=>actor.state),debug:life.actors.map(a=>({id:a.id,x:a.x,z:a.z,state:a.state,target:a.target,index:a.routeIndex,route:a.route,avoidance:a.avoidance}))};
  });
  expect(states.phase,JSON.stringify(states.debug)).toBe('ready');expect(states.states).toEqual(Array(6).fill('photo-posing'));
  const link=page.getByRole('link',{name:'下載合照',exact:true});await expect(link).toBeVisible({timeout:15000});
  await expect(link).toHaveAttribute('href',/^data:image\/png;base64,/);
  await expect(page.locator('#world')).toHaveAttribute('data-photo-visible-residents','6');
  const data=await link.getAttribute('href'),buffer=Buffer.from(data.split(',')[1],'base64');
  expect(buffer.subarray(0,8).toString('hex')).toBe('89504e470d0a1a0a');expect(buffer.length).toBeGreaterThan(10000);
  const fs=await import('node:fs/promises');await fs.writeFile(info.outputPath('family-photo.png'),buffer);
  const download=page.waitForEvent('download');await link.click();expect((await download).suggestedFilename()).toBe('our-little-island-family.png');
  expect(await page.evaluate(()=>window.testLife.actors.every(actor=>!actor.manualLeisure))).toBe(true);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});

test('fishing invitations use multiple spots, show overhead status and queue when all are reserved',async({page},info)=>{
  const result=await page.evaluate(()=>{
    const life=window.testLife,world=window.testWorld;
    const count=life.leisure.sites.filter(site=>site.kind==='fishing').length;
    const invited=[];
    for(let i=0;i<count;i++) {
      if(!world.doActivity(i,'fishing'))throw Error('Free fishing spot rejected');
      invited.push(life.actors[i].target.leisureSite);
    }
    if(!world.doActivity(0,'fishing')||life.leisure.lastRequest.status!=='already-active')throw Error('Existing fisher rejected');
    if(!world.doActivity(count,'fishing')||life.leisure.lastRequest.status!=='queued')throw Error('Full fishing spots did not queue');
    world.focusResident(count);
    return {count,invited,index:count};
  });
  expect(result.count).toBeGreaterThanOrEqual(2);expect(new Set(result.invited).size).toBe(result.count);
  await expect(page.locator(`.resident-activity-badge[data-resident="${result.index}"]`)).toContainText('排隊等釣魚');
  await page.locator(`.resident-activity-badge[data-resident="${result.index}"]`).click();
  await expect(page.locator('#world')).toHaveAttribute('data-paused-resident',String(result.index));
  await page.locator('#world').screenshot({path:info.outputPath('fishing-queue-marker.png')});
  const started=await page.evaluate(index=>{
    window.testWorld.endResidentVisit();
    const life=window.testLife;let started=false;
    for(let i=0;i<3000&&!started;i++) {
      life.update(.1,true);started=life.actors[index].state==='fishing';
      for(const actor of life.actors) {
        if(!life.navigation.walkable(actor))throw Error('Fishing route left walking network');
        for(const other of life.actors)if(actor.id<other.id&&Math.hypot(actor.x-other.x,actor.z-other.z)<1.18-1e-6)throw Error('Fishing routes overlap');
      }
    }
    window.testWorld.focusResident(index);return started;
  },result.index);
  expect(started).toBe(true);
  await expect(page.locator(`.resident-activity-badge[data-resident="${result.index}"]`)).toContainText('釣魚中');
});

test('new daily stories have real props, safe movement and distinct resident preferences',async({page},info)=>{
  test.setTimeout(300000);
  for(const [index,kind,state,prop] of [[1,'wildlife','watching','story-butterfly'],[4,'pond','pond-watching','story-little-animal'],[5,'ball','playing-ball',null],[0,'shade','fanning','story-hand-fan']]){
    const reached=await page.evaluate(({index,kind,state})=>{
      const life=window.testLife;if(!window.testWorld.doActivity(index,kind))throw Error(JSON.stringify(life.leisure.lastRequest));
      for(let i=0;i<2400&&life.actors[index].state!==state;i++)life.update(.1,true);
      window.testWorld.focusResident(index);return life.actors[index].state===state;
    },{index,kind,state});
    expect(reached,kind).toBe(true);
    const badge=page.locator(`.resident-activity-badge[data-resident="${index}"]`);await expect(badge).toBeVisible();
    if(prop)await expect.poll(()=>page.evaluate(({index,prop})=>window.testStories.residents[index].g.getObjectByName(prop).visible,{index,prop})).toBe(true);
    await page.locator('#world').screenshot({path:info.outputPath(`${kind}.png`)});
    await page.evaluate(()=>{window.testWorld.endResidentVisit();for(let i=0;i<600&&window.testLife.leisure.active.length;i++)window.testLife.update(.1,true);});
  }
  await page.evaluate(()=>window.testWorld.reset());
  if(await page.locator('#map-expand').getAttribute('aria-pressed')==='true')await page.locator('#map-expand').click();
  await page.locator('.island-card[data-open="friends"]').click();
  await expect(page.locator('.resident-preference')).toHaveCount(6);
  await expect(page.locator('.resident-preference').nth(1)).toContainText('花園');
  await expect(page.locator('.resident-preference').nth(4)).toContainText('池塘');
  await expect(page.locator('.resident-preference').nth(5)).toContainText('追球');
});

test('gift travels from a pickup to a friend, who receives it and stores it',async({page},info)=>{
  const result=await page.evaluate(()=>{
    const life=window.testLife;const index=life.actors.find(actor=>actor.node==='home')?.id??0;
    if(!window.testWorld.doActivity(index,'gift'))throw Error(JSON.stringify(life.leisure.lastRequest));
    const record=life.leisure.active.find(record=>record.kind==='gift');
    for(let i=0;i<2400&&life.actors[index].giftPhase!=='carrying';i++)life.update(.1,true);
    window.testWorld.focusResident(index);return {index,receiver:record.ids[1],phase:life.actors[index].giftPhase};
  });
  expect(result.phase).toBe('carrying');
  await expect(page.locator(`.resident-activity-badge[data-resident="${result.index}"]`)).toContainText('帶禮物找朋友');
  await expect.poll(()=>page.evaluate(index=>{const a=window.testLife.actors[index];return window.testStories.residents[index].g.getObjectByName(`story-gift-${a.giftKind}`).visible;},result.index)).toBe(true);
  await page.locator('#world').screenshot({path:info.outputPath('carrying-gift.png')});
  const received=await page.evaluate(({index,receiver})=>{
    const life=window.testLife;window.testWorld.endResidentVisit();
    for(let i=0;i<2400&&life.actors[receiver].giftPhase!=='receiving';i++)life.update(.1,true);
    window.testWorld.focusResident(receiver);return {phase:life.actors[receiver].giftPhase,gifts:life.actors[receiver].receivedGifts};
  },result);
  expect(received.phase).toBe('receiving');expect(received.gifts).toHaveLength(1);
  await page.locator('#world').screenshot({path:info.outputPath('receiving-gift.png')});
  await page.evaluate(()=>{window.testWorld.endResidentVisit();for(let i=0;i<100;i++)window.testLife.update(.1,true);});
  expect(await page.evaluate(index=>window.testLife.actors[index].giftPhase,result.receiver)).toBe(null);
});

test('weather control shows rain, real shared umbrellas, shelter and sunny shade on a phone',async({page},info)=>{
  await page.setViewportSize({width:390,height:844});
  await page.locator('#island-weather').click();await expect(page.locator('#world')).toHaveAttribute('data-weather','cloudy');
  await page.locator('#island-weather').click();await expect(page.locator('#world')).toHaveAttribute('data-weather','rainy');
  await expect.poll(()=>page.evaluate(()=>window.testStories.scene.getObjectByName('story-rain').visible)).toBe(true);
  const pair=await page.evaluate(()=>{
    const life=window.testLife;
    for(const a of life.actors)if(window.testWorld.doActivity(a.id,'rainwalk')){
      const record=life.leisure.active.find(record=>record.kind==='rainwalk');
      for(let i=0;i<2400&&life.leisure.active.find(r=>r.kind==='rainwalk')?.phase!=='walking';i++)life.update(.1,true);
      window.testWorld.focusResident(a.id);return record.ids;
    }
    throw Error('No reachable umbrella meeting');
  });
  const debug=await page.evaluate(ids=>({active:window.testLife.leisure.active,actors:ids.map(id=>{const a=window.testLife.actors[id];return {id,x:a.x,z:a.z,state:a.state,partner:a.umbrellaPartner,target:a.target,route:a.route,index:a.routeIndex,blocked:a.leisureStall};})}),pair);
  expect(debug.active.some(record=>record.kind==='rainwalk'&&record.phase==='walking'),JSON.stringify(debug)).toBe(true);
  const umbrellas=()=>page.evaluate(ids=>ids.map(id=>({visible:window.testStories.residents[id].g.getObjectByName('story-umbrella').visible,state:window.testLife.actors[id].state})),pair);
  await expect.poll(async()=> (await umbrellas()).filter(item=>item.visible).length).toBe(1);
  await expect(page.locator('#world')).toHaveAttribute('data-focus-visible-residents','2');
  await page.locator('#world').screenshot({path:info.outputPath('shared-umbrella-phone.png')});
  await page.evaluate(()=>{window.testWorld.endResidentVisit();for(let i=0;i<700;i++)window.testLife.update(.1,true);});
  const sheltered=await page.evaluate(()=>{
    const life=window.testLife;if(!window.testWorld.doActivity(0,'shelter'))return false;
    for(let i=0;i<2400&&life.actors[0].state!=='sheltering';i++)life.update(.1,true);
    window.testWorld.focusResident(0);return life.actors[0].state==='sheltering';
  });expect(sheltered).toBe(true);
  await expect.poll(()=>page.evaluate(()=>window.testStories.residents[0].g.getObjectByName('story-umbrella').visible)).toBe(false);
  await page.locator('#world').screenshot({path:info.outputPath('rain-shelter-phone.png')});
  await page.evaluate(()=>window.testWorld.endResidentVisit());
  await page.locator('#island-weather').click();await expect(page.locator('#world')).toHaveAttribute('data-weather','sunny');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
