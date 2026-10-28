# 我們的小島 · Our Little Island

溫暖的家族互動網站，以 Three.js 建立六角形 3D 群島。拖曳旋轉、滾輪縮放，點選小島標籤或功能卡片開啟日常。

## 開發

需要 Node.js 22 以上（目前以 24.19.0 驗證）。

```sh
npm ci
npm run dev
```

```sh
npm run build     # 產出 dist，可部署至靜態網站主機
npm run preview   # 預覽正式建置
npm test          # Chromium 功能測試
```

瀏覽器測試預設使用 `/usr/bin/chromium`，可透過 `CHROMIUM_PATH` 指定其他 Chromium 路徑。

## 功能

- 待辦：依新增時間由新到舊、完成／刪除、預定日期、月曆與月份切換。
- 記事：新增標題、內文、作者，並可留言及刪除記事。
- 家人朋友：兩隻小熊、一隻兔兔會在島上散步，可以打招呼。居民設定位於 `src/main.js` 的初始資料。
- 回憶：上傳照片、標題、日期與文字，可放大或刪除。照片在瀏覽器縮圖壓縮後儲存。
- 環境音、重設視角、手機版、鍵盤操作與減少動態效果偏好。

## 資料保存範圍

本版本是前端原型，使用目前瀏覽器的 localStorage（`little-island-v1`），沒有帳號、伺服器或跨裝置同步。清除網站資料會刪除內容。照片共享、多人使用與正式備份需接上資料庫、檔案儲存與登入權限。初次開啟提供三件示範待辦與一則示範記事；照片回憶從空白開始。

網站使用 Google Fonts，無法連線時會使用系統字型。島嶼、建築、植物與娃娃均由程式建立，不依賴外部模型。參考網址在開發環境受網路規則限制，作品依使用者描述自行設計。

## GitHub Pages 發布

原始碼保存在 `codex/family-island`，正式建置檔放在 `gh-pages` 分支。

第一次啟用：在 GitHub 儲存庫的 **Settings → Pages**，選擇 **Deploy from a branch**，分支選 **gh-pages**、目錄選 **/ (root)**，再儲存。預期網址為 `https://skylinkeming.github.io/my-fairy-land/`；是否已上線應以 GitHub Pages 的部署結果為準。

後續變更先執行 `npm ci`、`npm test`、`npm run build`，再把 `dist/` 內容更新至 `gh-pages`，並保留 `.nojekyll`。不要把原始 `index.html` 直接當作正式部署檔；它需要開發伺服器，正式檔位於 `dist/`。

若裝置不支援 WebGL、GPU 連線中斷或 3D 模組下載失敗，網站會改用可點選的插畫地圖。主程式無法下載時會顯示可讀取的重新載入畫面。
