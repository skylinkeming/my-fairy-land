# Google 登入與家庭空間設定

目前程式、資料庫 migration 與測試已備妥，但尚未連接正式 Supabase 專案及 Google OAuth。公開設定留白時，網站保留訪客功能，Google 登入尚未開放，不會建立本機假帳號。

## 這次的範圍

- 使用 Google 帳號登入，首次登入由 Supabase Auth 建立使用者；網站不再提供 Email／密碼註冊、忘記密碼或密碼重設。
- 每次登入顯示 Google 帳號選擇畫面。OAuth 使用 PKCE，回到網站後由 SDK 交換登入憑證；重新整理保留登入狀態，並可登出。
- 只要求基本身分、Email 及姓名資訊（openid、email、profile），不要求 Gmail、雲端硬碟或日曆存取權。
- 建立家庭、透過一次性邀請碼加入、家庭切換、成員名單。Google 登入本身不會讓使用者自動加入其他家庭。
- 建立者可改名、產生／撤銷邀請碼及移除家人；一般成員可離開家庭。建立者離開、轉移建立者與刪除家庭尚未提供。
- 所有家庭關係存於 PostgreSQL，權限由 RLS 與受限 RPC 檢查。姓名只是顯示文字，不能用 Google 個人資料或瀏覽器傳來的角色取得管理權限。
- 邀請碼 7 天有效、只能加入一次，只儲存 SHA-256 雜湊；原始邀請碼僅在產生當下回傳。加入使用資料列鎖，避免兩人同時使用同一邀請碼。
- 待辦改用 Supabase 家庭共享，同家庭的建立者與一般成員都可新增、編輯、完成、刪除。每 10 秒、重新聚焦頁面、回到前景及恢復網路時同步，也可按「重新同步」立即讀取。記事、照片與角色設定仍依使用者與家庭分開保存在本機。訪客與升級前的本機待辦不會自動上傳、刪除或混進共享清單；登出後回到原訪客小島。

## 1. 建立 Supabase 專案與資料表

到 <https://supabase.com/dashboard> 建立帳號與新專案。專案資料庫密碼由你保管，不需要填進前端程式。

在 SQL Editor **依序**執行：

1. `supabase/migrations/202610300001_family_spaces.sql`
2. `supabase/migrations/202610300002_google_names.sql`
3. `supabase/migrations/202610310001_family_todos.sql`

第二份 migration 讓建立／加入家庭時採用 Google 的姓名；第三份新增共享待辦。既有專案只需依序執行尚未套用的 migration，不會刪除既有家庭、成員或待辦。

## 2. 在 Google Cloud 建立 OAuth 用戶端

到 <https://console.cloud.google.com/> 建立或選擇專案，在 **Google Auth Platform**（部分介面稱為 APIs & Services → OAuth consent screen）設定應用程式名稱、聯絡 Email 與對象。

- 個人 Gmail 家庭通常選 **External／外部**對象。
- 在測試模式下，把每位家人的 Google Email 加入 **Test users／測試使用者**。
- 基本登入僅使用 `openid`、`email`、`profile`。不要新增 Gmail、Drive 等不需要的 API 權限。
- 若要長期對家人開放，確認 Audience 的發布狀態及 Google 顯示的發布／驗證要求；測試模式只允許名單內的帳號使用。

在 Clients／Credentials 建立 **OAuth 2.0 Client ID**，應用程式類型選 **Web application／網頁應用程式**。

設定：

- **Authorized JavaScript origins**：`https://skylinkeming.github.io`，不含 `/my-fairy-land/` 路徑。本機開發另加 `http://localhost:5173`。
- **Authorized redirect URIs**：使用 Supabase → Authentication → Sign In / Providers → Google 顯示的 **Callback URL**。一般為 `https://你的專案.supabase.co/auth/v1/callback`，請直接複製專案實際顯示的值。

注意：Google 的 redirect URI 指向 **Supabase callback**；它與下一節 Supabase 允許返回的**小島網址**是兩個不同位置，不能互換。

取得 Google **Client ID** 與 **Client secret**，只填入 Supabase 的 Google 供應商設定。**Client secret 不要放進前端、GitHub 或聊天訊息。**

## 3. 啟用 Supabase Google 登入與網站回呼

在 Supabase → Authentication → Sign In / Providers：

1. 啟用 Google，填入上一步的 Client ID／Client secret 並儲存。
2. 關閉 Email／密碼登入供應商，讓正式服務也只接受目前選用的 Google 登入。
3. 若曾暫停註冊，確認允許新使用者登入／建立帳號，讓家人的首次 Google 登入能成功。

不需要為這個 Google 登入流程設定註冊驗證信、重設密碼信或 SMTP。

在 Authentication → URL Configuration 設定：

- **Site URL**：`https://skylinkeming.github.io/my-fairy-land/`
- **Redirect URLs**：加入 `https://skylinkeming.github.io/my-fairy-land/`
- 本機開發另加入 `http://localhost:5173/`，或實際使用的本機網址。

程式會依目前網站目錄產生返回網址，保留 GitHub Pages 的 `/my-fairy-land/` 子目錄。開始登入與返回必須使用相同瀏覽器及網站來源，讓 SDK 能讀取 PKCE 驗證資料。

## 4. 填入網站公開設定

在 Supabase 的 Connect／API 設定取得 **Project URL** 與 **publishable key**，填入 `src/family/project.json`：

```json
{
  "url": "https://你的專案.supabase.co",
  "publishableKey": "sb_publishable_你的公開金鑰"
}
```

這兩項是瀏覽器使用的公開設定，可隨前端發布；資料權限仍由資料庫 RLS 保護。**不要填 Google Client secret、Supabase service_role／sb_secret 金鑰或資料庫密碼。** 建置會拒絕高權限 Supabase 金鑰。

將公開設定留在這個版本控管檔案，後續建置才不會因為工作環境缺少 `.env.local` 而把登入關掉。本機若要使用另一個測試專案，可複製 `.env.example` 為 `.env.local`，成對覆寫 `VITE_SUPABASE_URL` 與 `VITE_SUPABASE_PUBLISHABLE_KEY`；不會混用不同專案的 URL 與金鑰，`.env.local` 不會提交。

## 5. 建置、發布與正式驗證

設定完成後執行測試與 `npm run build`，將原始碼提交至 `main`，再把 `dist/` 內容發布到 `gh-pages` 根目錄並保留 `.nojekyll`。GitHub Pages 的發布來源維持 `gh-pages` 根目錄。後續交由 Codex 修改時，沿用每次驗證後發布的流程。

用兩個真實 Google 帳號在正式網站確認：

1. 按「使用 Google 帳號登入」→ 選擇帳號 → 同意 → 回到小島，姓名與 Email 正確；重新整理仍保持登入。
2. A 建立家庭 → 產生邀請碼 → 登出 → B 使用 Google 登入並貼上邀請碼加入，兩邊看到相同成員名單。
3. B 不會看到建立者管理按鈕，也不能修改家庭名稱或新增邀請碼。新 Google 帳號不會自動加入任何家庭。
4. 已使用、已撤銷或已過期的邀請碼無法讓另一人加入。
5. 登出／切換家庭不會混用另一個帳號／家庭的本機日常。
6. 取消 Google 同意能回到可用的小島，再按一次登入可以重試。

## 開發驗證

```sh
npm run test:unit
npm run test:family       # 真正 Supabase SDK + 模擬 OAuth／PKCE HTTP，不登入真實 Google 帳號
npm run test:family-db    # 獨立 PostgreSQL 16 Docker 容器，結束後刪除
npm run build
```

資料庫測試涵蓋 RLS、角色升級阻擋、Google 姓名、邀請碼失效／撤銷、移除成員立即失效、migration 重跑，以及並行加入只能成功一次。`auth.uid()`／`auth.jwt()` 由測試連線模擬；正式使用 Supabase Auth 提供的函式。

目前尚未完成正式 Google／Supabase 專案的 OAuth 同意、回呼與登入實測，需在外部專案設定完成後補做。

## 家庭待辦的啟用與驗收

完成三份 migration 並設定公開 Project URL / publishable key 後即可啟用，不需額外開啟 Supabase Realtime publication 或另設後端服務。公開設定可透過被忽略的 `.env.local` 成對覆寫，不可使用 service_role / sb_secret 金鑰。此儲存庫目前公開設定仍留白；程式與模擬測試通過不代表正式專案已建立或已套用 migration。

使用兩個不同瀏覽器／裝置及兩個真實 Google 帳號驗收：

1. A 建立家庭並邀請 B；A 新增有日期、無時間的待辦，B 在十秒左右或按「重新同步」後看到同一件事。
2. B 編輯文字與選填時間、完成待辦，A 同步後看到相同結果；任一成員可刪除。
3. 兩人同時編輯同一件事，後送出的一方應看到衝突提示；其輸入留在表單，取消後重開可讀取最新資料。
4. 切換家庭與登出後，不可出現另一家庭的共享待辦；移除 B 後，B 下一次讀寫應被拒絕，畫面清空並停用編輯。
5. 離線新增應顯示失敗並保留表單，不可顯示為已存入雲端。尚未提供離線佇列；重新載入前需恢復網路並重新送出。

伺服器採每筆遞增版本與原子批次變更，避免覆蓋其他成員更新；新增以穩定 UUID 重試，回應遺失後不會重複新增。建立／更新時間與操作者由資料庫提供，刪除已完成只刪除目前顯示的指定待辦。RLS 隔離不同家庭；伺服器 RPC 每次重新檢查成員身分。舊本機待辦保留於原 localStorage，尚未提供自動或手動匯入工具。

Google 行事曆同步尚未實作；目前 Google OAuth 僅要求基本登入資訊，沒有取得行事曆讀寫權限。
