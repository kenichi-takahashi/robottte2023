<template>
  <div>
    <header id="header">
        <div id="app" class="fade-in">
            <img
              src="@/assets/logo.png"
              alt="Logo"
              class="logo app-logo"
              ref="logo"
              @mouseover="enlargeLogo"
              @mouseleave="resetLogo"
              @click="goToTop"
            >  
        </div>  
    </header>
    <section id="box2" class="box" data-section-name="Area2">
      <!--data-section-nameはページネーションを表示させた際、現在地に現れるテキスト-->
      <!-- <transition name="page" mode="out-in">
      </transition> -->
      <router-link to="/companyoverview">Overview</router-link>
      <!--/box-->
      <router-view name="box2"></router-view>
      </section>
      <section id="box3" class="box" data-section-name="Area3">
      <br>
      <router-link to="/productintroduction">Product</router-link>
      <router-view name="box3"></router-view>
      <!--/box--></section>      
      <section id="box4" class="box" data-section-name="Area4">
      <br>
      <router-link to="/accesspoint">Access</router-link>
      <router-view name="box4"></router-view>
      <!--/box--></section>
      <section id="box5" class="box" data-section-name="Area5">
      <br>
      <router-link to="/companyquery">Query</router-link>
      <router-view name="box5"></router-view>
      <!--/box--></section>     

  <HelloWorld msg="株式会社robottteへようこそ"/>
  <router-view></router-view>
 </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Vue from 'vue';
import VueRouter from 'vue-router';
import '../js/6-1.js';  // 6-1.jsへのパスを指定
import scrollify from 'jquery-scrollify';

Vue.use(VueRouter);

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    this.$nextTick(() => {
      scrollify(/* オプション */);
    });
  },
  methods: {
    enlargeLogo() {
      this.$refs.logo.style.transform = 'scale(1.2)';
    },
    resetLogo() {
      this.$refs.logo.style.transform = 'scale(1)';
    },
    goToTop() {
      const currentPath = this.$route.path;
      if (currentPath !== '/') {
        this.$router.push('/');
      }
    },
  },
  data() {
    return {
      currentSection: 0,
    };
  },
}
</script>

<style scoped>
@import '@/assets/css/6-1.css';
@import '@/assets/css/pagination.css'; 

#app {
  font-family: 'BIZ UDPゴシック', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  width: 50vw;
  height: auto;
  margin-bottom: 10px;
}

.logo:hover {
  transform: scale(1.2);
  transition: transform 0.5s ease;
  cursor: pointer;
}

.logo {
  transition: transform 0.5s ease;
}

.logo:not(:hover) {
  transform: none; 
}

.app-logo {
  cursor: pointer;
}

.pointer-link:hover {
  cursor: pointer;
}

@media (max-width: 600px) {
  .logo {
    width: 70vw;
  }
}

.fade-in {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* ページ遷移時のトランジションのスタイル */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}

/* リンクのスタイル */
router-link {
  font-size: 20px;
  text-decoration: none;
  color: #2c3e50;
  margin: 5px;
  transition: color 0.3s;
}
router-link:hover {
  color: #3498db;
}
</style>
