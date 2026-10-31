---
term: Multi-agent Orchestration
zh: 多代理協作
aliases: [Multi-agent System, Orchestrator-Workers, 多 agent 系統]
category: agent
summary: 由一個主導 agent 分派工作給多個 agent 平行處理，再整合結果的系統設計。
when_to_use:
  - 研究類任務需要同時從很多方向搜尋資料
  - 單一 agent 的上下文裝不下整個任務
  - 評估多 agent 架構值不值得多花的 token 費用
related:
  - { slug: subagent, rel: uses }
  - { slug: agent, rel: uses }
  - { slug: agentic-workflow, rel: related }
  - { slug: deep-research, rel: enables }
  - { slug: context-window, rel: related }
  - { slug: token, rel: related }
diagram_caption: 主導 agent 規劃並拆解問題，派出多個 subagent 分頭搜尋，再把結果整合成一份研究報告。
sources:
  - { title: "Anthropic — How we built our multi-agent research system", url: "https://www.anthropic.com/engineering/multi-agent-research-system" }
  - { title: "Anthropic — Building effective agents", url: "https://www.anthropic.com/engineering/building-effective-agents" }
needs_verification: []
last_verified: 2026-10-30
---
Multi-agent orchestration 是讓多個 agent 分工合作：一個主導 agent 負責理解問題、拆解任務，再派出多個 subagent 分頭處理，最後彙整成一份結果。Anthropic 介紹自家 Research 功能時說明，它採用 orchestrator-worker 模式，主導 agent 會同時派出 3 到 5 個 subagent 平行搜尋；在他們的內部研究評測中，多 agent 版本比單一 agent 的表現高出 90.2%。代價是成本：這類系統用掉的 token 約是一般聊天的 15 倍，只適合價值夠高的任務。Anthropic 也提醒，需要所有 agent 共享同一份脈絡、或彼此依賴很深的工作，目前並不適合拆給多個 agent。所以 agent 不是越多越好，關鍵是任務能不能被拆成可以平行進行的部分。
