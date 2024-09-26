<script setup>
import Sidebar from "@/components/sidebar/e-sidebar.vue";
</script>

<template>
  <main class="page">
    <div class="page__content">
      <Sidebar />
      <router-view></router-view>
    </div>
  </main>
</template>

<style scoped lang="scss">
.page {
  @include resolution-styles();
  padding: 0 50px;
  &__content {
    display: grid;
    grid-template-columns: 0.3fr 1fr;
    box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    min-height: 80vh;
    margin-bottom: 50px;
    background: #fdfdfd;
  }
}
</style>
