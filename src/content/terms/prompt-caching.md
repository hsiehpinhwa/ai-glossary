---
term: Prompt Caching
zh: 提示快取
aliases: [Context Caching, Prompt Cache]
category: prompt
summary: 把重複出現的 prompt 開頭暫存起來，下次直接重用以省錢、加速。
when_to_use:
  - 每次請求都帶著同一份長文件、長 system prompt 或工具定義
  - 長時間的 agent 對話，費用和等待時間越來越高
  - 看帳單時出現 cache read、cache write 這類計費
related:
  - { slug: api, rel: part-of }
  - { slug: system-prompt, rel: related }
  - { slug: token, rel: related }
  - { slug: agent-loop, rel: related }
  - { slug: inference, rel: related }
diagram_caption: 第一次請求把固定的開頭寫進快取；下一次開頭完全相同就直接讀快取，只要有一個字不同就得重新處理整段。
sources:
  - { title: "Anthropic — Prompt caching", url: "https://platform.claude.com/docs/en/build-with-claude/prompt-caching" }
  - { title: "Anthropic — How the agent loop works (Agent SDK)", url: "https://code.claude.com/docs/en/agent-sdk/agent-loop" }
needs_verification: []
last_verified: 2026-10-30
---
Prompt caching 是 API 端的省錢機制：當你連續送出的請求有一大段相同的開頭，例如工具定義、system prompt 或一份長文件，服務會把處理過的開頭暫存起來，下一次遇到完全相同的開頭就直接重用。依 Anthropic 文件，快取預設保留 5 分鐘，每次被使用就重新計時；讀取快取的價格只有一般輸入的一小部分，寫入則略貴。關鍵限制是開頭必須一字不差，只要前面改了一個字，之後的快取就失效，所以固定的內容要放前面、會變的放後面。Agent 每一輪都會把整段對話重送一次，正是快取最能發揮的情境；Claude Code 這類工具也會自動快取不變的 system prompt 與工具定義。
