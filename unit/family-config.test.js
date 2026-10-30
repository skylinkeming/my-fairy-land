import test from 'node:test';
import assert from 'node:assert/strict';
import {readBackendConfig} from '../src/family/config.js';
import {familyScope} from '../src/family/api.js';
import {loadHousehold} from '../src/household.js';
test('backend is explicitly unconfigured until both public settings exist',()=>{
  assert.equal(readBackendConfig({}),null);
  assert.throws(()=>readBackendConfig({VITE_SUPABASE_URL:'https://project.supabase.co'}));
  assert.equal(readBackendConfig({VITE_SUPABASE_URL:'https://project.supabase.co/',VITE_SUPABASE_PUBLISHABLE_KEY:'sb_publishable_example'}).url,'https://project.supabase.co');
});
test('privileged or invalid keys cannot be included in a browser build',()=>{
  const config={VITE_SUPABASE_URL:'https://project.supabase.co'};
  for(const key of ['sb_secret_private','broken',`header.${Buffer.from(JSON.stringify({role:'service_role'})).toString('base64url')}.signature`])assert.throws(()=>readBackendConfig({...config,VITE_SUPABASE_PUBLISHABLE_KEY:key}));
  const anon=`header.${Buffer.from(JSON.stringify({role:'anon'})).toString('base64url')}.signature`;
  assert.equal(readBackendConfig({...config,VITE_SUPABASE_PUBLISHABLE_KEY:anon}).key,anon);
  assert.throws(()=>readBackendConfig({VITE_SUPABASE_URL:'http://untrusted.example',VITE_SUPABASE_PUBLISHABLE_KEY:'sb_publishable_example'}));
});
test('account, family, guest and pending states have distinct journal and shape scopes',()=>{
  const scopes=[familyScope(),familyScope('a','one'),familyScope('a','two'),familyScope('b','one'),familyScope('a',null),familyScope(null,null,false)];
  assert.equal(new Set(scopes.map(scope=>scope.storageKey)).size,6);assert.equal(new Set(scopes.map(scope=>scope.shapesKey)).size,6);
  assert.equal(scopes[0].storageKey,'little-island-v1');assert.equal(scopes[4].editable,false);assert.equal(scopes[5].editable,false);
});
test('new family storage starts empty without overwriting or importing guest journals',()=>{
  const data=new Map([['little-island-v1',JSON.stringify({todos:[{id:'private',text:'guest content'}],notes:[],memories:[],residents:[]})]]);
  const original=globalThis.localStorage;globalThis.localStorage={getItem:key=>data.get(key)||null};
  try {
    const family=loadHousehold(familyScope('a','one').storageKey);
    assert.deepEqual(family.todos,[]);assert.deepEqual(family.notes,[]);assert.equal(family.residents.length,6);
    assert.equal(loadHousehold().todos[0].text,'guest content');assert.equal(data.size,1);
  }finally{if(original===undefined)delete globalThis.localStorage;else globalThis.localStorage=original;}
});

test('saved public project settings survive builds and environment overrides require a complete pair',()=>{
  const saved={url:'https://saved.supabase.co',publishableKey:'sb_publishable_saved'};
  assert.equal(readBackendConfig({},saved).url,saved.url);
  assert.throws(()=>readBackendConfig({VITE_SUPABASE_URL:'https://other.supabase.co'},saved));
  assert.equal(readBackendConfig({VITE_SUPABASE_URL:'https://other.supabase.co',VITE_SUPABASE_PUBLISHABLE_KEY:'sb_publishable_other'},saved).url,'https://other.supabase.co');
});
