create table if not exists public.island_resident_shapes (
  family_id uuid not null references public.island_families(id) on delete cascade,
  resident_id text not null check (resident_id in ('milk-bear','cotton-rabbit','matcha-bear','floral-bear','guagua','pink-dinosaur')),
  shape jsonb not null check (jsonb_typeof(shape)='object'),
  version bigint not null default 1 check (version>0),
  updated_at timestamptz not null default clock_timestamp(),
  updated_by uuid references auth.users(id) on delete set null,
  primary key(family_id,resident_id)
);
alter table public.island_resident_shapes enable row level security;
drop policy if exists island_shapes_read on public.island_resident_shapes;
create policy island_shapes_read on public.island_resident_shapes for select to authenticated using(public.island_is_member(family_id));
revoke all on public.island_resident_shapes from public,anon,authenticated;
grant select on public.island_resident_shapes to authenticated;

create or replace function public.island_list_resident_shapes(p_family_id uuid)
returns setof public.island_resident_shapes language plpgsql security definer set search_path='' as $$
begin
  if auth.uid() is null then raise exception 'auth_required' using errcode='42501'; end if;
  perform 1 from public.island_family_members where family_id=p_family_id and user_id=auth.uid() for share;
  if not found then raise exception 'family_access_denied' using errcode='42501'; end if;
  return query select * from public.island_resident_shapes where family_id=p_family_id order by resident_id;
end;
$$;

create or replace function public.island_save_resident_shapes(p_family_id uuid,p_changes jsonb)
returns setof public.island_resident_shapes language plpgsql security definer set search_path='' as $$
declare v_change jsonb; v_shape jsonb; v_key text; v_value jsonb; v_count integer;
  v_defaults constant jsonb:='{"size": 1, "headWidth": 1, "headHeight": 1, "headDepth": 1, "headY": 0, "bodyWidth": 1, "bodyHeight": 1, "bodyDepth": 1, "armSize": 1, "footLength": 1, "eyeSpacing": 1, "eyeY": 0, "tailSize": 1}';
  v_limits constant jsonb:='{"size": [0.75, 1.25], "headWidth": [0.65, 1.55], "headHeight": [0.7, 1.4], "headDepth": [0.7, 1.5], "headY": [-0.15, 0.2], "bodyWidth": [0.65, 1.65], "bodyHeight": [0.75, 1.35], "bodyDepth": [0.65, 1.65], "armSize": [0.65, 1.5], "footLength": [0.65, 1.6], "eyeSpacing": [0.75, 1.25], "eyeY": [-0.08, 0.08], "tailSize": [0.6, 1.7]}';
begin
  if auth.uid() is null then raise exception 'auth_required' using errcode='42501'; end if;
  perform 1 from public.island_family_members where family_id=p_family_id and user_id=auth.uid() for share;
  if not found then raise exception 'family_access_denied' using errcode='42501'; end if;
  if p_changes is null or jsonb_typeof(p_changes)<>'array' then raise exception 'invalid_shape'; end if;
  if jsonb_array_length(p_changes)>6 or exists(select 1 from jsonb_array_elements(p_changes) c group by c->>'resident_id' having count(*)>1) then raise exception 'invalid_shape'; end if;
  for v_change in select c from jsonb_array_elements(p_changes) c order by c->>'resident_id' loop
    if jsonb_typeof(v_change->'shape') is distinct from 'object' then raise exception 'invalid_shape'; end if;
    for v_key,v_value in select key,value from jsonb_each(v_change->'shape') loop
      if not (v_limits ? v_key) or jsonb_typeof(v_value)<>'number' then raise exception 'invalid_shape'; end if;
      if v_value::numeric<(v_limits->v_key->>0)::numeric or v_value::numeric>(v_limits->v_key->>1)::numeric then raise exception 'invalid_shape'; end if;
    end loop;
    v_shape:=v_defaults || (v_change->'shape');
    if v_change->>'version' is null then
      insert into public.island_resident_shapes(family_id,resident_id,shape,updated_by)
        values(p_family_id,v_change->>'resident_id',v_shape,auth.uid()) on conflict(family_id,resident_id) do nothing;
      get diagnostics v_count=row_count;
    else
      update public.island_resident_shapes set shape=v_shape,version=version+1,updated_at=clock_timestamp(),updated_by=auth.uid()
        where family_id=p_family_id and resident_id=v_change->>'resident_id' and version=(v_change->>'version')::bigint;
      get diagnostics v_count=row_count;
    end if;
    if v_count<>1 then raise exception 'shape_conflict' using errcode='40001'; end if;
  end loop;
  return query select * from public.island_resident_shapes where family_id=p_family_id order by resident_id;
end;
$$;
revoke all on function public.island_list_resident_shapes(uuid),public.island_save_resident_shapes(uuid,jsonb) from public,anon,authenticated;
grant execute on function public.island_list_resident_shapes(uuid),public.island_save_resident_shapes(uuid,jsonb) to authenticated;
notify pgrst, 'reload schema';
