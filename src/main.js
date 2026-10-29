import "./style.css";
import { getUpcomingTodos, isInReminderWindow } from "./todo-reminders.js";
import { showIslandFallback } from "./world-fallback.js";

const icons = {
  leaf: '<path d="M19 4C9 2 3 7 5 14c2 6 11 5 14-10Z"/><path d="m5 20 9-11"/>',
  home: '<path d="m3 11 9-7 9 7M5 10v10h14V10M9 20v-7h6v7"/>',
  todo: '<rect x="5" y="5" width="14" height="16" rx="3"/><path d="M9 3h6v4H9zM9 12l2 2 4-4M9 18h6"/>',
  note: '<rect x="4" y="3" width="16" height="18" rx="3"/><path d="M8 3v18M11 9h5M11 13h5M11 17h3"/>',
  friends:
    '<path d="M5 11C0 1 9 1 9 8M15 8c0-7 9-7 4 3"/><path d="M4 14c0-9 16-9 16 0 0 9-16 9-16 0Z"/><path d="M9 14h.01M15 14h.01M11 17h2"/>',
  memories:
    '<rect x="3" y="5" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="2"/><path d="m4 18 5-4 4 3 4-5 4 5"/>',
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  calendar:
    '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4m10-4v4M3 11h18m-13 4h.01M12 15h.01M16 15h.01"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M5 19l1-1M18 6l1-1"/>',
  volume: '<path d="m4 9 4 0 5-4v14l-5-4H4zM17 8c3 2 3 6 0 8"/>',
  muted: '<path d="m4 9 4 0 5-4v14l-5-4H4zM17 9l5 6m-5 0 5-6"/>',
  reset: '<path d="M4 10a8 8 0 1 1 1 8M4 4v6h6"/>',
  chevron: '<path d="m9 5 7 7-7 7"/>',
  heart: '<path d="M12 20S2 14 3 8c1-5 7-5 9-1 2-4 8-4 9 1 1 6-9 12-9 12Z"/>',
  upload: '<path d="M12 16V3m-5 5 5-5 5 5M4 15v6h16v-6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  trash: '<path d="M4 6h16M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7m4-7v7"/>',
  message:
    '<path d="M20 15a3 3 0 0 1-3 3H9l-6 3V6a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3z"/>',
  pin: '<path d="M12 22s8-9 8-14A8 8 0 0 0 4 8c0 5 8 14 8 14Z"/><circle cx="12" cy="8" r="3"/>',
};
export const icon = (name, cls = "") =>
  `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.leaf}</svg>`;
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const dateString = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const today = dateString(new Date());
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
  ],
};
let state;
try {
  state =
    JSON.parse(localStorage.getItem("little-island-v1")) ||
    structuredClone(initial);
} catch {
  state = structuredClone(initial);
}
const save = () => {
  try {
    localStorage.setItem("little-island-v1", JSON.stringify(state));
    return true;
  } catch {
    toast("儲存空間不足，請刪除一些照片後再試一次。");
    return false;
  }
};
const islands = [
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
let active = null,
  todoView = "list",
  todoScope = "recent",
  editingTodoId = null,
  calendarDate = new Date(),
  world;

document.querySelector("#app").innerHTML = `
<header class="site-header"><a class="brand" href="#" aria-label="我們的小島首頁"><span class="brand-mark">${icon("home")}<i></i></span><span>我們的小島<small>OUR LITTLE ISLAND</small></span></a><nav aria-label="主要選單"><button class="nav-item selected" data-home>小島首頁</button><button class="nav-item" data-open="todo">日常小事</button><button class="nav-item" data-open="memories">回憶收藏</button></nav><button class="resident-pill" data-open="friends"><span class="avatar">ʕ•ᴥ•ʔ</span><span>小島居民</span><span class="online-dot"></span></button></header>
<main><section class="hero" aria-labelledby="hero-title"><div class="hero-copy"><div class="eyebrow"><span></span> A FAMILY WORLD, PIECE BY PIECE</div><h1 id="hero-title">把日子過成<br>我們喜歡的<span class="handwritten">模樣<svg viewBox="0 0 160 15"><path d="M2 10Q75-2 155 8M12 14Q80 4 141 11"/></svg></span><span class="title-dot">。</span></h1><p class="hero-description">在這座小小的島上，<br>一起記住日常、分享心事，收藏每一個美好。<br>因為有你，平凡也會閃閃發光。</p><button class="primary-button" id="explore">來小島走走 ${icon("arrow")}</button><div class="island-signoff"><span class="little-flower">✿</span><span>不必趕路，這裡一直為你留著位置。</span></div></div>
<div class="world-wrap"><div class="board-legend" aria-label="桌遊地形圖例"><span data-terrain="forest">森林</span><span data-terrain="grain">麥田</span><span data-terrain="pasture">牧場</span><span data-terrain="mountain">山地</span><span data-terrain="clay">紅土</span></div><div id="resident-activity" class="resident-activity" role="status">娃娃們正在準備出門…</div><div class="weather-pill">${icon("sun")}<span>今日島上，晴時有你</span><span class="weather-separator"></span><span>24°</span></div><div id="world" aria-label="可拖曳旋轉、縮放與點選的 3D 家族小島"><canvas id="world-canvas"></canvas><div id="world-labels"></div><button id="todo-reminder" class="todo-reminder" hidden><svg class="reminder-balloon-art" viewBox="0 0 90 125" aria-hidden="true"><path d="M21 65 34 103m35-38-13 38" stroke="#ad916b" stroke-width="2"/><path d="M33 101h25l-3 16H36Z" fill="#bc9c70"/><ellipse cx="45" cy="39" rx="34" ry="39" fill="#ebc469"/><path d="M45 0c-24 21-24 56 0 78M45 0c24 21 24 56 0 78" fill="#f7df95"/><text x="45" y="53" text-anchor="middle" fill="#957744" font-size="39" font-weight="bold">!</text></svg><span class="reminder-caption"><span class="reminder-exclamation">!</span><span><strong><span id="reminder-count">0</span> 件小事等你</strong><small>今天與 24 小時內</small></span><span>↗</span></span></button><div class="world-loading"><span>✿</span> 正在準備你的小島…</div></div><div class="map-caption"><span class="live-dot"></span> OUR LITTLE WORLD <span class="caption-line"></span> EST. 2026</div><div class="map-controls"><button id="map-expand" class="map-expand-button" aria-pressed="false">展開地圖 ↗</button><span class="control-divider"></span><button id="map-pan" class="map-expand-button" aria-pressed="false">移動地圖</button><button id="watch-residents" class="map-expand-button" aria-label="看看娃娃">看看娃娃 ♡</button><button id="sound" class="round-button" aria-label="開啟小島環境音" title="環境音">${icon("muted")}</button><span class="control-divider"></span><button id="zoom-out" class="round-button text-icon" aria-label="縮小">−</button><button id="zoom-in" class="round-button text-icon" aria-label="放大">+</button><button id="reset" class="round-button" aria-label="重設視角" title="重設視角">${icon("reset")}</button></div><div class="map-help">${icon("pin")} 點選小島，發現我們的日常 <span>・ 拖曳旋轉 / 切換移動地圖平移 / 滾輪或雙指縮放</span></div></div></section>
<section class="islands-section" aria-labelledby="islands-heading"><div class="section-top"><div><span class="section-kicker">LIFE HAPPENS HERE</span><h2 id="islands-heading">小島上的每一天 <span>Daily life on our island</span></h2></div><span class="section-note">四座小島，裝著我們的大大小小 ${icon("heart")}</span></div><div class="island-grid">${islands.map((i) => `<button class="island-card ${i.color}" data-open="${i.id}"><div class="card-top"><span class="card-icon">${icon(i.id)}</span><span class="card-number">${i.num}</span></div><span class="card-en">${i.en}</span><h3>${i.title}</h3><p>${i.desc}</p><div class="card-bottom"><span id="count-${i.id}"></span><span class="card-arrow">${icon("arrow")}</span></div></button>`).join("")}</div></section>
<section class="today-strip"><span class="strip-flower">✿</span><div><span class="section-kicker">A NOTE FOR TODAY</span><p>生活不一定每天都很特別，但每天都可以有一點可愛。</p></div><span class="strip-signature">with love, from our island ♡</span></section></main>
<footer><span>${icon("leaf")} 我們的小島 <span class="footer-dot">·</span> 每一天，都好好在一起。</span><span>A little home for our favorite people. <span class="footer-heart">♡</span></span></footer>
<div class="modal-overlay" id="modal" hidden><section class="island-panel" role="dialog" aria-modal="true" aria-labelledby="panel-title" tabindex="-1"><header class="panel-header"><div><span class="section-kicker" id="panel-kicker"></span><h2 id="panel-title"></h2><p id="panel-subtitle"></p></div><button class="round-button close-button" id="close-panel" aria-label="關閉">${icon("close")}</button></header><div id="panel-content"></div><div class="panel-footer">${icon("leaf")} 小小的日常，好好收藏 <span>資料儲存在這個瀏覽器</span></div></section></div><div class="toast" id="toast" role="status"></div>`;

function counts() {
  updateTodoReminder();
  const pending = state.todos.filter((t) => !t.done).length;
  document.querySelector("#count-todo").textContent =
    `${pending} 件小事，等我們完成`;
  document.querySelector("#count-note").textContent =
    `${state.notes.length} 則暖心記事`;
  document.querySelector("#count-friends").textContent =
    `${state.residents.length} 位可愛居民 ・ 在小島上生活`;
  document.querySelector("#count-memories").textContent = state.memories.length
    ? `${state.memories.length} 個閃閃發光的片刻`
    : "一起收藏第一個美好";
}
let toastTimer;
function toast(msg) {
  const el = document.querySelector("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 3500);
}
let returnFocus;
function openPanel(id, options = {}) {
  const island = islands.find((i) => i.id === id);
  if (!island) return;
  returnFocus = document.activeElement;
  active = id;
  if (id === "todo") {
    todoView = "list";
    todoScope = options.upcoming ? "upcoming" : "recent";
    editingTodoId = null;
  }
  document.querySelector("#panel-kicker").textContent = island.en;
  document.querySelector("#panel-title").innerHTML =
    `<span class="panel-icon ${island.color}">${icon(id)}</span>${island.title}`;
  document.querySelector("#panel-subtitle").textContent = island.tag;
  document.querySelector("#modal").hidden = false;
  document.body.classList.add("modal-open");
  renderPanel();
  document.querySelector(".island-panel").focus();
  world?.focusIsland(id);
}
function closePanel() {
  document.querySelector("#modal").hidden = true;
  document.body.classList.remove("modal-open");
  active = null;
  editingTodoId = null;
  if (returnFocus && !returnFocus.hidden) returnFocus.focus();
  else document.querySelector(".label-todo")?.focus();
}
function renderPanel() {
  if (active === "todo") renderTodos();
  if (active === "note") renderNotes();
  if (active === "friends") renderFriends();
  if (active === "memories") renderMemories();
  counts();
}
function prettyDate(d) {
  return new Date(d + "T12:00:00").toLocaleDateString("zh-TW", {
    month: "long",
    day: "numeric",
  });
}
function updateTodoReminder() {
  const count = getUpcomingTodos(state.todos).length;
  const button = document.querySelector("#todo-reminder");
  if (button) {
    button.hidden = count === 0;
    button.setAttribute(
      "aria-label",
      `今天與24小時內有 ${count} 件未完成待辦，開啟提醒`,
    );
    document.querySelector("#reminder-count").textContent = count;
  }
  world?.setTodoReminder?.(count);
}
function todoEditor(todo) {
  return `<form id="todo-edit-form" class="todo-edit-row"><span class="section-kicker">EDIT YOUR LITTLE PLAN</span><label for="edit-todo-text">編輯待辦內容</label><textarea id="edit-todo-text" required maxlength="160" rows="2">${esc(todo.text)}</textarea><div class="todo-edit-fields"><label for="edit-todo-date">預定日期<input id="edit-todo-date" type="date" value="${esc(todo.date)}" required></label><label for="edit-todo-time">時間（選填）<input id="edit-todo-time" type="time" value="${esc(todo.time || "")}"></label></div><div class="todo-edit-actions"><button type="button" id="cancel-todo-edit" class="secondary-button">取消編輯</button><button type="submit" class="primary-button">${icon("check")}儲存修改</button></div></form>`;
}
function renderTodos() {
  // Include today and the previous 13 calendar days in the browser's timezone.
  const now = Date.now();
  const since = new Date(now);
  since.setHours(0, 0, 0, 0);
  since.setDate(since.getDate() - 13);
  const sorted = state.todos
    .filter((t) =>
      todoScope === "upcoming"
        ? isInReminderWindow(t, new Date(now))
        : t.created >= since.getTime() && t.created <= now,
    )
    .sort((a, b) => b.created - a.created);
  const calendarMonth = dateString(
    new Date(calendarDate.getFullYear(), calendarDate.getMonth(), 1),
  ).slice(0, 7);
  const visible =
    todoView === "list"
      ? sorted
      : state.todos.filter((todo) => todo.date.startsWith(calendarMonth));
  const pending = visible.filter((t) => !t.done).length;
  const completed = visible.filter((t) => t.done);
  document.querySelector("#panel-content").innerHTML =
    `<div class="panel-toolbar"><span class="small-muted">${pending ? "還有 " + pending + " 件小事，慢慢來就好" : "今天的你，已經做得很好了 ✨"}</span><div class="view-switch"><button data-view="list" class="${todoView === "list" ? "active" : ""}">清單</button><button data-view="calendar" class="${todoView === "calendar" ? "active" : ""}">${icon("calendar")}日曆</button></div></div><div class="todo-scope-switch"><button data-todo-scope="recent" class="${todoScope === "recent" ? "active" : ""}">近兩週新增</button><button data-todo-scope="upcoming" class="${todoScope === "upcoming" ? "active" : ""}">今日與24小時內（${getUpcomingTodos(state.todos).length}）</button></div><form id="todo-form" class="add-todo"><label class="sr-only" for="todo-text">待辦事項</label><input id="todo-text" placeholder="有什麼想一起做的小事？" required maxlength="160"><label class="sr-only" for="todo-date">預定日期</label><input id="todo-date" type="date" value="${today}" required><label class="todo-time-field" for="todo-time"><span>時間（選填）</span><input id="todo-time" type="time" aria-label="待辦時間（選填）"></label><button class="primary-button" type="submit">${icon("plus")}<span>新增</span></button></form><div class="todo-list-tools"><p class="todo-range small-muted">${todoView === "list" ? (todoScope === "upcoming" ? "今天與24小時內的待辦 · 點選文字可編輯" : "近兩週新增的待辦 · 點選文字可編輯") : "依預定日期查看所有待辦"}</p><button id="delete-completed" class="delete-completed" ${completed.length ? "" : "disabled"}>${icon("trash")}刪除已完成（${completed.length}）</button></div><div id="todo-list">${todoView === "calendar" && editingTodoId ? todoEditor(state.todos.find((t) => t.id === editingTodoId)) : ""}${todoView === "list" ? `<div class="todo-list">${sorted.length ? sorted.map(todoRow).join("") : `<div class="empty-state">✿<h3>${todoScope === "upcoming" ? "今天可以慢慢來，暫時沒有待辦" : "近兩週還沒有新增待辦"}</h3><p>新增想一起做的小事，或切換日曆查看其他日期。</p></div>`}</div>` : calendar()}</div>`;
  document.querySelectorAll("[data-edit-todo]").forEach(
    (button) =>
      (button.onclick = () => {
        editingTodoId = button.dataset.editTodo;
        renderPanel();
        document.querySelector("#edit-todo-text").focus();
      }),
  );
  document.querySelectorAll("[data-todo-scope]").forEach(
    (button) =>
      (button.onclick = () => {
        todoScope = button.dataset.todoScope;
        todoView = "list";
        editingTodoId = null;
        renderPanel();
      }),
  );
  const editor = document.querySelector("#todo-edit-form");
  if (editor) {
    document.querySelector("#cancel-todo-edit").onclick = () => {
      editingTodoId = null;
      renderPanel();
      document.querySelector(".island-panel").focus();
    };
    editor.onsubmit = (event) => {
      event.preventDefault();
      const text = document.querySelector("#edit-todo-text").value.trim();
      if (!text) return;
      const index = state.todos.findIndex((todo) => todo.id === editingTodoId);
      if (index < 0) return;
      const old = state.todos[index];
      state.todos[index] = {
        ...old,
        text,
        date: document.querySelector("#edit-todo-date").value,
        time: document.querySelector("#edit-todo-time").value,
      };
      if (!save()) {
        state.todos[index] = old;
        return;
      }
      editingTodoId = null;
      renderPanel();
      document.querySelector(".island-panel").focus();
      toast("待辦已更新，提醒熱氣球也會一起調整。");
    };
  }
  document.querySelector("#todo-form").onsubmit = (e) => {
    e.preventDefault();
    const text = document.querySelector("#todo-text").value.trim();
    if (!text) return;
    state.todos.push({
      id: crypto.randomUUID(),
      text,
      date: document.querySelector("#todo-date").value,
      time: document.querySelector("#todo-time").value,
      done: false,
      created: Date.now(),
    });
    save();
    renderPanel();
    toast("又多了一件值得期待的小事 ♡");
  };
  document.querySelector("#delete-completed").onclick = () => {
    if (
      !completed.length ||
      !confirm(`要刪除目前檢視中的 ${completed.length} 件已完成待辦嗎？`)
    )
      return;
    const ids = new Set(completed.map((todo) => todo.id));
    state.todos = state.todos.filter((todo) => !ids.has(todo.id));
    editingTodoId = null;
    save();
    renderPanel();
    toast(`已刪除 ${ids.size} 件已完成待辦。`);
  };
  document.querySelectorAll("[data-view]").forEach(
    (b) =>
      (b.onclick = () => {
        todoView = b.dataset.view;
        editingTodoId = null;
        renderPanel();
      }),
  );
  document.querySelectorAll("[data-month]").forEach(
    (b) =>
      (b.onclick = () => {
        calendarDate = new Date(
          calendarDate.getFullYear(),
          calendarDate.getMonth() + Number(b.dataset.month),
          1,
        );
        renderPanel();
      }),
  );
  document.querySelectorAll("[data-todo-check]").forEach(
    (b) =>
      (b.onchange = () => {
        state.todos.find((t) => t.id === b.dataset.todoCheck).done = b.checked;
        save();
        renderPanel();
      }),
  );
  document.querySelectorAll("[data-delete-todo]").forEach(
    (b) =>
      (b.onclick = () => {
        if (editingTodoId === b.dataset.deleteTodo) editingTodoId = null;
        state.todos = state.todos.filter((t) => t.id !== b.dataset.deleteTodo);
        save();
        renderPanel();
      }),
  );
}
function todoRow(t) {
  if (editingTodoId === t.id) return todoEditor(t);
  return `<div class="todo-row ${t.done ? "done" : ""}"><label class="todo-check"><input type="checkbox" data-todo-check="${t.id}" aria-label="完成 ${esc(t.text)}" ${t.done ? "checked" : ""}><span>${icon("check")}</span></label><button class="todo-text" data-edit-todo="${t.id}" aria-label="編輯 ${esc(t.text)}" title="點選編輯待辦">${esc(t.text)}<svg class="todo-edit-icon icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m4 16 12-12 4 4L8 20H4zM13 7l4 4"/></svg></button><span class="date-tag ${t.date < today && !t.done ? "overdue" : ""}">${t.date === today ? "今天" : prettyDate(t.date)}${t.time ? ` <time>${esc(t.time)}</time>` : ""}</span><button class="todo-delete" data-delete-todo="${t.id}" aria-label="刪除 ${esc(t.text)}">${icon("trash")}<span>刪除</span></button></div>`;
}
function calendar() {
  const y = calendarDate.getFullYear(),
    m = calendarDate.getMonth(),
    first = new Date(y, m, 1).getDay(),
    last = new Date(y, m + 1, 0).getDate();
  let cells = "";
  for (let i = 0; i < first; i++)
    cells += '<div class="calendar-day blank"></div>';
  for (let d = 1; d <= last; d++) {
    const ds = dateString(new Date(y, m, d));
    cells += `<div class="calendar-day ${ds === today ? "is-today" : ""}"><span>${d}</span>${state.todos
      .filter((t) => t.date === ds)
      .map(
        (t) =>
          `<div class="calendar-entry"><div class="calendar-task ${t.done ? "done" : ""}" title="${esc(t.text)}"><label class="calendar-check"><input type="checkbox" data-todo-check="${t.id}" aria-label="完成 ${esc(t.text)}" ${t.done ? "checked" : ""}></label><button class="calendar-task-text" data-edit-todo="${t.id}" aria-label="編輯 ${esc(t.text)}">${t.time ? `<time>${esc(t.time)}</time> ` : ""}${esc(t.text)}</button></div><button class="calendar-delete" data-delete-todo="${t.id}" aria-label="刪除 ${esc(t.text)}" title="刪除待辦">×</button></div>`,
      )
      .join("")}</div>`;
  }
  return `<div class="calendar-header"><button class="round-button" data-month="-1" aria-label="上一個月">‹</button><h3>${y} 年 ${m + 1} 月</h3><button class="round-button" data-month="1" aria-label="下一個月">›</button></div><div class="calendar-grid">${"日一二三四五六"
    .split("")
    .map((d) => `<div class="weekday">${d}</div>`)
    .join("")}${cells}</div>`;
}
function renderNotes() {
  document.querySelector("#panel-content").innerHTML =
    `<form id="note-form" class="paper-form"><input id="note-title" required maxlength="100" placeholder="幫這則記事取個名字" aria-label="記事標題"><textarea id="note-body" required maxlength="5000" placeholder="重要的事、小小的心情，或一句想說的話…" aria-label="記事內容" rows="3"></textarea><div class="form-bottom"><input id="note-author" maxlength="30" placeholder="你的暱稱（選填）" aria-label="記事作者"><button class="primary-button" type="submit">${icon("plus")}留下記事</button></div></form><div class="notes-list">${
      [...state.notes]
        .sort((a, b) => b.created - a.created)
        .map(
          (n) =>
            `<article class="note-paper"><div class="note-meta"><span>✿ ${esc(n.author)} · ${new Date(n.created).toLocaleDateString("zh-TW")}</span><button class="tiny-button" data-delete-note="${n.id}" aria-label="刪除記事 ${esc(n.title)}">${icon("trash")}</button></div><h3>${esc(n.title)}</h3><p class="note-body">${esc(n.body)}</p><div class="comment-section"><div class="comment-heading">${icon("message")} ${n.comments.length} 則溫暖回應</div>${n.comments.map((c) => `<div class="comment"><span class="comment-avatar">♡</span><div><strong>${esc(c.author)}</strong><p>${esc(c.text)}</p></div></div>`).join("")}<form class="comment-form" data-note="${n.id}"><input name="author" placeholder="暱稱" maxlength="30" aria-label="留言暱稱"><input name="comment" required maxlength="1000" placeholder="留一句暖暖的話…" aria-label="留言內容"><button class="round-button" aria-label="送出留言">${icon("arrow")}</button></form></div></article>`,
        )
        .join("") ||
      '<div class="empty-state">✎<h3>有些話，值得留下</h3><p>在上方新增第一則記事。</p></div>'
    }</div>`;
  document.querySelector("#note-form").onsubmit = (e) => {
    e.preventDefault();
    const title = document.querySelector("#note-title").value.trim(),
      body = document.querySelector("#note-body").value.trim();
    if (!title || !body) return;
    state.notes.push({
      id: crypto.randomUUID(),
      title,
      body,
      author: document.querySelector("#note-author").value.trim() || "小島居民",
      created: Date.now(),
      comments: [],
    });
    save();
    renderPanel();
    toast("你的心意，已經好好留下來了。");
  };
  document.querySelectorAll(".comment-form").forEach(
    (f) =>
      (f.onsubmit = (e) => {
        e.preventDefault();
        const text = f.elements.comment.value.trim();
        if (!text) return;
        state.notes
          .find((n) => n.id === f.dataset.note)
          .comments.push({
            id: crypto.randomUUID(),
            text,
            author: f.elements.author.value.trim() || "小島居民",
            created: Date.now(),
          });
        save();
        renderPanel();
        toast("送出一點溫暖 ♡");
      }),
  );
  document.querySelectorAll("[data-delete-note]").forEach(
    (b) =>
      (b.onclick = () => {
        if (!confirm("要刪除這則記事和底下的留言嗎？")) return;
        state.notes = state.notes.filter((n) => n.id !== b.dataset.deleteNote);
        save();
        renderPanel();
      }),
  );
}
function plushSVG(r) {
  const rabbit = r.type === "rabbit";
  return `<svg viewBox="0 0 140 160" role="img" aria-label="${esc(r.name)}"><ellipse cx="70" cy="146" rx="36" ry="7" fill="#000" opacity=".06"/><g fill="${r.color}" stroke="#756951" stroke-width="1.5">${rabbit ? '<ellipse cx="50" cy="33" rx="12" ry="29" transform="rotate(-10 50 33)"/><ellipse cx="90" cy="33" rx="12" ry="29" transform="rotate(10 90 33)"/>' : '<circle cx="38" cy="44" r="16"/><circle cx="102" cy="44" r="16"/>'}<ellipse cx="70" cy="115" rx="33" ry="31"/><ellipse cx="40" cy="110" rx="11" ry="19" transform="rotate(28 40 110)"/><ellipse cx="100" cy="110" rx="11" ry="19" transform="rotate(-28 100 110)"/><ellipse cx="52" cy="139" rx="13" ry="9"/><ellipse cx="88" cy="139" rx="13" ry="9"/><ellipse cx="70" cy="72" rx="43" ry="36"/></g><ellipse cx="70" cy="83" rx="18" ry="13" fill="#fff5e5"/><circle cx="54" cy="69" r="3" fill="#514735"/><circle cx="86" cy="69" r="3" fill="#514735"/><ellipse cx="70" cy="79" rx="4" ry="3" fill="#514735"/><path d="M70 82v5m-5-1q5 6 10 0" fill="none" stroke="#514735" stroke-width="1.5"/><ellipse cx="43" cy="81" rx="7" ry="4" fill="#e3a193" opacity=".7"/><ellipse cx="97" cy="81" rx="7" ry="4" fill="#e3a193" opacity=".7"/><path d="m53 105 17 8 17-8-3 18H56Z" fill="${rabbit ? "#dba89a" : "#7f9b77"}"/><circle cx="70" cy="117" r="3" fill="#f7e8b5"/></svg>`;
}
function renderFriends() {
  const activities = world?.getResidentActivities?.() || [];
  document.querySelector("#panel-content").innerHTML =
    `<div class="friends-intro"><span>☀</span><div><h3>今天，也一起悠閒地生活</h3><p>三位小夥伴會跨島散步、在公園盪鞦韆或一起玩耍。點選「打個招呼」，聽聽他們想說的話。</p></div></div><div class="residents">${state.residents.map((r, i) => `<article class="resident-card"><div class="resident-art resident-${i}">${plushSVG(r)}</div><span class="resident-status"><i></i> ${esc(activities[i]?.label || "在島上休息")}</span><h3>${esc(r.name)}</h3><p>${esc(r.role)}</p><button class="secondary-button" data-greet="${i}">打個招呼 ${icon("heart")}</button></article>`).join("")}</div><div class="soft-notice">${icon("heart")} 這裡的每一位居民，都在等你回家。</div>`;
  document.querySelectorAll("[data-greet]").forEach(
    (b) =>
      (b.onclick = () => {
        const i = Number(b.dataset.greet);
        toast(
          [
            "奶茶小熊：今天也辛苦了！要不要一起坐著發呆？ ☕",
            "棉花小兔：剛剛發現了一朵小花，送給你！ ✿",
            "抹茶小熊：散步的時候，記得抬頭看看天空喔 ♡",
          ][i],
        );
        world?.greet(i);
      }),
  );
}
function renderMemories() {
  document.querySelector("#panel-content").innerHTML =
    `<form id="memory-form" class="memory-form"><label class="photo-upload" for="memory-photo"><input id="memory-photo" type="file" accept="image/*" required><div id="photo-preview">${icon("upload")}<strong>選一張喜歡的照片</strong><span>點選上傳 · JPG、PNG、WebP · 最大 15 MB</span></div></label><input id="memory-title" required maxlength="100" placeholder="這個美好片刻，叫什麼名字？" aria-label="回憶標題"><textarea id="memory-caption" rows="2" maxlength="2000" placeholder="記下這一天，想留住的心情…" aria-label="回憶文字"></textarea><div class="form-bottom"><input id="memory-date" type="date" value="${today}" required aria-label="回憶日期"><button class="primary-button" type="submit">${icon("heart")}收藏這一刻</button></div></form><div class="memory-grid">${
      [...state.memories]
        .sort((a, b) => b.created - a.created)
        .map(
          (m) =>
            `<article class="polaroid"><button class="photo-open" data-photo="${m.id}" aria-label="放大照片：${esc(m.title)}"><img src="${m.image}" alt="${esc(m.title)}" loading="lazy"></button><div class="memory-meta"><span>${prettyDate(m.date)} · ${m.date.slice(0, 4)}</span><button class="tiny-button" data-delete-memory="${m.id}" aria-label="刪除回憶 ${esc(m.title)}">${icon("trash")}</button></div><h3>${esc(m.title)}</h3><p>${esc(m.caption)}</p></article>`,
        )
        .join("") ||
      '<div class="empty-state memory-empty"><span>▧</span><h3>我們的故事，從這一刻開始</h3><p>一頓好吃的飯、一場散步，或一張傻傻的合照。<br>那些小小的瞬間，都值得被收藏。</p></div>'
    }</div>`;
  let imageData = null;
  const input = document.querySelector("#memory-photo");
  input.onchange = async () => {
    const file = input.files[0];
    if (!file) return;
    if (file.size > 15 * 1024 * 1024) {
      toast("請選擇 15 MB 以內的照片。");
      input.value = "";
      return;
    }
    try {
      imageData = await compressImage(file);
      document.querySelector("#photo-preview").innerHTML =
        `<img src="${imageData}" alt="準備上傳的照片"><span class="replace-photo">點選更換照片</span>`;
    } catch {
      toast("無法讀取這張照片，請選擇 JPG、PNG 或 WebP。");
      input.value = "";
    }
  };
  document.querySelector("#memory-form").onsubmit = (e) => {
    e.preventDefault();
    if (!imageData) {
      toast("請先選擇照片，並等候處理完成。");
      return;
    }
    const title = document.querySelector("#memory-title").value.trim();
    if (!title) return;
    const memory = {
      id: crypto.randomUUID(),
      title,
      caption: document.querySelector("#memory-caption").value.trim(),
      date: document.querySelector("#memory-date").value,
      image: imageData,
      created: Date.now(),
    };
    state.memories.push(memory);
    if (!save()) {
      state.memories.pop();
      return;
    }
    renderPanel();
    toast("把這一刻，收藏成永遠。");
  };
  document.querySelectorAll("[data-delete-memory]").forEach(
    (b) =>
      (b.onclick = () => {
        if (!confirm("要刪除這張照片與回憶嗎？")) return;
        state.memories = state.memories.filter(
          (m) => m.id !== b.dataset.deleteMemory,
        );
        save();
        renderPanel();
      }),
  );
  document.querySelectorAll("[data-photo]").forEach(
    (b) =>
      (b.onclick = () => {
        const m = state.memories.find((m) => m.id === b.dataset.photo);
        const lightbox = document.createElement("div");
        lightbox.className = "lightbox";
        lightbox.setAttribute("role", "dialog");
        lightbox.setAttribute("aria-label", m.title);
        lightbox.innerHTML = `<button class="round-button" aria-label="關閉照片">${icon("close")}</button><img src="${m.image}" alt="${esc(m.title)}"><p>${esc(m.title)}</p>`;
        lightbox.onclick = () => lightbox.remove();
        document.body.append(lightbox);
        lightbox.querySelector("button").focus();
      }),
  );
}
async function compressImage(file) {
  const bitmap = await createImageBitmap(file);
  const ratio = Math.min(1, 1200 / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * ratio);
  canvas.height = Math.round(bitmap.height * ratio);
  canvas.getContext("2d").drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  return canvas.toDataURL("image/jpeg", 0.78);
}

document
  .querySelectorAll("[data-open]")
  .forEach((b) => (b.onclick = () => openPanel(b.dataset.open)));
document.querySelectorAll("[data-home]").forEach(
  (b) =>
    (b.onclick = () => {
      closePanel();
      window.scrollTo({ top: 0, behavior: "smooth" });
      world?.reset();
    }),
);
document.querySelector("#close-panel").onclick = closePanel;
document.querySelector("#modal").onclick = (e) => {
  if (e.target.id === "modal") closePanel();
};
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const lb = document.querySelector(".lightbox");
    if (lb) lb.remove();
    else if (active) closePanel();
    else setMapExpanded(false);
  }
  if (e.key === "Tab" && active && !document.querySelector(".lightbox")) {
    const els = [
      ...document
        .querySelector(".island-panel")
        .querySelectorAll('button,input,textarea,[tabindex="0"]'),
    ].filter((el) => !el.disabled);
    if (
      e.shiftKey &&
      (document.activeElement === els[0] ||
        document.activeElement === document.querySelector(".island-panel"))
    ) {
      e.preventDefault();
      els.at(-1)?.focus();
    } else if (!e.shiftKey && document.activeElement === els.at(-1)) {
      e.preventDefault();
      els[0]?.focus();
    }
  }
});
function setMapExpanded(expanded) {
  document
    .querySelector(".world-wrap")
    .classList.toggle("map-expanded", expanded);
  document.body.classList.toggle("map-open", expanded);
  const button = document.querySelector("#map-expand");
  button.setAttribute("aria-pressed", String(expanded));
  button.textContent = expanded ? "收起地圖 ↙" : "展開地圖 ↗";
  if (!expanded) button.focus();
}
document.querySelector("#map-expand").onclick = () =>
  setMapExpanded(
    !document.querySelector(".world-wrap").classList.contains("map-expanded"),
  );
document.querySelector("#watch-residents").onclick = () => {
  setMapExpanded(true);
  world?.watchResidents?.();
};
document.querySelector("#explore").onclick = () => {
  world?.tour();
  document
    .querySelector(".islands-section")
    .scrollIntoView({ behavior: "smooth", block: "nearest" });
  toast("歡迎回家！點選小島上的標籤，開始逛逛吧。");
};
counts();
document.documentElement.dataset.appReady = "true";

// Keep the journals usable even if the browser cannot load or render WebGL.
function useIllustratedMap() {
  world = undefined;
  const reminder = document.querySelector("#todo-reminder");
  showIslandFallback(document.querySelector("#world"), openPanel, icon);
  document.querySelector("#world").dataset.renderMode = "illustrated";
  document.querySelector("#world").append(reminder);
  reminder.style.removeProperty("transform");
  updateTodoReminder();
  document.querySelector("#resident-activity").textContent =
    "插畫模式 · 娃娃們在島上休息";
  for (const id of ["zoom-in", "zoom-out", "reset", "watch-residents", "map-pan"]) {
    document.getElementById(id).disabled = true;
  }
  document.querySelector(".map-help").textContent =
    "插畫模式 · 點選小島，繼續探索我們的日常";
}

async function loadWorld() {
  try {
    const { createWorld } = await import("./world.js");
    world = createWorld(document.querySelector("#world"), openPanel, icon, () =>
      openPanel("todo", { upcoming: true }),
    );
    updateTodoReminder();
    document.querySelector("#world-canvas").addEventListener(
      "webglcontextlost",
      (event) => {
        event.preventDefault();
        world?.dispose();
        useIllustratedMap();
      },
      { once: true },
    );
    document.querySelector("#zoom-in").onclick = () => world?.zoom(1.15);
    document.querySelector("#zoom-out").onclick = () => world?.zoom(1 / 1.15);
    document.querySelector("#map-pan").onclick = (event) => {
      const button = event.currentTarget;
      const enabled = button.getAttribute("aria-pressed") !== "true";
      button.setAttribute("aria-pressed", String(enabled));
      button.textContent = enabled ? "切換旋轉" : "移動地圖";
      world?.setPanMode(enabled);
    };
    document.querySelector("#reset").onclick = () => world?.reset();
  } catch (error) {
    console.warn("3D 小島暫時無法載入，改用插畫模式。", error);
    useIllustratedMap();
  }
}
document.querySelector("#todo-reminder").onclick = () =>
  openPanel("todo", { upcoming: true });
setInterval(updateTodoReminder, 60000);
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) updateTodoReminder();
});
loadWorld();
let audioCtx,
  soundNodes = [];
document.querySelector("#sound").onclick = async () => {
  if (audioCtx?.state === "running") {
    await audioCtx.suspend();
    document.querySelector("#sound").innerHTML = icon("muted");
    document
      .querySelector("#sound")
      .setAttribute("aria-label", "開啟小島環境音");
    return;
  }
  try {
    if (!audioCtx) {
      audioCtx = new AudioContext();
      const gain = audioCtx.createGain();
      gain.gain.value = 0.035;
      gain.connect(audioCtx.destination);
      [261.63, 329.63, 392, 523.25].forEach((f, i) => {
        const o = audioCtx.createOscillator(),
          g = audioCtx.createGain();
        o.type = "sine";
        o.frequency.value = f;
        g.gain.value = 0.12;
        o.connect(g);
        g.connect(gain);
        o.start();
        const l = audioCtx.createOscillator(),
          lg = audioCtx.createGain();
        l.frequency.value = 0.12 + i * 0.025;
        lg.gain.value = 0.08;
        l.connect(lg);
        lg.connect(g.gain);
        l.start();
        soundNodes.push(o, l);
      });
    }
    await audioCtx.resume();
    document.querySelector("#sound").innerHTML = icon("volume");
    document
      .querySelector("#sound")
      .setAttribute("aria-label", "關閉小島環境音");
    toast("把音量放輕，陪小島慢慢呼吸。");
  } catch {
    toast("這個瀏覽器暫時無法播放環境音。");
  }
};
