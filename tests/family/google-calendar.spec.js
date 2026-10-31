import {test,expect} from '@playwright/test';
import {installBackend} from './backend-fixture.js';

test('a todo opens a prefilled Google draft, and calendar details use the saved time',async({page,context})=>{
  await page.setViewportSize({width:390,height:844});
  await installBackend(page);
  await context.route('https://calendar.google.com/**',route=>route.fulfill({contentType:'text/html',body:'<p>Google Calendar draft</p>'}));
  await page.goto('/');await page.locator('.island-card[data-open="todo"]').click();
  await page.locator('#todo-text').fill('Google 測試 & 散步');await page.locator('#todo-date').fill('2026-12-31');
  await page.getByRole('button',{name:'新增',exact:true}).click();
  const row=page.locator('.todo-row').filter({hasText:'Google 測試 & 散步'}),link=row.getByRole('link',{name:/加入 Google 行事曆/});
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  const popupPromise=page.waitForEvent('popup');await link.click();const popup=await popupPromise;await popup.waitForLoadState();
  const url=new URL(popup.url());expect(url.searchParams.get('text')).toBe('Google 測試 & 散步');expect(url.searchParams.get('dates')).toBe('20261231/20270101');await popup.close();
  await row.locator('[data-edit-todo]').click();await page.locator('#edit-todo-time').fill('23:30');await page.getByRole('button',{name:'儲存修改'}).click();
  await expect(row.getByRole('link',{name:/加入 Google 行事曆/})).toHaveAttribute('href',/20261231T233000%2F20270101T003000/);
  await page.locator('[data-view=calendar]').click();
  // Find the actual selected month without relying on the machine's clock.
  while(!await page.getByRole('button',{name:'查看 Google 測試 & 散步',exact:true}).count()) {
    const heading=await page.locator('.calendar-header h3').textContent();
    const [year,month]=heading.match(/\d+/g).map(Number);
    await page.getByRole('button',{name:year*12+month<2026*12+12?'下一個月':'上一個月',exact:true}).click();
  }
  await page.getByRole('button',{name:'查看 Google 測試 & 散步',exact:true}).click();
  await expect(page.locator('#todo-detail').getByRole('link',{name:/加入 Google 行事曆/})).toHaveAttribute('href',/ctz=Asia%2FTaipei/);
  await expect(page.locator('.calendar-export-note')).toContainText('請在 Google 確認儲存');
});
