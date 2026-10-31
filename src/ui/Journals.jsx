import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { dateString, today } from "../household.js";
import { getUpcomingTodos, isInReminderWindow } from "../todo-reminders.js";
import { Icon } from "./Icon.jsx";
const prettyDate = (date) =>
  new Date(date + "T12:00:00").toLocaleDateString("zh-TW", {
    month: "long",
    day: "numeric",
  });

function TodoEditor({ todo: current, onSave, onCancel }) {
  const [todo] = useState(() => current);
  return (
    <form
      id="todo-edit-form"
      className="todo-edit-row"
      onSubmit={(event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget),
          text = form.get("text").trim();
        if (text)
          onSave({
            ...todo,
            text,
            date: form.get("date"),
            time: form.get("time"),
          });
      }}
    >
      <span className="section-kicker">EDIT YOUR LITTLE PLAN</span>
      <label htmlFor="edit-todo-text">編輯待辦內容</label>
      <input
        type="text"
        id="edit-todo-text"
        name="text"
        required
        maxLength={160}
        defaultValue={todo.text}
        autoFocus
      />
      <div className="todo-edit-fields">
        <label htmlFor="edit-todo-date">
          預定日期
          <input
            id="edit-todo-date"
            name="date"
            type="date"
            defaultValue={todo.date}
            required
          />
        </label>
        <label htmlFor="edit-todo-time">
          時間（選填）
          <input
            id="edit-todo-time"
            name="time"
            type="time"
            defaultValue={todo.time || ""}
          />
        </label>
      </div>
      <div className="todo-edit-actions">
        <button
          type="button"
          id="cancel-todo-edit"
          className="secondary-button"
          onClick={onCancel}
        >
          取消編輯
        </button>
        <button type="submit" className="primary-button">
          <Icon name="check" />
          儲存修改
        </button>
      </div>
    </form>
  );
}
export function TodosPanel({ household, commit, notify, upcoming = false, shared = null }) {
  const pendingCreate = useRef(null);
  const detailRef = useRef(null);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [view, setView] = useState("list"),
    [scope, setScope] = useState(upcoming ? "upcoming" : "recent");
  const [editing, setEditing] = useState(null),
    [month, setMonth] = useState(() => new Date());
  const todos = household.todos;
  const now = Date.now(),
    since = new Date(now);
  since.setHours(0, 0, 0, 0);
  since.setDate(since.getDate() - 13);
  const keyword = query.normalize("NFKC").trim().toLocaleLowerCase();
  const selectedTodo = todos.find(todo => todo.id === selected);
  const sorted = todos
    .filter((todo) =>
      keyword ? todo.text.normalize("NFKC").toLocaleLowerCase().includes(keyword) :
      scope === "upcoming"
        ? isInReminderWindow(todo, new Date(now))
        : todo.created >= since.getTime() && todo.created <= now,
    )
    .sort((a, b) => b.created - a.created);
  const monthKey = dateString(
    new Date(month.getFullYear(), month.getMonth(), 1),
  ).slice(0, 7);
  const visible =
    view === "list"
      ? sorted
      : todos.filter((todo) => todo.date.startsWith(monthKey));
  const completed = visible.filter((todo) => todo.done),
    pending = visible.filter((todo) => !todo.done).length;
  const change = (next) => shared ? shared.save(next) : commit({ ...household, todos: next });
  const remove = async (id) => {
    if (await change(todos.filter((todo) => todo.id !== id))) {
      setEditing(null);
      if (selected === id) setSelected(null);
    }
  };
  const toggle = (id) =>
    change(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  const stopEditing = () => {
    setEditing(null);
    if (view === "calendar") detailRef.current?.focus({preventScroll:true});
    else document.querySelector(".island-panel")?.focus();
  };
  const editForm = (todo) => (
    <TodoEditor
      key={todo.id}
      todo={todo}
      onCancel={stopEditing}
      onSave={async (updated) => {
        if (!todos.some(todo => todo.id === updated.id)) {
          notify("這件待辦已被家人刪除，請取消編輯後確認最新清單。草稿仍保留在表單中。");
          return;
        }
        if (
          await change(todos.map((todo) => (todo.id === updated.id ? updated : todo)))
        ) {
          stopEditing();
          notify("待辦已更新，提醒熱氣球也會一起調整。");
        }
      }}
    />
  );
  function row(todo) {
    if (editing?.id === todo.id) return null;
    return (
      <div key={todo.id} className={`todo-row ${todo.done ? "done" : ""}`}>
        <label className="todo-check">
          <input
            type="checkbox"
            data-todo-check={todo.id}
            aria-label={`完成 ${todo.text}`}
            checked={todo.done}
            onChange={() => toggle(todo.id)}
          />
          <span>
            <Icon name="check" />
          </span>
        </label>
        <button
          className="todo-text"
          data-edit-todo={todo.id}
          aria-label={`編輯 ${todo.text}`}
          title="點選編輯待辦"
          onClick={() => setEditing(todo)}
        >
          {todo.text}
          <svg
            className="todo-edit-icon icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="m4 16 12-12 4 4L8 20H4zM13 7l4 4" />
          </svg>
        </button>
        <span
          className={`date-tag ${todo.date < today && !todo.done ? "overdue" : ""}`}
        >
          {todo.date === today ? "今天" : prettyDate(todo.date)}
          {todo.time && (
            <>
              {" "}
              <time>{todo.time}</time>
            </>
          )}
        </span>
        <button
          className="todo-delete"
          data-delete-todo={todo.id}
          aria-label={`刪除 ${todo.text}`}
          onClick={() => remove(todo.id)}
        >
          <Icon name="trash" />
          <span>刪除</span>
        </button>
      </div>
    );
  }
  const selectTodo = (todo) => {
    setSelected(todo.id);
    setEditing(null);
    requestAnimationFrame(() => {
      detailRef.current?.focus({preventScroll:true});
      detailRef.current?.scrollIntoView({block:"nearest"});
    });
  };
  function calendar() {
    const year = month.getFullYear(),
      m = month.getMonth(),
      first = new Date(year, m, 1).getDay(),
      last = new Date(year, m + 1, 0).getDate();
    return (
      <>
        <div className="calendar-header">
          <button
            className="round-button"
            aria-label="上一個月"
            onClick={() => {setMonth(new Date(year, m - 1, 1));setSelected(null);setEditing(null);}}
          >
            ‹
          </button>
          <h3>
            {year} 年 {m + 1} 月
          </h3>
          <button
            className="round-button"
            aria-label="下一個月"
            onClick={() => {setMonth(new Date(year, m + 1, 1));setSelected(null);setEditing(null);}}
          >
            ›
          </button>
        </div>
        <div className="calendar-grid">
          {[..."日一二三四五六"].map((day) => (
            <div key={day} className="weekday">
              {day}
            </div>
          ))}
          {Array.from({ length: first }, (_, i) => (
            <div key={`blank-${i}`} className="calendar-day blank" />
          ))}
          {Array.from({ length: last }, (_, i) => {
            const day = i + 1,
              date = dateString(new Date(year, m, day));
            return (
              <div
                key={date}
                className={`calendar-day ${date === today ? "is-today" : ""}`}
              >
                <span>{day}</span>
                {todos
                  .filter((todo) => todo.date === date)
                  .map((todo) => (
                    <div className="calendar-entry" key={todo.id}>
                      <div
                        className={`calendar-task ${todo.done ? "done" : ""}`}
                        title={todo.text}
                      >
                        <label className="calendar-check">
                          <input
                            type="checkbox"
                            data-todo-check={todo.id}
                            aria-label={`完成 ${todo.text}`}
                            checked={todo.done}
                            onChange={() => toggle(todo.id)}
                          />
                        </label>
                        <button
                          className="calendar-task-text"
                          data-view-todo={todo.id}
                          aria-label={`查看 ${todo.text}`}
                          aria-pressed={selected === todo.id}
                          onClick={() => selectTodo(todo)}
                        >
                          {todo.time && (
                            <>
                              <time>{todo.time}</time>{" "}
                            </>
                          )}
                          {todo.text}
                        </button>
                      </div>
                      <button
                        className="calendar-delete"
                        data-delete-todo={todo.id}
                        aria-label={`刪除 ${todo.text}`}
                        title="刪除待辦"
                        onClick={() => remove(todo.id)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
              </div>
            );
          })}
        </div>
      </>
    );
  }
  return (
    <>
      {shared && <div className="todo-sync" role="status">
        <p>{shared.busy ? "正在儲存家庭待辦…" : !shared.ready ? "正在載入家庭待辦…" : "家庭共享待辦 · 每 10 秒及回到頁面時同步"}</p>
        {shared.legacyCount > 0 && <p>此瀏覽器另有 {shared.legacyCount} 件舊待辦，仍保留於本機，尚未分享到家庭。</p>}
        {shared.error && <p role="alert">{shared.error}</p>}
        <button type="button" className="secondary-button" onClick={shared.refresh} disabled={shared.busy}>重新同步</button>
      </div>}
      <fieldset className="todo-controls" disabled={Boolean(shared && (!shared.ready || shared.busy))}>
      <div className="panel-toolbar">
        <span className="small-muted">
          {pending
            ? `還有 ${pending} 件小事，慢慢來就好`
            : "今天的你，已經做得很好了 ✨"}
        </span>
        <div className="view-switch">
          <button
            data-view="list"
            className={view === "list" ? "active" : ""}
            onClick={() => {
              setView("list");
              setSelected(null);
              setEditing(null);
            }}
          >
            清單
          </button>
          <button
            data-view="calendar"
            className={view === "calendar" ? "active" : ""}
            onClick={() => {
              setView("calendar");
              setQuery("");
              setSelected(null);
              setEditing(null);
            }}
          >
            <Icon name="calendar" />
            日曆
          </button>
        </div>
      </div>
      <div className="todo-search">
        <label htmlFor="todo-search">搜尋所有待辦</label>
        <div className="todo-search-field">
          <input id="todo-search" type="search" value={query} placeholder="輸入關鍵字，查找過去與已完成的待辦"
            onChange={event=>{setQuery(event.target.value);setView("list");setEditing(null);setSelected(null);}} />
          {query && <button type="button" className="secondary-button" onClick={()=>setQuery("")}>清除搜尋</button>}
        </div>
        {keyword && <p role="status">全部歷史待辦中找到 {sorted.length} 件符合「{query.trim()}」的事項（含已完成）</p>}
      </div>
      <div className="todo-scope-switch">
        {[
          ["recent", "近兩週新增"],
          ["upcoming", `今日與24小時內（${getUpcomingTodos(todos).length}）`],
        ].map(([value, label]) => (
          <button
            key={value}
            data-todo-scope={value}
            className={scope === value ? "active" : ""}
            onClick={() => {
              setScope(value);
              setQuery("");
              setView("list");
              setSelected(null);
              setEditing(null);
            }}
          >
            {label}
          </button>
        ))}
      </div>
      <form
        id="todo-form"
        className="add-todo"
        onSubmit={async (event) => {
          event.preventDefault();
          const form = event.currentTarget,
            data = new FormData(form),
            text = data.get("text").trim();
          if (!text) return;
          if (
            await change([
              ...todos,
              {
                id: (pendingCreate.current ||= crypto.randomUUID()),
                text,
                date: data.get("date"),
                time: data.get("time"),
                done: false,
                created: Date.now(),
              },
            ])
          ) {
            pendingCreate.current = null;
            form.reset();
            notify("又多了一件值得期待的小事 ♡");
          }
        }}
      >
        <label className="sr-only" htmlFor="todo-text">
          待辦事項
        </label>
        <input
          id="todo-text"
          name="text"
          placeholder="有什麼想一起做的小事？"
          required
          maxLength={160}
        />
        <label className="sr-only" htmlFor="todo-date">
          預定日期
        </label>
        <input
          id="todo-date"
          name="date"
          type="date"
          defaultValue={today}
          required
        />
        <label className="todo-time-field" htmlFor="todo-time">
          <span>時間（選填）</span>
          <input
            id="todo-time"
            name="time"
            type="time"
            aria-label="待辦時間（選填）"
          />
        </label>
        <button className="primary-button" type="submit">
          <Icon name="plus" />
          <span>新增</span>
        </button>
      </form>
      <div className="todo-list-tools">
        <p className="todo-range small-muted">
          {view === "list"
            ? keyword ? "搜尋全部歷史待辦 · 點選文字可編輯" : scope === "upcoming"
              ? "今天與24小時內的待辦 · 點選文字可編輯"
              : "近兩週新增的待辦 · 點選文字可編輯"
            : "依預定日期查看所有待辦 · 點選文字查看詳情"}
        </p>
        <button
          id="delete-completed"
          className="delete-completed"
          disabled={!completed.length}
          onClick={async () => {
            if (
              !confirm(
                `要刪除目前檢視中的 ${completed.length} 件已完成待辦嗎？`,
              )
            )
              return;
            const ids = new Set(completed.map((todo) => todo.id));
            if (await change(todos.filter((todo) => !ids.has(todo.id)))) {
              setEditing(null);
              notify(`已刪除 ${ids.size} 件已完成待辦。`);
            }
          }}
        >
          <Icon name="trash" />
          刪除已完成（{completed.length}）
        </button>
      </div>
      <div id="todo-list">
        {view === "list" && editing && editForm(editing)}
        {view === "calendar" ? (
          <>
            {calendar()}
            {selected && <section ref={detailRef} className="todo-detail" id="todo-detail" tabIndex={-1} aria-label="待辦詳情">
              <h3>待辦詳情</h3>
              {editing ? editForm(editing) : selectedTodo ? <>
                <dl>
                  <dt>內容</dt><dd className="todo-detail-text">{selectedTodo.text}</dd>
                  <dt>預定日期</dt><dd>{selectedTodo.date}</dd>
                  <dt>時間</dt><dd>{selectedTodo.time || "未設定"}</dd>
                  <dt>狀態</dt><dd>{selectedTodo.done ? "已完成" : "未完成"}</dd>
                </dl>
                <button type="button" className="primary-button" onClick={()=>setEditing(selectedTodo)}>編輯</button>
              </> : <p role="status">這件待辦已被刪除。</p>}
            </section>}
          </>
        ) : (
          <div className="todo-list">
            {sorted.length ? (
              sorted.map(row)
            ) : (
              <div className="empty-state">
                ✿
                <h3>
                  {keyword ? "找不到符合的待辦" : scope === "upcoming"
                    ? "今天可以慢慢來，暫時沒有待辦"
                    : "近兩週還沒有新增待辦"}
                </h3>
                <p>{keyword ? "試試其他關鍵字，或清除搜尋查看最近的待辦。" : "新增想一起做的小事，或切換日曆查看其他日期。"}</p>
              </div>
            )}
          </div>
        )}
      </div>
      </fieldset>
    </>
  );
}

export function NotesPanel({ household, commit, notify }) {
  const change = (notes) => commit({ ...household, notes });
  return (
    <>
      <form
        id="note-form"
        className="paper-form"
        onSubmit={(event) => {
          event.preventDefault();
          const form = event.currentTarget,
            data = new FormData(form),
            title = data.get("title").trim(),
            body = data.get("body").trim();
          if (!title || !body) return;
          if (
            change([
              ...household.notes,
              {
                id: crypto.randomUUID(),
                title,
                body,
                author: data.get("author").trim() || "小島居民",
                created: Date.now(),
                comments: [],
              },
            ])
          ) {
            form.reset();
            notify("你的心意，已經好好留下來了。");
          }
        }}
      >
        <input
          id="note-title"
          name="title"
          required
          maxLength={100}
          placeholder="幫這則記事取個名字"
          aria-label="記事標題"
        />
        <textarea
          id="note-body"
          name="body"
          required
          maxLength={5000}
          placeholder="重要的事、小小的心情，或一句想說的話…"
          aria-label="記事內容"
          rows={3}
        />
        <div className="form-bottom">
          <input
            id="note-author"
            name="author"
            maxLength={30}
            placeholder="你的暱稱（選填）"
            aria-label="記事作者"
          />
          <button className="primary-button" type="submit">
            <Icon name="plus" />
            留下記事
          </button>
        </div>
      </form>
      <div className="notes-list">
        {household.notes.length ? (
          [...household.notes]
            .sort((a, b) => b.created - a.created)
            .map((note) => (
              <article className="note-paper" key={note.id}>
                <div className="note-meta">
                  <span>
                    ✿ {note.author} ·{" "}
                    {new Date(note.created).toLocaleDateString("zh-TW")}
                  </span>
                  <button
                    className="tiny-button"
                    data-delete-note={note.id}
                    aria-label={`刪除記事 ${note.title}`}
                    onClick={() => {
                      if (confirm("要刪除這則記事和底下的留言嗎？"))
                        change(household.notes.filter((n) => n.id !== note.id));
                    }}
                  >
                    <Icon name="trash" />
                  </button>
                </div>
                <h3>{note.title}</h3>
                <p className="note-body">{note.body}</p>
                <div className="comment-section">
                  <div className="comment-heading">
                    <Icon name="message" /> {note.comments.length} 則溫暖回應
                  </div>
                  {note.comments.map((comment) => (
                    <div className="comment" key={comment.id}>
                      <span className="comment-avatar">♡</span>
                      <div>
                        <strong>{comment.author}</strong>
                        <p>{comment.text}</p>
                      </div>
                    </div>
                  ))}
                  <form
                    className="comment-form"
                    data-note={note.id}
                    onSubmit={(event) => {
                      event.preventDefault();
                      const form = event.currentTarget,
                        data = new FormData(form),
                        text = data.get("comment").trim();
                      if (!text) return;
                      const comment = {
                        id: crypto.randomUUID(),
                        text,
                        author: data.get("author").trim() || "小島居民",
                        created: Date.now(),
                      };
                      if (
                        change(
                          household.notes.map((n) =>
                            n.id === note.id
                              ? { ...n, comments: [...n.comments, comment] }
                              : n,
                          ),
                        )
                      ) {
                        form.reset();
                        notify("送出一點溫暖 ♡");
                      }
                    }}
                  >
                    <input
                      name="author"
                      placeholder="暱稱"
                      maxLength={30}
                      aria-label="留言暱稱"
                    />
                    <input
                      name="comment"
                      required
                      maxLength={1000}
                      placeholder="留一句暖暖的話…"
                      aria-label="留言內容"
                    />
                    <button className="round-button" aria-label="送出留言">
                      <Icon name="arrow" />
                    </button>
                  </form>
                </div>
              </article>
            ))
        ) : (
          <div className="empty-state">
            ✎<h3>有些話，值得留下</h3>
            <p>在上方新增第一則記事。</p>
          </div>
        )}
      </div>
    </>
  );
}

async function compressImage(file) {
  const bitmap = await createImageBitmap(file),
    ratio = Math.min(1, 1200 / Math.max(bitmap.width, bitmap.height)),
    canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * ratio);
  canvas.height = Math.round(bitmap.height * ratio);
  canvas.getContext("2d").drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  return canvas.toDataURL("image/jpeg", 0.78);
}
export function MemoriesPanel({ household, commit, notify, onView }) {
  const [image, setImage] = useState(null),
    [processing, setProcessing] = useState(false);
  return (
    <>
      <form
        id="memory-form"
        className="memory-form"
        onSubmit={(event) => {
          event.preventDefault();
          if (!image || processing) {
            notify("請先選擇照片，並等候處理完成。");
            return;
          }
          const form = event.currentTarget,
            data = new FormData(form),
            title = data.get("title").trim();
          if (!title) return;
          const memory = {
            id: crypto.randomUUID(),
            title,
            caption: data.get("caption").trim(),
            date: data.get("date"),
            image,
            created: Date.now(),
          };
          if (
            commit({ ...household, memories: [...household.memories, memory] })
          ) {
            setImage(null);
            form.reset();
            notify("把這一刻，收藏成永遠。");
          }
        }}
      >
        <label className="photo-upload" htmlFor="memory-photo">
          <input
            id="memory-photo"
            type="file"
            accept="image/*"
            required
            onChange={async (event) => {
              const input = event.currentTarget,
                file = input.files[0];
              setImage(null);
              if (!file) return;
              if (file.size > 15 * 1024 * 1024) {
                notify("請選擇 15 MB 以內的照片。");
                input.value = "";
                return;
              }
              setProcessing(true);
              try {
                setImage(await compressImage(file));
              } catch {
                notify("無法讀取這張照片，請選擇 JPG、PNG 或 WebP。");
                input.value = "";
              } finally {
                setProcessing(false);
              }
            }}
          />
          <div id="photo-preview">
            {image ? (
              <>
                <img src={image} alt="準備上傳的照片" />
                <span className="replace-photo">點選更換照片</span>
              </>
            ) : (
              <>
                <Icon name="upload" />
                <strong>
                  {processing ? "正在處理照片…" : "選一張喜歡的照片"}
                </strong>
                <span>點選上傳 · JPG、PNG、WebP · 最大 15 MB</span>
              </>
            )}
          </div>
        </label>
        <input
          id="memory-title"
          name="title"
          required
          maxLength={100}
          placeholder="這個美好片刻，叫什麼名字？"
          aria-label="回憶標題"
        />
        <textarea
          id="memory-caption"
          name="caption"
          rows={2}
          maxLength={2000}
          placeholder="記下這一天，想留住的心情…"
          aria-label="回憶文字"
        />
        <div className="form-bottom">
          <input
            id="memory-date"
            name="date"
            type="date"
            defaultValue={today}
            required
            aria-label="回憶日期"
          />
          <button
            className="primary-button"
            type="submit"
            disabled={processing}
          >
            <Icon name="heart" />
            收藏這一刻
          </button>
        </div>
      </form>
      <div className="memory-grid">
        {household.memories.length ? (
          [...household.memories]
            .sort((a, b) => b.created - a.created)
            .map((memory) => (
              <article className="polaroid" key={memory.id}>
                <button
                  className="photo-open"
                  data-photo={memory.id}
                  aria-label={`放大照片：${memory.title}`}
                  onClick={() => onView(memory)}
                >
                  <img src={memory.image} alt={memory.title} loading="lazy" />
                </button>
                <div className="memory-meta">
                  <span>
                    {prettyDate(memory.date)} · {memory.date.slice(0, 4)}
                  </span>
                  <button
                    className="tiny-button"
                    data-delete-memory={memory.id}
                    aria-label={`刪除回憶 ${memory.title}`}
                    onClick={() => {
                      if (confirm("要刪除這張照片與回憶嗎？"))
                        commit({
                          ...household,
                          memories: household.memories.filter(
                            (m) => m.id !== memory.id,
                          ),
                        });
                    }}
                  >
                    <Icon name="trash" />
                  </button>
                </div>
                <h3>{memory.title}</h3>
                <p>{memory.caption}</p>
              </article>
            ))
        ) : (
          <div className="empty-state memory-empty">
            <span>▧</span>
            <h3>我們的故事，從這一刻開始</h3>
            <p>
              一頓好吃的飯、一場散步，或一張傻傻的合照。
              <br />
              那些小小的瞬間，都值得被收藏。
            </p>
          </div>
        )}
      </div>
    </>
  );
}
export function PhotoLightbox({ memory, onClose }) {
  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-label={memory.title}
      onClick={onClose}
    >
      <button className="round-button" aria-label="關閉照片" autoFocus>
        <Icon name="close" />
      </button>
      <img src={memory.image} alt={memory.title} />
      <p>{memory.title}</p>
    </div>,
    document.body,
  );
}
