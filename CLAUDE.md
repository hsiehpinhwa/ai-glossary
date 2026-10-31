# AI 名詞百科

Astro 靜態站。一個名詞 = `src/content/terms/<slug>.md` + `diagrams/<slug>.mmd`。設計來自 Ark Design 的 Nova 模組（`src/styles/nova.css`），首頁主視覺是名詞星圖（`src/lib/graph.ts`）。類別色在 `data/term-list.json` 的 `color`。

## 新增或修改名詞

1. 先把名詞加進 `data/term-list.json`（slug、term、category）。名單是唯一來源，evals 以它為準。
2. 寫 `src/content/terms/<slug>.md`，欄位見 `src/content.config.ts`；範例：`harness.md`、`pull-request.md`、`eval.md`。
3. 寫 `diagrams/<slug>.mmd`，跑 `npm run diagrams <slug>` 產生 `src/generated/diagrams/<slug>.svg`（SVG 要 commit，Vercel 不渲染）。
4. `npm run eval` 必須 0 errors；寫作中可用 `node evals/run.mjs --partial`。

## 寫作規則

- 繁體中文、台灣用語（程式、資料、使用者、影片、專案、預設）；技術術語保留英文。
- `summary`：一句話，≤ 40 字，說「它是什麼」。
- 內文（frontmatter 之後）：一段，180–220 字（中文字與英文單字各算 1，見 `src/lib/count.mjs`）。順序：它是什麼 → 怎麼運作 → 什麼時候會遇到／為什麼重要。寫給非工程師的 AI 使用者。
- 不寫套話（總而言之、值得注意的是、扮演重要角色、賦能、革命性）。不用形容詞填空。
- 產品名（Claude Code、Cursor、Codex）只當例子出現，不當主角。
- 每個事實都要能在 `sources` 找到依據；來源優先序：官方文件 > 原始論文 > 權威部落格。只用 https。
- 不確定的說法（年份、數字、命名起源、誰提出的）寫進 `needs_verification`，網站會標 ⚠️ 需查證。不知道就不要寫。
- 有常見歧義的詞（PR、loop、harness）寫 `disambiguation`。

## 關係與圖例

- `related` 至少 3 個，slug 必須在名單內；關係詞只能用：is-a、part-of、uses、runs、enables、prerequisite、contrasts、related。
- `contrasts` 是對稱關係：A contrasts B，B 也要寫 contrasts A。
- 圖例用 Mermaid（flowchart 優先，流程有先後時可用 sequenceDiagram），6–10 個節點，說明「什麼時候用」與「和誰互動」。
- 圖中代表其他名詞的節點，id 必須是該名詞的 slug，且該 slug 必須在 `related` 裡（evals 會檢查）。純說明用的節點用非 slug 的 id（如 `user`、`out1`）。
- 標籤用 `[文字]`，換行用 `<br/>`；不要用顏色或 classDef，配色由渲染腳本統一。
- `diagram_caption`：一到兩句，說明圖在講什麼。

## Evals

- `npm run eval`：結構、字數、關係圖一致性、圖例同步、簡體字與大陸用語、套話。
- `npm run build && npm run eval:ui`：每個方塊能打開、文字先於圖例、375/768/1280 無水平捲動、無 JS 可用、鍵盤操作。
- 事實查核：由獨立 agent 逐句比對 sources，結果記在 `evals/fact-check/<slug>.json`。
