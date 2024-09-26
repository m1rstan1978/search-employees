<script setup>
import { defineEmits, defineProps } from "vue";

const props = defineProps({
  modelValue: [String, Number],
});

const emit = defineEmits();

function updateValue(event) {
  emit("update:modelValue", event.target.value);
}
</script>

<template>
  <input
    :value="modelValue"
    @input="updateValue"
    class="input"
    type="text"
    placeholder="Введите Id или имя"
  />
</template>

<style scoped lang="scss">
.input {
  color: $gray;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  padding: 16px;
  @include text-styles();
  width: 100%;
}

.input::placeholder {
  color: $gray;
}
</style>
