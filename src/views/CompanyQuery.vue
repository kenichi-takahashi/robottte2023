<!-- src/views/CompanyQuery.vue -->
<template>
  <div class="CompanyQuery">
    <h1><center>{{ pageTitle }}</center></h1>
    <div class="form-container">
    <form @submit.prevent="submitForm">
      <div>
        <label for="inquiry">問合せ:</label>
        <textarea id="inquiry" v-model="inquiry"></textarea>
      </div>
      <div>
        <label for="name">名前:</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div>
        <label for="phoneNumber">電話番号:</label>
        <input type="text" id="phoneNumber" v-model="phoneNumber" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required @blur="checkEmail">
        <span v-if="emailError" style="color: red;">有効なEmailを入力してください。</span>
      </div>
      <div id="address-container">
        <label for="address">住所(任意):</label>
        <input type="text" id="address" v-model="address" @blur="showGoogleMap">
      </div>
      <iframe :src="googleMapUrl" frameborder="0"></iframe>
      <div id="googleMap" v-if="googleMapVisible"></div>
      <div class="submit-button-container">
        <button type="submit">送信</button>
      </div>
    </form>
</div>  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pageTitle: 'お問合せ',
      name: '',
      phoneNumber: '',
      email: '',
      emailError: false,
      address: '',
      inquiry: '',
      googleMapVisible: false,
      googleMapUrl: 'https://maps.google.co.jp/maps?output=embed&q=東京都練馬区北町２-21-10',
    };
  },
    methods: {
    checkEmail() {
      // Emailが有効かどうかを確認
      if (!this.email.includes('@')) {
        this.emailError = true;
      } else {
        this.emailError = false;
      }
    },
    showGoogleMap() {
      this.googleMapUrl = `https://maps.google.co.jp/maps?output=embed&q=${encodeURIComponent(this.address)}`;
    },
//    showGoogleMap() {
      // Google Mapを表示する処理を実装
      // ここでは実際のGoogle Maps APIを使用せず、メッセージを表示するだけとします
//      this.googleMapVisible = true;
//      alert('Google Mapを表示します: ' + this.address);
//    },
    submitForm() {
      // フォームデータをオブジェクトとして作成
      const formData = {
        name: this.name,
        phoneNumber: this.phoneNumber,
        email: this.email,
        address: this.address,
        inquiry: this.inquiry,
      };
      // HTTPクライアント（axiosなど）を使用してPOSTリクエストを送信
      axios.post('https://robottte.jp/sendEmail', formData)
      // 一旦消す。axios.post('http://localhost:8080/sendEmail', formData)
      // 一旦消す。axios.post('/sendEmail', formData)
        .then(response => {
          console.log(response.data);
          // 成功時の処理を追加
        })
        .catch(error => {
          console.error(error);
          // エラー時の処理を追加
        });
    }
    
  }
}
</script>

<style scoped>
/* ページのスタイルを適用 */
.CompanyQuery {
  font-family: 'Arial', sans-serif;
  max-width: 600px;
  margin: auto;
}

.CompanyQuery h1 {
  font-size: 1.5em;
  text-align: left;
  margin-bottom: 1em;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.form-container h2 {
  font-size: 1.2em;
  margin-bottom: 0.5em;
}

form {
  width: 100%;
}

form > div {
  display: flex;
  align-items: flex-start; /* align-itemsをflex-startに変更 */
  margin-bottom: 0.5em; /* 余白を半分に */
}


label {
  flex: 1;
  margin-right: 10px; /* ラベルと入力フィールドの間隔 */
  font-size: 0.9em; /* ラベルの文字サイズを小さく設定 */
}

textarea {
  flex: 2; /* textareaの横幅を調整 */
  height: 6em; /* textareaの高さを3倍に */
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[id="inquiry"] {
  flex: 2;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[type="text"],
input[type="email"] {
  flex: 2;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
}


/* 住所と地図の配置を変更するためのスタイル */
/* 住所のラベルと入力欄の横並び設定 */
#address-container {
  display: flex;
  align-items: center;
  margin-bottom: 0.1em; /* 住所入力欄と地図の間のマージン */
}

#address-container label {
  flex: 1;
  margin-right: 10px; /* ラベルと入力フィールドの間隔 */
}

#address-container input[type="text"] {
  flex: 2; /* 入力欄を他のフィールドと同じ横幅に調整 */
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
}

iframe {
  width: 100%;
  max-width: 600px;
  height: 450px;
  border: 0;
  margin-top: 1em; /* 地図の上のマージン */
}

.submit-button-container {
  display: flex;
  justify-content: center; /* 横方向の中央揃え */
  width: 100%; /* コンテナの幅を100%に設定 */
  margin-top: 0.1em; /* 上部のマージン */
}

button[type="submit"] {
  background-color: #4CAF50;
  color: white;
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #45a049;
}

</style>
