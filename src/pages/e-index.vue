<script setup></script>

<template>
  <section class="main">
    <div class="main__text">
      Выберите сотрудника, чтобы посмотреть его профиль
    </div>
  </section>
</template>

<style scoped lang="scss">
.main {
  &__text {
    margin-top: 250px;
    text-align: center;
    @include text-styles();
    color: $gray;
  }
}
</style>
