---
term: Human-in-the-loop
zh: 人工把關
aliases: [HITL, 人在迴圈中, 人工審核]
category: agent
summary: 在 AI 流程的關鍵步驟安排人來審查、修改或核准，之後才繼續執行。
when_to_use:
  - Agent 要寄信、付款、刪資料這類難以復原的動作
  - AI 的判斷涉及專業或責任歸屬，例如法律、醫療內容
  - 剛導入 AI，想先觀察它的判斷再慢慢放手
related:
  - { slug: autonomy-level, rel: related }
  - { slug: permission-mode, rel: related }
  - { slug: guardrails, rel: related }
  - { slug: plan-mode, rel: related }
  - { slug: prompt-injection, rel: related }
  - { slug: agent-loop, rel: related }
diagram_caption: Agent 執行到重要或無法復原的步驟時暫停，由人核准、修改或拒絕；哪些步驟要停，取決於權限模式與自主程度的設定。
sources:
  - { title: "LangChain Docs — LangGraph human-in-the-loop", url: "https://docs.langchain.com/oss/python/langgraph/human-in-the-loop" }
  - { title: "OWASP GenAI — LLM01: Prompt Injection", url: "https://genai.owasp.org/llmrisk/llm01-prompt-injection/" }
  - { title: "Anthropic — Computer use tool", url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool" }
needs_verification: []
last_verified: 2026-10-30
---
Human-in-the-loop（HITL）是在 AI 自動化流程裡，刻意保留由人做決定的環節。Agent 跑到某些步驟會暫停，把它打算做的事交給你看：你可以核准、修改參數，或直接拒絕，之後流程才繼續。LangGraph 等框架提供「中斷」功能，能在工具執行前停下並保存狀態，等人回覆後再接續；coding agent 跳出的權限確認視窗也是同樣的概念。OWASP 把「有權限的操作要人確認」列為防範 prompt injection 的建議之一，Anthropic 的 computer use 文件也建議，可能造成實際後果的動作要先請人確認。要在哪裡放人，取決於錯誤的代價：確認太多會拖慢流程，太少則風險升高，這正是 autonomy level 要處理的取捨。
