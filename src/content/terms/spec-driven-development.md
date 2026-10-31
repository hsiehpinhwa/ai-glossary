---
term: Spec-driven Development
zh: 規格驅動開發
aliases: [SDD, Spec Kit]
category: coding
summary: 先寫清楚規格，再讓 AI 依規格規劃、拆任務、寫程式的開發方式。
when_to_use:
  - 專案不只是原型，要長期維護或給別人使用
  - 在既有的大型程式碼裡加功能，怕 AI 亂改
  - Vibe coding 做到一半越改越亂，想重新整理需求
related:
  - { slug: vibe-coding, rel: contrasts }
  - { slug: coding-agent, rel: uses }
  - { slug: plan-mode, rel: related }
  - { slug: tdd, rel: related }
  - { slug: context-engineering, rel: related }
diagram_caption: 從規格出發，依序產生技術計畫、拆成任務，再由 coding agent 實作並以測試驗證；不符規格就回頭修改。
sources:
  - { title: "GitHub Blog — Spec-driven development with AI: Get started with a new open source toolkit", url: "https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/" }
needs_verification: []
last_verified: 2026-10-30
---
Spec-driven development 是先寫規格、再讓 AI 寫程式的開發方式。規格說明要做什麼、給誰用、怎樣算完成，是整個專案的依據；GitHub 的說法是從「程式碼才是真相」轉為「意圖才是真相」。以 GitHub 開源的 Spec Kit 為例，流程分四步：Specify 寫下需求與使用情境，Plan 決定技術架構與限制，Tasks 把計畫拆成可以各自驗證的小任務，Implement 再交給 coding agent 逐項實作。每一步都有檢查點，人可以在動手前修正方向。它和 vibe coding 剛好相反：vibe coding 適合快速原型，但用在重要系統或既有程式碼時不夠可靠。需求改變時先改規格，再重新產生計畫與程式，AI 寫出的東西也比較容易驗證。
