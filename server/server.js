const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');
const path = require('path');
const cors = require('cors');
// const punycode = require('punycode-lite');

const app = express();
const port = process.env.PORT || 8080; //元const port = 8080; 

// server.js
require('dotenv').config(); // 最初に読み込み

const user = process.env.MAIL_USER;
const pass = process.env.MAIL_PASS;

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Node.jsの例 
//  app.use((req, res, next) => {
//    res.header("Access-Control-Allow-Origin", "*"); 
//    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//    next();
//  });

//app.get('/', (req, res) => {
//  res.send('Hello, World!');
// });
const corsOptions = {
  origin: 'https://kenichi-takahashi.github.io',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'dist')));


// ボディーパーサーを使用してPOSTデータをパース
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// フォームデータを受け取り、メールを送信するエンドポイント
app.post('/sendEmail', (req, res) => {
  const { name, email, phoneNumber, address } = req.body;

  // Nodemailerを使用してメールを送信
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.SEND_FROM_EMAIL,// 送信元のGmailアカウントのパスワード
      pass: process.env.SEND_FROM_PASSWORD,// Gmailアカウントのパスワード
      authType:'PLAIN',
    },
  });


  const mailOptions = {
    from: process.env.SEND_FROM_EMAIL, // 送信元のメールアドレス
    to: process.env.SEND_TO_EMAIL, // 送信先のメールアドレス
    subject: 'お問い合わせがありました',
    text: `
      名前: ${name}
      Email: ${email}
      電話番号: ${phoneNumber}
      住所: ${address}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('メールの送信に失敗しました');
    } else {
      console.log('メールが送信されました:', info.response);
      res.status(200).send('お問い合わせが送信されました');
    }
  });
});

  // ここで静的ファイルを提供
  // app.use(express.static(path.join(__dirname, '../dist')));
  // app.use(express.static(path.join(__dirname, '../dist')));
  app.use('/robottte', express.static(path.join(__dirname, '../dist')));

  // app.use(express.static(path.join(__dirname, 'dist')));
  // app.use('/', serveStatic(path.join(__dirname, '../dist')));

  // すべてのルートでindex.htmlを提供
  // index.htmlを提供
//  app.get('*', function (req, res) {
//    res.sendFile(path.join(__dirname, '../dist/index.html'))
//  });
//  app.get('*', function (req, res) {
//    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
//  });
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
  });

  //app.get('/*', (req,res) => {
  //  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
  //});

  app.listen(port, () => {
    console.log(`サーバーがポート${port}で起動しました`);
  });
  