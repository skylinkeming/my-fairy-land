-- Shared todos belong to a family; every operation checks current membership.
create table if not exists public.island_todos (
  id uuid primary key,
  family_id uuid not null references public.island_families(id) on delete cascade,
  text text not null check (char_length(btrim(text)) between 1 and 160),
  due_date date not null check (due_date between date '0001-01-01' and date '9999-12-31'),
  due_time time(0) check (due_time is null or due_time < time '24:00'),
  done boolean not null default false,
  created_at timestamptz not null default clock_timestamp(),
  created_by uuid references auth.users(id) on delete set null,
  updated_at timestamptz not null default clock_timestamp(),
  updated_by uuid references auth.users(id) on delete set null,
  version bigint not null default 1 check (version > 0)
);
create index if not exists island_todos_family_created on public.island_todos(family_id,created_at desc,id);
alter table public.island_todos enable row level security;
drop policy if exists island_todos_read on public.island_todos;
create policy island_todos_read on public.island_todos for select to authenticated using (public.island_is_member(family_id));
revoke all on public.island_todos from public,anon,authenticated;
grant select on public.island_todos to authenticated;

create or replace function public.island_list_todos(p_family_id uuid)
returns setof public.island_todos language plpgsql security definer set search_path='' as $$
begin
  if auth.uid() is null then raise exception 'auth_required' using errcode='42501'; end if;
  perform 1 from public.island_family_members where family_id=p_family_id and user_id=auth.uid() for share;
  if not found then raise exception 'family_access_denied' using errcode='42501'; end if;
  return query select * from public.island_todos where family_id=p_family_id order by created_at desc,id;
end;
$$;

-- Apply only changed rows, atomically. Versions prevent a stale browser from
-- overwriting a family member's edits or resurrecting a deleted todo.
create or replace function public.island_change_todos(p_family_id uuid,p_changes jsonb)
returns setof public.island_todos language plpgsql security definer set search_path='' as $$
declare v_change jsonb; v_count integer;
begin
  if auth.uid() is null then raise exception 'auth_required' using errcode='42501'; end if;
  perform 1 from public.island_family_members where family_id=p_family_id and user_id=auth.uid() for share;
  if not found then raise exception 'family_access_denied' using errcode='42501'; end if;
  if p_changes is null or jsonb_typeof(p_changes)<>'array' then raise exception 'invalid_todo'; end if;
  if exists(select 1 from jsonb_array_elements(p_changes) c group by c->>'id' having count(*)>1) then raise exception 'invalid_todo'; end if;
  -- Stable lock ordering also supports batch deletion without cross-client deadlocks.
  for v_change in select c from jsonb_array_elements(p_changes) c order by c->>'id' loop
    if jsonb_typeof(v_change)<>'object' or v_change->>'id' is null then raise exception 'invalid_todo'; end if;
    if v_change->>'version' is null then
      if coalesce((v_change->>'delete')::boolean,false) then raise exception 'invalid_todo'; end if;
      insert into public.island_todos(id,family_id,text,due_date,due_time,done,created_by,updated_by)
        values((v_change->>'id')::uuid,p_family_id,btrim(v_change->>'text'),(v_change->>'date')::date,
          nullif(v_change->>'time','')::time,(v_change->>'done')::boolean,auth.uid(),auth.uid())
        on conflict (id) do nothing;
      get diagnostics v_count=row_count;
      -- A response may be lost after commit. Retrying the same create must not
      -- duplicate it; an existing changed or foreign-family row still conflicts.
      if v_count=0 and exists(select 1 from public.island_todos
        where id=(v_change->>'id')::uuid and family_id=p_family_id and created_by=auth.uid() and version=1
          and text=btrim(v_change->>'text') and due_date=(v_change->>'date')::date
          and due_time is not distinct from nullif(v_change->>'time','')::time
          and done=(v_change->>'done')::boolean) then v_count:=1; end if;
    elsif coalesce((v_change->>'delete')::boolean,false) then
      delete from public.island_todos where id=(v_change->>'id')::uuid and family_id=p_family_id and version=(v_change->>'version')::bigint;
      get diagnostics v_count=row_count;
    else
      update public.island_todos set text=btrim(v_change->>'text'),due_date=(v_change->>'date')::date,
        due_time=nullif(v_change->>'time','')::time,done=(v_change->>'done')::boolean,
        updated_by=auth.uid(),updated_at=clock_timestamp(),version=version+1
        where id=(v_change->>'id')::uuid and family_id=p_family_id and version=(v_change->>'version')::bigint;
      get diagnostics v_count=row_count;
    end if;
    if v_count<>1 then raise exception 'todo_conflict' using errcode='40001'; end if;
  end loop;
  return query select * from public.island_todos where family_id=p_family_id order by created_at desc,id;
end;
$$;
revoke all on function public.island_list_todos(uuid),public.island_change_todos(uuid,jsonb) from public,anon,authenticated;
grant execute on function public.island_list_todos(uuid),public.island_change_todos(uuid,jsonb) to authenticated;
