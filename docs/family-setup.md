# 登入與家庭空間設定

目前程式、資料庫 migration 與測試已備妥，但這個儲存庫尚未連接正式 Supabase 專案。公開設定留白時，網站保留訪客功能，「登入／家庭」會說明尚未開放，不會建立本機假帳號。

## 這次的範圍

- Supabase Auth：Email／密碼註冊、Email 驗證、登入、登出、忘記密碼及重設密碼回呼。
- 建立家庭、透過一次性邀請碼加入、家庭切換、成員名單。
- 建立者可改名、產生／撤銷邀請碼及移除家人；一般成員可離開家庭。建立者離開、轉移建立者與刪除家庭尚未提供。
- 所有家庭關係存於 PostgreSQL，權限由 RLS 與受限 RPC 檢查。登入者不能直接寫入成員、改自己的角色，或讀取其他家庭。
- 邀請碼 7 天有效、只能加入一次，只儲存 SHA-256 雜湊；原始邀請碼僅在產生當下回傳。加入使用資料列鎖，避免兩人同時使用同一邀請碼。
- 待辦、記事、照片與角色設定仍是本機資料，尚未串接雲端共享。它們依使用者與家庭分開儲存；訪客原有資料不會自動上傳、刪除或混進新家庭。登出後回到原訪客小島。

## 1. 建立 Supabase 專案

到 <https://supabase.com/dashboard> 建立帳號與新專案。專案資料庫密碼由你保管，不需要填進前端程式。

在 SQL Editor 執行儲存庫中的：

```
supabase/migrations/202610300001_family_spaces.sql
```

這個 migration 可重複執行，保留既有家庭資料。之後如有新 migration，請依檔名順序套用。

## 2. 設定 Email 登入與回呼網址

在 Authentication 的供應商設定啟用 Email 登入，保留 Email confirmation。

在 URL Configuration 設定：

- Site URL：`https://skylinkeming.github.io/my-fairy-land/`
- Redirect URLs：加入 `https://skylinkeming.github.io/my-fairy-land/`
- 如需本機開發，另外加入 `http://localhost:5173/` 與實際使用的本機網址。

程式會依目前網站目錄產生註冊驗證與密碼重設的回呼網址，支援 GitHub Pages 的 `/my-fairy-land/` 子目錄。

Supabase 內建寄信服務有收件人與寄送頻率限制。若要寄驗證信給非專案團隊的家人，請依專案設定接上自己的 SMTP 寄信服務，並測試驗證信與重設密碼信。不要以關閉 Email 驗證取代寄信設定。

## 3. 填入公開專案設定

在專案的 Connect／API 設定取得 **Project URL** 與 **publishable key**，填入：

```json
// src/family/project.json（JSON 檔內不要放這行註解）
{
  "url": "https://你的專案.supabase.co",
  "publishableKey": "sb_publishable_你的公開金鑰"
}
```

這兩項是瀏覽器會使用的公開設定，可隨前端發布；資料權限仍由資料庫 RLS 保護。**不要填 service_role、sb_secret 金鑰或資料庫密碼**。建置會拒絕使用高權限金鑰。

將公開設定留在這個版本控管檔案，後續建置與發布才不會因為工作環境缺少 `.env.local` 而把已啟用的登入關掉。

本機若要連接另一個測試專案，可複製 `.env.example` 為 `.env.local`，用 `VITE_SUPABASE_URL` 與 `VITE_SUPABASE_PUBLISHABLE_KEY` 成對覆寫；`.env.local` 不會提交。環境變數必須兩項一起提供，不會混用不同專案的 URL 與金鑰。

## 4. 建置與發布

設定完成後，執行測試與 `npm run build`，將原始碼提交至 `main`，再把 `dist/` 內容發布到 `gh-pages` 根目錄並保留 `.nojekyll`。網站原始碼維持在 `main`，`gh-pages` 只保留網站產物。後續交由 Codex 修改時，沿用每次驗證後發布的流程。

GitHub Pages 的發布來源應設定為 `gh-pages` 的根目錄。建置使用儲存庫內的公開專案設定，不需要高權限 Supabase 金鑰。

## 5. 正式啟用前的確認

用兩個可收信的 Email 在正式網站依序確認：

1. 註冊 → 收到驗證信 → 確認 Email → 登入。
2. A 建立家庭 → 產生邀請碼 → B 加入，兩邊看到相同成員名單。
3. B 不會看到建立者的管理按鈕，不能修改家庭名稱或新增邀請碼。
4. 已使用、已撤銷或已過期的邀請碼不能讓另一個人加入。
5. 登出／切換家庭不會看到另一個帳號／家庭的本機日常。
6. 忘記密碼的信件能回到正確網站目錄，並完成設定新密碼。

## 開發驗證

```sh
npm run test:unit
npm run test:family       # 真正 Supabase SDK + 攔截的測試 HTTP，不寄真實郵件
npm run test:family-db    # 獨立 PostgreSQL 16 Docker 容器，結束後刪除
npm run build
```

資料庫測試涵蓋 RLS、角色升級阻擋、邀請碼雜湊／失效／撤銷、移除成員立即失效、migration 重跑，以及兩個連線同時加入時只能成功一次。測試中的 `auth.uid()`／`auth.jwt()` 用測試連線模擬；正式部署使用 Supabase Auth 提供的函式，並未自行實作密碼或簽發 token。

目前尚未做過正式 Supabase 專案的寄信、回呼與登入實測；這項驗證必須在專案設定完成後補做。
