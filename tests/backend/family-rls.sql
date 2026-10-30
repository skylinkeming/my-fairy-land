create function pg_temp.assert_true(p_test boolean,p_message text) returns void language plpgsql as $$begin if p_test is distinct from true then raise exception 'ASSERTION: %',p_message;end if;end$$;
create function pg_temp.denied(p_sql text) returns void language plpgsql as $$declare rejected boolean:=false;begin begin execute p_sql;exception when insufficient_privilege then rejected:=true;end;if not rejected then raise exception 'Expected permission denial: %',p_sql;end if;end$$;
create function pg_temp.fails(p_sql text,p_message text) returns void language plpgsql as $$declare rejected boolean:=false;begin begin execute p_sql;exception when others then if position(p_message in sqlerrm)>0 then rejected:=true;else raise;end if;end;if not rejected then raise exception 'Expected error: %',p_message;end if;end$$;
set role authenticated;
select set_config('request.jwt.claim.sub','11111111-1111-4111-8111-111111111111',false);
select set_config('request.jwt.claims','{"user_metadata":{"display_name":"家人 A"}}',false);
select public.island_create_family('A 的家庭') as family_a \gset
select pg_temp.assert_true((select role='owner' from public.island_family_members where family_id=:'family_a'),'creator atomically becomes owner');
select pg_temp.assert_true((select count(*)=1 from public.island_families),'owner sees own family');
select pg_temp.fails($q$select public.island_create_family('x')$q$,'invalid_family_name');
select pg_temp.assert_true((select count(*)=1 from public.island_families),'invalid creation leaves no partial family');
select public.island_create_invite(:'family_a') as invite_json \gset
select (:'invite_json'::jsonb->>'code') as invite_code,(:'invite_json'::jsonb->>'id') as invite_id \gset
select pg_temp.assert_true(length(:'invite_code')=64,'invitation has a high entropy token');
select pg_temp.denied('select token_hash from public.island_family_invites');
select pg_temp.denied(format('update public.island_families set name=%L where id=%L','hacked',:'family_a'));
select pg_temp.fails(format('select public.island_remove_member(%L,%L)',:'family_a','11111111-1111-4111-8111-111111111111'),'cannot_remove_owner');
select pg_temp.fails(format('select public.island_leave_family(%L)',:'family_a'),'owner_cannot_leave');

select set_config('request.jwt.claim.sub','22222222-2222-4222-8222-222222222222',false);
select set_config('request.jwt.claims','{"user_metadata":{"display_name":"家人 B","role":"owner"}}',false);
select pg_temp.assert_true((select count(*)=0 from public.island_families),'unrelated account cannot read family A');
select pg_temp.assert_true((select count(*)=0 from public.island_family_members),'unrelated account cannot read members');
select pg_temp.denied(format('insert into public.island_family_members(family_id,user_id,display_name,role) values(%L,%L,%L,%L)',:'family_a','22222222-2222-4222-8222-222222222222','B','owner'));
select public.island_create_family('B 的家庭') as family_b \gset
select pg_temp.assert_true((select count(*)=1 from public.island_families),'family B is isolated');
select public.island_join_family(:'invite_code');
select pg_temp.assert_true((select count(*)=2 from public.island_families),'joining grants access to exactly the joined family');
select pg_temp.assert_true((select role='member' from public.island_family_members where family_id=:'family_a' and user_id=auth.uid()),'client metadata cannot grant owner role');
select pg_temp.denied(format('update public.island_family_members set role=%L where family_id=%L and user_id=auth.uid()','owner',:'family_a'));
select pg_temp.denied(format('select public.island_create_invite(%L)',:'family_a'));
select pg_temp.denied(format('select public.island_rename_family(%L,%L)',:'family_a','hacked'));
select pg_temp.denied(format('select public.island_remove_member(%L,%L)',:'family_a','11111111-1111-4111-8111-111111111111'));
select pg_temp.assert_true((select count(*)=0 from public.island_family_invites where family_id=:'family_a'),'ordinary members cannot list owner invitations');
select public.island_join_family(:'invite_code'); -- Safe retry by the same member.

select set_config('request.jwt.claim.sub','33333333-3333-4333-8333-333333333333',false);
select pg_temp.fails(format('select public.island_join_family(%L)',:'invite_code'),'invalid_invite');
select pg_temp.fails($q$select public.island_join_family('wrong')$q$,'invalid_invite');
select pg_temp.assert_true((select count(*)=0 from public.island_families),'used token cannot expose family data');

select set_config('request.jwt.claim.sub','11111111-1111-4111-8111-111111111111',false);
select public.island_create_invite(:'family_a') as revoked_json \gset
select public.island_revoke_invite((:'revoked_json'::jsonb->>'id')::uuid);
select public.island_create_invite(:'family_a') as expired_json \gset
reset role;
select pg_temp.assert_true((select token_hash<>:'invite_code' from public.island_family_invites where id=:'invite_id'),'raw invitation codes are not stored in the database');
update public.island_family_invites set expires_at=now()-interval '1 minute' where id=(:'expired_json'::jsonb->>'id')::uuid;
set role authenticated;
select set_config('request.jwt.claim.sub','33333333-3333-4333-8333-333333333333',false);
select pg_temp.fails(format('select public.island_join_family(%L)',:'revoked_json'::jsonb->>'code'),'invalid_invite');
select pg_temp.fails(format('select public.island_join_family(%L)',:'expired_json'::jsonb->>'code'),'invalid_invite');
select set_config('request.jwt.claim.sub','11111111-1111-4111-8111-111111111111',false);
select public.island_rename_family(:'family_a','新的家庭名稱');
select pg_temp.assert_true((select name='新的家庭名稱' from public.island_families where id=:'family_a'),'owner can rename family');
select public.island_remove_member(:'family_a','22222222-2222-4222-8222-222222222222');
select set_config('request.jwt.claim.sub','22222222-2222-4222-8222-222222222222',false);
select pg_temp.assert_true((select count(*)=0 from public.island_families where id=:'family_a'),'removal revokes access without refreshing JWT');
select pg_temp.assert_true((select count(*)=1 from public.island_families),'removal does not affect another family');
select set_config('request.jwt.claim.sub','',false);
select pg_temp.fails($q$select public.island_create_family('No session')$q$,'auth_required');
reset role;
set role anon;
select pg_temp.denied('select * from public.island_families');
select pg_temp.denied($q$select public.island_create_family('anonymous')$q$);
reset role;
