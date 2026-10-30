---
term: Subagent
zh: 子代理
aliases: [Sub-agent, 子 agent]
category: agent
summary: 由主 agent 派出、在獨立上下文處理子任務，只回傳摘要的 agent。
when_to_use:
  - 要搜尋大量檔案或資料，又不想塞爆主對話的上下文
  - 想把審查程式、寫測試這類固定工作交給專門角色
  - 幾件互不相干的調查想同時進行
related:
  - { slug: agent, rel: is-a }
  - { slug: context-window, rel: uses }
  - { slug: system-prompt, rel: uses }
  - { slug: tool-use, rel: uses }
  - { slug: multi-agent-orchestration, rel: part-of }
  - { slug: context-engineering, rel: related }
diagram_caption: 主 agent 派出多個 subagent，各自用獨立的 context window、專屬的 system prompt 與工具權限工作，最後只把摘要交回主對話。
sources:
  - { title: "Claude Code Docs — Subagents", url: "https://code.claude.com/docs/en/sub-agents" }
  - { title: "Anthropic — Effective context engineering for AI agents", url: "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents" }
needs_verification: []
last_verified: 2026-10-30
---
Subagent 是主 agent 交辦任務的「分身」。主 agent 和你對話時，遇到需要大量搜尋或閱讀的子任務，就派一個 subagent 去做；subagent 有自己的 context window、自己的 system prompt 與工具權限，完成後只把精簡的結論交回來。好處是主對話不會被一大堆搜尋結果、log 和檔案內容塞滿，上下文保持乾淨，也能限制某個角色只能讀、不能改。以 Claude Code 為例，subagent 用一個 Markdown 檔定義名稱、描述、可用工具與指示，內建的 Explore 就是專門搜尋程式碼的唯讀角色。代價是 subagent 在自己的上下文裡工作，看不到主對話的完整脈絡，交代任務時要把背景說清楚。多個 agent 分工協作的整體設計，就是 multi-agent orchestration。
