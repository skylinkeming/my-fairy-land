create function pg_temp.assert_true(p_test boolean,p_message text) returns void language plpgsql as $$begin if p_test is distinct from true then raise exception 'ASSERTION: %',p_message;end if;end$$;
create function pg_temp.fails(p_sql text,p_message text) returns void language plpgsql as $$declare rejected boolean:=false;begin begin execute p_sql;exception when others then if position(p_message in sqlerrm)>0 then rejected:=true;else raise;end if;end;if not rejected then raise exception 'Expected error: %',p_message;end if;end$$;
set role authenticated;
select set_config('request.jwt.claim.sub','11111111-1111-4111-8111-111111111111',false);
select public.island_create_family('Shape family') as family \gset
select public.island_create_invite(:'family') as invite \gset
select count(*) from public.island_save_resident_shapes(:'family','[{"resident_id":"guagua","shape":{"bodyWidth":1.42,"eyeY":0.05}},{"resident_id":"pink-dinosaur","shape":{"tailSize":1.5}}]');
select pg_temp.assert_true((select shape->>'bodyWidth'='1.42' and shape->>'eyeY'='0.05' and shape->>'size'='1' and version=1 and updated_by=auth.uid() from public.island_list_resident_shapes(:'family') where resident_id='guagua'),'all provided controls and defaults are saved with server metadata');
select set_config('request.jwt.claim.sub','22222222-2222-4222-8222-222222222222',false);
select pg_temp.assert_true((select count(*)=0 from public.island_resident_shapes where family_id=:'family'),'RLS isolates family shapes');
select pg_temp.fails(format('select * from public.island_list_resident_shapes(%L)',:'family'),'family_access_denied');
select public.island_join_family(:'invite'::jsonb->>'code');
select count(*) from public.island_save_resident_shapes(:'family','[{"resident_id":"guagua","version":1,"shape":{"bodyWidth":1.2}}]');
select pg_temp.assert_true((select shape->>'bodyWidth'='1.2' and version=2 and updated_by=auth.uid() from public.island_list_resident_shapes(:'family') where resident_id='guagua'),'ordinary members can update shared shapes');
select pg_temp.assert_true((select shape->>'tailSize'='1.5' and version=1 from public.island_list_resident_shapes(:'family') where resident_id='pink-dinosaur'),'editing one resident preserves other residents');
select pg_temp.fails(format('select * from public.island_save_resident_shapes(%L,%L)',:'family','[{"resident_id":"guagua","version":1,"shape":{"size":1.1}}]'),'shape_conflict');
select pg_temp.fails(format('select * from public.island_save_resident_shapes(%L,%L)',:'family','[{"resident_id":"guagua","version":2,"shape":{"size":999}}]'),'invalid_shape');
select pg_temp.fails(format('select * from public.island_save_resident_shapes(%L,%L)',:'family','[{"resident_id":"guagua","version":2,"shape":{"extra":1}}]'),'invalid_shape');
select pg_temp.fails(format('select * from public.island_save_resident_shapes(%L,%L)',:'family','[{"resident_id":"guagua","version":2,"shape":{"size":"1.1"}}]'),'invalid_shape');
select pg_temp.fails(format('select * from public.island_save_resident_shapes(%L,%L)',:'family','[{"resident_id":"unknown","shape":{}}]'),'check constraint');
select pg_temp.fails(format('select * from public.island_save_resident_shapes(%L,%L)',:'family','[{"resident_id":"cotton-rabbit","shape":{"size":1.1}},{"resident_id":"guagua","version":1,"shape":{}}]'),'shape_conflict');
select pg_temp.assert_true((select count(*)=2 from public.island_list_resident_shapes(:'family')),'a conflicting import is atomic');
select pg_temp.fails('update public.island_resident_shapes set version=99','permission denied');
select public.island_create_family('Other shapes') as other_family \gset
select pg_temp.assert_true((select count(*)=0 from public.island_list_resident_shapes(:'other_family')),'another family has no inherited shapes');
select set_config('request.jwt.claim.sub','11111111-1111-4111-8111-111111111111',false);
select public.island_remove_member(:'family','22222222-2222-4222-8222-222222222222');
select set_config('request.jwt.claim.sub','22222222-2222-4222-8222-222222222222',false);
select pg_temp.fails(format('select * from public.island_save_resident_shapes(%L,%L)',:'family','[]'),'family_access_denied');
select pg_temp.fails(format('select * from public.island_list_resident_shapes(%L)',:'family'),'family_access_denied');
reset role;
set role anon;
select pg_temp.fails('select * from public.island_resident_shapes','permission denied');
select pg_temp.fails(format('select * from public.island_list_resident_shapes(%L)',:'family'),'permission denied');
reset role;
