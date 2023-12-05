const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
// const punycode = require('punycode-lite');

const app = express();
const port = 3001; 

// server.js
require('dotenv').config(); // 最初に読み込み

const user = process.env.MAIL_USER;
const pass = process.env.MAIL_PASS;

  // Node.jsの例 
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use(express.static('public'));


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

app.listen(port, () => {
  console.log(`サーバーがポート${port}で起動しました`);
});

