---
term: Harness
zh: 執行框架
aliases: [Agent Harness]
category: agent
summary: 包在模型外面、負責跑迴圈、接工具、管上下文的那層程式。
when_to_use:
  - 比較不同 AI coding 工具時，分辨差異來自模型還是 harness
  - 自己打造 agent，需要決定工具、權限與記憶怎麼接
  - 讀到「同一個模型換了 harness 表現差很多」這類討論
related:
  - { slug: llm, rel: uses }
  - { slug: agent-loop, rel: runs }
  - { slug: tool-use, rel: enables }
  - { slug: hook, rel: related }
  - { slug: context-compaction, rel: uses }
  - { slug: permission-mode, rel: uses }
  - { slug: coding-agent, rel: part-of }
diagram_caption: 使用者的指令先進 harness，harness 決定給模型什麼上下文、開放哪些工具，並把工具結果送回模型，直到任務完成。
disambiguation: 在軟體測試裡，test harness 指跑測試用的框架；evals 社群說的 eval harness 也是這個意思，和 agent harness 不同。
sources:
  - { title: "Anthropic — Agent SDK overview", url: "https://docs.claude.com/en/docs/agent-sdk/overview" }
  - { title: "Anthropic — Building effective agents", url: "https://www.anthropic.com/engineering/building-effective-agents" }
needs_verification: []
last_verified: 2026-10-30
---
模型本身只會讀進文字、吐出文字；真正讓它能「做事」的，是包在外面的 harness。Harness 負責執行 agent loop：組裝 system prompt 與上下文、把模型想呼叫的工具真的執行、把結果餵回去、在上下文快滿時做壓縮，並套用權限與 hook 等規則。Claude Code、Codex CLI 這類 coding agent，本質上就是「模型＋harness」。所以同一個模型放進不同 harness，表現也可能明顯不同：工具怎麼設計、上下文怎麼管理，都會影響結果。當你在比較 AI 工具，或想自己用 SDK 打造 agent 時，先分清楚哪些能力屬於模型、哪些屬於 harness，判斷會準確得多。
