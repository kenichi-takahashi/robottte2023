<template>
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
    <HelloWorld msg="株式会社robottteへようこそ"/>
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
    <router-link to="/companyoverview">Overview</router-link>
    <br>
    <router-link to="/productintroduction">Product</router-link>
    <br>
    <router-link to="/accesspoint">Access</router-link>
    <br>
    <router-link to="/companyquery">Query</router-link>
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
