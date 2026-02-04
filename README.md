# Visual Span (Next.js)

線上 Demo：
https://visual-span-demo.vercel.app?_vercel_share=Moo3guoKziHngm2F0diWsAGcYQYSJgVT

GitHub Repo：
https://github.com/lesterli0/visual-span-game

此為完成 React / Next.js 網路課程後的練習專案，靈感來自瞬時數字記憶遊戲
目前實作重點放在熟悉react的state,流程設計,與 UI / logic 分離

核心流程：
定義三個 phase：idle → showing → answering
idle：等待開始（除第一次外會顯示上一輪結果）
showing：顯示隨機 3 位數字 1 秒
answering：使用者輸入答案並提交
提交後比較 input 與 answer，回到 idle 顯示結果

UI 與遊戲邏輯分離
核心狀態與流程抽成 custom hook：useVisualSpanGame
Hook負責：
phase控制
隨機數生成
timer lifecycle
input/result判斷管理

hook支援注入位數長度及顯示時間
因再來還想要修改規則：
每次答對自動增加一位數
記錄使用者記憶最高紀錄，所以result將從boolean改為int
phase一樣會是idle → showing → answering
只是會依照上次答題正確與否決定要開新局或是增加位數
