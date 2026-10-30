---
term: Headless Mode
zh: 無介面模式
aliases: [Non-interactive Mode, Print Mode]
category: coding
summary: 不開互動介面，用一行指令或程式讓 coding agent 跑完任務並輸出結果。
when_to_use:
  - 想在 CI 裡讓 AI 自動審查 PR、修 lint 或翻譯字串
  - 寫腳本批次處理很多檔案或專案
  - 把 AI 接進自己的程式，把結果以 JSON 交給下一步處理
related:
  - { slug: cli, rel: uses }
  - { slug: ci-cd, rel: enables }
  - { slug: permission-mode, rel: uses }
  - { slug: structured-output, rel: uses }
  - { slug: sdk, rel: related }
  - { slug: coding-agent, rel: related }
diagram_caption: CI、排程或腳本以一行指令啟動 agent，事先設好的權限決定它能用哪些工具，結果以文字或 JSON 輸出，交給下一個步驟。
sources:
  - { title: "Claude Code Docs — Run Claude Code programmatically", url: "https://code.claude.com/docs/en/headless" }
  - { title: "Claude Code Docs — Overview", url: "https://code.claude.com/docs/en/overview" }
needs_verification: []
last_verified: 2026-10-30
---
Headless mode 指不打開互動介面、以非互動方式執行 coding agent。以 Claude Code 為例，在指令後加上 -p 和任務描述，它就會自己讀檔、改檔、跑指令，完成後把結果印出來並結束，可以像一般命令列工具一樣串接：把錯誤紀錄傳進去，再把解釋寫進檔案。輸出可選純文字、JSON 或串流 JSON，方便下一個程式讀取。因為過程中沒有人可以按「允許」，要事先用參數或 permission mode 決定哪些工具可以自動執行，其他需要核准的動作就會被拒絕。常見用途是在 CI 裡自動審查 PR、修 lint、分類 issue，或用排程批次處理大量檔案。同樣的能力也以 Agent SDK 的形式提供，讓開發者寫進自己的程式。
