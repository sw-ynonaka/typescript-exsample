const path = require('path');
module.exports = {
    // モジュールをバンドルする起点ファイル
    // app.ts にとりあえず設定
    entry: {
        bundle: './src/app.ts'
    },  
    output: {
        // モジュールをバンドルした結果を出力する場所
        // "__dirname"はこのファイルが存在するディレクトリを表す。node.jsで定義済みの定数
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js' // バンドルした結果のファイル名
    },
    resolve: {
        extensions:['.ts','.js']
    },
    devServer: {
        // webpack-dev-serverの公開フォルダ
        static: {
            directory: path.join(__dirname, "dist"),
        },
    },
    module: {
        rules: [
            {
                test:/\.ts$/,loader:'ts-loader'
            }
        ]
    }
}