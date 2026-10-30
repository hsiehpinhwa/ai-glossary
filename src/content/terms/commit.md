---
term: Commit
zh: 提交
aliases: [git commit, 提交]
category: git
summary: 把目前的修改加上說明存成一個版本快照，是 Git 歷史的基本單位。
when_to_use:
  - AI coding agent 提議「幫你 commit 這些修改」或自動寫好 commit 訊息
  - 完成一個小功能，想留一個之後能退回的存檔點
  - 回頭查某個 bug 是哪一次修改帶進來的
related:
  - { slug: git, rel: part-of }
  - { slug: repository, rel: part-of }
  - { slug: diff, rel: uses }
  - { slug: branch, rel: related }
  - { slug: push, rel: enables }
  - { slug: coding-agent, rel: related }
diagram_caption: 修改檔案後先看 diff、挑出要存的改動，再寫一句說明做成 commit；分支因此往前一步，push 後才會出現在遠端 repository。
sources:
  - { title: "Git — git-commit Documentation", url: "https://git-scm.com/docs/git-commit" }
  - { title: "Pro Git — Branches in a Nutshell", url: "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell" }
needs_verification: []
last_verified: 2026-10-30
---
Commit 是 Git 裡的一次存檔：你把改好的內容加上一句說明，Git 就存成一個快照，連同作者、說明和上一個 commit 的指標一起記下。一連串 commit 串起來，就是專案的歷史。實際操作分兩步：先用 git add 挑出這次要存的改動，再用 git commit -m 寫說明送出。好的 commit 一次只做一件事，說明寫清楚改了什麼、為什麼改，日後出問題才找得到是哪一步。用 AI coding agent 時，你會常看到它主動提議 commit，或替你寫好 commit 訊息。建議每完成一個小功能就 commit 一次：AI 下一輪把程式改壞了，你可以直接退回上一個能動的版本，不必從頭來過。commit 只存在你的電腦裡，要 push 之後才會上傳到遠端。
