### コンパイルしてみる
## ディレクトリ作成 => ファイル作成
mkdir lesson01
cd lesson01
touch hello.ts

## hello.ts に記述
```
const message:string = 'Hello! TypeScript!';
console.log(message);
```

## コンパイル
```
tsc hello.ts
```

## 実行
```
node hello.js
```
Hello! TypeScript! 表示

