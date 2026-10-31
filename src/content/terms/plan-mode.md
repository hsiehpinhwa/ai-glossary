---
term: Plan Mode
zh: 規劃模式
aliases: [Planning Mode, 先規劃再執行]
category: agent
summary: 讓 agent 先調查並提出計畫，經你同意後才開始修改的工作方式。
when_to_use:
  - 要動到很多檔案的大修改，想先確認方向
  - 面對不熟悉的專案，先讓 AI 讀懂再動手
  - 需求還很模糊，想先和 AI 討論出做法
related:
  - { slug: permission-mode, rel: part-of }
  - { slug: human-in-the-loop, rel: uses }
  - { slug: subagent, rel: uses }
  - { slug: agent, rel: related }
  - { slug: coding-agent, rel: related }
  - { slug: spec-driven-development, rel: related }
diagram_caption: Agent 先在唯讀狀態下調查、提出計畫，由你審查；有意見就改計畫，同意後才開始修改檔案。
sources:
  - { title: "Claude Code Docs — Common workflows: plan before editing", url: "https://code.claude.com/docs/en/common-workflows" }
  - { title: "Claude Code Docs — Subagents (built-in Plan agent)", url: "https://code.claude.com/docs/en/sub-agents" }
needs_verification: []
last_verified: 2026-10-30
---
Plan mode 是讓 agent「先想清楚再動手」的做法：在這個階段，它只能讀檔、搜尋、提問，不能修改任何東西；等它整理出一份計畫，你看過、提出修改意見並同意之後，才進入執行。這個習慣不限於特定工具，很多人也會直接在 prompt 裡寫「先別改，先給我計畫」。以 Claude Code 為例，Plan Mode 是其中一種權限模式，在對話中按 Shift+Tab 就能切換，狀態列會顯示目前正在規劃；它也會派出唯讀的 subagent 幫忙蒐集資料。好處是你能在修正成本還很低的時候就抓出方向錯誤，而不是等 agent 改了二十個檔案才發現誤會需求。任務越大、需求越模糊，越值得先規劃。
