---
term: Ralph Loop
zh: Ralph 迴圈
aliases: [Ralph Wiggum Technique, Ralph Wiggum Loop, Ralph]
category: agent
summary: 用簡單腳本一次次以同一份 prompt 重新啟動 coding agent 的開發技巧。
when_to_use:
  - 想讓 coding agent 長時間、無人看管地照著規格完成專案
  - 讀到「讓 AI 整晚自己寫程式」這類社群分享
  - 分辨它和 agent 內部的 agent loop 有什麼不同
related:
  - { slug: agent-loop, rel: contrasts }
  - { slug: coding-agent, rel: uses }
  - { slug: unit-test, rel: uses }
  - { slug: spec-driven-development, rel: related }
  - { slug: context-window, rel: related }
  - { slug: autonomy-level, rel: related }
diagram_caption: 腳本每輪都啟動一個全新的 coding agent，讀規格與待辦清單、挑一件事做、跑測試、更新清單，然後丟掉 context 再來一次；每一輪內部才是 agent loop。
disambiguation: 和 Agent Loop 不同：agent loop 是 agent 在一次任務裡「呼叫工具、讀結果」的內部循環；Ralph loop 是在 agent 外面再包一層腳本，每輪都重新啟動 agent。Claude Code 的 /loop 指令是在同一個工作階段裡依間隔重跑 prompt，也不是 Ralph loop。
sources:
  - { title: "Geoffrey Huntley — Ralph Wiggum as a \"software engineer\"", url: "https://ghuntley.com/ralph/" }
  - { title: "HumanLayer — A brief history of Ralph", url: "https://humanlayer.dev/blog/brief-history-of-ralph" }
needs_verification: []
last_verified: 2026-10-30
---
Ralph loop（又叫 Ralph Wiggum technique）是 Geoffrey Huntley 在 2025 年 7 月的部落格文章中介紹的 AI 寫程式技巧，名稱取自《辛普森家庭》的角色 Ralph Wiggum。它最單純的形式只是一行 Bash 迴圈：不停把同一份 PROMPT.md 餵給 coding agent，agent 做完一輪就結束，腳本再啟動新的一輪。每輪都從乾淨的 context 開始，靠規格檔與待辦清單接續進度，並要求每次只做一件最重要的事。品質則靠測試、型別檢查等「背壓」把關，agent 犯錯時就在 prompt 裡補上提示，慢慢把它調教好。它適合規格清楚、可以長時間無人看管的專案；因為自主程度很高，也要定期檢查成果，必要時重來。
