import {test,expect} from '@playwright/test';

test.beforeEach(async({page})=>{
  await page.emulateMedia({reducedMotion:'reduce'});
  for(const [file,factory,key] of [['world.js','createWorld','featureWorld'],['resident-life.js','createResidentLife','featureLife'],['island-sky.js','createIslandSky','featureSky']]) {
    await page.route(url=>url.pathname===`/src/${file}`&&!url.searchParams.has('feature-original'),route=>route.fulfill({contentType:'text/javascript',body:`
      export * from '/src/${file}?feature-original';
      import {${factory} as original} from '/src/${file}?feature-original';
      export function ${factory}(...args){${key==='featureLife'?'args[0]={...args[0],leisureInitial:false};':''}const value=original(...args);window.${key}=${key==='featureSky'?'args[0]':'value'};return value;}
    `}));
  }
});

test('foot width and thickness can be previewed, saved and reloaded on a phone',async({page})=>{
  test.setTimeout(90000);
  await page.setViewportSize({width:390,height:844});await page.goto('/');
  await expect(page.locator('#watch-residents')).toBeEnabled({timeout:45000});
  await page.locator('.resident-pill').click();await page.locator('[data-edit-resident="4"]').click();
  for(const [name,value] of [['腳部胖度','1.4'],['腳掌厚度','1.25']]) {
    await page.getByRole('slider',{name,exact:true}).evaluate((input,value)=>{
      Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(input,value);
      input.dispatchEvent(new Event('input',{bubbles:true}));
    },value);
  }
  await page.getByRole('button',{name:'儲存並套用',exact:true}).click();
  const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('little-island-shapes-v1')).residents.guagua);
  expect(saved.footWidth).toBe(1.4);expect(saved.footThickness).toBe(1.25);
  await page.reload();await expect(page.locator('#watch-residents')).toBeEnabled({timeout:45000});
  await page.locator('.resident-pill').click();await page.locator('[data-edit-resident="4"]').click();
  await expect(page.getByRole('slider',{name:'腳部胖度',exact:true})).toHaveValue('1.4');
  await expect(page.getByRole('slider',{name:'腳掌厚度',exact:true})).toHaveValue('1.25');
});

test('day, night and rain have real independent scene effects and accessible phone controls',async({page},info)=>{
  test.setTimeout(90000);
  await page.setViewportSize({width:390,height:844});await page.goto('/');
  await expect(page.locator('#watch-residents')).toBeEnabled({timeout:45000});
  await page.locator('#map-expand').click();await page.getByRole('button',{name:'更多操作'}).click();
  const dayLight=await page.evaluate(()=>window.featureSky.sun.intensity);
  await page.locator('#island-time').click();
  await expect(page.locator('#world')).toHaveAttribute('data-time-of-day','night');
  expect(await page.evaluate(()=>window.featureSky.sun.intensity)).toBeLessThan(dayLight);
  expect(await page.evaluate(()=>window.featureSky.scene.getObjectByName('island-night-sky').visible)).toBe(true);
  expect(await page.evaluate(()=>window.featureSky.scene.getObjectByName('island-moon').visible)).toBe(true);
  await page.screenshot({path:info.outputPath('night-phone.png')});
  await page.locator('#island-weather').click();await page.locator('#island-weather').click();
  await expect(page.locator('#world')).toHaveAttribute('data-weather','rainy');
  await expect(page.locator('#world')).toHaveAttribute('data-time-of-day','night');
  expect(await page.evaluate(()=>window.featureSky.scene.getObjectByName('story-rain').visible)).toBe(true);
  expect(await page.evaluate(()=>window.featureSky.scene.getObjectByName('island-moon').visible)).toBe(false);
  await page.screenshot({path:info.outputPath('rainy-night-phone.png')});
  await page.locator('#island-time').click();
  await expect(page.locator('#world')).toHaveAttribute('data-time-of-day','day');
  await expect(page.locator('#world')).toHaveAttribute('data-weather','rainy');
  // The time cycle can run automatically without clearing the selected weather.
  await page.evaluate(()=>window.featureLife.weather.update(180));
  await expect(page.locator('#world')).toHaveAttribute('data-time-of-day','night');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});

test('three residents reach a real picnic clearing and share visible food props',async({page},info)=>{
  test.setTimeout(150000);
  await page.goto('/');await expect(page.locator('#watch-residents')).toBeEnabled({timeout:45000});
  const result=await page.evaluate(()=>{
    const life=window.featureLife,site=life.leisure.sites.find(s=>s.kind==='picnic');
    if(!site||site.points.length!==3)throw Error('No three-person picnic clearing');
    // Free the current initial activities by completing them through their normal lifecycle.
    for(let i=0;i<800&&life.leisure.active.length;i++)life.update(.1,true);
    const candidates=life.actors.filter(a=>!a.target?.leisureSite&&!a.target?.roomId&&a.partner==null)
      .sort((a,b)=>Math.hypot(a.x-site.center.x,a.z-site.center.z)-Math.hypot(b.x-site.center.x,b.z-site.center.z));
    if(!life.requestLeisure(candidates[0]?.id,'picnic'))throw Error('Picnic invitation failed');
    const record=life.leisure.active.find(r=>r.kind==='picnic');
    if(record.ids.length!==3)throw Error('Three friends were not invited');
    for(let i=0;i<1800&&!life.leisure.active.find(r=>r.kind==='picnic')?.started;i++)life.update(.1,true);
    if(!life.leisure.active.find(r=>r.kind==='picnic')?.started)throw Error('Friends never reached their picnic seats');
    life.update(5,true);
    const trio=record.ids.map(id=>life.actors[id]);
    for(const a of trio)for(const b of life.actors)if(a.id!==b.id&&Math.hypot(a.x-b.x,a.z-b.z)<1.18-1e-6)throw Error('Picnic residents overlap');
    window.featureWorld.focusResident(record.ids[0]);
    return {ids:record.ids,states:trio.map(a=>a.state),times:trio.map(a=>a.leisureTime)};
  });
  expect(result.states).toEqual(['picnicking','picnicking','picnicking']);expect(new Set(result.times).size).toBe(1);
  await expect.poll(()=>page.evaluate(()=>{
    let count=0;window.featureSky.scene.traverse(object=>{if(object.name==='leisure-biscuit'&&object.visible)count++;});return count;
  })).toBe(3);
  await page.locator('#world-canvas').screenshot({path:info.outputPath('three-person-picnic.png')});
});
