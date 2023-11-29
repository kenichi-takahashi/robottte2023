<!-- src/views/ProductIntroduction.vue -->
<template>
  <div class="ProductIntroduction">
    <h1>{{ pageTitle }}</h1>
<div style="display: flex; justify-content: center;">
  <ul style="list-style-position: inside; text-align: left;">
    <li>画期的な採用差別化ツールであり、以下のような採用活動力を圧倒的に上げるプラットフォームでございます。</li>
    <li>ＱＡ対応や自動面談機能、面接の日程調整まで代行できる採用アウトソーシング機能</li>
    <li><a href=https://hr-monster.io/>HRモンスター紹介サイト</a></li>
    <li><a href=https://hr-monster.io/recruit/>求職者向けサイト</a></li>
  </ul>
</div>  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: 'HRモンスター',
    };
  },
};
</script>

<style scoped>
/* ページのスタイルを適用 */
</style>
