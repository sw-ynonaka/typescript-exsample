### 開発環境構築

## パッケージインストール
```
npm init --y
npm install typescript ts-loader webpack webpack-cli webpack-dev-server --save-dev
```

## webpack.config.js を作成
```
touoch webpack.config.js
```
webpack.config.jsに内容記載（リポジトリ参照）

## typescript のコンパイラ設定
```
tsc --init
```
"target": "es5",
"module": "commonjs",
"strict": true,
"esModuleInterop": true
上記変更

## typescript ファイル作成
今回は手動でファイルを作成する
```
src/app.ts
src/item.ts
dist/index.html
```
上記を作成、記述する(リポジトリ参照)
