<script setup>
import Form from "@/components/sidebar/e-form.vue";
import Item from "@/components/sidebar/e-item.vue";
import Spinner from "@/components/ui/e-spinner.vue";

import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const arrUsers = computed(() => {
  return store.getters["getEmployeer"];
});

const isLoading = computed(() => {
  return store.getters["getLoading"];
});

const getInputVal = computed(() => {
  return store.getters["getInputVal"];
});
</script>

<template>
  <div class="sidebar">
    <div class="sidebar__content">
      <h2 class="sidebar__title">Поиск сотрудников</h2>
      <Form />
      <h2 class="sidebar__res">Результаты</h2>
      <div class="sidebar__result">
        <div class="sidebar__spinner" v-if="isLoading">
          <Spinner />
        </div>
        <div
          class="sidebar__text"
          v-if="(!arrUsers || arrUsers.length <= 0) && !isLoading"
        >
          {{ getInputVal.length <= 0 ? "начните поиск" : "ничего не найдено " }}
        </div>
        <div class="sidebar__result_items">
          <Item v-for="(item, idx) in arrUsers" :key="idx" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  padding: 27px 36px 27px 20px;
  border-right: 1px solid #dededd;
  &__title {
    @include h2-styles();
    margin-bottom: 22px;
  }
  &__res {
    @include h2-styles();
  }
  &__result_items {
    display: flex;
    flex-direction: column;
    margin-top: 18px;
    gap: 20px;
  }
  &__spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
  }
  &__text {
    @include text-styles();
    color: $gray;
    margin-top: 10px;
  }
}
</style>
