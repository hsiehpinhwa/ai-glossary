---
term: Agentic Workflow
zh: 代理式工作流程
aliases: [AI Workflow, LLM Workflow]
category: agent
summary: 把 LLM 和工具串成事先設計好的步驟流程，每一步交給 AI 處理一部分。
when_to_use:
  - 任務步驟固定，例如每天整理新聞、翻譯後再排版
  - 想要結果穩定可預測，而不是讓 AI 自由發揮
  - 用自動化工具把多個 AI 步驟串成日常流程
related:
  - { slug: agent, rel: contrasts }
  - { slug: llm, rel: uses }
  - { slug: tool-use, rel: uses }
  - { slug: human-in-the-loop, rel: uses }
  - { slug: multi-agent-orchestration, rel: related }
diagram_caption: 輸入先被分流到預先設計的路徑，依序經過 LLM 步驟、工具與檢查，最後由人確認；走哪條路由開發者決定，不是模型。
disambiguation: 社群常把任何「有 AI 在裡面的自動化」都叫 agentic workflow；Anthropic 則明確區分 workflow（路徑寫死）和 agent（模型自己決定流程）。看文章時要先分清作者指的是哪一種。
sources:
  - { title: "Anthropic — Building effective agents", url: "https://www.anthropic.com/engineering/building-effective-agents" }
needs_verification: []
last_verified: 2026-10-30
---
Agentic workflow 是把 LLM 和工具依照事先設計的路徑串起來：第一步分類輸入、第二步查資料、第三步整理、最後檢查格式，每一步由 AI 處理，但走哪條路是開發者寫死的。Anthropic 在〈Building effective agents〉裡把它和 agent 分開：workflow 依預先定義的程式路徑運作，agent 則由模型自己決定流程。常見模式有 prompt chaining（串接）、routing（分流）、parallelization（平行處理）、orchestrator-workers（指揮者與執行者）和 evaluator-optimizer（一個產出、一個評審）。Workflow 的好處是可預測、好除錯、成本好估，任務步驟固定時往往比完全自主的 agent 可靠。Anthropic 也建議先從最簡單的方案開始，有需要再增加複雜度。
