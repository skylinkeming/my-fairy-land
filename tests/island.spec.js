import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".map-label")).toHaveCount(4);
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
  await expect(page.locator(".resident-card")).toHaveCount(3);
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
  await page.route("**/src/main.js*", (route) => route.abort());
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
  await expect(page.locator(".resident-status")).toHaveCount(3);
  await expect(page.locator(".resident-status").first()).toContainText(
    /散步|風景|鞦韆|玩球/,
  );
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
