import { PHOTO_BEAR, PHOTO_FROG, PHOTO_DINO } from "./residents.js";
export const dateString = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
export const today = dateString(new Date());
const initial = {
  todos: [
    {
      id: "t1",
      text: "一起去市場，買晚餐的食材",
      date: today,
      done: false,
      created: Date.now(),
    },
    {
      id: "t2",
      text: "幫小熊洗個香香的澡",
      date: today,
      done: false,
      created: Date.now() - 86400000,
    },
    {
      id: "t3",
      text: "週末一起散步，找一家新的咖啡店",
      date: dateString(new Date(Date.now() + 86400000 * 3)),
      done: false,
      created: Date.now() - 86400000 * 2,
    },
  ],
  notes: [
    {
      id: "n1",
      title: "冰箱裡有留給你的布丁 🍮",
      body: "今天回家的時候，記得打開冰箱。\n最上面那一層，是特別留給你的甜甜小驚喜。",
      author: "島上的家人",
      created: Date.now(),
      comments: [
        {
          id: "c1",
          text: "收到！回家就吃，謝謝你 ♡",
          author: "小島居民",
          created: Date.now(),
        },
      ],
    },
  ],
  memories: [],
  residents: [
    {
      name: "奶茶小熊",
      role: "島上的慢活擔當",
      color: "#ba9770",
      type: "bear",
    },
    {
      name: "棉花小兔",
      role: "喜歡花，也喜歡你",
      color: "#f4e1d1",
      type: "rabbit",
    },
    {
      name: "抹茶小熊",
      role: "最會發現生活的小美好",
      color: "#a1b28a",
      type: "bear",
    },
    { ...PHOTO_BEAR },
    { ...PHOTO_FROG },
    { ...PHOTO_DINO },
  ],
};
export function loadHousehold() {
  let state;
  try {
    state =
      JSON.parse(localStorage.getItem("little-island-v1")) ||
      structuredClone(initial);
  } catch {
    state = structuredClone(initial);
  }
  // Add the new resident to existing households without resetting their journals.
  if (!Array.isArray(state.residents) || !state.residents.length)
    state.residents = structuredClone(initial.residents);
  else
    for (const resident of [PHOTO_BEAR, PHOTO_FROG, PHOTO_DINO]) {
      if (!state.residents.some((existing) => existing.type === resident.type))
        state.residents.push({ ...resident });
    }
  return state;
}
export const islands = [
  {
    id: "todo",
    en: "LITTLE PLANS",
    title: "待辦事項島",
    desc: "把想做的事，一件件變成日常。",
    color: "sage",
    tag: "每個小計畫，都值得期待",
    num: "01",
  },
  {
    id: "note",
    en: "WORDS TO KEEP",
    title: "記事本島",
    desc: "那些想說的話，留在這裡就好。",
    color: "peach",
    tag: "留一張紙條，傳遞一點溫暖",
    num: "02",
  },
  {
    id: "friends",
    en: "OUR LOVELY NEIGHBORS",
    title: "家人朋友島",
    desc: "有你們在的地方，就是家。",
    color: "yellow",
    tag: "認識住在小島上的可愛居民",
    num: "03",
  },
  {
    id: "memories",
    en: "MOMENTS IN BLOOM",
    title: "美好回憶島",
    desc: "把平凡的閃光，收藏成永遠。",
    color: "lavender",
    tag: "讓每一個好日子，都有跡可循",
    num: "04",
  },
];
