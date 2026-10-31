---
term: Memory
zh: 記憶
aliases: [Agent Memory, 長期記憶]
category: agent
summary: 讓 AI 把資訊存在對話之外，之後的對話或任務還能讀回來的機制。
when_to_use:
  - 不想每次開新對話都重新交代背景與偏好
  - Agent 要跨好幾個工作階段完成長期任務
  - 想知道 AI 記住了你哪些資訊、要怎麼刪除
related:
  - { slug: agent, rel: part-of }
  - { slug: context-window, rel: related }
  - { slug: context-engineering, rel: part-of }
  - { slug: context-compaction, rel: related }
  - { slug: claude-md, rel: related }
  - { slug: rag, rel: related }
diagram_caption: 今天的工作把重點寫進外部記憶，明天的新對話開工前先讀回來，和 CLAUDE.md、檢索結果一起放進 context window，讓 agent 接續工作。
disambiguation: 這裡的 memory 指 AI 跨對話保存資訊的機制，和電腦硬體的記憶體（RAM）無關。
sources:
  - { title: "Anthropic — Memory tool", url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool" }
  - { title: "Anthropic — Effective context engineering for AI agents", url: "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents" }
needs_verification: []
last_verified: 2026-10-30
---
Memory 指讓 AI 跨越單次對話記住事情的機制。模型本身不會記得上一次聊過什麼，每次呼叫都只看得到 context window 裡的內容；對話一結束，或上下文被壓縮，細節就會消失。Memory 的做法是把重要資訊寫到外部，例如檔案或資料庫，下次開工前再讀回來。以 Anthropic 的 memory tool 為例，Claude 會在一個專用資料夾裡建立、讀取、修改筆記檔，實際存放在哪裡由開發者的程式決定。Claude Code 的 CLAUDE.md 也是類似概念，屬於專案層級的長期記憶。它和 context compaction 互補：壓縮讓當下的上下文保持精簡，memory 則保存壓縮後仍必須留下的資訊。使用時也要留意隱私，弄清楚它記了什麼、怎麼刪除。
