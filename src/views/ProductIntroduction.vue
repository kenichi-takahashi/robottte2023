<!-- src/views/ProductIntroduction.vue -->
<template>
  <div class="ProductIntroduction">
    <h1>{{ pageTitle }}</h1>
<div class="bullets" style="display: flex; justify-content: center;">
  <br>
    <div id="app" class="fade-in">
    <a href="http://hr-monster.io/" target="_blank">
            <img
              src="@/assets/neon.png"
              alt="Neon"
              class="neon app-neon"
              ref="neon"
              @mouseover="enlargeNeon"
              @mouseleave="resetNeon"
            >  
    </a>
    </div>

  <ul style="list-style-position: inside; text-align: left;">
    <br>
    <li>月6980円～の24時間働ける担当者を雇用しませんか</li>
    <li>土日・夜間帯の応募者を即時対応し、効率化も図れるプラットフォーム</li>
    <li>職員入社後、早期離職防止できる定着のプラットフォーム</li>
    <center>
    <br><a href=https://hr-monster.io/>HRモンスター紹介サイト</a>
    <br><a href=https://hr-monster.io/recruit/>求職者向けサイト</a>
    </center>
  </ul>
</div>  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: '製品紹介',
    };
  },
    methods: {
    enlargeNeon() {
      this.$refs.neon.style.transform = 'scale(1.2)';
    },
    resetLogo() {
      this.$refs.neon.style.transform = 'scale(1)';
    },
  },
};
</script>

<style scoped>
/* ページのスタイルを適用 */
.bullets {
width: 50%; /* コンテンツの幅を60%に設定 */
font-size: 0.75em;
margin: 0 auto; /* 上下にはマージンなし、左右に自動マージンを設定して中央寄せ */
text-align: center; /* テキストを中央揃えに設定 */
line-height: 1.5; /* 行間を広げる */
}

.neon {
  width: 20vw;
  height: auto;
  margin-bottom: 10px;
}

.neon:hover {
  transform: scale(1.2);
  transition: transform 0.5s ease;
  cursor: pointer;
}

.neon {
  transition: transform 0.5s ease;
}

.neon:not(:hover) {
  transform: none; 
}

.app-neon {
  cursor: pointer;
}

.pointer-link:hover {
  cursor: pointer;
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


</style>
