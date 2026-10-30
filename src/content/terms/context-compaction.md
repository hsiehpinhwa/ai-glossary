---
term: Context Compaction
zh: 上下文壓縮
aliases: [Compaction, Auto-compact, /compact]
category: agent
summary: 對話快塞滿上下文時，把較舊的內容濃縮成摘要以騰出空間。
when_to_use:
  - 和 AI 長時間對話或跑大型任務，畫面出現「正在壓縮對話」
  - 發現 agent 壓縮後忘了早期交代的規則
  - 決定哪些資訊該寫進 CLAUDE.md 或筆記，而不是只留在對話裡
related:
  - { slug: context-window, rel: prerequisite }
  - { slug: context-engineering, rel: part-of }
  - { slug: agent-loop, rel: related }
  - { slug: memory, rel: related }
  - { slug: claude-md, rel: related }
diagram_caption: 長對話接近 context window 上限時，模型把舊內容寫成摘要，和最近的內容、CLAUDE.md、外部記憶組成新的上下文繼續工作；早期細節可能因此遺失。
sources:
  - { title: "Anthropic — Effective context engineering for AI agents", url: "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents" }
  - { title: "Anthropic — How the agent loop works (automatic compaction)", url: "https://code.claude.com/docs/en/agent-sdk/agent-loop" }
  - { title: "Anthropic — Compaction", url: "https://platform.claude.com/docs/en/build-with-claude/compaction" }
needs_verification: []
last_verified: 2026-10-30
---
Context compaction 是處理上下文不夠用的方法：當對話或 agent 任務累積的內容接近 context window 上限，系統會讓模型把較舊的內容寫成一份摘要，用摘要取代原本的訊息，再接著工作。Anthropic 描述 Claude Code 的做法是保留重要決策、尚未解決的 bug 與實作細節，丟掉重複的工具輸出，並附上最近讀過的檔案。它可以自動觸發，也可以手動執行，例如在 Claude Code 輸入 /compact。代價是摘要難免遺漏，早期交代的具體指示可能不見。因此官方建議把長期規則寫進 CLAUDE.md 這類每次請求都會重新載入的檔案，或寫進外部 memory，而不是只在對話開頭說一次。
