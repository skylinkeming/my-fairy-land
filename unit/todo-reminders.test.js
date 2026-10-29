import test from "node:test";
import assert from "node:assert/strict";
import { getUpcomingTodos, isInReminderWindow } from "../src/todo-reminders.js";
const now = new Date(2026, 9, 29, 12, 0, 0);
const date = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const today = date(now),
  tomorrow = date(new Date(2026, 9, 30));
const todo = (day, time = "", done = false) => ({ date: day, time, done });
test("today without a selected time is due, without inventing a time", () => {
  const item = todo(today);
  assert.equal(isInReminderWindow(item, now), true);
  assert.equal(item.time, "");
});
test("today remains relevant when an unfinished chosen time has passed", () =>
  assert.equal(isInReminderWindow(todo(today, "08:00"), now), true));
test("timed tomorrow items are included at exactly 24 hours but not beyond it", () => {
  assert.equal(isInReminderWindow(todo(tomorrow, "12:00"), now), true);
  assert.equal(isInReminderWindow(todo(tomorrow, "12:01"), now), false);
  assert.equal(isInReminderWindow(todo(tomorrow), now), false);
});
test("completed tasks and yesterday do not keep the balloon visible", () => {
  assert.deepEqual(
    getUpcomingTodos(
      [todo(today, "", true), todo(date(new Date(2026, 9, 28)), "15:00")],
      now,
    ),
    [],
  );
});
test("creation age never hides an unfinished task due today", () => {
  assert.equal(
    getUpcomingTodos([{ ...todo(today), created: 1 }], now).length,
    1,
  );
});
test("invalid dates and times are ignored instead of producing misleading reminders", () => {
  for (const item of [
    todo("2026-02-30"),
    todo(today, "25:10"),
    todo(""),
    todo(today, "oops"),
  ])
    assert.equal(isInReminderWindow(item, now), false);
});
