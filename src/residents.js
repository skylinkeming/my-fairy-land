export const PHOTO_BEAR = {
  id: "floral-bear",
  name: "熊熊",
  role: "穿著藍橘花紋的溫柔陪伴",
  color: "#b7b5a9",
  type: "floral-bear",
};

export const PHOTO_FROG = {
  id: "guagua", name: "呱呱", type: "frog", color: "#9fb9ae",
  role: "帶著小微笑，陪你慢慢過日子",
};

export const PHOTO_DINO = {
  id: "pink-dinosaur", name: "恐龍", type: "dinosaur", color: "#e78ba8",
  role: "背著紫色小背鰭，陪你探索每座島",
};

export const RESIDENT_GREETINGS = [
  "今天也辛苦了！要不要一起坐著發呆？ ☕",
  "剛剛發現了一朵小花，送給你！ ✿",
  "散步的時候，記得抬頭看看天空喔 ♡",
  "帶著身上的小花紋，陪你一起去散步 ♡",
  "呱！今天也陪你微笑，慢慢來就好 ♡",
  "帶著小尾巴出發！今天想去哪座島探險？ ♡",
];

export function chooseResidentGreeting(name, index, previous, random = Math.random) {
  const greetings = [
    `Hi！我是${name || '小島居民'} ♡`,
    '嗨～很高興見到你！',
    '哈囉！今天過得好嗎？',
    '嘿！要不要一起喝杯咖啡？ ☕',
    '你來啦！一起在島上散散步吧 ♡',
    '嗨！送你一個大大的微笑！',
    RESIDENT_GREETINGS[index] || '嗨！歡迎來小島玩 ♡',
  ].filter(greeting => greeting !== previous);
  return greetings[Math.min(greetings.length - 1, Math.floor(random() * greetings.length))];
}
