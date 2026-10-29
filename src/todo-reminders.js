const localDate = (date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

// Today's unfinished items stay relevant even after their chosen time has passed.
// Undated times are never silently treated as midnight tomorrow.
export function isInReminderWindow(todo, now = new Date()) {
  const current = new Date(now);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(todo.date || "")) return false;
  const time = todo.time || "";
  if (time && !/^([01]\d|2[0-3]):[0-5]\d$/.test(time)) return false;
  const due = new Date(`${todo.date}T${time || "00:00"}:00`);
  if (!Number.isFinite(due.getTime()) || localDate(due) !== todo.date)
    return false;
  return (
    todo.date === localDate(current) ||
    Boolean(
      time && due >= current && due.getTime() <= current.getTime() + 86400000,
    )
  );
}
export function getUpcomingTodos(todos, now = new Date()) {
  return todos.filter((todo) => !todo.done && isInReminderWindow(todo, now));
}
