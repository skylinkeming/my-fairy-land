# React／Three.js 分工與遷移紀錄

這次依序將舊的整頁字串渲染拆開，讓介面與動畫各有自己的生命週期。

## 已完成

1. 建立 React 入口與應用狀態，把初始家庭資料和儲存格式移至 `household.js`。React 控制首頁、導覽、彈窗、提示、地圖控制與音效狀態。
2. 將待辦、清單／日曆、記事／留言、照片回憶／燈箱、居民卡片改為 React 元件與事件處理。資料寫入成功後才更新 React 狀態；不以 `innerHTML` 重建整頁或表單。
3. 以 `WorldViewport` 封裝場景建立、回呼與銷毀。呼叫 `createWorld` 取得命令 API；元件狀態變更不會重新建立場景。動態載入取消與 WebGL context lost 均有處理，保留插畫模式。
4. 問候框交給 React，Three.js 只回傳選中的居民索引。造型編輯器改為 React portal，設定變更傳給獨立的 `createShapePreview`；React 不參與逐幀繪製。
5. 移除舊的 `main.js` 與以 DOM 手工建立介面的 `resident-editor.js`。保留原本 CSS、語意標籤、localStorage `little-island-v1` / `little-island-shapes-v1`，以及居民更新時不清除舊家庭資料的行為。

## 邊界規則

- React：畫面、表單、資料、事件、讀寫設定、載入與錯誤狀態。
- Three.js：Canvas、場景與 GPU 資源、模型、活動位置、相機、raycasting、AnimationFrame。
- 預覽與主場景各有自己的 renderer / controls / ResizeObserver，effect cleanup 必須呼叫 `dispose()`。
- 減少動態效果的媒體偏好由 React 監聽並送給場景。靜態模式只在相機移動、尺寸或模型設定等畫面變化時重繪，避免空轉 GPU。
- 避免從動畫迴圈呼叫 React state setter。僅在活動、點選或載入狀態改變時推送事件。
- `#world-labels` 是空的 React host，內容與每幀投影 transform 由場景獨占。熱氣球提醒按鈕由 React 管理文字／事件，場景只改其投影位置。插畫 fallback 亦有專屬 host，避免雙方同時重寫同一區域。
- 靜態 SVG 圖示及居民插圖仍為集中管理的繪圖字串；有使用者名稱時先 escape。React 管理外層按鈕、資料與互動。

## 後續按需要逐步整理

可繼續把 `App` 拆成更小的首頁與控制列元件、把 Three.js 命令／事件轉成 TypeScript 型別，或拆分 `world.js` 的公園、居民與相機。這些不需要改變資料格式，也不需要把動畫位置放進 React state。

## 驗證

使用 `npm run test:unit`、`npm run build` 與既有 Playwright 功能測試，覆蓋待辦編輯與提醒、日曆、記事／留言、照片、娃娃點選問候、造型保存／匯入／匯出、手機版及 WebGL fallback。
