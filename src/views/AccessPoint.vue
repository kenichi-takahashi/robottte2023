<!-- src/views/AccessPoint.vue -->
<template>
<div class="fade-in">
  <div class="accesspoint">
    <h1 class="fade-in">{{ pageTitle }}</h1>
    <p>本社：東京都港区南青山二丁目2番15号ウィン青山942</p>
    <p>支社：東京都練馬区北町２-21-10-702（INITIA練馬北町）</p>
        <iframe
      width="600"
      height="450"
      frameborder="0"
      style="border:0"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDWYBtboDr3mGfxp7gERMr9Olw-hYJBgWQ&q=東京都練馬区北町２-21-10"
      allowfullscreen
    ></iframe>
   </div>
   <p>googlemapここに表示</p>
   <div id="map" style="height: 400px;"></div>
</div>
</template>

<script>
/* global google */ // この行を追加
export default {
  data() {
    return {
      pageTitle: 'AccessPoint',
      apiKey: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
    };
  },
  computed: {
    mapUrl() {
      return `https://www.google.com/maps/embed/v1/place?key=${this.apiKey}&q=東京都練馬区北町２-21-10`;
    }
  },
    mounted() {
    this.$nextTick(() => {
      if (typeof google !== 'undefined' && google.maps) {
        // マップの初期化
        new google.maps.Map(document.getElementById('map'), { // 'const map =' を削除
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8
        });
      }
    });
  }
};

</script>

<style scoped>
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
</style>