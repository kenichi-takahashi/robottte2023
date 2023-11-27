<!-- src/views/CompanyOverview.vue -->
<template>
  <div class="CompanyOverview">
    <h1>{{ pageTitle }}</h1>
    <p>会社の概要をここに記述します。</p>
    <p>創設：2021年8月2日</p>
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
