---
term: Sandbox
zh: 沙盒
aliases: [Sandboxing, 沙箱]
category: coding
summary: 把 AI 執行的指令關在隔離環境裡，限制它能碰的檔案與網路。
when_to_use:
  - 想讓 agent 自動跑指令、少按幾次「允許」，又怕它改到不該改的地方
  - 處理來路不明的程式碼或網頁內容，擔心 prompt injection
  - 要讓 agent 長時間在無人看管的情況下工作
related:
  - { slug: permission-mode, rel: related }
  - { slug: coding-agent, rel: related }
  - { slug: prompt-injection, rel: related }
  - { slug: guardrails, rel: related }
  - { slug: autonomy-level, rel: enables }
  - { slug: human-in-the-loop, rel: related }
diagram_caption: Agent 執行的指令被關在 sandbox 裡：只能寫入專案資料夾，連網要先經過允許清單；因為邊界由系統把關，permission mode 可以少問你幾次。
sources:
  - { title: "Claude Code Docs — Sandboxing", url: "https://code.claude.com/docs/en/sandboxing" }
  - { title: "Claude Code Docs — Permission modes", url: "https://code.claude.com/docs/en/permission-modes" }
needs_verification: []
last_verified: 2026-10-30
---
Sandbox 是一個隔離的執行環境，讓 AI 跑的指令只能在劃定範圍內動作。Coding agent 會在你的電腦上執行 shell 指令，萬一指令寫錯，或被藏在網頁裡的 prompt injection 誘導，就可能刪掉檔案或把資料傳出去。Sandbox 由作業系統把關：以 Claude Code 為例，開啟後指令只能寫入專案資料夾等少數位置，對外連線要經過代理，只有允許清單上的網域才連得到；macOS 用 Seatbelt、Linux 用 bubblewrap 實作。因為邊界由系統強制執行，而不是靠模型自律，sandbox 裡的指令可以不必每次都問你，在安全和效率之間取得平衡。如果要完全不問就放行所有動作，官方建議只在隔離的容器或虛擬機裡這樣做。
