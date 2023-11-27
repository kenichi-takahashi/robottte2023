const { defineConfig } = require('@vue/cli-service')

module.exports = (context) => {
  // NODE_ENV 環境変数を取得
  const isProduction = process.env.NODE_ENV === 'production'

  // 本番リモート環境用の設定
  if (isProduction) {
    return defineConfig({
      transpileDependencies: true,
      publicPath: '/robottte/' // プロジェクト名に置き換えてください
    })
  } else { // ローカル環境用の設定
    return defineConfig({
      transpileDependencies: true
    })
  }
}