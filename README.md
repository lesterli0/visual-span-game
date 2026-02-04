# Visual Span (Next.js)

線上 Demo：
https://visual-span-demo.vercel.app?_vercel_share=Moo3guoKziHngm2F0diWsAGcYQYSJgVT

GitHub Repo：
https://github.com/lesterli0/visual-span-game


此為完成 React / Next.js 網路課程後的練習專案，靈感來自瞬時數字記憶遊戲。  
目前實作重點放在熟悉 React state、流程設計，以及 UI / logic 分離。

---

## 核心流程

定義三個 phase：

idle → showing → answering

- **idle**：等待開始（除第一次外會顯示上一輪結果）
- **showing**：顯示隨機 3 位數字 1 秒
- **answering**：使用者輸入答案並提交

提交後比較 `input` 與 `answer`，再回到 `idle` 顯示結果。

---

## 工程結構

UI 與遊戲邏輯分離：

- 核心狀態與流程抽成 custom hook：`useVisualSpanGame`
- Component 只負責 render

Hook 負責：

- phase 控制
- 隨機數生成
- timer lifecycle
- input / result 判斷與管理

目前 hook 支援注入：

- 位數長度
- 顯示時間

方便後續調整遊戲規則。

---

## 後續規劃

預計加入：

- 每次答對自動增加一位數
- 記錄使用者記憶最高紀錄
- result 從 boolean 改為 int

phase 仍維持：

idle → showing → answering

差別在 idle 時會依照上一輪是否正確，決定：

- 開新局
- 或進入更高位數挑戰
