import Vue from 'vue';
import App from './App.vue';
import router from './router'; // ルートファイルをインポート
// import $ from 'jquery'
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

Vue.config.productionTip = false;

new Vue({
  router, // Vueインスタンスにルーターを登録
  render: (h) => h(App),
}).$mount('#app');