---
term: Merge Conflict
zh: 合併衝突
aliases: [Conflict, 衝突]
category: git
summary: 兩邊改到同一處，Git 無法自動合併，要人決定保留哪個版本。
when_to_use:
  - git pull 或 merge 時出現 Automatic merge failed 的訊息
  - 同時開好幾個 AI agent 改同一批檔案，合併時打架
  - pull request 頁面顯示有衝突、無法直接合併
related:
  - { slug: merge, rel: part-of }
  - { slug: branch, rel: related }
  - { slug: diff, rel: uses }
  - { slug: pull-request, rel: related }
  - { slug: push, rel: related }
diagram_caption: 兩條分支改到同一行，merge 時 Git 停下並插入衝突標記；人或 AI 編輯成最終版本、刪掉標記並 commit 後，合併才算完成。
sources:
  - { title: "GitHub Docs — About merge conflicts", url: "https://docs.github.com/github/collaborating-with-issues-and-pull-requests/about-merge-conflicts" }
  - { title: "Git — git-merge Documentation", url: "https://git-scm.com/docs/git-merge" }
needs_verification: []
last_verified: 2026-10-30
---
Merge conflict 發生在 Git 不知道該聽誰的時候：兩條分支改了同一個檔案的同一行，或一邊修改了某個檔案、另一邊卻把它刪掉。這時 Git 會停下合併，在衝突的位置插入標記：<<<<<<< 到 ======= 之間通常是你這邊的版本，======= 到 >>>>>>> 之間是對方的版本。解法是手動編輯成最終想要的內容、刪掉這些標記，再做一次 commit。簡單的衝突可以直接在 GitHub 網頁上解決，複雜的則要在本機處理後再推回去。用 AI 寫程式時，衝突特別容易出現在同時開好幾個 agent、各自改同一批檔案的時候。coding agent 通常讀得懂這些標記，你可以請它幫忙解，但解完一定要看 diff，確認兩邊的修改都沒有被弄丟。
