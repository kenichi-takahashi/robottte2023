# ベースイメージの指定
FROM node:latest

# アプリケーションの作業ディレクトリを設定
WORKDIR /app

# パッケージファイルをコピー
COPY package*.json ./

# 依存関係をインストール
RUN yarn install

# ソースコードをコピー
COPY . .

# アプリケーションをビルド
RUN yarn build

# アプリケーションがリッスンするポートを指定
EXPOSE 3000

# アプリケーションの起動コマンド
CMD ["npm", "run", "serve"]