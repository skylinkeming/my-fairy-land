import React, { useEffect, useRef, useState } from "react";
import { icon } from "./markup.js";
import { RESIDENT_GREETINGS } from "../residents.js";
import { showIslandFallback } from "../world-fallback.js";

function IllustratedMap({ onSelect }) {
  const host = useRef(null);
  useEffect(() => {
    // The illustration and projected map labels have their own exclusive DOM host.
    showIslandFallback(host.current, onSelect, icon);
    return () => host.current?.replaceChildren();
  }, [onSelect]);
  return <div ref={host} className="illustration-host" />;
}
function TodoReminder({ count, onSelect }) {
  return (
    <button
      id="todo-reminder"
      className="todo-reminder"
      hidden={!count}
      aria-label={`今天與24小時內有 ${count} 件未完成待辦，開啟提醒`}
      onClick={onSelect}
    >
      <svg
        className="reminder-balloon-art"
        viewBox="0 0 90 125"
        aria-hidden="true"
      >
        <path d="M21 65 34 103m35-38-13 38" stroke="#ad916b" strokeWidth="2" />
        <path d="M33 101h25l-3 16H36Z" fill="#bc9c70" />
        <ellipse cx="45" cy="39" rx="34" ry="39" fill="#ebc469" />
        <path
          d="M45 0c-24 21-24 56 0 78M45 0c24 21 24 56 0 78"
          fill="#f7df95"
        />
        <text
          x="45"
          y="53"
          textAnchor="middle"
          fill="#957744"
          fontSize="39"
          fontWeight="bold"
        >
          !
        </text>
      </svg>
      <span className="reminder-caption">
        <span className="reminder-exclamation">!</span>
        <span>
          <strong>
            <span id="reminder-count">{count}</span> 件小事等你
          </strong>
          <small>今天與 24 小時內</small>
        </span>
        <span>↗</span>
      </span>
    </button>
  );
}
export function WorldViewport({
  worldRef,
  residents,
  count,
  onSelect,
  onReminder,
  onVisit,
  onMode,
  onReady,
  onEdit,
  shapes,
  suspended,
}) {
  const host = useRef(null),
    callbacks = useRef({
      onSelect,
      onReminder,
      onVisit,
      onMode,
      onReady,
      onEdit,
      shapes,
      suspended,
    });
  callbacks.current = {
    onSelect,
    onReminder,
    onVisit,
    onMode,
    onReady,
    onEdit,
    suspended,
  };
  const [reducedMotion, setReducedMotion] = useState(
    () => matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const reducedRef = useRef(reducedMotion);
  reducedRef.current = reducedMotion;
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const changed = () => setReducedMotion(media.matches);
    media.addEventListener("change", changed);
    return () => media.removeEventListener("change", changed);
  }, []);
  const [fallback, setFallback] = useState(false),
    [ready, setReady] = useState(false),
    [visit, setVisit] = useState(null);
  const countRef = useRef(count);
  countRef.current = count;
  const shapesRef = useRef(shapes);
  shapesRef.current = shapes;
  useEffect(() => {
    let cancelled = false,
      runtime = null;
    const canvas = host.current.querySelector("canvas");
    function illustrated() {
      runtime?.dispose();
      runtime = null;
      worldRef.current = null;
      if (cancelled) return;
      setVisit(null);
      setFallback(true);
      setReady(true);
      callbacks.current.onMode({
        mode: "illustrated",
        label: "插畫模式 · 娃娃們在島上休息",
      });
      callbacks.current.onReady(false);
    }
    function lost(event) {
      event.preventDefault();
      illustrated();
    }
    import("../world.js")
      .then(({ createWorld }) => {
        if (cancelled) return;
        runtime = createWorld(
          host.current,
          (id) => callbacks.current.onSelect(id),
          icon,
          () => callbacks.current.onReminder(),
          {
            onResidentSelect: (index) => callbacks.current.onVisit(index),
            onVisitChange: (index) =>
              setVisit(
                index === null
                  ? null
                  : {
                      index,
                      name: residents[index]?.name || "小島居民",
                      greeting: RESIDENT_GREETINGS[index],
                    },
              ),
            onEditResident: (index) => callbacks.current.onEdit(index),
            residentShapes: shapesRef.current,
            reducedMotion: reducedRef.current,
            isUiCovered: () => callbacks.current.suspended,
            onActivityChange: (value) => callbacks.current.onMode(value),
            onReady: () => setReady(true),
          },
        );
        worldRef.current = runtime;
        runtime.setTodoReminder(countRef.current);
        callbacks.current.onReady(true);
        canvas.addEventListener("webglcontextlost", lost, { once: true });
      })
      .catch((error) => {
        console.warn("3D 小島暫時無法載入，改用插畫模式。", error);
        illustrated();
      });
    return () => {
      cancelled = true;
      canvas.removeEventListener("webglcontextlost", lost);
      runtime?.dispose();
      worldRef.current = null;
      // Three.js only owns the projected labels inside this empty React host.
      host.current?.querySelector("#world-labels")?.replaceChildren();
    };
  }, [worldRef, residents]);
  useEffect(() => {
    worldRef.current?.setTodoReminder(count);
  }, [count, worldRef]);
  useEffect(() => {
    worldRef.current?.setResidentShapes(shapes);
  }, [shapes, worldRef]);
  useEffect(() => {
    worldRef.current?.setReducedMotion(reducedMotion);
  }, [reducedMotion, worldRef]);
  return (
    <div
      id="world"
      ref={host}
      className={fallback ? "illustrated-world" : undefined}
      data-render-mode={fallback ? "illustrated" : undefined}
      data-art-style={fallback ? "catan-inspired" : undefined}
      aria-label="可拖曳旋轉、縮放與點選的 3D 家族小島"
    >
      {fallback ? (
        <IllustratedMap onSelect={onSelect} />
      ) : (
        <>
          <canvas id="world-canvas" />
          <div id="world-labels" />
        </>
      )}
      <TodoReminder count={count} onSelect={onReminder} />
      {!ready && (
        <div className="world-loading">
          <span>✿</span> 正在準備你的小島…
        </div>
      )}
      <section
        className="resident-dialog"
        hidden={!visit}
        aria-label="娃娃問候"
      >
        <div role="status">
          <strong>{visit?.name}</strong>
          <p>{visit?.greeting}</p>
        </div>
        <small>拖曳旋轉視角，從各個方向看看我 ♡</small>
        <button
          type="button"
          onClick={() => worldRef.current?.endResidentVisit()}
        >
          繼續去玩吧
        </button>
        <button
          type="button"
          onClick={() => worldRef.current?.editResident(visit.index)}
        >
          調整造型
        </button>
      </section>
    </div>
  );
}
