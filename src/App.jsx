import {FamilyPanel} from './ui/FamilyPanel.jsx';
import {useFamilyWorkspace} from './family/useFamilyWorkspace.js';
import {familyScope} from './family/api.js';
import {useFamilyTodos} from './family/useFamilyTodos.js';
import {useFamilyShapes} from './family/useFamilyShapes.js';
import React, {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { parseShapeSettings } from "./resident-shape.js";
import { loadHousehold, islands } from "./household.js";
import { getUpcomingTodos } from "./todo-reminders.js";
import { Icon } from "./ui/Icon.jsx";
import { WorldViewport } from "./ui/WorldViewport.jsx";
import { FriendsPanel } from "./ui/FriendsPanel.jsx";
import {
  TodosPanel,
  NotesPanel,
  MemoriesPanel,
  PhotoLightbox,
} from "./ui/Journals.jsx";

const ResidentEditor = lazy(() => import("./ui/ResidentEditor.jsx"));

function useSound(notify) {
  const context = useRef(null),
    nodes = useRef([]),
    [playing, setPlaying] = useState(false);
  useEffect(
    () => () => {
      nodes.current.forEach((node) => node.stop());
      context.current?.close();
    },
    [],
  );
  async function toggle() {
    try {
      if (context.current?.state === "running") {
        await context.current.suspend();
        setPlaying(false);
        return;
      }
      if (!context.current) {
        const audio = new AudioContext();
        context.current = audio;
        const gain = audio.createGain();
        gain.gain.value = 0.035;
        gain.connect(audio.destination);
        [261.63, 329.63, 392, 523.25].forEach((frequency, index) => {
          const oscillator = audio.createOscillator(),
            volume = audio.createGain();
          oscillator.type = "sine";
          oscillator.frequency.value = frequency;
          volume.gain.value = 0.12;
          oscillator.connect(volume);
          volume.connect(gain);
          oscillator.start();
          const modulation = audio.createOscillator(),
            depth = audio.createGain();
          modulation.frequency.value = 0.12 + index * 0.025;
          depth.gain.value = 0.08;
          modulation.connect(depth);
          depth.connect(volume.gain);
          modulation.start();
          nodes.current.push(oscillator, modulation);
        });
      }
      await context.current.resume();
      setPlaying(true);
      notify("把音量放輕，陪小島慢慢呼吸。");
    } catch {
      notify("這個瀏覽器暫時無法播放環境音。");
    }
  }
  return { playing, toggle };
}
function IslandModal({ panel, photoOpen, onClose, children, sharedTodos }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    if (panel) ref.current?.focus();
  }, [panel]);
  const island = islands.find((item) => item.id === panel?.id);
  return (
    <div
      className="modal-overlay"
      id="modal"
      hidden={!panel}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        ref={ref}
        className="island-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="panel-title"
        tabIndex={-1}
        onKeyDown={(event) => {
          if (event.key !== "Tab" || photoOpen) return;
          const elements = [
            ...ref.current.querySelectorAll(
              'a[href],button,input,textarea,[tabindex="0"]',
            ),
          ].filter(
            (element) => !element.disabled && element.getClientRects().length,
          );
          if (
            event.shiftKey &&
            (document.activeElement === elements[0] ||
              document.activeElement === ref.current)
          ) {
            event.preventDefault();
            elements.at(-1)?.focus();
          } else if (
            !event.shiftKey &&
            document.activeElement === elements.at(-1)
          ) {
            event.preventDefault();
            elements[0]?.focus();
          }
        }}
      >
        <header className="panel-header">
          <div>
            <span className="section-kicker" id="panel-kicker">
              {island?.en}
            </span>
            <h2 id="panel-title">
              {island && (
                <>
                  <span className={`panel-icon ${island.color}`}>
                    <Icon name={island.id} />
                  </span>
                  {island.title}
                </>
              )}
            </h2>
            <p id="panel-subtitle">{island?.tag}</p>
          </div>
          <button
            className="round-button close-button"
            id="close-panel"
            aria-label="關閉"
            onClick={onClose}
          >
            <Icon name="close" />
          </button>
        </header>
        <div id="panel-content">{children}</div>
        <div className="panel-footer">
          <Icon name="leaf" /> 小小的日常，好好收藏{" "}
          <span>{sharedTodos ? "待辦與同一家庭共享；記事與照片儲存在這個瀏覽器" : "資料儲存在這個瀏覽器"}</span>
        </div>
      </section>
    </div>
  );
}
export default function App() {
  const workspace=useFamilyWorkspace();
  const [familyOpen,setFamilyOpen]=useState(false);
  const openFamily=useCallback(()=>setFamilyOpen(true),[]),closeFamily=useCallback(()=>setFamilyOpen(false),[]);
  const scope=familyScope(workspace.user?.id,workspace.activeFamily?.id,workspace.ready);
  useEffect(()=>{if(workspace.ready && ((workspace.user && !workspace.activeFamily) || workspace.error))setFamilyOpen(true);},[workspace.ready,workspace.user?.id,workspace.activeFamily?.id,workspace.error]);
  return <>
    {workspace.ready?<IslandApp key={scope.key} workspace={workspace} scope={scope} familyOpen={familyOpen} onFamilyOpen={openFamily}/>:<main className="family-startup"><span aria-hidden="true">⌂</span><p role="status">正在開啟你的小島…</p><button id="family-account" className="secondary-button" onClick={openFamily}>帳號與家庭</button></main>}
    {familyOpen&&<FamilyPanel workspace={workspace} onClose={closeFamily}/>}
  </>;
}
function IslandApp({workspace,scope,familyOpen,onFamilyOpen}) {
  const [localHousehold, setHousehold] = useState(()=>loadHousehold(scope.storageKey)),
    [panel, setPanel] = useState(null),
    [photo, setPhoto] = useState(null);
  const [expanded, setExpanded] = useState(false),
    [pan, setPan] = useState(false),
    [interiors, setInteriors] = useState(false),
    [ready, setReady] = useState(false);
  const [activity, setActivity] = useState({ label: "娃娃們正在準備出門…" }),
    [toast, setToast] = useState(null),
    [clock, setClock] = useState(Date.now());
  const [editor, setEditor] = useState(null),
    [localShapes, setLocalShapes] = useState(() => {
      try {
        const value = localStorage.getItem(scope.shapesKey);
        return value ? parseShapeSettings(value) : {};
      } catch {
        return {};
      }
    });
  const shared=Boolean(workspace.user && workspace.activeFamily);
  const familyTodos=useFamilyTodos(workspace.client,workspace.activeFamily?.id);
  const familyShapes=useFamilyShapes(workspace.client,workspace.activeFamily?.id);
  const shapes=useMemo(()=>shared?{...localShapes,...familyShapes.settings}:localShapes,[shared,localShapes,familyShapes.settings]);
  const [shapeBackup]=useState(()=>{
    if(Object.keys(localShapes).length)return localShapes;
    try {const value=localStorage.getItem('little-island-shapes-v1');return value?parseShapeSettings(value):{};}catch{return {};}
  });
  const household=shared?{...localHousehold,todos:familyTodos.todos}:localHousehold;
  const worldRef = useRef(null),
    residents = useRef(household.residents),
    returnFocus = useRef(null),
    panelId = useRef(0),
    toastId = useRef(0);
  const notify = useCallback(
    (text) => setToast({ id: ++toastId.current, text }),
    [],
  );
  const editShape=useCallback(index=>{
    if(!scope.editable){onFamilyOpen();notify("請先建立或加入家庭，再儲存家庭娃娃造型。");return;}
    setEditor(index);
  },[scope.editable,onFamilyOpen,notify]);
  const commit = useCallback(
    (next) => {
      if(!scope.editable){onFamilyOpen();notify("先建立或加入家庭，再記下你們的日常。");return false;}
      try {
        const local=shared?{...next,todos:localHousehold.todos}:next;
        localStorage.setItem(scope.storageKey, JSON.stringify(local));
        setHousehold(local);
        return true;
      } catch {
        notify("儲存空間不足，請刪除一些照片後再試一次。");
        return false;
      }
    },
    [notify,scope.storageKey,scope.editable,onFamilyOpen,shared,localHousehold.todos],
  );
  useEffect(() => {worldRef.current?.setInteriorsVisible(interiors);}, [interiors,ready]);
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(timer);
  }, [toast]);
  useEffect(() => {
    const timer = setInterval(() => setClock(Date.now()), 60000),
      visible = () => {
        if (!document.hidden) setClock(Date.now());
      };
    document.addEventListener("visibilitychange", visible);
    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", visible);
    };
  }, []);
  useLayoutEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(panel));
    return () => document.body.classList.remove("modal-open");
  }, [panel]);
  useLayoutEffect(() => {
    document.body.classList.toggle("map-open", expanded);
    return () => document.body.classList.remove("map-open");
  }, [expanded]);
  useEffect(() => {
    document.documentElement.dataset.appReady = "true";
    return () => {
      delete document.documentElement.dataset.appReady;
    };
  }, []);
  const closePanel = useCallback((restoreFocus = true) => {
    setPanel(null);
    if (restoreFocus === false) return;
    requestAnimationFrame(() => {
      if (returnFocus.current?.isConnected) returnFocus.current.focus();
    });
  }, []);
  const openPanel = useCallback((id, options = {}) => {
    if(id!=="friends" && !scope.editable){onFamilyOpen();return;}
    if (!islands.some((island) => island.id === id)) return;
    returnFocus.current = document.activeElement;
    setPanel({ id, ...options, instance: ++panelId.current });
    worldRef.current?.focusIsland(id);
  }, [scope.editable,onFamilyOpen]);
  const expandMap = useCallback((value) => {
    setExpanded(value);
    if (!value) {
      worldRef.current?.endResidentVisit();
      requestAnimationFrame(() =>
        document.querySelector("#map-expand")?.focus(),
      );
    }
  }, []);
  useEffect(() => {
    const keydown = (event) => {
      if (event.key !== "Escape" || editor !== null) return;
      if (photo) setPhoto(null);
      else if (panel) closePanel();
      else expandMap(false);
    };
    document.addEventListener("keydown", keydown);
    return () => document.removeEventListener("keydown", keydown);
  }, [photo, panel, editor, closePanel, expandMap]);
  const onVisit = useCallback(() => {
    closePanel(false);
    setExpanded(true);
    setPan(false);
  }, [closePanel]);
  const onMode = useCallback((value) => setActivity(value), []),
    onReady = useCallback((value) => setReady(value), []);
  const onReminder = useCallback(
    () => openPanel("todo", { upcoming: true }),
    [openPanel],
  );
  const sound = useSound(notify),
    count = getUpcomingTodos(household.todos, new Date(clock)).length;
  const counts = {
    todo: `${household.todos.filter((todo) => !todo.done).length} 件小事，等我們完成`,
    note: `${household.notes.length} 則暖心記事`,
    friends: `${household.residents.length} 位可愛居民 ・ 在小島上生活`,
    memories: household.memories.length
      ? `${household.memories.length} 個閃閃發光的片刻`
      : "一起收藏第一個美好",
  };
  const inspect = (index) => {
    closePanel(false);
    setExpanded(true);
    setPan(false);
    worldRef.current?.focusResident(index);
    notify(
      `正在看著 ${household.residents[index].name} ♡ 拖曳可從不同角度看看牠`,
    );
    requestAnimationFrame(() => document.querySelector("#reset")?.focus());
  };
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#" aria-label="我們的小島首頁">
          <span className="brand-mark">
            <Icon name="home" />
            <i />
          </span>
          <span>
            我們的小島<small>OUR LITTLE ISLAND</small>
          </span>
        </a>
        <nav aria-label="主要選單">
          <button
            className="nav-item selected"
            data-home
            onClick={() => {
              closePanel();
              window.scrollTo({ top: 0, behavior: "smooth" });
              worldRef.current?.reset();
            }}
          >
            小島首頁
          </button>
          <button
            className="nav-item"
            data-open="todo"
            onClick={() => openPanel("todo")}
          >
            日常小事
          </button>
          <button
            className="nav-item"
            data-open="memories"
            onClick={() => openPanel("memories")}
          >
            回憶收藏
          </button>
        </nav>
        <button id="family-account" className="family-account-button" onClick={()=>{closePanel(false);worldRef.current?.endResidentVisit();onFamilyOpen();}}>
          <span aria-hidden="true">⌂</span><span>{workspace.activeFamily?.name || (workspace.user?'我的家庭':'登入／家庭')}</span>
        </button>
        <button
          className="resident-pill"
          data-open="friends"
          onClick={() => openPanel("friends")}
        >
          <span className="avatar">ʕ•ᴥ•ʔ</span>
          <span>小島居民</span>
          <span className="online-dot" />
        </button>
      </header>
      <main>
        {workspace.user&&<div className="family-context"><strong>{workspace.activeFamily?.name||"尚未加入家庭"}</strong><span>{workspace.activeFamily?"待辦與娃娃造型和家人共享；記事與照片仍保存在此瀏覽器。":"建立或加入家庭，開始一起生活。"}</span><button onClick={onFamilyOpen}>家庭空間</button></div>}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span /> A FAMILY WORLD, PIECE BY PIECE
            </div>
            <h1 id="hero-title">
              把日子過成
              <br />
              我們喜歡的
              <span className="handwritten">
                模樣
                <svg viewBox="0 0 160 15">
                  <path d="M2 10Q75-2 155 8M12 14Q80 4 141 11" />
                </svg>
              </span>
              <span className="title-dot">。</span>
            </h1>
            <p className="hero-description">
              在這座小小的島上，
              <br />
              一起記住日常、分享心事，收藏每一個美好。
              <br />
              因為有你，平凡也會閃閃發光。
            </p>
            <button
              className="primary-button"
              id="explore"
              onClick={() => {
                worldRef.current?.tour();
                document
                  .querySelector(".islands-section")
                  ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
                notify("歡迎回家！點選小島上的標籤，開始逛逛吧。");
              }}
            >
              來小島走走 <Icon name="arrow" />
            </button>
            <div className="island-signoff">
              <span className="little-flower">✿</span>
              <span>不必趕路，這裡一直為你留著位置。</span>
            </div>
          </div>
          <div className={`world-wrap ${expanded ? "map-expanded" : ""}`}>
            <div className="board-legend" aria-label="桌遊地形圖例">
              {[
                ["forest", "森林"],
                ["grain", "麥田"],
                ["pasture", "牧場"],
                ["mountain", "山地"],
                ["clay", "紅土"],
              ].map(([terrain, name]) => (
                <span key={terrain} data-terrain={terrain}>
                  {name}
                </span>
              ))}
            </div>
            <div
              id="resident-activity"
              className="resident-activity"
              role="status"
            >
              {activity.label}
            </div>
            <div className="weather-pill">
              <Icon name="sun" />
              <span>今日島上，晴時有你</span>
              <span className="weather-separator" />
              <span>24°</span>
            </div>
            <WorldViewport
              worldRef={worldRef}
              residents={residents.current}
              count={count}
              onSelect={openPanel}
              onReminder={onReminder}
              onVisit={onVisit}
              onMode={onMode}
              onReady={onReady}
              onEdit={editShape}
              shapes={shapes}
              suspended={Boolean(panel) || editor !== null || familyOpen}
            />
            <div className="map-caption">
              <span className="live-dot" /> OUR LITTLE WORLD{" "}
              <span className="caption-line" /> EST. 2026
            </div>
            <div className="map-controls">
              <button
                id="map-expand"
                className="map-expand-button"
                aria-pressed={expanded}
                onClick={() => expandMap(!expanded)}
              >
                {expanded ? "收起地圖 ↙" : "展開地圖 ↗"}
              </button>
              <span className="control-divider" />
              <button
                id="map-pan"
                className="map-expand-button"
                aria-pressed={pan}
                disabled={!ready}
                onClick={() => {
                  setPan(!pan);
                  worldRef.current?.setPanMode(!pan);
                }}
              >
                {pan ? "切換旋轉" : "移動地圖"}
              </button>
              <button
                id="watch-residents"
                className="map-expand-button"
                aria-label="看看娃娃"
                disabled={!ready}
                onClick={() => {
                  setExpanded(true);
                  worldRef.current?.watchResidents();
                }}
              >
                看看娃娃 ♡
              </button>
              <button
                id="view-interiors"
                className="map-expand-button"
                aria-pressed={interiors}
                disabled={!ready}
                title="查看家具；有人進屋時會自動掀開屋頂"
                onClick={()=>setInteriors(!interiors)}
              >
                {interiors ? "自動屋頂" : "查看室內"}
              </button>
              <button
                id="sound"
                className="round-button"
                aria-label={sound.playing ? "關閉小島環境音" : "開啟小島環境音"}
                title="環境音"
                onClick={sound.toggle}
              >
                <Icon name={sound.playing ? "volume" : "muted"} />
              </button>
              <span className="control-divider" />
              <button
                id="zoom-out"
                className="round-button text-icon"
                aria-label="縮小"
                disabled={!ready}
                onClick={() => worldRef.current?.zoom(1 / 1.15)}
              >
                −
              </button>
              <button
                id="zoom-in"
                className="round-button text-icon"
                aria-label="放大"
                disabled={!ready}
                onClick={() => worldRef.current?.zoom(1.15)}
              >
                +
              </button>
              <button
                id="reset"
                className="round-button"
                aria-label="重設視角"
                title="重設視角"
                disabled={!ready}
                onClick={() => worldRef.current?.reset()}
              >
                <Icon name="reset" />
              </button>
            </div>
            <div className="map-help">
              <Icon name="pin" />{" "}
              {activity.mode === "illustrated" ? (
                "插畫模式 · 點選小島，繼續探索我們的日常"
              ) : (
                <>
                  點選小島，發現我們的日常{" "}
                  <span>・ 拖曳旋轉 / 切換移動地圖平移 / 滾輪或雙指縮放</span>
                </>
              )}
            </div>
          </div>
        </section>
        <section className="islands-section" aria-labelledby="islands-heading">
          <div className="section-top">
            <div>
              <span className="section-kicker">LIFE HAPPENS HERE</span>
              <h2 id="islands-heading">
                小島上的每一天 <span>Daily life on our island</span>
              </h2>
            </div>
            <span className="section-note">
              四座小島，裝著我們的大大小小 <Icon name="heart" />
            </span>
          </div>
          <div className="island-grid">
            {islands.map((island) => (
              <button
                key={island.id}
                className={`island-card ${island.color}`}
                data-open={island.id}
                onClick={() => openPanel(island.id)}
              >
                <div className="card-top">
                  <span className="card-icon">
                    <Icon name={island.id} />
                  </span>
                  <span className="card-number">{island.num}</span>
                </div>
                <span className="card-en">{island.en}</span>
                <h3>{island.title}</h3>
                <p>{island.desc}</p>
                <div className="card-bottom">
                  <span id={`count-${island.id}`}>{counts[island.id]}</span>
                  <span className="card-arrow">
                    <Icon name="arrow" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>
        <section className="today-strip">
          <span className="strip-flower">✿</span>
          <div>
            <span className="section-kicker">A NOTE FOR TODAY</span>
            <p>生活不一定每天都很特別，但每天都可以有一點可愛。</p>
          </div>
          <span className="strip-signature">with love, from our island ♡</span>
        </section>
      </main>
      <footer>
        <span>
          <Icon name="leaf" /> 我們的小島 <span className="footer-dot">·</span>{" "}
          每一天，都好好在一起。
        </span>
        <span>
          A little home for our favorite people.{" "}
          <span className="footer-heart">♡</span>
        </span>
      </footer>
      <IslandModal
        panel={panel}
        photoOpen={Boolean(photo)}
        onClose={closePanel}
        sharedTodos={shared}
      >
        {panel?.id === "todo" && (
          <TodosPanel
            key={panel.instance}
            household={household}
            commit={commit}
            notify={notify}
            upcoming={panel.upcoming}
            shared={shared ? {...familyTodos,legacyCount:localHousehold.todos.length} : null}
          />
        )}
        {panel?.id === "note" && (
          <NotesPanel household={household} commit={commit} notify={notify} />
        )}
        {panel?.id === "memories" && (
          <MemoriesPanel
            household={household}
            commit={commit}
            notify={notify}
            onView={setPhoto}
          />
        )}
        {panel?.id === "friends" && (
          <FriendsPanel
            residents={household.residents}
            worldRef={worldRef}
            ready={ready}
            onInspect={inspect}
            onEdit={(index) => {
              closePanel(false);
              worldRef.current?.editResident(index);
            }}
            notify={notify}
          />
        )}
      </IslandModal>
      {editor !== null && (
        <Suspense
          fallback={<div className="world-loading">正在開啟造型工作室…</div>}
        >
          <ResidentEditor
            initialIndex={editor}
            residents={household.residents}
            settings={shapes}
            storageKey={scope.shapesKey}
            onChange={setLocalShapes}
            cloud={shared?familyShapes:null}
            localBackup={shapeBackup}
            onClose={() => setEditor(null)}
            worldRef={worldRef}
          />
        </Suspense>
      )}
      {photo && <PhotoLightbox memory={photo} onClose={() => setPhoto(null)} />}
      <div className={`toast ${toast ? "show" : ""}`} id="toast" role="status">
        {toast?.text}
      </div>
    </>
  );
}
