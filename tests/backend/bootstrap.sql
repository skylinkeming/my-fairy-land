create role anon nologin;
create role authenticated nologin;
create schema auth;
create table auth.users(id uuid primary key,email text);
insert into auth.users values
 ('11111111-1111-4111-8111-111111111111','owner-a@example.test'),
 ('22222222-2222-4222-8222-222222222222','member-b@example.test'),
 ('33333333-3333-4333-8333-333333333333','outsider-c@example.test'),
 ('44444444-4444-4444-8444-444444444444','outsider-d@example.test');
create function auth.uid() returns uuid language sql stable as $$select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid$$;
create function auth.jwt() returns jsonb language sql stable as $$select coalesce(nullif(current_setting('request.jwt.claims',true),''),'{}')::jsonb$$;
grant usage on schema auth,public to anon,authenticated;
