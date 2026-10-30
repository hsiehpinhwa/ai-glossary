---
term: Autonomy Level
zh: 自主程度
aliases: [Levels of Autonomy, Agent Autonomy, 自主等級]
category: agent
summary: 描述 AI agent 能在多大程度上不經人同意，自行決定與行動。
when_to_use:
  - 決定要讓 agent 每一步都問你，還是放手讓它做完
  - 比較不同 AI 工具的權限模式該怎麼設
  - 公司導入 agent 時，訂出哪些任務能自動、哪些要人核准
related:
  - { slug: agent, rel: related }
  - { slug: human-in-the-loop, rel: related }
  - { slug: permission-mode, rel: related }
  - { slug: guardrails, rel: related }
  - { slug: sandbox, rel: related }
  - { slug: plan-mode, rel: related }
diagram_caption: 依使用者扮演的角色，從操作者到旁觀者分成五級，越往右人介入越少；工具裡的權限模式、人工確認與 sandbox 是把這些等級落地的方式。
sources:
  - { title: "Feng, McDonald & Zhang — Levels of Autonomy for AI Agents (arXiv 2506.12469)", url: "https://arxiv.org/abs/2506.12469" }
  - { title: "Anthropic — How the agent loop works (permission modes)", url: "https://code.claude.com/docs/en/agent-sdk/agent-loop" }
needs_verification: []
last_verified: 2026-10-30
---
Autonomy level 用來描述 agent 能自己做多少決定。華盛頓大學研究者在 2025 年的論文〈Levels of Autonomy for AI Agents〉中，依使用者扮演的角色分成五級：operator（人主導，agent 被叫到才協助）、collaborator（一起規劃與分工）、consultant（agent 主導，人給方向與回饋）、approver（只有遇到卡關或重大動作才找人核准）與 observer（人只能看紀錄，必要時緊急停止）。實際使用 AI 工具時，這個概念會變成具體設定：coding agent 的權限模式，從多數動作都要你確認、自動允許改檔案，到在隔離環境中完全不詢問，就是不同的自主程度。等級不是越高越好，要看錯誤的代價、能不能復原，以及有沒有測試、sandbox 等保護措施。
