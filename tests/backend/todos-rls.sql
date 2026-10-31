create function pg_temp.assert_true(p_test boolean,p_message text) returns void language plpgsql as $$begin if p_test is distinct from true then raise exception 'ASSERTION: %',p_message;end if;end$$;
create function pg_temp.fails(p_sql text,p_message text) returns void language plpgsql as $$declare rejected boolean:=false;begin begin execute p_sql;exception when others then if position(p_message in sqlerrm)>0 then rejected:=true;else raise;end if;end;if not rejected then raise exception 'Expected error: %',p_message;end if;end$$;
set role authenticated;
select set_config('request.jwt.claim.sub','11111111-1111-4111-8111-111111111111',false);
select public.island_create_family('Todo family') as family \gset
select public.island_create_invite(:'family') as invite \gset
select count(*) from public.island_change_todos(:'family','[{"id":"eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeee","text":"一起散步","date":"2026-10-31","time":"","done":false}]');
select pg_temp.assert_true((select text='一起散步' and due_time is null and version=1 and created_by=auth.uid() from public.island_list_todos(:'family')),'owner creates a shared todo with server metadata and optional time');
-- A retry after losing the committed response is idempotent.
select count(*) from public.island_change_todos(:'family','[{"id":"eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeee","text":"一起散步","date":"2026-10-31","time":"","done":false}]');
select pg_temp.assert_true((select count(*)=1 from public.island_list_todos(:'family')),'retrying a committed create does not duplicate it');
select set_config('request.jwt.claim.sub','22222222-2222-4222-8222-222222222222',false);
select pg_temp.fails(format('select * from public.island_list_todos(%L)',:'family'),'family_access_denied');
select pg_temp.assert_true((select count(*)=0 from public.island_todos),'RLS hides unrelated todos');
select public.island_join_family(:'invite'::jsonb->>'code');
select count(*) from public.island_change_todos(:'family','[{"id":"eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeee","version":1,"text":"家人修改","date":"2026-11-01","time":"09:30","done":true}]');
select pg_temp.assert_true((select text='家人修改' and due_time=time '09:30' and done and version=2 and updated_by=auth.uid() from public.island_list_todos(:'family')),'ordinary family member can edit and complete shared todos');
select pg_temp.fails(format('select * from public.island_change_todos(%L,%L)',:'family','[{"id":"eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeee","version":1,"delete":true}]'),'todo_conflict');
select pg_temp.fails(format('select * from public.island_change_todos(%L,%L)',:'family','[{"id":"eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeee","version":2,"text":"","date":"2026-11-01","time":"","done":false}]'),'check constraint');
select pg_temp.fails(format('select * from public.island_change_todos(%L,%L)',:'family','[{"id":"dddddddd-dddd-4ddd-8ddd-dddddddddddd","text":"must roll back","date":"2026-11-01","time":"","done":false},{"id":"eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeee","version":1,"delete":true}]'),'todo_conflict');
select pg_temp.assert_true((select count(*)=1 from public.island_list_todos(:'family')),'failed batch rolls back all changes');
select pg_temp.fails('update public.island_todos set version=99','permission denied');
select public.island_create_family('Other todo family') as other_family \gset
select pg_temp.fails(format('select * from public.island_change_todos(%L,%L)',:'other_family','[{"id":"eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeee","version":2,"delete":true}]'),'todo_conflict');
select set_config('request.jwt.claim.sub','11111111-1111-4111-8111-111111111111',false);
select public.island_remove_member(:'family','22222222-2222-4222-8222-222222222222');
select set_config('request.jwt.claim.sub','22222222-2222-4222-8222-222222222222',false);
select pg_temp.fails(format('select * from public.island_list_todos(%L)',:'family'),'family_access_denied');
select pg_temp.fails(format('select * from public.island_change_todos(%L,%L)',:'family','[]'),'family_access_denied');
select pg_temp.assert_true((select count(*)=0 from public.island_todos where family_id=:'family'),'removal immediately revokes todo reads');
select set_config('request.jwt.claim.sub','11111111-1111-4111-8111-111111111111',false);
select count(*) from public.island_change_todos(:'family','[{"id":"eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeee","version":2,"delete":true}]');
select pg_temp.assert_true((select count(*)=0 from public.island_list_todos(:'family')),'shared todo can be deleted');
reset role;
set role anon;
select pg_temp.fails('select * from public.island_todos','permission denied');
select pg_temp.fails(format('select * from public.island_list_todos(%L)',:'family'),'permission denied');
reset role;
