---
term: CLI
zh: 命令列介面
aliases: [Terminal, Command Line, 終端機, 命令列]
category: dev
summary: 在終端機裡用打字下指令來操作電腦或程式的文字介面。
when_to_use:
  - 教學要你「打開終端機，貼上這行指令」
  - 使用住在終端機裡的 coding agent
  - 安裝套件、啟動本機伺服器、執行 Git 指令
related:
  - { slug: ide, rel: contrasts }
  - { slug: coding-agent, rel: related }
  - { slug: headless-mode, rel: related }
  - { slug: git, rel: related }
  - { slug: localhost, rel: related }
diagram_caption: 你或 coding agent 在終端機輸入指令，shell 執行後把結果印成文字；常見用途是跑 Git、安裝套件和啟動 localhost 伺服器。
disambiguation: 嚴格說，terminal 是開啟 shell 的程式，shell 是你的工作階段，command line 是輸入指令的那一行；日常三者常混用。CLI 也常指某個工具的命令列版本，例如 Vercel CLI。
sources:
  - { title: "MDN — Command line crash course", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line" }
needs_verification: []
last_verified: 2026-10-30
---
CLI（Command Line Interface）是用文字下指令的操作方式：打開終端機，輸入一行指令按 Enter，程式就會執行，並把結果印成文字。它沒有按鈕和選單，卻能直接存取檔案系統，也很容易把重複的工作寫成一行指令一次跑完。開發世界的許多工具都是在命令列上使用，安裝套件、啟動本機伺服器、使用 Git 常常都靠它。這幾年 CLI 重新熱門，是因為 Claude Code、Codex CLI 這類 coding agent 就住在終端機裡：你用自然語言交代任務，agent 替你打指令。所以非工程師也常被教學要求打開終端機貼上一行字。看不懂指令沒關係，但要知道 agent 執行的每一行，都是真的在你的電腦上動手。
