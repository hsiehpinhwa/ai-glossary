---
term: Agent Loop
zh: 代理迴圈
aliases: [Agentic Loop, Tool-use Loop]
category: agent
summary: Agent 反覆「判斷、呼叫工具、讀結果」直到任務完成的核心循環。
when_to_use:
  - 想理解 coding agent 為什麼會連續做好幾十個動作
  - Agent 卡在同一步一直重試，想知道怎麼設上限
  - 自己用 SDK 打造 agent，要決定什麼時候停下來
related:
  - { slug: agent, rel: part-of }
  - { slug: llm, rel: uses }
  - { slug: tool-use, rel: uses }
  - { slug: harness, rel: related }
  - { slug: hook, rel: related }
  - { slug: context-compaction, rel: related }
  - { slug: ralph-loop, rel: contrasts }
diagram_caption: 模型判斷要呼叫工具就交給 harness 執行、把結果送回，直到產出不再呼叫工具的回應；hook 可以攔截工具呼叫，上下文快滿時自動壓縮。
disambiguation: 和 Ralph Loop 不同：agent loop 是 agent 在一次任務「之內」呼叫工具、讀結果的循環；Ralph loop 是在 agent 外面再包一層腳本，一次又一次重新啟動 agent。Claude Code 的 /loop 指令則是在同一個工作階段裡依間隔重跑某個 prompt，也是另一回事。
sources:
  - { title: "Anthropic — How the agent loop works (Agent SDK)", url: "https://code.claude.com/docs/en/agent-sdk/agent-loop" }
  - { title: "Anthropic — Building effective agents", url: "https://www.anthropic.com/engineering/building-effective-agents" }
  - { title: "Claude Code Docs — Run prompts on a schedule (/loop)", url: "https://code.claude.com/docs/en/scheduled-tasks" }
needs_verification: []
last_verified: 2026-10-30
---
Agent loop 是 agent 運作的核心循環：模型讀進你的指令與目前狀態，決定要直接回答還是呼叫工具；如果要呼叫工具，harness 就去執行，把結果送回模型，模型再決定下一步。這樣一來一回算一個回合，持續到模型產出一段不再呼叫工具的回應為止。Agent SDK 文件用修測試舉例：先跑測試、讀檔案、修改後再跑一次測試，最後回報結果，總共四個回合。簡單問題兩三個回合結束，複雜任務可能串起幾十次工具呼叫。不設限時，開放式任務可能跑很久，所以實務上會設定最大回合數或預算；上下文快滿時也會自動做 context compaction。懂了這個循環，就看得懂 agent 畫面上那串動作。
