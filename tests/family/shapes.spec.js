import {test,expect} from '@playwright/test';
import {installBackend,signIn,openFamily,FAMILY_A,FAMILY_B} from './backend-fixture.js';

async function renderingStub(page) {
  // Storage and auth use the real app and SDK; renderer coverage stays in island.spec.js.
  await page.route('**/src/world.js',route=>route.fulfill({contentType:'text/javascript',body:`
    export function createWorld(host,select,icon,reminder,options) {
      options.onReady();
      const noop=()=>{};
      return {setTodoReminder:noop,setReducedMotion:noop,setInteriorsVisible:noop,focusIsland:noop,endResidentVisit:noop,dispose:noop,
        getResidentActivities:()=>[],getResidentTemplate:()=>({}),
        setResidentShapes:settings=>{window.appliedShapes=settings;},editResident:index=>options.onEditResident(index)};
    }`}));
  await page.route('**/src/shape-preview.js',route=>route.fulfill({contentType:'text/javascript',body:'export function createShapePreview(){return {setResident(){},setShape(){},view(){},dispose(){}}}'}));
}
async function editor(page,index=4) {
  if(await page.locator('.family-panel').isVisible())await page.getByRole('button',{name:'關閉家庭空間'}).click();
  await page.locator('.island-card[data-open="friends"]').click();await page.locator(`[data-edit-resident="${index}"]`).click();
  await expect(page.locator('.resident-editor')).toBeVisible();return page.locator('.resident-editor');
}
const change=(page,label,value)=>page.getByRole('slider',{name:label,exact:true}).evaluate((input,value)=>{Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(input,String(value));input.dispatchEvent(new Event('input',{bubbles:true}));},value);

test('family shape saves survive reload and load on another device; conflicts preserve the local draft',async({page,browser})=>{
  const db=await installBackend(page,{families:true,member:true});await renderingStub(page);
  await page.goto('/');await signIn(page);let studio=await editor(page);
  await expect(studio.locator('.shape-sync')).toContainText('家庭造型已載入');
  await change(page,'肚子胖度',1.42);await studio.getByRole('button',{name:'儲存並套用',exact:true}).click();
  await expect(studio.locator('[data-editor-status]')).toContainText('家庭資料庫');
  expect(db.shapes[0].shape.bodyWidth).toBe(1.42);
  await studio.getByRole('button',{name:'關閉造型編輯器'}).click();await page.reload();studio=await editor(page);
  await expect(page.getByRole('slider',{name:'肚子胖度',exact:true})).toHaveValue('1.42');
  const context=await browser.newContext(),other=await context.newPage();
  try {
    await installBackend(other,{sharedDb:db});await renderingStub(other);await other.goto('/');await signIn(other,'b@example.test');const second=await editor(other);
    await expect(other.getByRole('slider',{name:'肚子胖度',exact:true})).toHaveValue('1.42');
    await change(page,'肚子胖度',1.3);
    await change(other,'肚子胖度',1.2);await second.getByRole('button',{name:'儲存並套用',exact:true}).click();
    await expect(second.locator('[data-editor-status]')).toContainText('家庭資料庫');
    await studio.getByRole('button',{name:'重新載入家庭造型'}).click();
    await expect.poll(()=>page.evaluate(()=>window.appliedShapes.guagua.bodyWidth)).toBe(1.2);
    await expect(page.getByRole('slider',{name:'肚子胖度',exact:true})).toHaveValue('1.3');
    await studio.getByRole('button',{name:'儲存並套用',exact:true}).click();
    await expect(studio.locator('[data-editor-status]')).toContainText('已被家人更新');
    expect(db.shapes[0].shape.bodyWidth).toBe(1.2);
    await studio.getByRole('button',{name:'還原未儲存調整'}).click();
    await expect(page.getByRole('slider',{name:'肚子胖度',exact:true})).toHaveValue('1.2');
  } finally {await context.close();}
});

test('missing migration and failed saves do not claim success or discard edits',async({page})=>{
  const db=await installBackend(page,{families:true});db.shapesMissing=true;await renderingStub(page);
  await page.addInitScript(()=>localStorage.setItem('little-island-shapes-v1',JSON.stringify({version:1,residents:{guagua:{bodyWidth:1.4}}})));
  await page.goto('/');await signIn(page);const studio=await editor(page);
  await expect(studio.locator('[role=alert]')).toContainText('資料庫更新');
  await expect(studio.getByRole('button',{name:'儲存並套用',exact:true})).toBeDisabled();
  await expect(studio.getByRole('button',{name:'匯出本機造型備份'})).toBeEnabled();
  const downloaded=page.waitForEvent('download');await studio.getByRole('button',{name:'匯出本機造型備份'}).click();
  const download=await downloaded,fs=await import('node:fs/promises');
  expect(JSON.parse(await fs.readFile(await download.path(),'utf8')).residents.guagua.bodyWidth).toBe(1.4);
  db.shapesMissing=false;await studio.getByRole('button',{name:'重新載入家庭造型'}).click();
  await expect(studio.getByRole('button',{name:'儲存並套用',exact:true})).toBeEnabled();
  await change(page,'頭部寬度',1.3);db.shapeFailure=true;
  await studio.getByRole('button',{name:'儲存並套用',exact:true}).click();
  await expect(studio.locator('[data-editor-status]')).toContainText('雲端儲存未完成');
  await expect(page.getByRole('slider',{name:'頭部寬度',exact:true})).toHaveValue('1.3');expect(db.shapes).toHaveLength(0);
  db.shapeFailure=false;await studio.getByRole('button',{name:'儲存並套用',exact:true}).click();
  await expect(studio.locator('[data-editor-status]')).toContainText('家庭資料庫');
});

test('legacy local shapes can be imported, and another family does not inherit them',async({page})=>{
  const db=await installBackend(page,{families:true,twoFamilies:true});await renderingStub(page);
  await page.addInitScript(()=>localStorage.setItem('little-island-shapes-v1',JSON.stringify({version:1,residents:{guagua:{bodyWidth:1.4},'pink-dinosaur':{tailSize:1.6}}})));
  await page.goto('/');await signIn(page);let studio=await editor(page);
  page.once('dialog',dialog=>dialog.accept());await studio.getByRole('button',{name:'將此裝置舊造型存入家庭'}).click();
  await expect(studio.locator('[data-editor-status]')).toContainText('已將本機造型存入家庭資料庫');
  await expect(page.getByRole('slider',{name:'肚子胖度',exact:true})).toHaveValue('1.4');
  expect(db.shapes.filter(row=>row.family_id===FAMILY_A)).toHaveLength(2);
  await studio.getByRole('button',{name:'關閉造型編輯器'}).click();const panel=await openFamily(page);await panel.getByLabel('目前家庭').selectOption(FAMILY_B);
  studio=await editor(page);await expect(studio.locator('.shape-sync')).toContainText('家庭造型已載入');
  await expect(page.getByRole('slider',{name:'肚子胖度',exact:true})).toHaveValue('1');
  expect(db.shapes.filter(row=>row.family_id===FAMILY_B)).toHaveLength(0);
});
