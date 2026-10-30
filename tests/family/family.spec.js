import {test,expect} from '@playwright/test';
import {FAMILY_A,FAMILY_B,installBackend,openFamily,signIn,users} from './backend-fixture.js';
test.beforeEach(async({page})=>{await page.emulateMedia({reducedMotion:'reduce'});});

test('Google sign-in uses account selection and PKCE, then lets a new user create a family',async({page})=>{
  const backend=await installBackend(page);await page.goto('/');let panel=await openFamily(page);
  await expect(panel.locator('input[type=password]')).toHaveCount(0);
  await expect(panel.getByRole('button',{name:'建立帳號',exact:true})).toHaveCount(0);
  panel=await signIn(page);
  const authorize=backend.requests.find(request=>request.path==='/auth/v1/authorize');
  expect(authorize.query.provider).toBe('google');expect(authorize.query.prompt).toBe('select_account');
  expect(authorize.query.redirect_to).toBe('http://127.0.0.1:5174/');
  expect(authorize.query.code_challenge_method).toBe('s256');expect(authorize.query.code_challenge).toBeTruthy();
  const exchange=backend.requests.find(request=>request.path==='/auth/v1/token');
  expect(exchange.query.grant_type).toBe('pkce');expect(exchange.body.code_verifier).toBeTruthy();
  await expect(panel.locator('.family-account-summary')).toContainText('家人 A');
  await panel.getByLabel('家庭名稱',{exact:true}).fill('我們的小窩');await panel.getByRole('button',{name:'建立我們的家庭'}).click();
  await expect(panel.getByLabel('目前家庭')).toContainText('我們的小窩');
  await expect(panel.locator('.family-members')).toContainText('家人 A（你）');
  await page.reload();panel=await openFamily(page);await expect(panel.getByLabel('目前家庭')).toContainText('我們的小窩');
});

test('Google callback preserves the GitHub Pages site subdirectory',async({page})=>{
  const backend=await installBackend(page);await page.goto('/my-fairy-land/');const panel=await signIn(page);
  await expect(panel.locator('.family-account-summary')).toContainText('家人 A');
  expect(backend.requests.find(request=>request.path==='/auth/v1/authorize').query.redirect_to).toBe('http://127.0.0.1:5174/my-fairy-land/');
  await expect(page).toHaveURL('http://127.0.0.1:5174/my-fairy-land/');
});

test('cancelled Google consent returns to a usable login dialog without exposing provider error text',async({page})=>{
  const backend=await installBackend(page);backend.oauthFailure='access_denied';await page.goto('/');const panel=await openFamily(page);
  await panel.getByRole('button',{name:'使用 Google 帳號登入',exact:true}).click();
  await expect(page.getByRole('alert')).toContainText('已取消 Google 登入');
  await expect(page.getByRole('alert')).not.toContainText('untrusted provider error');
  await expect(page).toHaveURL('http://127.0.0.1:5174/');
  backend.oauthFailure=null;await signIn(page);await expect(page.locator('.family-account-summary')).toContainText('家人 A');
});

test('a failed PKCE exchange offers a fresh Google login instead of a blank callback page',async({page})=>{
  const backend=await installBackend(page);backend.oauthTokenFailure=true;await page.goto('/');const panel=await openFamily(page);
  await panel.getByRole('button',{name:'使用 Google 帳號登入',exact:true}).click();
  await expect(page.getByRole('alert')).toContainText('登入連結已失效');
  await expect(page.getByRole('button',{name:'使用 Google 帳號登入',exact:true})).toBeVisible();
  backend.oauthTokenFailure=false;await signIn(page);await expect(page.locator('.family-account-summary')).toContainText('家人 A');
});

test('an owner issues a one-use invite; a joining family member cannot manage owner settings',async({page})=>{
  const backend=await installBackend(page,{families:true});await page.goto('/');let panel=await signIn(page);
  await panel.getByRole('button',{name:'產生邀請碼'}).click();
  const code=await panel.getByLabel('家庭邀請碼',{exact:true}).inputValue();expect(code).toMatch(/^[a-f0-9]{64}$/);
  await panel.getByRole('button',{name:'登出',exact:true}).click();panel=await signIn(page,'b@example.test');
  await panel.getByRole('button',{name:'加入家庭',exact:true}).click();await panel.getByLabel('家庭邀請碼',{exact:true}).fill(code);await panel.getByRole('button',{name:'使用邀請碼加入'}).click();
  await expect(panel.getByLabel('目前家庭')).toContainText('溫暖的小家');await expect(panel.locator('.family-members')).toContainText('家人 B（你）');
  await expect(panel.getByRole('button',{name:'產生邀請碼'})).toHaveCount(0);await expect(panel.getByLabel('新的家庭名稱')).toHaveCount(0);
  expect(backend.members.find(member=>member.user_id===users['b@example.test'].id).role).toBe('member');
  await panel.getByRole('button',{name:'登出',exact:true}).click();panel=await signIn(page,'c@example.test');await panel.getByRole('button',{name:'加入家庭',exact:true}).click();
  await panel.getByLabel('家庭邀請碼',{exact:true}).fill(code);await panel.getByRole('button',{name:'使用邀請碼加入'}).click();
  await expect(panel.getByRole('alert')).toContainText('邀請碼無效');
});

test('owner can rename family, revoke an invite, and explicitly remove a member',async({page})=>{
  const backend=await installBackend(page,{families:true,member:true});await page.goto('/');const panel=await signIn(page);
  await panel.getByLabel('新的家庭名稱').fill('幸福的小家');await panel.getByRole('button',{name:'儲存家庭名稱'}).click();await expect(panel.getByLabel('目前家庭')).toContainText('幸福的小家');
  await panel.getByRole('button',{name:'產生邀請碼'}).click();await expect(panel.getByLabel('家庭邀請碼',{exact:true})).toBeVisible();
  await panel.getByRole('button',{name:'撤銷',exact:true}).click();await expect(panel.getByLabel('家庭邀請碼',{exact:true})).toHaveCount(0);expect(backend.invites[0].revoked_at).not.toBeNull();
  await panel.locator('.family-members li').filter({hasText:'家人 B'}).getByRole('button',{name:'移除',exact:true}).click();
  await panel.getByRole('button',{name:'確認移除',exact:true}).click();await expect(panel.locator('.family-members')).not.toContainText('家人 B');
});

test('family switches and logout isolate local journals and preserve the guest island',async({page})=>{
  await installBackend(page,{families:true,twoFamilies:true});
  await page.addInitScript(()=>{if(!localStorage.getItem('little-island-v1'))localStorage.setItem('little-island-v1',JSON.stringify({todos:[{id:'guest',text:'訪客自己的便條',date:'2026-10-30',created:Date.now(),done:false}],notes:[],memories:[],residents:[]}));});
  await page.goto('/');const panel=await signIn(page);await expect(panel.getByLabel('目前家庭')).toBeVisible();
  await panel.getByRole('button',{name:'關閉家庭空間'}).click();await page.locator('.island-card[data-open="todo"]').click();
  await expect(page.locator('.todo-row')).toHaveCount(0);await page.locator('#todo-text').fill('只屬於第一個家庭的本機事項');await page.getByRole('button',{name:'新增',exact:true}).click();await expect(page.locator('.todo-row')).toContainText('第一個家庭');
  await openFamily(page);await panel.getByLabel('目前家庭').selectOption(FAMILY_B);await panel.getByRole('button',{name:'關閉家庭空間'}).click();await page.locator('.island-card[data-open="todo"]').click();await expect(page.locator('.todo-row')).toHaveCount(0);
  await openFamily(page);await panel.getByLabel('目前家庭').selectOption(FAMILY_A);await panel.getByRole('button',{name:'關閉家庭空間'}).click();await page.locator('.island-card[data-open="todo"]').click();await expect(page.locator('.todo-row')).toContainText('第一個家庭');
  await openFamily(page);await panel.getByRole('button',{name:'登出',exact:true}).click();await expect(panel.getByRole('button',{name:'使用 Google 帳號登入',exact:true})).toBeVisible();await panel.getByRole('button',{name:'關閉家庭空間'}).click();
  await page.locator('.island-card[data-open="todo"]').click();await expect(page.locator('.todo-row')).toContainText('訪客自己的便條');await expect(page.locator('.todo-row')).not.toContainText('第一個家庭');
});

test('a removed member loses the selected family on refresh',async({page})=>{
  const backend=await installBackend(page,{families:true,member:true});await page.goto('/');const panel=await signIn(page,'b@example.test');await expect(panel.getByLabel('目前家庭')).toBeVisible();
  backend.members=backend.members.filter(member=>member.user_id!==users['b@example.test'].id);
  await panel.getByRole('button',{name:'重新整理家庭列表'}).click();await expect(panel.getByLabel('目前家庭')).toHaveCount(0);await expect(panel.getByRole('button',{name:'建立我們的家庭'})).toBeVisible();
});

test('account and family forms fit a phone and close with Escape',async({page})=>{
  await page.setViewportSize({width:390,height:844});await installBackend(page,{families:true});await page.goto('/');const panel=await signIn(page);await expect(panel.getByRole('button',{name:'產生邀請碼'})).toBeVisible();
  const bounds=await panel.boundingBox();expect(bounds.x).toBeGreaterThanOrEqual(0);expect(bounds.x+bounds.width).toBeLessThanOrEqual(390);
  await page.keyboard.press('Escape');await expect(panel).toHaveCount(0);await expect(page.locator('#family-account')).toBeFocused();
});
