<!-- src/views/CompanyQuery.vue -->
<template>
  <div class="CompanyQuery">
    <h1>{{ pageTitle }}</h1>
<div style="display: flex; justify-content: center;">
    <h1>お問い合わせ</h1>
    <form @submit.prevent="submitForm">
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
      <div>
        <label for="address">住所:</label>
        <input type="text" id="address" v-model="address" @blur="showGoogleMap">
      </div>
      <div id="googleMap" v-if="googleMapVisible"></div>
      <div>
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
      pageTitle: 'HRモンスター',
      name: '',
      phoneNumber: '',
      email: '',
      emailError: false,
      address: '',
      googleMapVisible: false,
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
      // Google Mapを表示する処理を実装
      // ここでは実際のGoogle Maps APIを使用せず、メッセージを表示するだけとします
      this.googleMapVisible = true;
      alert('Google Mapを表示します: ' + this.address);
    },
    submitForm() {
      // フォームデータをオブジェクトとして作成
      const formData = {
        name: this.name,
        phoneNumber: this.phoneNumber,
        email: this.email,
        address: this.address
      };
      // HTTPクライアント（axiosなど）を使用してPOSTリクエストを送信
      axios.post('https://robottte.azurewebsites.net/sendEmail', formData)
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
</style>
