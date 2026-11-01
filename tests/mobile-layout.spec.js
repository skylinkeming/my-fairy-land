import {test, expect} from '@playwright/test';

async function reachable(locator) {
  await locator.scrollIntoViewIfNeeded();
  await expect(locator).toBeVisible();
  expect(await locator.evaluate(element => {
    const box = element.getBoundingClientRect();
    const hit = document.elementFromPoint(box.x + box.width / 2, box.y + box.height / 2);
    return box.x >= 0 && box.right <= innerWidth + 1 && box.y >= 0 && box.bottom <= innerHeight + 1 && (hit === element || element.contains(hit));
  })).toBe(true);
}

test('phone navigation, map tools and resident actions remain reachable on small and landscape screens', async ({page}, info) => {
  test.setTimeout(150000);
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.setViewportSize({width:320,height:568});
  await page.goto('/');
  await expect(page.locator('#watch-residents')).toBeEnabled({timeout:45000});
  for (const size of [{width:320,height:568},{width:390,height:844},{width:740,height:360},{width:844,height:390}]) {
    await page.setViewportSize(size);
    await page.evaluate(() => scrollTo(0,0));
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await reachable(page.locator('#family-account'));
    await reachable(page.locator('.resident-pill'));
    await reachable(page.getByRole('navigation').getByRole('button',{name:'日常小事'}));
    await page.locator('#map-expand').click();
    for (const id of ['map-expand','watch-residents','zoom-in','zoom-out','reset']) await reachable(page.locator(`#${id}`));
    await page.getByRole('button',{name:'更多操作'}).click();
    for (const id of ['map-pan','island-weather','group-photo','view-interiors','sound']) await reachable(page.locator(`#${id}`));
    await page.getByRole('button',{name:'收起工具'}).click();
    await page.locator('#map-expand').click();
  }
  await page.setViewportSize({width:320,height:568});
  await page.locator('.resident-pill').click();
  const card=page.locator('.resident-card').last();
  await reachable(card.locator('[data-edit-resident]'));
  await reachable(card.locator('[data-greet]'));
  await card.locator('[data-edit-resident]').click();
  const editor=page.locator('.resident-editor');
  await expect(editor).toBeVisible();
  await reachable(editor.getByRole('button',{name:'儲存並套用',exact:true}));
  await reachable(editor.locator('[data-editor-close]'));
  await editor.locator('[data-editor-close]').click();
  await page.locator('.resident-pill').click();
  await page.locator('[data-greet="0"]').click();
  const dialog=page.getByRole('region',{name:'娃娃問候'});
  await reachable(dialog.getByRole('button',{name:'去喝杯咖啡'}));
  await reachable(dialog.getByRole('button',{name:'回家休息'}));
  await dialog.locator('summary').click();
  await reachable(dialog.getByRole('button',{name:'邀朋友共傘散步'}));
  await reachable(dialog.getByRole('button',{name:'繼續去玩吧'}));
  await page.screenshot({path:info.outputPath('phone-map.png')});
});

test('short phone screens can submit journals and close family dialogs', async ({page}) => {
  await page.setViewportSize({width:320,height:360});
  await page.route('**/src/world.js*', route=>route.abort());
  await page.goto('/');
  await page.locator('.island-card[data-open="note"]').click();
  await page.locator('#note-title').fill('手機記事');
  await page.locator('#note-body').fill('小螢幕也能留下記事');
  const submit=page.getByRole('button',{name:'留下記事'});
  await reachable(submit);
  await submit.click();
  await expect(page.locator('.note-paper').first()).toContainText('手機記事');
  await reachable(page.locator('#close-panel'));
  await page.locator('#close-panel').click();
  await page.locator('#family-account').click();
  const close=page.getByRole('button',{name:'關閉家庭空間'});
  await reachable(close);
  await close.click();
  await expect(page.locator('.family-overlay')).toHaveCount(0);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
