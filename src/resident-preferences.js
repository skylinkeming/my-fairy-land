export const DEFAULT_RESIDENT_TYPES=['bear','rabbit','bear','floral-bear','frog','dinosaur'];
const preferences={bear:{picnic:7},'floral-bear':{picnic:7,gift:3},rabbit:{garden:8,wildlife:4},frog:{pond:9,wildlife:4},dinosaur:{ball:9}};
export const PREFERENCE_LABELS={bear:'偏愛野餐，也會探索其他活動','floral-bear':'偏愛野餐與送小禮物',rabbit:'偏愛花園與追蝴蝶',frog:'偏愛池塘與觀察小動物',dinosaur:'偏愛追球，也會嘗試其他活動'};
export function activityWeight(actor,kind){return preferences[actor.type]?.[kind]||1;}
export function weightedResident(actors,kind,random=Math.random){
  const total=actors.reduce((sum,actor)=>sum+activityWeight(actor,kind),0);let choice=random()*total;
  for(const actor of actors){choice-=activityWeight(actor,kind);if(choice<0)return actor;}
  return actors.at(-1);
}
