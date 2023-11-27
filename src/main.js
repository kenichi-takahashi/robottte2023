import Vue from 'vue';
import App from './App.vue';
import router from './router'; // ルートファイルをインポート

Vue.config.productionTip = false;

new Vue({
  router, // Vueインスタンスにルーターを登録
  render: (h) => h(App),
}).$mount('#app');