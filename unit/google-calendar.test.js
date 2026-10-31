import {test} from 'node:test';
import assert from 'node:assert/strict';
import {googleCalendarUrl} from '../src/google-calendar.js';
test('all-day events have an exclusive next-day end, including month and year boundaries',()=>{
  for(const [date,end] of [['2026-12-31','20270101'],['2028-02-29','20280301']]) {
    const url=new URL(googleCalendarUrl({text:'買菜 & 散步 #1',date,time:''}));
    assert.equal(url.searchParams.get('dates'),`${date.replaceAll('-','')}/${end}`);
    assert.equal(url.searchParams.get('text'),'買菜 & 散步 #1');
  }
});
test('timed events use Taipei wall time and a one-hour duration across midnight',()=>{
  const url=new URL(googleCalendarUrl({text:'跨年',date:'2026-12-31',time:'23:30'}));
  assert.equal(url.origin,'https://calendar.google.com');
  assert.equal(url.searchParams.get('dates'),'20261231T233000/20270101T003000');
  assert.equal(url.searchParams.get('ctz'),'Asia/Taipei');
});
test('invalid dates and times cannot create misleading calendar drafts',()=>{
  for(const todo of [{date:'2026-02-30'},{date:'bad'},{date:'2026-10-31',time:'25:00'}])assert.equal(googleCalendarUrl(todo),null);
});
