import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  SHAPE_CONTROLS,
  SHAPE_STORAGE_KEY,
  RESIDENT_SHAPE_IDS,
  normalizeShape,
  parseShapeSettings,
  serializeShapeSettings,
} from "../resident-shape.js";

export default function ResidentEditor({
  initialIndex,
  storageKey=SHAPE_STORAGE_KEY,
  residents,
  settings,
  onChange,
  onClose,
  worldRef,
}) {
  const [selected, setSelected] = useState(initialIndex),
    [draft, setDraft] = useState(() =>
      normalizeShape(settings[RESIDENT_SHAPE_IDS[initialIndex]]),
    );
  const [status, setStatus] = useState(
    "拖曳娃娃旋轉，滾輪或雙指縮放；調好後按「儲存並套用」。",
  );
  const overlay = useRef(null),
    canvas = useRef(null),
    preview = useRef(null),
    file = useRef(null),
    tools = useRef(null),
    shell = useRef(null),
    returnFocus = useRef(null);
  const latest = useRef({ selected, draft, settings });
  latest.current = { selected, draft, settings };
  const dirty =
    JSON.stringify(draft) !==
    JSON.stringify(normalizeShape(settings[RESIDENT_SHAPE_IDS[selected]]));
  const closeRef = useRef(null);
  closeRef.current = () => {
    if (!dirty || confirm("還有未儲存的造型，確定要放棄這次調整嗎？"))
      onClose();
  };
  useLayoutEffect(() => {
    returnFocus.current = document.activeElement;
    document.body.classList.add("resident-editor-open");
    overlay.current.querySelector("select").focus();
    const keyboard = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopImmediatePropagation();
        closeRef.current();
      }
      if (event.key === "Tab") {
        const items = [
          ...overlay.current.querySelectorAll(
            'button,select,input,[tabindex="0"]',
          ),
        ].filter((item) => !item.disabled && item.getClientRects().length);
        if (event.shiftKey && document.activeElement === items[0]) {
          event.preventDefault();
          items.at(-1)?.focus();
        } else if (!event.shiftKey && document.activeElement === items.at(-1)) {
          event.preventDefault();
          items[0]?.focus();
        }
      }
    };
    document.addEventListener("keydown", keyboard, true);
    return () => {
      document.body.classList.remove("resident-editor-open");
      document.removeEventListener("keydown", keyboard, true);
      returnFocus.current?.focus();
    };
  }, []);
  useEffect(() => {
    let cancelled = false,
      runtime;
    import("../shape-preview.js")
      .then(({ createShapePreview }) => {
        if (cancelled) return;
        runtime = createShapePreview(canvas.current);
        preview.current = runtime;
        const value = latest.current;
        runtime.setResident(
          worldRef.current.getResidentTemplate(value.selected),
          value.draft,
        );
      })
      .catch(() => {
        if (!cancelled)
          setStatus("3D 預覽暫時無法啟動，請關閉編輯器後再試一次。");
      });
    return () => {
      cancelled = true;
      runtime?.dispose();
      preview.current = null;
    };
  }, [worldRef]);
  useEffect(() => {
    preview.current?.setShape(draft);
  }, [draft]);
  function select(index, nextSettings = settings) {
    const shape = normalizeShape(nextSettings[RESIDENT_SHAPE_IDS[index]]);
    setSelected(index);
    setDraft(shape);
    preview.current?.setResident(
      worldRef.current.getResidentTemplate(index),
      shape,
    );
    tools.current.scrollTop = 0;
    shell.current.scrollTop = 0;
    setStatus("拖曳娃娃旋轉，滾輪或雙指縮放；調好後按「儲存並套用」。");
  }
  function persist(next) {
    localStorage.setItem(storageKey, serializeShapeSettings(next));
    onChange(next);
  }
  function save() {
    try {
      persist({
        ...settings,
        [RESIDENT_SHAPE_IDS[selected]]: normalizeShape(draft),
      });
      setStatus("已儲存並套用！重新開啟網站也會保留。");
    } catch {
      setStatus("無法儲存，請確認瀏覽器允許儲存網站資料；可先匯出設定備份。");
    }
  }
  function exportSettings() {
    const blob = new Blob(
      [
        serializeShapeSettings({
          ...settings,
          [RESIDENT_SHAPE_IDS[selected]]: draft,
        }),
      ],
      { type: "application/json" },
    );
    const url = URL.createObjectURL(blob),
      link = document.createElement("a");
    link.href = url;
    link.download = "little-island-shapes.json";
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus("已匯出全部設定（包含目前預覽），可備份或交給我套用到網站。");
  }
  async function importSettings(event) {
    const input = event.currentTarget,
      selectedFile = input.files[0];
    if (!selectedFile) return;
    try {
      if (selectedFile.size > 100000)
        throw new Error("設定檔太大，請選擇角色編輯器匯出的 JSON。");
      const imported = parseShapeSettings(await selectedFile.text());
      if (!Object.keys(imported).length)
        throw new Error("設定檔沒有可用的娃娃造型。");
      if (!confirm("匯入將覆蓋檔案中娃娃的已存造型，確定要套用嗎？")) return;
      const next = { ...settings, ...imported };
      persist(next);
      select(selected, next);
      setStatus("已匯入並套用設定。");
    } catch (error) {
      setStatus(
        error instanceof SyntaxError
          ? "無法讀取 JSON，請選擇編輯器匯出的設定檔。"
          : error.message,
      );
    } finally {
      input.value = "";
    }
  }
  return createPortal(
    <div
      ref={overlay}
      className="resident-editor"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resident-editor-title"
      data-shape={JSON.stringify(draft)}
    >
      <div ref={shell} className="resident-editor-shell">
        <header>
          <div>
            <span>PLUSH STUDIO</span>
            <h2 id="resident-editor-title">娃娃造型工作室</h2>
          </div>
          <button
            type="button"
            data-editor-close
            aria-label="關閉造型編輯器"
            onClick={() => closeRef.current()}
          >
            關閉 ✕
          </button>
        </header>
        <div className="resident-editor-layout">
          <div className="resident-editor-stage">
            <canvas
              ref={canvas}
              tabIndex={0}
              aria-label="娃娃造型 3D 預覽，可拖曳旋轉"
            />
            <div className="resident-editor-views" aria-label="預覽角度">
              {[
                ["front", "正面"],
                ["side", "側面"],
                ["back", "背面"],
                ["angle", "斜角"],
              ].map(([view, label]) => (
                <button
                  key={view}
                  type="button"
                  data-view={view}
                  onClick={() => preview.current?.view(view)}
                >
                  {label}
                </button>
              ))}
            </div>
            <p>拖曳旋轉 · 滾輪／雙指縮放</p>
          </div>
          <div ref={tools} className="resident-editor-tools">
            <label className="resident-editor-picker">
              選擇娃娃
              <select
                aria-label="選擇要調整的娃娃"
                value={selected}
                onChange={(event) => {
                  if (
                    !dirty ||
                    confirm("切換娃娃會放棄未儲存的調整，確定要切換嗎？")
                  )
                    select(Number(event.target.value));
                }}
              >
                {residents.map((resident, index) => (
                  <option key={index} value={index}>
                    {resident.name}
                  </option>
                ))}
              </select>
            </label>
            <div className="resident-editor-sliders">
              {SHAPE_CONTROLS.map(([key, label, min, max]) => (
                <label
                  key={key}
                  className="resident-editor-slider"
                  hidden={key === "tailSize" && selected !== 5}
                >
                  <span>{label}</span>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    step="0.01"
                    aria-label={label}
                    value={draft[key]}
                    onChange={(event) => {
                      const value = Number(event.target.value);
                      setDraft((previous) => ({ ...previous, [key]: value }));
                      setStatus(
                        "預覽已更新，按「儲存並套用」才會更新島上的娃娃。",
                      );
                    }}
                  />
                  <output>
                    {key.endsWith("Y")
                      ? draft[key].toFixed(2)
                      : `${Math.round(draft[key] * 100)}%`}
                  </output>
                </label>
              ))}
            </div>
            <div className="resident-editor-actions">
              <button type="button" data-save onClick={save}>
                儲存並套用
              </button>
              <button
                type="button"
                data-reset
                onClick={() => {
                  setDraft(normalizeShape());
                  setStatus("已預覽原始造型；按「儲存並套用」後生效。");
                }}
              >
                恢復原始造型
              </button>
              <button type="button" data-undo onClick={() => select(selected)}>
                還原未儲存調整
              </button>
              <button type="button" data-export onClick={exportSettings}>
                匯出全部設定
              </button>
              <button
                type="button"
                data-import
                onClick={() => file.current.click()}
              >
                匯入設定
              </button>
              <input
                ref={file}
                type="file"
                accept=".json,application/json"
                hidden
                onChange={importSettings}
              />
            </div>
            <p className="resident-editor-note">
              設定儲存在此瀏覽器，會套用到島上的 3D
              娃娃。可匯出備份，或把設定檔交給我套用到網站。家人朋友卡片的平面插圖維持原樣。
            </p>
            <p data-editor-status role="status" aria-live="polite">
              {status}
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
