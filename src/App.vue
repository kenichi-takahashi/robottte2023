<template>
  <div id="app">
    <img src="@/assets/logo.png" alt="Logo" class="logo">
    <HelloWorld msg="株式会社robottteへようこそ"/>
    <p>すばらしい！</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
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
}
/* スマートフォン用のスタイル（画面幅が600px以下の場合） */
@media (max-width: 600px) {
    .logo {
        width: 90vw; /* ビューポートの横幅の90% */
    }
}
</style>
