import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".map-label")).toHaveCount(4, { timeout: 15000 });
});

test("3D map, zoom, rotation, and island navigation work", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await expect(page.locator(".world-loading")).toHaveCount(0);
  await page.getByRole("button", { name: "放大", exact: true }).click();
  await page.getByRole("button", { name: "縮小", exact: true }).click();
  const canvas = page.locator("#world-canvas");
  const r = await canvas.boundingBox();
  await page.mouse.move(r.x + r.width * 0.5, r.y + r.height * 0.65);
  await page.mouse.down();
  await page.mouse.move(r.x + r.width * 0.6, r.y + r.height * 0.65, {
    steps: 6,
  });
  await page.mouse.up();
  await page.getByRole("button", { name: "重設視角" }).click();
  await page.locator(".label-friends").click();
  await expect(page.locator("#panel-title")).toHaveText("家人朋友島");
  await expect(page.locator(".resident-card")).toHaveCount(6);
  await page.getByRole("button", { name: "打個招呼" }).first().click();
  await expect(page.locator("#toast")).toContainText("奶茶小熊");
  await page.keyboard.press("Escape");
  await expect(page.locator("#modal")).toBeHidden();
  expect(errors).toEqual([]);
});

test("todos are newest first, completable, on the calendar, and persistent", async ({
  page,
}) => {
  await page.locator('.island-card[data-open="todo"]').click();
  await page.locator("#todo-text").fill("測試一起買牛奶");
  await page.locator("#todo-date").fill("2026-10-28");
  await page
    .locator("#todo-form")
    .getByRole("button", { name: "新增" })
    .click();
  await expect(page.locator(".todo-row").first()).toContainText(
    "測試一起買牛奶",
  );
  await page.locator(".todo-row").first().getByRole("checkbox").check();
  await expect(page.locator(".todo-row").first()).toHaveClass(/done/);
  await page.getByRole("button", { name: "日曆", exact: true }).click();
  await expect(page.locator(".calendar-grid")).toBeVisible();
  await page.getByRole("button", { name: "下一個月" }).click();
  await page.getByRole("button", { name: "上一個月" }).click();
  await page.reload();
  await page.locator('.island-card[data-open="todo"]').click();
  await expect(page.locator(".todo-row").first()).toContainText(
    "測試一起買牛奶",
  );
  await expect(
    page.locator(".todo-row").first().getByRole("checkbox"),
  ).toBeChecked();
  await page.getByRole("button", { name: "刪除 測試一起買牛奶" }).click();
  await expect(
    page.locator(".todo-row").filter({ hasText: "測試一起買牛奶" }),
  ).toHaveCount(0);
});

test("notes, escaped content, comments, and confirmed deletion", async ({
  page,
}) => {
  await page.locator('.island-card[data-open="note"]').click();
  await page.locator("#note-title").fill("家庭記事 <script>");
  await page.locator("#note-body").fill("記得澆花，還有一起吃晚餐。");
  await page.locator("#note-author").fill("家人甲");
  await page.getByRole("button", { name: "留下記事" }).click();
  let note = page.locator(".note-paper").first();
  await expect(note.locator("h3")).toHaveText("家庭記事 <script>");
  await note.getByRole("textbox", { name: "留言暱稱" }).fill("家人乙");
  await note.getByRole("textbox", { name: "留言內容" }).fill("好，一起吃飯！");
  await note.getByRole("button", { name: "送出留言" }).click();
  await expect(page.locator(".note-paper").first()).toContainText(
    "好，一起吃飯！",
  );
  await page.reload();
  await page.locator('.island-card[data-open="note"]').click();
  await expect(page.locator(".note-paper").first()).toContainText(
    "好，一起吃飯！",
  );
  page.once("dialog", (dialog) => dialog.accept());
  await page
    .getByRole("button", { name: "刪除記事 家庭記事 <script>" })
    .click();
  await expect(
    page.locator(".note-paper").filter({ hasText: "家庭記事 <script>" }),
  ).toHaveCount(0);
});

test("photo and text upload, lightbox, persistence and deletion", async ({
  page,
}) => {
  await page.locator('.island-card[data-open="memories"]').click();
  const image = await page.evaluate(() => {
    const c = document.createElement("canvas");
    c.width = 100;
    c.height = 80;
    const x = c.getContext("2d");
    x.fillStyle = "#94ad7c";
    x.fillRect(0, 0, 100, 80);
    return c.toDataURL("image/png").split(",")[1];
  });
  await page.locator("#memory-photo").setInputFiles({
    name: "family.png",
    mimeType: "image/png",
    buffer: Buffer.from(image, "base64"),
  });
  await expect(page.locator("#photo-preview img")).toBeVisible();
  await page.locator("#memory-title").fill("一起去野餐");
  await page.locator("#memory-caption").fill("有陽光，也有你們。");
  await page.getByRole("button", { name: "收藏這一刻" }).click();
  await expect(page.locator(".polaroid")).toContainText("一起去野餐");
  await page.getByRole("button", { name: "放大照片：一起去野餐" }).click();
  await expect(page.locator(".lightbox img")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator("#modal")).toBeVisible();
  await page.reload();
  await page.locator('.island-card[data-open="memories"]').click();
  await expect(page.locator(".polaroid")).toContainText("有陽光，也有你們。");
  page.once("dialog", (dialog) => dialog.accept());
  await page.getByRole("button", { name: "刪除回憶 一起去野餐" }).click();
  await expect(page.locator(".polaroid")).toHaveCount(0);
});

test("mobile layout and keyboard dialog navigation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.locator(".label-todo").click();
  await expect(page.locator("#panel-title")).toHaveText("待辦事項島");
  await page.locator("#todo-text").fill("手機待辦");
  await page
    .locator("#todo-form")
    .getByRole("button", { name: "新增" })
    .click();
  await expect(page.locator(".todo-row").first()).toContainText("手機待辦");
  await page.keyboard.press("Escape");
  await expect(page.locator("#modal")).toBeHidden();
  await expect(page.locator(".label-todo")).toBeFocused();
});

test("homepage and journals survive a failed 3D module request", async ({
  page,
}) => {
  await page.route("**/src/world.js*", (route) => route.abort());
  await page.reload();
  await expect(page.locator("h1")).toContainText("把日子過成");
  await expect(page.locator(".fallback-map")).toBeVisible();
  await page.locator(".label-todo").click();
  await expect(page.locator("#todo-form")).toBeVisible();
});

test("no WebGL renders an illustrated map and keeps the page usable", async ({
  page,
}) => {
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (type, ...args) {
      if (
        type === "webgl2" ||
        type === "webgl" ||
        type === "experimental-webgl"
      )
        return null;
      return original.call(this, type, ...args);
    };
  });
  await page.reload();
  await expect(page.locator(".fallback-map")).toBeVisible();
  await expect(page.locator("h1")).toBeVisible();
  await page.locator(".label-note").click();
  await expect(page.locator("#note-form")).toBeVisible();
});

test("GPU context loss switches to the usable illustrated map", async ({
  page,
}) => {
  await page.evaluate(() => {
    document
      .querySelector("#world-canvas")
      .getContext("webgl2")
      .getExtension("WEBGL_lose_context")
      .loseContext();
  });
  await expect(page.locator(".fallback-map")).toBeVisible();
  await page.locator(".label-memories").click();
  await expect(page.locator("#memory-form")).toBeVisible();
});

test("failed main module shows a readable retry screen instead of an empty page", async ({
  page,
}) => {
  await page.route("**/src/main.jsx*", (route) => route.abort());
  await page.reload();
  await expect(page.locator(".boot-message")).toBeVisible();
  await expect(page.locator("#boot-retry")).toBeVisible();
  await expect(page.locator("#boot-status")).toContainText(
    "頁面資源未能完整載入",
  );
});

test("todo island always reopens the list and shows only the last fourteen calendar days newest first", async ({
  page,
}) => {
  await page.clock.setFixedTime(new Date("2026-10-29T04:00:00Z"));
  await page.evaluate(() => {
    const now = Date.now();
    const boundary = new Date(now);
    boundary.setHours(0, 0, 0, 0);
    boundary.setDate(boundary.getDate() - 13);
    const todo = (id, text, created) => ({
      id,
      text,
      created,
      date: "2026-10-29",
      done: false,
    });
    localStorage.setItem(
      "little-island-v1",
      JSON.stringify({
        todos: [
          todo("old", "兩週之前", boundary.getTime() - 1),
          todo("edge", "兩週起點", boundary.getTime()),
          todo("new", "最新待辦", now - 1000),
          todo("mid", "昨天待辦", now - 86400000),
        ],
        notes: [],
        memories: [],
        residents: [],
      }),
    );
  });
  await page.reload();
  await page.locator('.island-card[data-open="todo"]').click();
  await expect(page.locator(".todo-text")).toHaveText([
    "最新待辦",
    "昨天待辦",
    "兩週起點",
  ]);
  await page.getByRole("button", { name: "日曆", exact: true }).click();
  await expect(
    page.locator(".calendar-task").filter({ hasText: "兩週之前" }),
  ).toHaveCount(1);
  await page.keyboard.press("Escape");
  await page.locator(".label-todo").click();
  await expect(page.locator('[data-view="list"]')).toHaveClass("active");
  await expect(page.locator(".calendar-grid")).toHaveCount(0);
  await expect(page.locator(".todo-text")).toHaveText([
    "最新待辦",
    "昨天待辦",
    "兩週起點",
  ]);
  await page.evaluate(() => {
    const s = JSON.parse(localStorage.getItem("little-island-v1"));
    s.todos = s.todos.filter((t) => t.id === "old");
    localStorage.setItem("little-island-v1", JSON.stringify(s));
  });
  await page.reload();
  await page.locator('.island-card[data-open="todo"]').click();
  await expect(page.locator(".empty-state")).toContainText(
    "近兩週還沒有新增待辦",
  );
});

test("expanded landscape fills the viewport and journals still work above it", async ({
  page,
}) => {
  await expect(page.locator(".home-label")).toHaveText("✿ 中央河畔公園");
  await page.getByRole("button", { name: "展開地圖 ↗", exact: true }).click();
  await expect(page.locator("#map-expand")).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  const viewport = page.viewportSize();
  const box = await page.locator(".world-wrap").boundingBox();
  expect(box.x).toBe(0);
  expect(box.y).toBe(0);
  expect(box.width).toBe(viewport.width);
  expect(box.height).toBe(viewport.height);
  expect(
    await page.evaluate(
      () => document.elementFromPoint(10, 10).closest(".world-wrap") !== null,
    ),
  ).toBe(true);
  await page.getByRole("button", { name: "放大", exact: true }).click();
  await page.getByRole("button", { name: "重設視角" }).click();
  await page.locator(".label-note").click();
  await expect(page.locator("#note-form")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator(".map-expanded")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator(".map-expanded")).toHaveCount(0);
  await expect(page.locator("#map-expand")).toBeFocused();
});

test("optional todo times stay blank or persist when chosen, and completed todos can be deleted", async ({
  page,
}) => {
  await page.locator('.island-card[data-open="todo"]').click();
  await expect(page.locator("#todo-time")).toHaveValue("");
  await page.locator("#todo-text").fill("不指定時間的小事");
  await page
    .locator("#todo-form")
    .getByRole("button", { name: "新增" })
    .click();
  let untimed = page
    .locator(".todo-row")
    .filter({ hasText: "不指定時間的小事" });
  await expect(untimed.locator("time")).toHaveCount(0);
  expect(
    await page.evaluate(
      () =>
        JSON.parse(localStorage.getItem("little-island-v1")).todos.find(
          (t) => t.text === "不指定時間的小事",
        ).time,
    ),
  ).toBe("");
  await page.locator("#todo-text").fill("下午一起喝茶");
  await page.locator("#todo-time").fill("13:45");
  await page
    .locator("#todo-form")
    .getByRole("button", { name: "新增" })
    .click();
  await expect(
    page
      .locator(".todo-row")
      .filter({ hasText: "下午一起喝茶" })
      .locator("time"),
  ).toHaveText("13:45");
  await expect(page.locator("#todo-time")).toHaveValue("");
  await page.reload();
  await page.locator('.island-card[data-open="todo"]').click();
  const timed = page.locator(".todo-row").filter({ hasText: "下午一起喝茶" });
  await expect(timed.locator("time")).toHaveText("13:45");
  await timed.getByRole("checkbox").check();
  await expect(
    page.getByRole("button", { name: "刪除 下午一起喝茶", exact: true }),
  ).toBeVisible();
  page.once("dialog", (dialog) => dialog.accept());
  await page
    .getByRole("button", { name: "刪除已完成（1）", exact: true })
    .click();
  await expect(
    page.locator(".todo-row").filter({ hasText: "下午一起喝茶" }),
  ).toHaveCount(0);
  untimed = page.locator(".todo-row").filter({ hasText: "不指定時間的小事" });
  await expect(untimed).toBeVisible();
  await untimed.getByRole("checkbox").check();
  await page
    .getByRole("button", { name: "刪除 不指定時間的小事", exact: true })
    .click();
  await expect(
    page.locator(".todo-row").filter({ hasText: "不指定時間的小事" }),
  ).toHaveCount(0);
  await page.getByRole("button", { name: "日曆", exact: true }).click();
  await expect(page.locator(".calendar-delete").first()).toBeVisible();
});

test("resident activities differ after refresh and the watch button brings them closer", async ({
  page,
}) => {
  const before = await page.locator("#resident-activity").textContent();
  expect(before).toMatch(/散步|盪鞦韆|玩耍/);
  await page.reload();
  await expect(page.locator(".map-label")).toHaveCount(4);
  await expect(page.locator("#resident-activity")).not.toHaveText(before);
  await page.getByRole("button", { name: "看看娃娃", exact: true }).click();
  await expect(page.locator(".map-expanded")).toBeVisible();
  await page.keyboard.press("Escape");
  await page.locator(".label-friends").click();
  await expect(page.locator(".resident-status")).toHaveCount(6);
  await expect(page.locator(".resident-status").first()).toContainText(
    /散步|風景|鞦韆|玩球|聊天|發呆|放空/,
  );
});

test("mixed resident activities show walking companions, seated chat and forest solitude", async ({ page }) => {
  await page.addInitScript(() => {
    Math.random = () => .1;
    sessionStorage.removeItem("little-island-last-activity");
  });
  await page.reload();
  await expect(page.locator("#world")).toHaveAttribute("data-resident-activity", "wander");
  await page.locator('[data-open="friends"]').first().click();
  const statuses = page.locator(".resident-status");
  await expect(statuses.filter({hasText: "和朋友兩兩散步中"})).toHaveCount(2);
  await expect(statuses.filter({hasText: "坐在公園椅子上聊天"})).toHaveCount(2);
  await expect(statuses.filter({hasText: "獨自在樹林裡發呆"})).toHaveCount(1);
  const chatting = page.locator(".resident-card").filter({hasText: "坐在公園椅子上聊天"}).first();
  const index = await chatting.getAttribute("data-resident");
  await chatting.locator("[data-watch-resident]").click();
  await expect(page.locator("#world")).toHaveAttribute("data-focused-resident", index);
  await expect(page.locator("#modal")).toBeHidden();
});

test("a selected doll greets you, stays paused during orbiting and resumes on goodbye", async ({ page }) => {
  test.setTimeout(60000);
  await page.locator('[data-open="friends"]').first().click();
  await page.locator('[data-watch-resident="0"]').click();
  const world = page.locator("#world"), dialog = page.locator(".resident-dialog");
  await expect(world).toHaveAttribute("data-paused-resident", "0");
  await expect(dialog).toBeVisible();
  await expect(dialog).toContainText("奶茶小熊");
  await expect(dialog).toContainText("今天也辛苦了");
  const canvas = page.locator("#world-canvas"), bounds = await canvas.boundingBox();
  await page.mouse.move(bounds.x + bounds.width * .5, bounds.y + bounds.height * .48);
  await page.mouse.down();
  await page.mouse.move(bounds.x + bounds.width * .65, bounds.y + bounds.height * .4, {steps: 8});
  await page.mouse.up();
  await expect(world).toHaveAttribute("data-paused-resident", "0");
  await expect(dialog).toBeVisible();
  await dialog.getByRole("button", {name: "繼續去玩吧"}).click();
  await expect(world).not.toHaveAttribute("data-paused-resident");
  await expect(dialog).toBeHidden();
  // The paused doll was the orbit target, so clicking the canvas centre hits it directly.
  await canvas.click({position: {x: bounds.width * .5, y: bounds.height * .5}});
  await expect(dialog).toBeVisible();
  await expect(world).toHaveAttribute("data-paused-resident", "0");
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(world).not.toHaveAttribute("data-paused-resident");
});

test("calendar completed deletion only removes items in the displayed month", async ({
  page,
}) => {
  await page.evaluate(() => {
    const now = new Date(),
      previous = new Date(now.getFullYear(), now.getMonth() - 1, 15);
    const date = (d) =>
      `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    localStorage.setItem(
      "little-island-v1",
      JSON.stringify({
        todos: [
          {
            id: "this",
            text: "本月已完成",
            done: true,
            date: date(now),
            created: Date.now(),
          },
          {
            id: "previous",
            text: "上月已完成",
            done: true,
            date: date(previous),
            created: Date.now(),
          },
        ],
        notes: [],
        memories: [],
        residents: [],
      }),
    );
  });
  await page.reload();
  await page.locator('.island-card[data-open="todo"]').click();
  await page.getByRole("button", { name: "日曆", exact: true }).click();
  page.once("dialog", (dialog) => dialog.accept());
  await page
    .getByRole("button", { name: "刪除已完成（1）", exact: true })
    .click();
  expect(
    await page.evaluate(() =>
      JSON.parse(localStorage.getItem("little-island-v1")).todos.map(
        (t) => t.id,
      ),
    ),
  ).toEqual(["previous"]);
  await page.getByRole("button", { name: "上一個月" }).click();
  await expect(page.locator(".calendar-task")).toContainText("上月已完成");
});

test("residents and scenery remain still when reduced motion is requested", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  await expect(page.locator(".map-label")).toHaveCount(4);
  const first = await page.locator("#world-canvas").screenshot();
  await page.waitForTimeout(400);
  const second = await page.locator("#world-canvas").screenshot();
  expect(first.equals(second)).toBe(true);
  await page.locator(".label-todo").click();
  await expect(page.locator("#todo-form")).toBeVisible();
});

test("clicking todo text edits content and schedule without completing or reordering it", async ({
  page,
}) => {
  await page.locator('.island-card[data-open="todo"]').click();
  const first = page.locator(".todo-row").first();
  const oldText = await first.locator(".todo-text").textContent();
  await first.locator(".todo-text").click();
  await expect(page.locator("#edit-todo-text")).toHaveValue(oldText);
  await page.locator("#edit-todo-text").fill("先改了但取消");
  await page.getByRole("button", { name: "取消編輯", exact: true }).click();
  await expect(page.locator(".todo-text").first()).toHaveText(oldText);
  await page.locator(".todo-text").first().click();
  await page.locator("#edit-todo-text").fill("一起去野餐（已編輯）");
  await page.locator("#edit-todo-date").fill("2026-11-02");
  await page.locator("#edit-todo-time").fill("14:30");
  await page.getByRole("button", { name: "儲存修改", exact: true }).click();
  await expect(page.locator(".todo-row").first()).toContainText(
    "一起去野餐（已編輯）",
  );
  await expect(
    page.locator(".todo-row").first().getByRole("checkbox"),
  ).not.toBeChecked();
  await page.reload();
  await page.locator('.island-card[data-open="todo"]').click();
  await expect(page.locator(".todo-row").first().locator("time")).toHaveText(
    "14:30",
  );
  await page.locator(".todo-text").first().click();
  await page.locator("#edit-todo-time").fill("");
  await page.getByRole("button", { name: "儲存修改", exact: true }).click();
  await expect(page.locator(".todo-row").first().locator("time")).toHaveCount(
    0,
  );
});

test("reminder balloon opens due items regardless of creation age and disappears on completion", async ({
  page,
}) => {
  await page.clock.setFixedTime(new Date("2026-10-29T04:00:00Z"));
  await page.evaluate(() => {
    const now = new Date(),
      next = new Date(now.getTime() + 3600000 * 23),
      later = new Date(now.getTime() + 86400000 * 3);
    const day = (d) =>
      `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    const time = (d) =>
      `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
    localStorage.setItem(
      "little-island-v1",
      JSON.stringify({
        todos: [
          {
            id: "old",
            text: "很早建立但今天要做",
            date: day(now),
            time: "",
            done: false,
            created: now.getTime() - 86400000 * 30,
          },
          {
            id: "next",
            text: "23小時後要做",
            date: day(next),
            time: time(next),
            done: false,
            created: now.getTime(),
          },
          {
            id: "later",
            text: "三天後再做",
            date: day(later),
            time: "",
            done: false,
            created: now.getTime(),
          },
        ],
        notes: [],
        memories: [],
        residents: [],
      }),
    );
  });
  await page.reload();
  await expect(page.locator(".map-label")).toHaveCount(4);
  await expect(page.locator("#reminder-count")).toHaveText("2");
  await page.locator("#todo-reminder").click();
  await expect(page.locator('[data-todo-scope="upcoming"]')).toHaveClass(
    "active",
  );
  await expect(page.locator(".todo-text")).toHaveCount(2);
  await page
    .getByRole("button", { name: "編輯 很早建立但今天要做", exact: true })
    .click();
  await page.locator("#edit-todo-date").fill("2026-11-05");
  await page.getByRole("button", { name: "儲存修改", exact: true }).click();
  await expect(page.locator("#reminder-count")).toHaveText("1");
  await page
    .locator(".todo-row")
    .filter({ hasText: "23小時後要做" })
    .getByRole("checkbox")
    .check();
  await expect(page.locator("#todo-reminder")).toBeHidden();
  await page.reload();
  await expect(page.locator(".map-label")).toHaveCount(4);
  await expect(page.locator("#todo-reminder")).toBeHidden();
});

test("calendar task text can be edited while the checkboxes remain independent", async ({
  page,
}) => {
  await page.locator('.island-card[data-open="todo"]').click();
  await page.getByRole("button", { name: "日曆", exact: true }).click();
  await page.locator(".calendar-task-text").first().click();
  await page.locator("#edit-todo-text").fill("從日曆編輯的待辦");
  await page.getByRole("button", { name: "儲存修改", exact: true }).click();
  await expect(
    page
      .locator(".calendar-task")
      .filter({ hasText: "從日曆編輯的待辦" })
      .getByRole("checkbox"),
  ).not.toBeChecked();
});


test("map move mode pans the enlarged view and can return to rotation", async ({ page }) => {
  test.setTimeout(90000);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.locator("#map-expand").click();
  await page.locator("#map-pan").click();
  await expect(page.locator("#map-pan")).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator("#world-canvas")).toHaveCSS("cursor", "grab");
  const canvas = page.locator("#world-canvas");
  const r = await canvas.boundingBox();
  const before = await page.locator(".label-todo").getAttribute("style");
  await page.mouse.move(r.x + r.width * .5, r.y + r.height * .72);
  await page.mouse.down();
  await page.mouse.move(r.x + r.width * .65, r.y + r.height * .72, { steps: 8 });
  await page.mouse.up();
  await page.waitForTimeout(600);
  await expect(page.locator(".label-todo")).not.toHaveAttribute("style", before);
  for (let i = 0; i < 10; i++) await page.locator("#zoom-in").click();
  await page.locator("#map-pan").click();
  await expect(page.locator("#map-pan")).toHaveAttribute("aria-pressed", "false");
  await page.locator("#reset").click();
  await expect(page.locator("#modal")).toBeHidden();
  await page.setViewportSize({ width: 390, height: 844 });
  const controls = await page.locator(".map-controls").boundingBox();
  expect(controls.x).toBeGreaterThanOrEqual(0);
  expect(controls.x + controls.width).toBeLessThanOrEqual(390);
});

test("photo bear joins an existing household without resetting family data", async ({ page }) => {
  test.setTimeout(60000);
  await page.evaluate(() => {
    localStorage.setItem("little-island-v1", JSON.stringify({
      residents: [
        {name:"奶茶小熊",type:"bear",color:"#ba9770",role:"原本的居民"},
        {name:"棉花小兔",type:"rabbit",color:"#f4e1d1",role:"原本的居民"},
        {name:"抹茶小熊",type:"bear",color:"#a1b28a",role:"原本的居民"},
      ],
      todos:[{id:"keep-todo",text:"保留原有待辦",date:"2026-10-29",created:Date.now(),done:false}],
      notes:[{id:"keep-note",title:"保留記事",body:"家人的話",author:"家人",created:1,comments:[]}],
      memories:[{id:"keep-memory",title:"保留回憶",caption:"我們的照片",date:"2026-10-29",image:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",created:1}],
    }));
  });
  await page.reload();
  await expect(page.locator(".map-label")).toHaveCount(4);
  await page.locator('.island-card[data-open="friends"]').click();
  await expect(page.locator(".resident-card")).toHaveCount(6);
  const bear=page.locator(".resident-card").filter({hasText:"熊熊"});
  await expect(bear.getByRole("img")).toHaveAttribute("aria-label","熊熊");
  await bear.getByRole("button",{name:"打個招呼"}).click();
  await expect(page.locator("#toast")).toContainText("熊熊");
  await page.keyboard.press("Escape");
  await page.locator('.island-card[data-open="todo"]').click();
  await page.locator("#todo-text").fill("和新朋友一起散步");
  await page.locator("#todo-form").getByRole("button",{name:"新增"}).click();
  const stored=await page.evaluate(()=>JSON.parse(localStorage.getItem("little-island-v1")));
  expect(stored.residents).toHaveLength(6);
  expect(stored.todos.some(todo=>todo.id==="keep-todo")).toBe(true);
  expect(stored.notes[0].id).toBe("keep-note");
  expect(stored.memories[0].id).toBe("keep-memory");
  await page.reload();
  await page.locator('.island-card[data-open="friends"]').click();
  await expect(page.locator(".resident-card")).toHaveCount(6);
});

test("each resident portrait immediately opens its own close-up and manual movement releases tracking", async ({page}) => {
  test.setTimeout(90000);
  const names=["奶茶小熊","棉花小兔","抹茶小熊","熊熊","呱呱","恐龍"];
  for (const [index,name] of names.entries()) {
    await page.locator('.island-card[data-open="friends"]').click();
    const portrait=page.getByRole("button",{name:`放大查看${name}`,exact:true});
    await portrait.focus();
    await page.keyboard.press("Enter");
    await expect(page.locator("#modal")).toBeHidden();
    await expect(page.locator(".map-expanded")).toBeVisible();
    await expect(page.locator("#world")).toHaveAttribute("data-focused-resident",String(index));
    await expect(page.locator("#toast")).toContainText(name);
    if (index===5) {
      await page.waitForTimeout(1500);
      await page.screenshot({path:"/tmp/dinosaur-focused-final.png"});
    }
    await page.keyboard.press("Escape");
  }
  await page.locator("#map-expand").click();
  const r=await page.locator("#world-canvas").boundingBox();
  await page.mouse.move(r.x+r.width*.5,r.y+r.height*.65);
  await page.mouse.down();
  await page.mouse.move(r.x+r.width*.58,r.y+r.height*.65,{steps:4});
  await page.mouse.up();
  await expect(page.locator("#world")).not.toHaveAttribute("data-focused-resident");
  await page.locator("#reset").click();
});

test('shape studio previews, saves, reloads, exports and imports resident settings', async ({page}, testInfo) => {
  test.setTimeout(120000);
  const openFrog = async () => {
    await page.locator('[data-open="friends"]').first().click();
    await page.locator('[data-edit-resident="4"]').click();
    await expect(page.locator('.resident-editor')).toBeVisible();
  };
  await openFrog();
  const editor = page.locator('.resident-editor');
  const width = editor.getByRole('slider', {name: '肚子胖度', exact: true});
  const change = async (slider, value) => slider.evaluate((input, n) => {
    Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(input, String(n)); input.dispatchEvent(new Event('input', {bubbles: true}));
  }, value);
  await expect(editor.getByRole('combobox')).toHaveValue('4');
  await expect(width).toHaveValue('1');
  const before = await editor.locator('canvas').screenshot();
  await change(width, 1.42);
  await expect(width.locator('..').locator('output')).toHaveText('142%');
  const after = await editor.locator('canvas').screenshot();
  expect(after.equals(before)).toBe(false);
  await editor.getByRole('button', {name: '儲存並套用', exact: true}).click();
  await expect(editor.locator('[data-editor-status]')).toContainText('已儲存並套用');
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem('little-island-shapes-v1')).residents.guagua.bodyWidth)).toBe(1.42);
  const downloaded = page.waitForEvent('download');
  await editor.getByRole('button', {name: '匯出全部設定'}).click();
  const download = await downloaded;
  const fs = await import('node:fs/promises');
  const exported = JSON.parse(await fs.readFile(await download.path(), 'utf8'));
  expect(exported.version).toBe(1);
  expect(exported.residents.guagua.bodyWidth).toBe(1.42);
  await editor.getByRole('button', {name: '關閉造型編輯器'}).click();
  await page.reload();
  await expect(page.locator('#world')).toHaveAttribute('data-art-style', 'catan-inspired');
  await openFrog();
  await expect(width).toHaveValue('1.42');
  await editor.getByRole('button', {name: '恢復原始造型'}).click();
  await expect(width).toHaveValue('1');
  await editor.getByRole('button', {name: '還原未儲存調整'}).click();
  await expect(width).toHaveValue('1.42');
  const file = editor.locator('input[type=file]');
  await file.setInputFiles({name: 'bad.json', mimeType: 'application/json', buffer: Buffer.from('bad json')});
  await expect(editor.locator('[data-editor-status]')).toContainText('無法讀取 JSON');
  page.once('dialog', dialog => dialog.accept());
  await file.setInputFiles({name: 'shapes.json', mimeType: 'application/json', buffer: Buffer.from(JSON.stringify({version: 1, residents: {guagua: {bodyWidth: 1.2}}}))});
  await expect(width).toHaveValue('1.2');
  await expect(editor.locator('[data-editor-status]')).toContainText('已匯入並套用');
  await editor.getByRole('combobox').selectOption('3');
  const bearBefore = await editor.locator('canvas').screenshot();
  await change(editor.getByRole('slider', {name: '頭部寬度', exact: true}), 1.3);
  const bearAfter = await editor.locator('canvas').screenshot();
  expect(bearAfter.equals(bearBefore)).toBe(false);
  await editor.screenshot({path: testInfo.outputPath('shape-studio-desktop.png')});
  await editor.getByRole('button', {name: '還原未儲存調整'}).click();
  await editor.getByRole('combobox').selectOption('5');
  await expect(editor.getByRole('slider', {name: '尾巴大小'})).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(editor).toBeHidden();
});

test('shape studio fits a phone and can edit the dinosaur tail', async ({page}, testInfo) => {
  test.setTimeout(60000);
  await page.setViewportSize({width: 390, height: 844});
  await page.locator('[data-open="friends"]').first().click();
  await page.locator('[data-edit-resident="5"]').click();
  const editor = page.locator('.resident-editor');
  await expect(editor).toBeVisible();
  expect(await editor.locator('.resident-editor-shell').evaluate(element => element.scrollWidth <= element.clientWidth)).toBe(true);
  await editor.getByRole('slider', {name: '尾巴大小'}).evaluate(input => {Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(input, '1.3'); input.dispatchEvent(new Event('input', {bubbles: true}));});
  await editor.getByRole('button', {name: '儲存並套用', exact: true}).click();
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem('little-island-shapes-v1')).residents['pink-dinosaur'].tailSize)).toBe(1.3);
  await editor.locator('.resident-editor-shell').evaluate(element => {element.scrollTop = 0;});
  await editor.screenshot({path: testInfo.outputPath('shape-studio-mobile.png')});
  await page.keyboard.press('Escape');
  await expect(editor).toBeHidden();
});

test('React data updates preserve the existing Three.js canvas and scene labels', async ({page}) => {
  const canvas = await page.locator('#world-canvas').elementHandle();
  const label = await page.locator('.label-todo').elementHandle();
  const initialCount = parseInt(await page.locator('#count-todo').textContent(), 10);
  await page.locator('[data-open="todo"]').first().click();
  await page.locator('#todo-text').fill('React 介面更新不重建 3D 場景');
  await page.getByRole('button', {name: '新增', exact: true}).click();
  await expect(page.locator('.todo-row').first()).toContainText('React 介面更新不重建 3D 場景');
  await expect(page.locator('#count-todo')).toContainText(`${initialCount + 1} 件小事`);
  await page.keyboard.press('Escape');
  await expect(page.locator('#modal')).toBeHidden();
  expect(await page.evaluate(node => node === document.querySelector('#world-canvas'), canvas)).toBe(true);
  expect(await page.evaluate(node => node === document.querySelector('.label-todo'), label)).toBe(true);
  await expect(page.locator('.map-label')).toHaveCount(4);
  await page.locator('.label-todo').click();
  await expect(page.locator('.todo-row').first()).toContainText('React 介面更新不重建 3D 場景');
});
