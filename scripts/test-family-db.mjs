import {readFileSync,readdirSync} from 'node:fs';
import {spawn,spawnSync} from 'node:child_process';
import {setTimeout as pause} from 'node:timers/promises';
const env={...process.env};for(const key of ['DOCKER_HOST','DOCKER_CONTEXT','DOCKER_TLS','DOCKER_TLS_VERIFY','DOCKER_CERT_PATH'])delete env[key];
const docker=['--host=unix:///var/run/docker.sock'];
const command=(args,input)=>spawnSync('docker',[...docker,...args],{env,input,encoding:'utf8',maxBuffer:4*1024*1024});
const must=result=>{if(result.status!==0)throw new Error(result.stderr||result.stdout||'Docker command failed');return result.stdout;};
const container=`island-family-test-${process.pid}-${Date.now()}`;
const psql=sql=>command(['exec','-i',container,'psql','-X','-q','-t','-A','-v','ON_ERROR_STOP=1','-U','postgres','-d','island_test'],sql);
const identity=id=>`set role authenticated;select set_config('request.jwt.claim.sub','${id}',false);`;
try {
  must(command(['info','--format','{{.ServerVersion}}']));
  must(command(['run','--rm','-d','--name',container,'-e','POSTGRES_HOST_AUTH_METHOD=trust','-e','POSTGRES_DB=island_test','postgres:16-alpine']));
  let ready=false;
  for(let attempt=0;attempt<80;attempt++){if(command(['exec',container,'pg_isready','-h','127.0.0.1','-U','postgres','-d','island_test']).status===0){ready=true;break;}await pause(150);}
  if(!ready)throw new Error('PostgreSQL did not start.');
  const directory=new URL('../supabase/migrations/',import.meta.url);
  const migration=readdirSync(directory).filter(file=>file.endsWith('.sql')).sort().map(file=>readFileSync(new URL(file,directory),'utf8')).join('\n');
  must(psql(readFileSync(new URL('../tests/backend/bootstrap.sql',import.meta.url),'utf8')));
  must(psql(migration));
  must(psql(readFileSync(new URL('../tests/backend/family-rls.sql',import.meta.url),'utf8')));
  must(psql(readFileSync(new URL('../tests/backend/todos-rls.sql',import.meta.url),'utf8')));
  must(psql(migration)); // Rerunning setup must preserve families and memberships.
  const setup=must(psql(`${identity('11111111-1111-4111-8111-111111111111')}
    select public.island_create_family('Concurrent family') as family_id \\gset
    select json_build_object('family',:'family_id','invite',public.island_create_invite(:'family_id'));`));
  const info=JSON.parse(setup.trim().split('\n').at(-1));
  const attempt=id=>new Promise(resolve=>{
    const child=spawn('docker',[...docker,'exec','-i',container,'psql','-X','-q','-t','-A','-v','ON_ERROR_STOP=1','-U','postgres','-d','island_test'],{env,stdio:['pipe','pipe','pipe']});
    let stderr='';child.stderr.on('data',value=>stderr+=value);child.stdout.resume();
    child.on('close',code=>resolve({code,stderr}));child.stdin.end(`${identity(id)}select public.island_join_family('${info.invite.code}');`);
  });
  const concurrent=await Promise.all(['33333333-3333-4333-8333-333333333333','44444444-4444-4444-8444-444444444444'].map(attempt));
  if(concurrent.filter(result=>result.code===0).length!==1 || !concurrent.some(result=>result.stderr.includes('invalid_invite')))throw new Error('Concurrent joins did not enforce one-use invitation.');
  const count=must(psql(`select count(*) from public.island_family_members where family_id='${info.family}' and role='member';`)).trim();
  if(count!=='1')throw new Error('Concurrent invitation created multiple members.');
  const todoId='ffffffff-ffff-4fff-8fff-ffffffffffff';
  must(psql(`${identity('11111111-1111-4111-8111-111111111111')}
    select count(*) from public.island_change_todos('${info.family}','[{"id":"${todoId}","text":"Concurrent todo","date":"2026-10-31","time":"","done":false}]');`));
  const edit=text=>new Promise(resolve=>{
    const child=spawn('docker',[...docker,'exec','-i',container,'psql','-X','-q','-t','-A','-v','ON_ERROR_STOP=1','-U','postgres','-d','island_test'],{env,stdio:['pipe','pipe','pipe']});
    let stderr='';child.stderr.on('data',value=>stderr+=value);child.stdout.resume();
    child.on('close',code=>resolve({code,stderr}));
    child.stdin.end(`${identity('11111111-1111-4111-8111-111111111111')}select count(*) from public.island_change_todos('${info.family}','[{"id":"${todoId}","version":1,"text":"${text}","date":"2026-10-31","time":"","done":true}]');`);
  });
  const edits=await Promise.all(['First edit','Second edit'].map(edit));
  if(edits.filter(result=>result.code===0).length!==1||!edits.some(result=>result.stderr.includes('todo_conflict')))throw new Error('Concurrent todo edits did not enforce version conflicts.');
  must(psql(migration));
  if(must(psql(`select version from public.island_todos where id='${todoId}';`)).trim()!=='2')throw new Error('Migration rerun changed shared todo data.');
  console.log('PostgreSQL checks passed: family isolation, server-side roles, hashed/expired/revoked invitations, immediate revocation, migration rerun, concurrent one-use joins, shared todo CRUD/RLS, atomic conflict rollback, concurrent todo edits and todo migration rerun.');
} finally {command(['rm','-f',container]);}
