<script setup></script>

<template>
  <div class="spinner"></div>
</template>

<style scoped lang="scss">
.spinner {
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top: 5px solid $red;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
