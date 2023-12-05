const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig((context) => {
  // NODE_ENV 環境変数を取得
  const isProduction = process.env.NODE_ENV === 'production';

  // 本番リモート環境用の設定
  if (isProduction) {
    return {
      transpileDependencies: true,
      publicPath: '/robottte/' // プロジェクト名に置き換えてください
    };
  } else { // ローカル環境用の設定
    return {
      transpileDependencies: true,
      devServer: {
        port: 3000 // ローカル環境のポート番号を指定
      }
    };
  }
});