<template>
  <div id="app">
    <img
      src="@/assets/logo.png"
      alt="Logo"
      class="logo"
      @mouseover="enlargeLogo"
      @mouseleave="resetLogo"
    >
    <HelloWorld msg="株式会社robottteへようこそ"/>
    <p>すばらしい！</p>
    <router-link to="/accesspoint">Access</router-link>
    <router-link to="/productintroduction">Product</router-link>
    <router-link to="/companyoverview">Overview</router-link>
    <router-view></router-view>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    enlargeLogo() {
      // マウスオーバー時にロゴを拡大するロジックをここに追加
      this.$refs.logo.style.transform = 'scale(1.2)';
    },
    resetLogo() {
      // マウスがロゴから離れたときにロゴのサイズを元に戻すロジックをここに追加
      this.$refs.logo.style.transform = 'scale(1)';
      
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* 基本のスタイル */
.logo {
    width: 60vw; /* ビューポートの横幅の60% */
    height: auto; /* 縦横比を保つ */
    margin-bottom: 10px; /* スペースを追加または調整 */
}
/* マウスオーバー時に拡大されるスタイル */
.logo:hover {
  transform: scale(1.2);
  transition: transform 0.3s ease; /* 拡大アニメーションの速度とイージングを調整できます */
}
/* スマートフォン用のスタイル（画面幅が600px以下の場合） */
@media (max-width: 600px) {
    .logo {
        width: 90vw; /* ビューポートの横幅の90% */
    }
}
</style>
