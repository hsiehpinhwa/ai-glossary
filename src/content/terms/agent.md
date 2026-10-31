---
term: Agent
zh: AI 代理
aliases: [AI Agent, AI 代理人]
category: agent
summary: 能自己決定步驟、呼叫工具並依結果調整，直到完成任務的 AI 系統。
when_to_use:
  - 交代需要多個步驟的任務，例如查資料再整理成報告
  - 比較「聊天機器人」和「會動手做事的 AI」差在哪裡
  - 評估要不要讓 AI 自動操作你的檔案、email 或網站
related:
  - { slug: llm, rel: uses }
  - { slug: tool-use, rel: uses }
  - { slug: agent-loop, rel: runs }
  - { slug: memory, rel: uses }
  - { slug: harness, rel: related }
  - { slug: agentic-workflow, rel: contrasts }
  - { slug: autonomy-level, rel: related }
diagram_caption: 使用者給目標後，LLM 決定下一步、呼叫工具、讀回結果，在 agent loop 中反覆，直到判斷任務完成；harness 負責實際執行工具與管理權限。
sources:
  - { title: "Anthropic — Building effective agents", url: "https://www.anthropic.com/engineering/building-effective-agents" }
  - { title: "Anthropic — How the agent loop works (Agent SDK)", url: "https://code.claude.com/docs/en/agent-sdk/agent-loop" }
needs_verification: []
last_verified: 2026-10-30
---
Agent 是讓模型自己決定怎麼完成任務的 AI 系統。一般聊天機器人是你問一句、它答一句；agent 則是拿到目標後自己規劃步驟，呼叫工具去搜尋、讀檔、執行程式，看到結果再決定下一步，直到判斷任務完成或需要你協助。Anthropic 的說法很直白：agent 通常就是「LLM 在迴圈中根據環境回饋使用工具」，而且流程與工具怎麼用，都由模型自己主導。這一點和預先寫好路徑的 agentic workflow 不同。Claude Code 這類 coding agent、會自己上網查資料的 deep research，都是例子。能力越大，風險也越大，所以使用時要注意它能碰到哪些資料與權限、能自主到什麼程度，必要時設定停止條件或人工確認點。
