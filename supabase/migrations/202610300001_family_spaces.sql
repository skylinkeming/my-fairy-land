-- Login is provided by Supabase Auth. No application password table is created.
create table if not exists public.island_families (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(btrim(name)) between 2 and 48),
  owner_id uuid not null references auth.users(id),
  created_at timestamptz not null default now()
);
create table if not exists public.island_family_members (
  family_id uuid not null references public.island_families(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  display_name text not null check (char_length(display_name) between 1 and 40),
  role text not null check (role in ('owner','member')),
  joined_at timestamptz not null default now(),
  primary key (family_id,user_id)
);
create unique index if not exists island_one_family_owner on public.island_family_members(family_id) where role='owner';
create index if not exists island_members_by_user on public.island_family_members(user_id);
create table if not exists public.island_family_invites (
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references public.island_families(id) on delete cascade,
  token_hash text not null unique,
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now(),
  expires_at timestamptz not null default (now()+interval '7 days'),
  used_by uuid references auth.users(id),
  used_at timestamptz,
  revoked_at timestamptz
);

-- Helpers read the actual membership table, never a client-supplied role.
-- SECURITY DEFINER avoids recursive RLS when a membership policy checks itself.
create or replace function public.island_is_member(p_family_id uuid) returns boolean
language sql stable security definer set search_path='' as $$
  select exists(select 1 from public.island_family_members where family_id=p_family_id and user_id=auth.uid());
$$;
create or replace function public.island_is_owner(p_family_id uuid) returns boolean
language sql stable security definer set search_path='' as $$
  select exists(select 1 from public.island_family_members where family_id=p_family_id and user_id=auth.uid() and role='owner');
$$;
alter table public.island_families enable row level security;
alter table public.island_family_members enable row level security;
alter table public.island_family_invites enable row level security;
drop policy if exists island_family_read on public.island_families;
create policy island_family_read on public.island_families for select to authenticated using (public.island_is_member(id));
drop policy if exists island_members_read on public.island_family_members;
create policy island_members_read on public.island_family_members for select to authenticated using (public.island_is_member(family_id));
drop policy if exists island_invites_read on public.island_family_invites;
create policy island_invites_read on public.island_family_invites for select to authenticated using (public.island_is_owner(family_id));

create or replace function public.island_create_family(p_name text) returns uuid
language plpgsql security definer set search_path='' as $$
declare v_id uuid; v_user uuid:=auth.uid(); v_name text:=btrim(p_name);
begin
  if v_user is null then raise exception 'auth_required' using errcode='42501'; end if;
  if v_name is null or char_length(v_name) not between 2 and 48 then raise exception 'invalid_family_name' using errcode='22023'; end if;
  insert into public.island_families(name,owner_id) values(v_name,v_user) returning id into v_id;
  insert into public.island_family_members(family_id,user_id,display_name,role)
    values(v_id,v_user,left(coalesce(nullif(btrim(auth.jwt()->'user_metadata'->>'display_name'),''),'小島家人'),40),'owner');
  return v_id;
end;
$$;

create or replace function public.island_create_invite(p_family_id uuid) returns jsonb
language plpgsql security definer set search_path='' as $$
declare v_code text; v_invite public.island_family_invites;
begin
  if not public.island_is_owner(p_family_id) then raise exception 'owner_only' using errcode='42501'; end if;
  -- Two independent UUIDv4 values provide 244 random bits, without pgcrypto dependency.
  v_code:=replace(gen_random_uuid()::text,'-','')||replace(gen_random_uuid()::text,'-','');
  insert into public.island_family_invites(family_id,token_hash,created_by)
    values(p_family_id,encode(sha256(convert_to(v_code,'UTF8')),'hex'),auth.uid()) returning * into v_invite;
  return jsonb_build_object('id',v_invite.id,'code',v_code,'expires_at',v_invite.expires_at);
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
    values(v_invite.family_id,v_user,left(coalesce(nullif(btrim(auth.jwt()->'user_metadata'->>'display_name'),''),'小島家人'),40),'member');
  update public.island_family_invites set used_at=now(),used_by=v_user where id=v_invite.id;
  return v_invite.family_id;
end;
$$;

create or replace function public.island_rename_family(p_family_id uuid,p_name text) returns void
language plpgsql security definer set search_path='' as $$
begin
  if not public.island_is_owner(p_family_id) then raise exception 'owner_only' using errcode='42501'; end if;
  if p_name is null or char_length(btrim(p_name)) not between 2 and 48 then raise exception 'invalid_family_name' using errcode='22023'; end if;
  update public.island_families set name=btrim(p_name) where id=p_family_id;
end;
$$;
create or replace function public.island_revoke_invite(p_invite_id uuid) returns void
language plpgsql security definer set search_path='' as $$
declare v_family uuid;
begin
  select family_id into v_family from public.island_family_invites where id=p_invite_id;
  if not public.island_is_owner(v_family) then raise exception 'owner_only' using errcode='42501'; end if;
  update public.island_family_invites set revoked_at=now() where id=p_invite_id and used_at is null;
end;
$$;
create or replace function public.island_remove_member(p_family_id uuid,p_user_id uuid) returns void
language plpgsql security definer set search_path='' as $$
begin
  if not public.island_is_owner(p_family_id) then raise exception 'owner_only' using errcode='42501'; end if;
  if exists(select 1 from public.island_family_members where family_id=p_family_id and user_id=p_user_id and role='owner') then raise exception 'cannot_remove_owner'; end if;
  delete from public.island_family_members where family_id=p_family_id and user_id=p_user_id and role='member';
end;
$$;
create or replace function public.island_leave_family(p_family_id uuid) returns void
language plpgsql security definer set search_path='' as $$
begin
  if auth.uid() is null then raise exception 'auth_required' using errcode='42501'; end if;
  if public.island_is_owner(p_family_id) then raise exception 'owner_cannot_leave'; end if;
  delete from public.island_family_members where family_id=p_family_id and user_id=auth.uid() and role='member';
end;
$$;

-- Ordinary clients cannot insert themselves into a family or change their role.
revoke all on public.island_families,public.island_family_members,public.island_family_invites from anon,authenticated;
grant select on public.island_families,public.island_family_members to authenticated;
grant select(id,family_id,created_at,expires_at,used_at,revoked_at) on public.island_family_invites to authenticated;
revoke all on function public.island_is_member(uuid),public.island_is_owner(uuid),public.island_create_family(text),public.island_create_invite(uuid),public.island_join_family(text),public.island_rename_family(uuid,text),public.island_revoke_invite(uuid),public.island_remove_member(uuid,uuid),public.island_leave_family(uuid) from public,anon,authenticated;
grant execute on function public.island_is_member(uuid),public.island_is_owner(uuid),public.island_create_family(text),public.island_create_invite(uuid),public.island_join_family(text),public.island_rename_family(uuid,text),public.island_revoke_invite(uuid),public.island_remove_member(uuid,uuid),public.island_leave_family(uuid) to authenticated;
