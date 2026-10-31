import {test,expect} from '@playwright/test';
test.setTimeout(180000);

test.beforeEach(async({page})=>{
  await page.emulateMedia({reducedMotion:'reduce'});
  // Use the real simulation and renderer, with access to their instances so
  // journeys can be simulated without waiting several real-world minutes.
  for(const [file,factory,variable] of [['resident-life.js','createResidentLife','testLife'],['world.js','createWorld','testWorld'],['resident-leisure-art.js','createLeisureArt','testArt']]) {
    await page.route(url=>url.pathname===`/src/${file}`&&!url.searchParams.has('leisure-original'),route=>route.fulfill({contentType:'text/javascript',body:`
      export * from '/src/${file}?leisure-original';
      import {${factory} as original} from '/src/${file}?leisure-original';
      export function ${factory}(...args){${factory==='createResidentLife'?"let seed=7;args[0]={...args[0],random:()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;}};":''}const value=original(...args);window.${variable}=${variable==='testArt'?'args[0]':'value'};return value;}
    `}));
  }
  await page.goto('/');
  await page.waitForFunction(()=>window.testLife&&window.testWorld&&window.testArt,null,{timeout:90000});
});

test('all four activities use real scenery, props and safe walking routes',async({page},info)=>{
  test.setTimeout(180000);
  const sites=await page.evaluate(()=>window.testLife.leisure.sites.map(site=>site.kind));
  expect(sites.sort()).toEqual(['fishing','garden','photo','picnic']);
  for(const [kind,label,state,prop] of [['fishing','去釣魚','fishing','leisure-fishing-rod'],['picnic','去野餐','picnicking','leisure-biscuit'],['garden','照顧花園','gardening','leisure-watering-can'],['photo','去拍風景','photographing','leisure-camera']]) {
    const index=await page.evaluate(kind=>{
      const life=window.testLife,site=life.leisure.sites.find(site=>site.kind===kind);
      const actors=life.actors.filter(actor=>!actor.target?.leisureSite);
      return actors.sort((a,b)=>Math.hypot(a.x-site.center.x,a.z-site.center.z)-Math.hypot(b.x-site.center.x,b.z-site.center.z))[0]?.id;
    },kind);
    if(await page.locator('#map-expand').getAttribute('aria-pressed')==='true')await page.locator('#map-expand').click();
    await page.locator('.island-card[data-open="friends"]').click();await page.locator(`[data-greet="${index}"]`).click();
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
