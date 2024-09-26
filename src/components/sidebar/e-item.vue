<script setup>
import { computed, defineProps } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const props = defineProps({
  item: Object,
});

const store = useStore();
const router = useRouter();

const getActEmployeer = computed(() => {
  return store.getters["getActiveEmployeer"];
});

function setEmployeer() {
  store.commit("setActiveEmployeer", props.item);
  router.push("/");
}
</script>

<template>
  <div
    class="item"
    @click="setEmployeer"
    :class="{ activeEmployeer: getActEmployeer?.id === props?.item?.id }"
  >
    <div class="item__image">
      <img class="item__img" :src="'/sidebar/placeholder.webp'" />
    </div>
    <div class="item__info">
      <div class="item__name">{{ props.item.name }}</div>
      <div class="item__mail">{{ props.item.email }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item {
  box-shadow: 2px 2px 15px 0 rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0);
  transition: all 0.4s ease;
  cursor: pointer;
  &__image {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__img {
    min-width: 60px;
  }
  &__info {
    padding: 15px 15px 15px 15px;
    height: 100%;
    width: 100%;
    border-top-right-radius: 9px;
    border-bottom-right-radius: 9px;
    transition: all 0.4s ease;
  }
  &__name {
    font-size: 14px;
    font-weight: 600;
    color: $dark-gray;
    margin-bottom: 2px;
    width: 121px;
    @include hide-text();
    transition: all 0.4s ease;
  }
  &__mail {
    font-size: 14px;
    font-weight: 400;
    color: $gray;
    @include hide-text();
    width: 121px;
  }
  &:hover {
    box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0);
    border: 1px solid #e0e0e0;
  }
  &:hover &__info {
    background: #e0e0e0;
  }
  &:hover &__name {
    transform: translateX(12px);
  }
}
.activeEmployeer {
  box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0);
  border: 1px solid #e0e0e0;
}
.activeEmployeer .item__info {
  background: #e0e0e0;
}
.activeEmployeer .item__name {
  transform: translateX(12px);
}
</style>
