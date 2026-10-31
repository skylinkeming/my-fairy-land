import {weightedResident} from './resident-preferences.js';
export const LEISURE_LABELS = {fishing:'釣魚',picnic:'野餐',garden:'照顧花園',photo:'拍風景照',wildlife:'看蝴蝶與小動物',pond:'看池塘',ball:'追球',gift:'送小禮物',shade:'樹蔭搧風',shelter:'到涼亭避雨',rainwalk:'共傘散步'};
export function leisureRequestMessage(result) {
  const activity=LEISURE_LABELS[result?.kind]||'活動';
  return ({queued:`已安排${activity}，釣點空出後會依序前往。`,'already-active':`已經在${activity}或正在前往，繼續活動囉。`,
    'group-photo':'大家正在集合拍照，完成或取消合照後再安排活動。',
    'no-friend':`朋友目前都有行程，稍後再邀請一起${activity}吧。`,
    weather:'這個活動要等適合的天氣再一起玩，可以先切換島上天氣。',
    'no-site':'目前沒有可用的活動地點，請重新整理地圖後再試。',
    unreachable:'暫時找不到安全的路線，稍後再邀請我吧。',busy:'這個活動地點暫時有人使用，可以先選其他活動。'})[result?.status]||'這次活動未能安排，請稍後再試。';
}
const states={fishing:'fishing',picnic:'picnicking',garden:'gardening',photo:'photographing',wildlife:'watching',pond:'pond-watching',ball:'playing-ball',gift:'gift-picking',shade:'fanning',shelter:'sheltering',rainwalk:'sharing-umbrella'};
const durations={fishing:42,picnic:28,garden:32,photo:20,wildlife:12,pond:16,ball:14,gift:4,shade:16,shelter:18,rainwalk:4};
const distance=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);

export function createLeisureSites({nodes,navigation,crossings=[],allow=()=>true}) {
  const sites=[];
  const node=id=>nodes.find(node=>node.id===id)||nodes[0];
  function clearing(kind,island,count,preferred) {
    const origin=node(island), offsets=count===6?[-1.8,0,1.8].flatMap(x=>[-.9,.9].map(z=>({x,z}))):count===2?[{x:-.9,z:0},{x:.9,z:0}]:[{x:0,z:0}];
    for(const candidate of [preferred,...Array.from({length:100},(_,i)=>({x:origin.x+(i%10-4.5)*1.3,z:origin.z+(Math.floor(i/10)-4.5)*1.3}))]) {
      const points=offsets.map(offset=>({x:candidate.x+offset.x,z:candidate.z+offset.z}));
      if(points.every(point=>navigation.walkable(point)&&allow(point)&&distance(point,origin)<(origin.walkRadius||6)-1.3)&&
          points.every(point=>navigation.clearSegment(points[0],point))&&sites.every(site=>distance(candidate,site.center)>3)) {
        const site={id:`${kind}-${origin.id}`,kind,node:origin.id,center:{...candidate},points,heading:0,growth:0};sites.push(site);return site;
      }
    }
    return null;
  }
  const memory=node('memories'),deck=crossings.find(crossing=>crossing.coastalDeck);
  const fishingPoint=deck?{x:deck.b.x,z:deck.b.z}:navigation.nearest({x:memory.x+(memory.walkRadius||6)*.65,z:memory.z+(memory.walkRadius||6)*.65},memory.id);
  if(fishingPoint&&navigation.walkable(fishingPoint)&&allow(fishingPoint))sites.push({id:'fishing-shore',kind:'fishing',node:deck?.island||memory.id,center:{...fishingPoint},points:[fishingPoint],heading:deck?Math.atan2(deck.b.x-deck.a.x,deck.b.z-deck.a.z):Math.atan2(fishingPoint.x-memory.x,fishingPoint.z-memory.z)});
  // Keep the narrow pier single-file, and offer separate safe shore spots.
  for(const [dx,dz] of [[1,0],[0,1],[0,-1],[.7,.7]]) {
    if(sites.filter(site=>site.kind==='fishing').length>=3)break;
    const radius=(memory.walkRadius||6)*.94;
    const point=navigation.nearest({x:memory.x+dx*radius,z:memory.z+dz*radius},memory.id,sites.flatMap(site=>site.points));
    if(point&&allow(point)&&distance(point,memory)>(memory.walkRadius||6)*.7&&sites.every(site=>distance(point,site.center)>3))
      sites.push({id:`fishing-shore-${sites.length}`,kind:'fishing',node:memory.id,center:{...point},points:[point],heading:Math.atan2(point.x-memory.x,point.z-memory.z)});
  }
  const friends=node('friends'),park=node('park'),home=node('home');
  clearing('picnic','friends',2,{x:friends.x+4,z:friends.z+3});
  clearing('garden','park',1,{x:park.x+5,z:park.z-4});
  clearing('photo','home',6,{x:home.x,z:home.z+5});
  for(const island of nodes){
    clearing('wildlife',island.id,2,{x:island.x-4,z:island.z+4});
    clearing('shade',island.id,1,{x:island.x+3,z:island.z+4});
    clearing('shelter',island.id,2,{x:island.x-4,z:island.z-3});
    const walk=clearing('rainwalk',island.id,2,{x:island.x+4,z:island.z+1});
    if(walk){
      walk.ends=walk.points.map(point=>({x:point.x,z:point.z+2.4}));
      if(!walk.ends.every((point,i)=>allow(point)&&navigation.clearSegment(walk.points[i],point)))sites.splice(sites.indexOf(walk),1);
    }
  }
  clearing('ball','friends',2,{x:friends.x-3,z:friends.z+4});
  clearing('gift','home',1,{x:home.x+4,z:home.z-4});
  clearing('pond','park',1,{x:park.x-5,z:park.z+4});
  return sites;
}

export function createLeisureController({actors,navigation,sites,random,start,finish,isPaused,weather={state:'sunny'},automatic=true}) {
  const reservations=new Map();
  let elapsed=0,nextAutomatic=8,kindIndex=0,photo=null,initialized=false,initializing=false;
  let queued=[],lastRequest={status:'idle'};
  const kinds=Object.keys(states).filter(kind=>sites.some(site=>site.kind===kind)&&!['shelter','rainwalk'].includes(kind));
  const origin=actor=>navigation.walkable(actor)?actor:actor.target?.approach||actor;
  const available=actor=>!isPaused(actor.id)&&!actor.leisureExit&&!actor.leisureQueue&&!actor.target?.leisureSite&&!actor.target?.roomId&&!actor.target?.leavingRoom&&actor.partner==null;
  const reachable=(actor,point)=>Boolean(navigation.route(origin(actor),point));
  function end(record) {
    reservations.delete(record.site.id);
    for(const actor of record.actors)if(actor.target?.leisureSite===record.site.id){actor.umbrellaPartner=null;actor.giftPhase=null;finish(actor);}
  }
  const expected=(record,i)=>record.site.kind==='gift'?(i===1?'gift-waiting':record.phase==='picking'?'gift-picking':'gift-giving'):record.site.kind==='photo'&&i===1?'photo-posing':states[record.site.kind];
  function send(record,actor,point,state,node=record.site.node){
    start(actor,{node,point,state,leisureSite:record.site.id,leisureKind:record.site.kind,heading:record.site.heading},record.manual);
  }
  function request(index,kind,manual=true,initial=false) {
    const actor=actors[index];
    if(initial&&(!initializing||elapsed!==0))return false;
    const fail=status=>{lastRequest={status,kind};return false;};
    if(!actor||!states[kind])return fail('unavailable');
    if(['rainwalk','shelter'].includes(kind)&&weather.state!=='rainy'||kind==='shade'&&weather.state==='rainy')return fail('weather');
    if(photo?.phase==='gathering'||photo?.phase==='posing')return fail('group-photo');
    if(manual&&actor.target?.leisureKind===kind&&actor.target?.leisureSite) {
      for(const record of reservations.values())if(record.actors.includes(actor))record.actors.forEach(participant=>{participant.manualLeisure=true;});
      lastRequest={status:'already-active',kind};return true;
    }
    if(manual&&actor.leisureQueue===kind){lastRequest={status:'queued',kind};return true;}
    if(!manual&&!available(actor))return false;
    const matching=sites.filter(site=>site.kind===kind);
    if(!matching.length)return fail('no-site');
    const free=matching.filter(site=>!reservations.has(site.id));
    let site=free.sort((a,b)=>distance(origin(actor),a.center)-distance(origin(actor),b.center)).find(site=>reachable(actor,site.points[0]));
    if(!site) {
      if(manual&&kind==='fishing'&&!free.length) {
        for(const record of [...reservations.values()])if(record.actors.includes(actor))end(record);
        queued=queued.filter(job=>job.id!==actor.id);
        actor.leisureQueue=kind;actor.manualLeisure=true;
        queued.push({id:actor.id,kind});lastRequest={status:'queued',kind};return true;
      }
      return fail(free.length?'unreachable':'busy');
    }
    const participants=[actor];
    if(['picnic','gift','rainwalk'].includes(kind)) {
      const candidates=actors.filter(other=>other!==actor&&available(other)&&(kind!=='rainwalk'||manual||other.node===actor.node&&distance(actor,other)<6)&&reachable(other,kind==='gift'?other:site.points[1]));
      const other=initial?weightedResident(candidates,kind,random):
        candidates.sort((a,b)=>distance(a,site.center)-distance(b,site.center))[0];
      if(!other)return fail('no-friend');participants.push(other);
    }
    if(!initial&&kind==='photo'&&site.points.length>1&&random()<.4&&
        (manual||[...reservations.values()].reduce((sum,record)=>sum+record.actors.length,0)<2)) {
      const friend=actors.filter(other=>other!==actor&&other.node===actor.node&&available(other)&&distance(actor,other)<6&&reachable(other,site.points[1]))
        .sort((a,b)=>distance(a,actor)-distance(b,actor))[0];
      if(friend)participants.push(friend);
    }
    if(kind==='gift'){
      const friend=participants[1],avoid=actors.filter(other=>!participants.includes(other));
      const meeting=navigation.nearest({x:friend.x+1.8,z:friend.z},friend.node,[...avoid,friend]);
      if(!meeting||distance(meeting,friend)>2.8||!reachable(actor,meeting)||!navigation.clearSegment(meeting,friend))return fail('unreachable');
      site={...site,meeting,meetingNode:friend.node,points:[site.points[0],{x:friend.x,z:friend.z}]};
    }
    if(!participants.every((actor,i)=>reachable(actor,site.points[i])))return fail('unreachable');
    if(initial&&site.points.slice(0,participants.length).some(point=>actors.some(other=>other.target?.leisureSite&&!participants.includes(other)&&distance(point,other)<1.25)))return false;
    for(const record of [...reservations.values()])if(record.actors.includes(actor))end(record);
    actor.leisureQueue=null;queued=queued.filter(job=>job.id!==actor.id);
    const record={site,actors:participants,time:0,waiting:0,started:false,cycles:0,manual,phase:kind==='gift'?'picking':'meeting'};reservations.set(site.id,record);
    participants.forEach((actor,i)=>{
      actor.leisureTime=0;actor.leisureResult=null;
      if(kind==='gift'){actor.giftKind=i?participants[0].giftKind:['flower','shell','leaf'][Math.min(2,Math.floor(random()*3))];actor.giftPhase=i?'waiting':'picking';}
      if(kind==='rainwalk')actor.umbrellaPartner=participants[1-i].id;
      start(actor,{node:kind==='gift'&&i===1?site.meetingNode:site.node,point:site.points[i],state:expected(record,i),leisureSite:site.id,leisureKind:kind,
        heading:(kind==='picnic'||kind==='photo'&&participants.length===2)?Math.atan2(site.points[1-i].x-site.points[i].x,site.points[1-i].z-site.points[i].z):site.heading},manual,initial);
    });
    if(initial) {
      const phases={fishing:[2,8],picnic:[4,18],garden:[6,17],photo:[.5,3.5]},[from,to]=phases[kind]||[1,3];
      record.time=from+random()*(to-from);record.started=true;
      participants.forEach(actor=>{actor.leisureTime=record.time;});
      if(kind==='garden')site.growth=record.time/24;
    }
    lastRequest={status:'started',kind};return true;
  }
  function initialize() {
    if(initialized||elapsed!==0||!automatic)return;
    initialized=true;initializing=true;
    const order=kinds.filter(kind=>kind!=='gift');
    for(let i=order.length-1;i>0;i--){const j=Math.min(i,Math.floor(random()*(i+1)));[order[i],order[j]]=[order[j],order[i]];}
    const limit=Math.min(3,Math.max(1,actors.length-2));
    for(const kind of order) {
      const active=[...reservations.values()].reduce((sum,record)=>sum+record.actors.length,0);
      if(active+(kind==='picnic'?2:1)>limit)continue;
      const candidates=actors.filter(available);
      if(!candidates.length)break;
      const actor=weightedResident(candidates,kind,random);
      request(actor.id,kind,false,true);
    }
    initializing=false;
  }
  function cancelPhoto() {
    if(!photo||!['gathering','posing'].includes(photo.phase))return false;
    for(const actor of actors)if(actor.target?.leisureSite==='group-photo')finish(actor);
    photo={...photo,phase:'cancelled'};return true;
  }
  function groupPhoto() {
    const site=sites.find(site=>site.kind==='photo');
    if(!site||actors.length>site.points.length||actors.some(actor=>isPaused(actor.id)))return false;
    let assignment=null,best=Infinity;
    const assign=(index,remaining,points,cost)=>{
      if(cost>=best)return;
      if(index===actors.length){best=cost;assignment=points;return;}
      remaining.forEach((point,i)=>assign(index+1,remaining.filter((_,j)=>i!==j),[...points,point],cost+distance(actors[index],point)));
    };
    assign(0,site.points,[],0);
    if(!assignment||actors.some((actor,i)=>!reachable(actor,assignment[i])))return false;
    reservations.clear();queued=[];actors.forEach(actor=>{actor.leisureQueue=null;});
    photo={phase:'gathering',time:0,waiting:0,center:site.center};
    actors.forEach((actor,i)=>{
      actor.leisureTime=0;
      start(actor,{node:site.node,point:assignment[i],state:'photo-posing',leisureSite:'group-photo',leisureKind:'group',heading:0},true);
    });
    return true;
  }
  function update(dt) {
    elapsed+=dt;
    for(const record of [...reservations.values()]) {
      if(['rainwalk','shelter'].includes(record.site.kind)&&weather.state!=='rainy'||record.site.kind==='shade'&&weather.state==='rainy'){end(record);continue;}
      if(record.actors.some(actor=>actor.target?.leisureSite!==record.site.id)){end(record);continue;}
      if(record.actors.some(actor=>isPaused(actor.id)))continue;
      if(!record.actors.every((actor,i)=>actor.state===expected(record,i))) {
        record.waiting+=dt;if(record.waiting>180)end(record);continue;
      }
      record.started=true;record.time+=dt;
      for(const actor of record.actors) {
        actor.leisureTime=record.time;actor.heading=actor.target.heading;actor.yOffset=0;
        if(record.site.kind==='fishing'&&record.time>=12+record.cycles*14) {
          actor.leisureResult=['fish','seaweed','boot'][(record.cycles+Math.floor(random()*3))%3];record.cycles++;
          actor.catchCount=(actor.catchCount||0)+1;
        }
        if(record.site.kind==='photo')actor.photosTaken=Math.floor(record.time/6);
      }
      if(record.site.kind==='garden')record.site.growth=Math.max(record.site.growth,Math.min(1,record.time/24));
      const kind=record.site.kind;
      if(kind==='gift'){
        const [giver,receiver]=record.actors;
        if(record.phase==='picking'&&record.time>=3){
          record.phase='delivering';record.time=0;record.waiting=0;giver.giftPhase='carrying';
          send(record,giver,record.site.meeting,'gift-giving',record.site.meetingNode);
          receiver.heading=Math.atan2(record.site.meeting.x-receiver.x,record.site.meeting.z-receiver.z);receiver.target.heading=receiver.heading;
          giver.target.heading=Math.atan2(receiver.x-record.site.meeting.x,receiver.z-record.site.meeting.z);
        }else if(record.phase==='delivering'&&record.time>=1.5&&!record.delivered){
          record.delivered=true;giver.giftPhase='given';receiver.giftPhase='receiving';receiver.giftKind=giver.giftKind;
          receiver.receivedGifts=[...(receiver.receivedGifts||[]),giver.giftKind].slice(-12);
        }else if(record.phase==='delivering'&&record.time>=4){receiver.giftPhase='stored';end(record);}
        continue;
      }
      if(kind==='rainwalk'&&record.phase==='meeting'){
        record.phase='walking';record.time=0;record.waiting=0;
        record.actors.forEach((actor,i)=>send(record,actor,record.site.ends[i],'sharing-umbrella'));
        continue;
      }
      if((kind==='ball'||kind==='wildlife'&&record.actors[0].type==='rabbit')&&record.time>3+record.cycles*4&&record.cycles<2&&record.site.points.length>1){
        record.cycles++;const actor=record.actors[0];actor.ballFrom=actor.ballGoal??1;actor.ballGoal=record.cycles%2;actor.ballRolledAt=elapsed;
        send(record,actor,record.site.points[actor.ballGoal],states[kind]);
      }
      if(record.time>=durations[kind])end(record);
    }
    // Manual requests get the next free spot before the automatic scheduler.
    for(const job of [...queued]) {
      const actor=actors[job.id];
      if(!actor||actor.leisureQueue!==job.kind){queued=queued.filter(item=>item!==job);continue;}
      if(isPaused(actor.id)||!sites.some(site=>site.kind===job.kind&&!reservations.has(site.id)))continue;
      actor.leisureQueue=null;
      if(!request(actor.id,job.kind,true))actor.leisureQueue=job.kind;
    }
    if(photo&&['gathering','posing'].includes(photo.phase)&&!actors.some(actor=>isPaused(actor.id))) {
      photo.waiting+=dt;
      if(actors.some(actor=>actor.target?.leisureSite!=='group-photo')||photo.waiting>180)cancelPhoto();
      else if(actors.every(actor=>actor.state==='photo-posing')) {
        photo.phase='posing';photo.time+=dt;
        actors.forEach(actor=>{actor.leisureTime=photo.time;actor.heading=actor.target.heading;});
        if(photo.time>=3)photo.phase='ready';
      }
    }
    if(automatic&&weather.state==='rainy'&&elapsed>=nextAutomatic&&!photo?.phase?.match(/gathering|posing|ready/)){
      nextAutomatic=elapsed+8;
      const candidates=actors.filter(available);
      for(const actor of candidates){
        const nearby=candidates.some(other=>other!==actor&&other.node===actor.node&&distance(actor,other)<6);
        if(nearby&&request(actor.id,'rainwalk',false)||request(actor.id,'shelter',false))break;
      }
    }
    if(automatic&&weather.state!=='rainy'&&sites.length&&elapsed>=nextAutomatic&&!photo?.phase?.match(/gathering|posing|ready/)) {
      nextAutomatic=elapsed+16+random()*12;
      const active=[...reservations.values()].reduce((sum,record)=>sum+record.actors.length,0);
      for(let i=0;i<kinds.length;i++) {
        const index=(kindIndex+i)%kinds.length,kind=kinds[index],needed=['picnic','gift'].includes(kind)?2:1;
        if(active+needed>Math.min(3,actors.length))continue;
        const site=sites.find(site=>site.kind===kind);
        const candidate=site&&weightedResident(actors.filter(available),kind,random);
        if(candidate&&request(candidate.id,kind,false)){kindIndex=(index+1)%kinds.length;break;}
      }
    }
  }
  return {sites,request,initialize,groupPhoto,cancelPhoto,update,get photo(){return photo;},get lastRequest(){return lastRequest;},
    releasePhoto(){if(photo?.phase==='ready'){for(const actor of actors)if(actor.target?.leisureSite==='group-photo')finish(actor);photo={...photo,phase:'finished'};}},
    get active(){return [...reservations.values()].map(record=>({kind:record.site.kind,ids:record.actors.map(actor=>actor.id),started:record.started,time:record.time,phase:record.phase}));}};
}
