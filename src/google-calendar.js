const compact = date => date.toISOString().replace(/[-:]/g, '').slice(0, 15);

// Calendar's template opens a draft. Only Google can confirm that it was saved.
export function googleCalendarUrl(todo) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(todo.date || '')) return null;
  const day = new Date(`${todo.date}T00:00:00Z`);
  if (!Number.isFinite(day.getTime()) || day.toISOString().slice(0, 10) !== todo.date) return null;
  let dates;
  if (todo.time) {
    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(todo.time)) return null;
    const start = new Date(`${todo.date}T${todo.time}:00Z`);
    const end = new Date(start.getTime() + 3600000);
    // Floating wall times with ctz preserve the selected Taipei date and time.
    dates = `${compact(start)}/${compact(end)}`;
  } else {
    const end = new Date(day.getTime() + 86400000);
    dates = `${compact(day).slice(0, 8)}/${compact(end).slice(0, 8)}`;
  }
  const url = new URL('https://calendar.google.com/calendar/render');
  url.search = new URLSearchParams({action:'TEMPLATE',text:todo.text,dates,ctz:'Asia/Taipei'}).toString();
  return url.href;
}
