// src/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import CompanyOverview from '@/views/CompanyOverview.vue'; // 各ページに対応するコンポーネントをインポート
import AccessPoint from '@/views/AccessPoint.vue';
import ProductIntroduction from '@/views/ProductIntroduction.vue';
import CompanyQuery from '@/views/CompanyQuery.vue';
// import App from '@/App.vue'; // App.vue ファイルのパスを適切に指定する

Vue.use(VueRouter);

const routes = [
//  { path: '/', component: App }, // メインページは App.vue
{ path: '/companyoverview', 
  components:{
    box2:CompanyOverview 
  },
},
{ path: '/productintroduction',
  components:{
    box3:ProductIntroduction
  },
},
{ path: '/accesspoint', 
  components:{
    box4:AccessPoint },
},
{ path: '/companyquery',
  component:{
    box5:CompanyQuery
  },
}
];

const router = new VueRouter({
  routes, // ルートの設定を渡す
});

export default router;

