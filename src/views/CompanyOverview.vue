<!-- src/views/Overview.vue -->
<template>
  <div class="overview">
    <h1>{{ pageTitle }}</h1>
    <p>会社の概要をここに記述します。</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: 'Overview',
    };
  },
};
</script>

<style scoped>
/* ページのスタイルを適用 */
</style>
