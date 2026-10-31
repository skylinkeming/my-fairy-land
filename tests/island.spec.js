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
  await expect(page.locator(".home-label")).toHaveText("✿ 中央湖畔公園");
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
  await expect(page.locator(".map-label")).toHaveCount(4, { timeout: 15000 });
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

test("residents start with varied activities across islands and can still be inspected", async ({page}) => {
  await page.addInitScript(() => {Math.random = () => .1; sessionStorage.removeItem('little-island-last-activity');});
  await page.reload();
  await expect(page.locator('#world')).toHaveAttribute('data-render-mode', 'three');
  const counts = JSON.parse(await page.locator('#world').getAttribute('data-walkable-islands'));
  expect(Object.keys(counts)).toHaveLength(6);
  expect(Object.values(counts).every(value => value > 0)).toBe(true);
  await page.locator('[data-open="friends"]').first().click();
  const cards = page.locator('.resident-card');
  await expect(cards).toHaveCount(6);
  const islands = await cards.evaluateAll(elements => elements.map(element => element.dataset.residentIsland));
  expect(new Set(islands).size).toBeGreaterThanOrEqual(3);
  await expect(page.locator('.resident-status').filter({hasText:/釣魚|野餐|澆水|相機/})).toHaveCount(3);
  await cards.first().locator('[data-watch-resident]').click();
  await expect(page.locator('#world')).toHaveAttribute('data-paused-resident', '0');
});

test("a selected doll greets you, stays paused during orbiting and resumes on goodbye", async ({ page }) => {
  test.setTimeout(60000);
  await page.locator('[data-open="friends"]').first().click();
  await page.locator('[data-watch-resident="0"]').click();
  const world = page.locator("#world"), dialog = page.locator(".resident-dialog");
  await expect(world).toHaveAttribute("data-paused-resident", "0");
  await expect(dialog).toBeVisible();
  await expect(dialog).toContainText("奶茶小熊");
  const speech=page.getByRole('status',{name:'娃娃頭頂的對話'});
  await expect(speech).toBeVisible();
  await expect(speech).not.toHaveText('');
  const firstGreeting=await speech.innerText();
  const speechBounds=await speech.boundingBox(),worldBounds=await world.boundingBox();
  const headY=Number(await world.getAttribute('data-resident-head-y'))+worldBounds.y;
  expect(speechBounds.y+speechBounds.height).toBeLessThanOrEqual(headY);
  expect(speechBounds.y+speechBounds.height).toBeLessThan(worldBounds.y+worldBounds.height*.7);
  await page.screenshot({path:"/tmp/resident-head-greeting.png"});
  const canvas = page.locator("#world-canvas"), bounds = await canvas.boundingBox();
  await page.mouse.move(bounds.x + bounds.width * .5, bounds.y + bounds.height * .48);
  await page.mouse.down();
  await page.mouse.move(bounds.x + bounds.width * .65, bounds.y + bounds.height * .4, {steps: 8});
  await page.mouse.up();
  await expect(world).toHaveAttribute("data-paused-resident", "0");
  await expect(dialog).toBeVisible();
  await expect(speech).toBeVisible();
  await dialog.getByRole("button", {name: "繼續去玩吧"}).click();
  await expect(world).not.toHaveAttribute("data-paused-resident");
  await expect(dialog).toBeHidden();
  await expect(speech).toBeHidden();
  // The paused doll was the orbit target, so clicking the canvas centre hits it directly.
  await canvas.click({position: {x: bounds.width * .5, y: bounds.height * .5}});
  await expect(dialog).toBeVisible();
  await expect(speech).not.toHaveText(firstGreeting);
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
  await expect(page.locator(".map-label")).toHaveCount(4, { timeout: 15000 });
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
  await expect(page.locator(".map-label")).toHaveCount(4, { timeout: 15000 });
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
  await expect(page.locator(".map-label")).toHaveCount(4, { timeout: 15000 });
  await expect(page.locator("#todo-reminder")).toBeHidden();
});

test("calendar details require an explicit edit action while checkboxes remain independent", async ({
  page,
}) => {
  await page.locator('.island-card[data-open="todo"]').click();
  await page.getByRole("button", { name: "日曆", exact: true }).click();
  await page.locator(".calendar-task-text").first().click();
  await expect(page.locator("#todo-detail input")).toHaveCount(0);
  await page.locator("#todo-detail").getByRole("button", {name:"編輯", exact:true}).click();
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
  await expect(page.locator(".map-label")).toHaveCount(4, { timeout: 15000 });
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
  await expect(page.locator('#world')).toHaveAttribute('data-art-style', 'catan-inspired', { timeout: 15000 });
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


test('real scenery navigation keeps residents out of props and connected across islands', async ({page}) => {
  test.setTimeout(120000);
  await page.route('**/navigation-check', route => route.fulfill({contentType: 'text/html', body: `
    <div id="world" style="width:1000px;height:700px"><canvas></canvas><div id="world-labels"></div><button id="todo-reminder"></button></div>
    <script type="module">
      import {createWorld} from '/src/world.js';
      import {icon} from '/src/ui/markup.js';
      const runtime = createWorld(document.querySelector('#world'), () => {}, icon, () => {}, {isUiCovered: () => true});
      const {seatedRootHeight} = await import('/src/resident-pose.js');
      const {applyResidentShape} = await import('/src/resident-shape.js');
      const {Box3} = await import('/node_modules/.vite/deps/three.js');
      for (let index = 0; index < 6; index++) {
        for (const shape of [{}, {size: 1.25, bodyHeight: 1.35}, {size: .75, bodyHeight: .75}]) {
          const root = runtime.getResidentTemplate(index);
          applyResidentShape(root, shape);
          root.rotation.y = -.3; root.position.y = 1.7;
          for (const surface of [2.1375, 2.8 - Math.cos(.4) * 1.75 + .05]) {
            root.position.y = seatedRootHeight(root, surface);
            root.updateWorldMatrix(true, true);
            const bounds = new Box3();
            root.children.filter(part => ['body', 'pillow'].includes(part.userData.shapePart))
              .forEach(part => bounds.expandByObject(part, true));
            if (Math.abs(bounds.min.y - surface) > .00001) throw Error('Seat alignment failed for resident ' + index);
          }
        }
      }
      window.navigationData = runtime.getNavigationData(); runtime.dispose();
    </script>`}));
  await page.goto('/navigation-check');
  await page.waitForFunction(() => window.navigationData);
  const results = await page.evaluate(async () => {
    const {createResidentLife} = await import('/src/resident-life.js');
    const data = window.navigationData, results = [];
    if (!data.nodes.every(node => node.walkRadius === 12 && node.bridgeHalfWidth === .94)) throw Error('All six islands and inter-island bridges must use their expanded walking bounds');
    if (!data.crossings.filter(crossing=>!crossing.coastalDeck).every(crossing => crossing.halfWidth === .84)) throw Error('River footbridges must also use doubled widths');
    if (data.buildings.length !== 6 || !data.buildings.some(room=>room.type==='cafe')) throw Error('All six islands need a usable indoor building');
    const check = createResidentLife({...data,count:1,random:()=>.1});
    for(const room of data.buildings) {
      if(!check.navigation.walkable(room.exit)) throw Error('Blocked door outside '+room.name+' at '+JSON.stringify(room.exit)+' by '+data.obstacles.filter(o=>o.kind!=='river' && (o.radius!==undefined?Math.hypot(o.x-room.exit.x,o.z-room.exit.z)<o.radius+.46:Math.hypot(Math.max(o.minX-room.exit.x,0,room.exit.x-o.maxX),Math.max(o.minZ-room.exit.z,0,room.exit.z-o.maxZ))<.46)).map(o=>o.id).join(','));
      for(const seat of room.seats) {
        if(!check.navigation.route(room.exit,seat.approach) || !check.navigation.clearSegment(seat.approach,seat.point,seat.id)) throw Error('Unreachable indoor seat '+room.name);
      }
    }
    if (data.scenery.islands.length !== 6 || data.scenery.islands.some(island => island.pockets.length < 6 || island.layout !== 'themed-villages')) throw Error('Each island needs naturally distributed themed scenery');
    if (data.scenery.islands.some(island => Math.max(...island.positions.map(point => Math.hypot(point.x, point.z))) - Math.min(...island.positions.map(point => Math.hypot(point.x, point.z))) < 2)) throw Error('Scenery must extend into the island instead of forming another ring');
    if (data.scenery.islands.some(island => island.trees > 24 || island.paths < 6 || !island.landmark || !island.theme)) throw Error('Each island needs a distinct landmark, connected paths and limited woodland');
    if (new Set(data.scenery.islands.map(island => island.landmark.kind)).size !== 6) throw Error('Every island needs its own distinct main scene');
    for (const river of data.obstacles.filter(obstacle => obstacle.kind === 'river' && obstacle.coastal)) {
      const island = data.nodes.find(node => node.id === river.island);
      if ([river.points[0], river.points.at(-1)].some(point => Math.hypot(point.x-island.x,point.z-island.z) < 12.5)) throw Error('Rivers must extend past the shore into the sea');
      if ([river.points[0], river.points.at(-1)].some(point => data.nodes.some(other => Math.hypot(point.x-other.x,point.z-other.z) < 14.1))) throw Error('River mouths must end in open sea, clear of neighboring islands');
    }
    if (data.scenery.seaRadius <= 47.3 || data.scenery.outerRadius <= data.scenery.seaRadius || data.scenery.hills < 20) throw Error('Expanded sea needs surrounding plains and hills');
    for (const seed of [1, 7, 23]) {
      let state = seed;
      const random = () => {state = (Math.imul(state, 1664525) + 1013904223) >>> 0; return state / 4294967296;};
      const life = createResidentLife({...data, random});
      if (new Set(life.actors.map(actor => actor.node)).size < 3) throw Error('Residents must remain distributed across islands');
      if(life.actors.filter(actor=>actor.target?.leisureSite&&actor.state!=='walking').length!==3)throw Error('Three residents must already be doing activities on load');
      let socialFrames = 0;
      const travelled = life.actors.map(() => 0);
      for (let frame = 0; frame < 3000; frame++) {
        const before = life.actors.map(actor => ({x: actor.x, z: actor.z}));
        life.update(.08);
        for (const actor of life.actors) {
          const ignore = actor.exitObstacle?.id || (actor.target?.ignore && (['chatting','indoors'].includes(actor.state) || actor.routeIndex === actor.route.length - 1) ? actor.target.ignore : null);
          if (!life.navigation.walkable(actor, ignore)) throw Error('Resident entered scenery at seed ' + seed + ', frame ' + frame);
          const step = Math.hypot(actor.x - before[actor.id].x, actor.z - before[actor.id].z);
          if (step > .15) throw Error('Resident teleported');
          travelled[actor.id] += step;
        }
        for (let a = 0; a < life.actors.length; a++) for (let b = a + 1; b < life.actors.length; b++) {
          if (Math.hypot(life.actors[a].x - life.actors[b].x, life.actors[a].z - life.actors[b].z) < 1.18 - 1e-6) throw Error('Residents overlap');
        }
        const social = life.actors.filter(actor => ['swinging', 'playing', 'chatting'].includes(actor.state) || (actor.activity === 'pairwalk' && actor.partner !== null && Math.hypot(actor.x - life.actors[actor.partner].x, actor.z - life.actors[actor.partner].z) < 3));
        if (social.length > 2) throw Error('Whole household gathered instead of one pair');
        const coffeeTogether=life.actors.some(actor=>actor.state==='indoors' && life.actors.some(other=>other!==actor && other.state==='indoors' && other.target?.roomId===actor.target?.roomId));
        if (social.length === 2 || coffeeTogether) socialFrames++;
      }
      results.push({seed, socialFrames, travelled, islands: life.navigation.islandCounts, obstacleCount: data.obstacles.length});
    }
    return results;
  });
  expect(results.every(result => result.obstacleCount > 100 && Object.values(result.islands).every(count => count > 0))).toBe(true);
  expect(results.every(result => result.travelled.every(distance => distance > 5))).toBe(true);
  expect(results.some(result => result.socialFrames > 0)).toBe(true);
});


test('interior view and coffee invitations work from the resident greeting', async ({page}) => {
  await page.getByRole('button',{name:'查看室內',exact:true}).click();
  await expect(page.locator('#view-interiors')).toHaveAttribute('aria-pressed','true');
  await expect.poll(async()=>JSON.parse(await page.locator('#world').getAttribute('data-open-buildings')||'[]').length).toBe(6);
  await page.locator('.label-friends').click();
  await page.getByRole('button',{name:'打個招呼'}).first().click();
  const dialog=page.getByRole('region',{name:'娃娃問候'});
  await expect(dialog.getByRole('button',{name:'去喝杯咖啡',exact:true})).toBeVisible();
  await dialog.getByRole('button',{name:'去喝杯咖啡',exact:true}).click();
  await expect(dialog).toBeHidden();
  await expect(page.locator('#world')).toHaveAttribute('data-followed-resident','0');
  await page.getByRole('button',{name:'自動屋頂',exact:true}).click();
  await expect(page.locator('#view-interiors')).toHaveAttribute('aria-pressed','false');
});


test('indoor controls and coffee invitations fit a phone',async({page})=>{
  await page.setViewportSize({width:390,height:844});
  await page.emulateMedia({reducedMotion:'reduce'});await page.reload();
  await expect(page.locator('.map-label')).toHaveCount(4,{timeout:20000});
  const control=page.locator('#view-interiors');
  await control.click();
  const bounds=await control.boundingBox();expect(bounds.x).toBeGreaterThanOrEqual(0);expect(bounds.x+bounds.width).toBeLessThanOrEqual(390);
  await page.locator('.label-friends').click();
  await page.getByRole('button',{name:'打個招呼'}).first().click();
  const dialog=page.getByRole('region',{name:'娃娃問候'});
  await expect(dialog.getByRole('button',{name:'回家休息',exact:true})).toBeVisible();
  const panel=await dialog.boundingBox();expect(panel.x).toBeGreaterThanOrEqual(0);expect(panel.x+panel.width).toBeLessThanOrEqual(390);
  const speech=page.getByRole('status',{name:'娃娃頭頂的對話'});await expect(speech).toBeVisible();
  const bubble=await speech.boundingBox();expect(bubble.x).toBeGreaterThanOrEqual(0);expect(bubble.x+bubble.width).toBeLessThanOrEqual(390);
});
