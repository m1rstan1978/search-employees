<script setup>
import Input from "@/components/ui/e-input.vue";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const inputVal = ref("");
const store = useStore();
const router = useRouter();

async function getFetchUsers(val) {
  const splitCheckType = val.split("");
  let splitArr = val.split(",");
  let cleanedQueryName;

  if (splitCheckType.length <= 0 || !splitCheckType) {
    await store.dispatch("fetchUsers", "?name=");
    return;
  }
  const fSymb = Number(splitCheckType[0]);
  if (isNaN(fSymb)) {
    cleanedQueryName = setQueryName(splitArr, "name");
    await store.dispatch("fetchUsers", cleanedQueryName);
    return;
  }
  cleanedQueryName = setQueryName(splitArr, "id");
  await store.dispatch("fetchUsers", cleanedQueryName);
}

function setQueryName(arr, name) {
  return arr
    .map((el, idx) => {
      if (idx === 0) {
        return `?${name}=${el}`;
      }
      return `&${name}=${el}`;
    })
    .join("")
    .replace(/\s*=\s*/g, "=");
}

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const debouncedFetchUsers = debounce(getFetchUsers, 150);

watch(inputVal, (val) => {
  if (val.length <= 0) {
    router.push("/search");
    store.commit("setActiveEmployeer", null);
    store.commit("setLoading", false);
    store.commit("setInputVal", "");
    store.commit("setEmployeer", []);
  }
  store.commit("setLoading", true);
  store.commit("setInputVal", val);
  store.commit("setEmployeer", []);

  debouncedFetchUsers(val);
});
</script>

<template>
  <form class="form" @submit.prevent>
    <div class="form__input">
      <Input v-model="inputVal" />
    </div>
  </form>
</template>

<style scoped lang="scss">
.form {
  width: 100%;
  margin-bottom: 22px;
}
</style>
