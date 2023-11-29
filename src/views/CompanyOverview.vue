<!-- src/views/CompanyOverview.vue -->
<template>
  <div class="CompanyOverview">
    <h1>{{ pageTitle }}</h1>
<div style="display: flex; justify-content: center;">
  <ul style="list-style-position: inside; text-align: left;">
    <li>商号：株式会社robottte（和名：株式会社ロボテ）</li>
    <li>設立：2021年8月2日</li>
    <li>事業：<a href=https://hr-monster.io/>HRモンスター</a>・<a href=https://kaigo-edutainment.com/kimochi-reset/>キモチのリセットボタン</a></li>
  </ul>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: 'CompanyOverview',
    };
  },
};
</script>

<style scoped>
/* ページのスタイルを適用 */
</style>
