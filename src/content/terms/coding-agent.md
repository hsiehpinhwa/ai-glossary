---
term: Coding Agent
zh: 程式開發代理
aliases: [AI Coding Agent, Agentic Coding Tool]
category: coding
summary: 能自己讀程式碼、改檔案、執行指令來完成開發任務的 AI agent。
when_to_use:
  - 想讓 AI 直接修 bug、加功能，而不只是在對話框給建議
  - 比較 Claude Code、Codex、Cursor 這類工具該選哪個
  - 規劃讓 AI 在 CI 或背景自動處理例行開發工作
related:
  - { slug: agent, rel: is-a }
  - { slug: harness, rel: uses }
  - { slug: tool-use, rel: uses }
  - { slug: claude-md, rel: uses }
  - { slug: repository, rel: uses }
  - { slug: permission-mode, rel: uses }
  - { slug: pull-request, rel: enables }
  - { slug: sandbox, rel: related }
diagram_caption: Coding agent 先讀專案規則，接著在 repository 裡讀寫檔案、執行指令並看結果，權限設定決定哪些動作要先問你，完成後以 PR 交回給你審查。
sources:
  - { title: "Claude Code Docs — Overview", url: "https://code.claude.com/docs/en/overview" }
  - { title: "OpenAI — Codex overview", url: "https://developers.openai.com/codex/overview.md" }
needs_verification: []
last_verified: 2026-10-30
---
Coding agent 是專門做軟體開發的 AI agent。和只會在對話框給程式片段的聊天機器人不同，它直接在你的專案資料夾裡工作：自己搜尋與閱讀程式碼、修改多個檔案、在終端機執行指令和測試，看到錯誤再修，直到任務完成。Claude Code、Codex、Cursor 的 agent 模式都屬於這類，本質上是「模型＋harness」：模型負責判斷下一步，harness 負責提供工具、管理上下文與權限。開工前它通常會先讀 CLAUDE.md 或 AGENTS.md 掌握專案規則；完成後常以 commit 或 pull request 交付，讓你審查。因為它能真的改檔案、跑指令，使用前要搞清楚權限設定：哪些動作會先問你、哪些會直接執行，必要時讓它在 sandbox 裡跑。
