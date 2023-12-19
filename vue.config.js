const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,

  // Webpackの設定をカスタマイズ
  configureWebpack: {
    resolve: {
      alias: {
        // '@' エイリアスを 'src' ディレクトリにマッピング
        '@': path.resolve(__dirname, 'src')
      }
    }
  },

  // 本番環境と開発環境の設定を切り替える
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 本番環境用の設定
      config.outputDir = 'dist';
      config.productionSourceMap = false;
      config.publicPath = '/robottte/'; // プロジェクト名に合わせて変更
    } else {
      // 開発環境用の設定
      config.devServer.port = 3000; // ローカル環境のポート番号
      // 他の開発環境特有の設定...
    }
  }
});