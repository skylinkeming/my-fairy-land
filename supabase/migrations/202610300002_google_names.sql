-- Keep existing families intact; accept Google profile names as display text only.
-- Authorization continues to use auth.uid() and the membership table.
create or replace function public.island_create_family(p_name text) returns uuid
language plpgsql security definer set search_path='' as $$
declare v_id uuid; v_user uuid:=auth.uid(); v_name text:=btrim(p_name);
begin
  if v_user is null then raise exception 'auth_required' using errcode='42501'; end if;
  if v_name is null or char_length(v_name) not between 2 and 48 then raise exception 'invalid_family_name' using errcode='22023'; end if;
  insert into public.island_families(name,owner_id) values(v_name,v_user) returning id into v_id;
  insert into public.island_family_members(family_id,user_id,display_name,role)
    values(v_id,v_user,left(coalesce(nullif(btrim(auth.jwt()->'user_metadata'->>'display_name'),''),nullif(btrim(auth.jwt()->'user_metadata'->>'full_name'),''),nullif(btrim(auth.jwt()->'user_metadata'->>'name'),''),'小島家人'),40),'owner');
  return v_id;
end;
$$;

create or replace function public.island_join_family(p_code text) returns uuid
language plpgsql security definer set search_path='' as $$
declare v_invite public.island_family_invites; v_user uuid:=auth.uid(); v_code text:=lower(btrim(p_code));
begin
  if v_user is null then raise exception 'auth_required' using errcode='42501'; end if;
  if v_code is null or v_code !~ '^[a-f0-9]{64}$' then raise exception 'invalid_invite'; end if;
  -- The row lock makes a one-use invitation atomic even for simultaneous joins.
  select * into v_invite from public.island_family_invites
    where token_hash=encode(sha256(convert_to(v_code,'UTF8')),'hex') for update;
  if not found or v_invite.expires_at<=now() or v_invite.revoked_at is not null then raise exception 'invalid_invite'; end if;
  if public.island_is_member(v_invite.family_id) then return v_invite.family_id; end if;
  if v_invite.used_at is not null then raise exception 'invalid_invite'; end if;
  insert into public.island_family_members(family_id,user_id,display_name,role)
    values(v_invite.family_id,v_user,left(coalesce(nullif(btrim(auth.jwt()->'user_metadata'->>'display_name'),''),nullif(btrim(auth.jwt()->'user_metadata'->>'full_name'),''),nullif(btrim(auth.jwt()->'user_metadata'->>'name'),''),'小島家人'),40),'member');
  update public.island_family_invites set used_at=now(),used_by=v_user where id=v_invite.id;
  return v_invite.family_id;
end;
$$;

revoke all on function public.island_create_family(text),public.island_join_family(text) from public,anon,authenticated;
grant execute on function public.island_create_family(text),public.island_join_family(text) to authenticated;
