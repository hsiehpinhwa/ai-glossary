---
term: IDE
zh: 整合開發環境
aliases: [Integrated Development Environment, Code Editor, 程式編輯器]
category: dev
summary: 把編輯、建置、除錯等寫程式工具整合在同一個視窗的軟體。
when_to_use:
  - 想看清楚 AI agent 改了哪些檔案、哪幾行
  - 選擇 AI coding 工具，比較編輯器型和終端機型的差別
  - 程式出錯時，想找到是哪個檔案的哪一行
related:
  - { slug: cli, rel: contrasts }
  - { slug: coding-agent, rel: related }
  - { slug: plugin, rel: uses }
  - { slug: diff, rel: uses }
  - { slug: git, rel: related }
diagram_caption: IDE 把編輯器、建置、除錯和 diff 檢視放在一起，透過擴充套件接上 coding agent 與 Git；和只用打字的 CLI 是兩種操作方式。
sources:
  - { title: "AWS — What is an IDE?", url: "https://aws.amazon.com/what-is/ide/" }
needs_verification: []
last_verified: 2026-10-30
---
IDE（Integrated Development Environment）是寫程式用的整合工作臺：程式碼編輯器、建置工具和除錯器放在同一個視窗裡，再加上語法上色、智慧補完、檔案瀏覽這些輔助。VS Code 這類編輯器裝上擴充套件之後，也能做到 IDE 的大部分事情，日常常被混著叫。和 CLI 只靠打字不同，IDE 用圖形介面讓你看見整個專案的結構，以及每個檔案改了什麼。AI coding 讓 IDE 跟著變形：Cursor 這類工具把 AI 對話和 agent 直接嵌進編輯器，不少終端機型的 agent 也提供 IDE 擴充。對非工程師來說，IDE 最大的用處是「看」：看 agent 改了哪些檔案、比對 diff、出錯時找到是哪一行，再決定要不要接受這次修改。
