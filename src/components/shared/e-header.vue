<script setup></script>

<template>
  <header class="header">
    <div class="header__content">
      <h1 class="header__logo">Жилфонд</h1>
      <div class="header__user">Пользователь</div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@mixin dFlex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header {
  @include resolution-styles();
  padding: 50px 50px 26px 50px;
  &__content {
    @include dFlex();
  }
  &__logo {
    color: $red;
    @include h1-styles();
  }
  &__user {
    font-size: 16px;
    font-weight: 400;
    color: $gray;
  }
}
</style>
