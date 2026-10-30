---
term: CI/CD
zh: 持續整合／持續部署
aliases: [CI, CD, Continuous Integration, Continuous Deployment]
category: dev
summary: 每次提交程式碼就自動建置與測試，通過後再自動部署的流程。
when_to_use:
  - pull request 頁面出現綠勾勾或紅叉叉，想知道代表什麼
  - 讓 AI agent 改得再快，也要有自動測試把關
  - 希望合併進 main 後自動上線，不必手動部署
related:
  - { slug: deploy, rel: enables }
  - { slug: unit-test, rel: runs }
  - { slug: pull-request, rel: related }
  - { slug: push, rel: related }
  - { slug: github, rel: related }
diagram_caption: 每次 push 或開 pull request 就觸發 CI，自動建置並跑 unit test；通過才能合併，合併後由 CD 自動部署，失敗就退回修改。
sources:
  - { title: "GitHub Docs — Continuous integration", url: "https://docs.github.com/en/actions/get-started/continuous-integration" }
  - { title: "GitHub Docs — Continuous deployment", url: "https://docs.github.com/en/actions/get-started/continuous-deployment" }
  - { title: "GitHub Docs — Branches (protected branches)", url: "https://docs.github.com/en/pull-requests/reference/branches" }
needs_verification: []
last_verified: 2026-10-30
---
CI/CD 是兩個自動化習慣的合稱。CI（持續整合）要求大家頻繁把程式碼 commit 到共用的 repository，每次提交都自動跑建置和測試，還可以加上格式檢查、安全掃描，把錯誤擋在擴散之前。CD（持續部署）則用自動化把通過檢查的版本發布上線，不必有人手動搬。實作上，你寫一份設定檔，描述發生什麼事就跑哪些步驟，例如 GitHub Actions 可以在每次 push 或開 pull request 時觸發。PR 頁面上那排綠勾勾或紅叉叉，就是 CI 跑出來的結果。對用 AI 寫程式的人，CI 是不會累的守門員：只要把主線設成檢查沒過就不能合併，agent 改得再快，壞掉的版本也上不了線。測試越完整，關卡越可靠。
