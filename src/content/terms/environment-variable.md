---
term: Environment Variable
zh: 環境變數
aliases: [Env Var, .env, 環境變數]
category: dev
summary: 寫在程式碼之外、可依環境切換的設定值，常用來存放金鑰。
when_to_use:
  - 要放 API key 或資料庫密碼，又不想寫進程式碼
  - 本機能跑、部署上線卻壞掉，懷疑設定沒帶過去
  - AI 要你建立一個 .env 檔
related:
  - { slug: api-key, rel: related }
  - { slug: deploy, rel: related }
  - { slug: localhost, rel: related }
  - { slug: backend, rel: related }
  - { slug: cli, rel: related }
diagram_caption: 同一份程式碼在本機讀 .env 檔，部署後改讀平台後台設定的值；金鑰因此不必寫進程式，也不會跟著 commit 外流。
sources:
  - { title: "Node.js — How to read environment variables from Node.js", url: "https://nodejs.org/learn/command-line/how-to-read-environment-variables-from-nodejs" }
  - { title: "Vercel Docs — Environment variables", url: "https://vercel.com/docs/environment-variables" }
  - { title: "Claude Docs — Authentication", url: "https://platform.claude.com/docs/en/manage-claude/authentication" }
  - { title: "Next.js Docs — Environment variables", url: "https://nextjs.org/docs/app/building-your-application/configuring/environment-variables" }
needs_verification: []
last_verified: 2026-10-30
---
Environment variable 是存在程式碼外面的「名稱＝值」設定，程式執行時再去讀取。例如 Node.js 用 process.env.PORT 讀出埠號，Claude 的 Python SDK 會自動讀取 ANTHROPIC_API_KEY。這樣做有兩個好處：同一份程式碼可以在本機、預覽和正式環境套用不同的值；金鑰、資料庫密碼這類秘密也不必寫進程式，不會跟著 commit 外流。本機開發時，這些值通常寫在專案根目錄的 .env 檔，記得把它列進 .gitignore，別推上 GitHub；部署到 Vercel 這類平台時，則要另外在後台設定，而且改完只對新的部署生效，要重新部署才會套用。如果忘了在部署平台設定環境變數，就會出現 vibe coding 常碰到的「本機好好的，上線就壞」。
