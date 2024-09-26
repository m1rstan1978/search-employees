<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const { params } = useRoute();

let activeEmployeer = computed(() => {
  return store.getters["getActiveEmployeer"];
});

if (!activeEmployeer?.value) {
  fetchEmployeer();
}

async function fetchEmployeer() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?name=${params.id}`
    );
    const data = await response.json();
    if (!data || data.length <= 0) {
      router.push("/search");
      return;
    }
  } catch (e) {
    console.log(e);
  }
}
</script>

<template>
  <section class="main">
    <div class="main__content">
      <div class="main__image">
        <img class="main__img" :src="'/employeer/placeholder.webp'" />
      </div>
      <div class="main__info">
        <h1 class="main__title">{{ activeEmployeer?.name }}</h1>
        <div class="main__text">
          <span class="main__span">email:</span> {{ activeEmployeer?.email }}
        </div>
        <div class="main__text">
          <span class="main__span">phone:</span> {{ activeEmployeer?.phone }}
        </div>
        <h2 class="main__name">О себе:</h2>
        <p class="main__des">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@mixin displayStyles {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  column-gap: 60px;
}

.main {
  padding: 30px 20px;
  &__content {
    @include displayStyles();
  }
  &__img {
    min-width: 424px;
  }
  &__title {
    @include h2-styles();
    color: $black;
    margin-bottom: 10px;
  }

  &__text {
    @include text-styles();
    color: $gray;
    margin-bottom: 20px;
  }
  &__span {
    color: $dark-gray;
    font-weight: 600;
  }
  &__text:nth-child(2) {
    margin-bottom: 10px;
  }
  &__name {
    @include h2-styles();
    margin-bottom: 10px;
  }
  &__des {
    @include text-styles();
    color: $gray;
  }
}
</style>
