export const WEATHER_LABELS={sunny:'☀️ 晴天',cloudy:'☁️ 陰天',rainy:'🌧️ 下雨'};
const cycle=['sunny','cloudy','rainy','cloudy'];
export function createIslandWeather({automatic=true}={}){
  let index=0,elapsed=0,age=0,revision=0;
  return {
    get state(){return cycle[index];},get elapsed(){return elapsed;},get revision(){return revision;},
    set(state){if(!Object.hasOwn(WEATHER_LABELS,state))return false;index=cycle.indexOf(state);age=0;revision++;return true;},
    update(dt){if(!automatic)return;elapsed+=dt;age+=dt;const duration=cycle[index]==='cloudy'?16:100;
      if(age>=duration){age=0;index=(index+1)%cycle.length;revision++;}},
  };
}
