---
term: Git
zh: 版本控制系統
aliases: [git]
category: git
summary: 記錄檔案每一次變化、讓你隨時退回舊版本的版本控制工具。
when_to_use:
  - AI coding agent 問你「要不要 commit」或要你先建立 Git repository
  - 想在 AI 大改程式前留一個隨時能退回的存檔點
  - 教學要你把專案推上 GitHub 或連結部署平台
related:
  - { slug: repository, rel: uses }
  - { slug: commit, rel: uses }
  - { slug: branch, rel: uses }
  - { slug: merge, rel: uses }
  - { slug: github, rel: contrasts }
  - { slug: coding-agent, rel: related }
diagram_caption: 你在專案資料夾裡做 commit，歷史存進 repository；開 branch 試新方向再 merge 回來，最後可以把整份歷史推上 GitHub 備份。
disambiguation: Git 是裝在你電腦上的版本控制工具；GitHub 是存放 Git 專案的網站，兩者常被混用，但不是同一個東西。
sources:
  - { title: "Pro Git — About Version Control", url: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control" }
  - { title: "Pro Git — Branches in a Nutshell", url: "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell" }
  - { title: "GitHub Docs — About GitHub and Git", url: "https://docs.github.com/en/get-started/quickstart/about-github-and-git" }
needs_verification: []
last_verified: 2026-10-30
---
Git 是一套版本控制系統：它記錄專案裡每個檔案的變化，讓你看得出誰在什麼時候改了什麼，也能把檔案或整個專案退回任何一個舊版本。運作方式是你在滿意的時間點做一次 commit，Git 就把當下的狀態存成快照；想試新方向就開一條 branch，不怕弄壞主線，確定可行再 merge 回來。Git 是分散式的，每一份 clone 都帶著完整歷史，等於一份備份。很多人第一次碰到 Git，是因為 AI coding agent 改完程式後問你要不要 commit，或教學要你把專案推上 GitHub。Git 是在你電腦上跑的工具，GitHub 是存放 Git 專案的網站，兩者常被混為一談。學會 Git，AI 把東西改壞時你就有後悔藥可吃。
