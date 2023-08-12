<script setup>
defineProps({
  rounded: Boolean,
  placeholder: String,
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])
const updateValue = (value) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <input
    class="input"
    :class="{ rounded: rounded }"
    type="text"
    :placeholder="placeholder"
    @input="updateValue($event.target.value)"
  />
</template>

<style scoped>
.input {
  width: 100%;
  padding: 5px 10px;

  transition: box-shadow 0.2s ease-in-out;

  border: none;
  background-color: var(--ui-background);
}

.input:hover,
.input:focus {
  box-shadow: var(--ui-shadow);
}
.rounded {
  border-radius: var(--ui-radius);
}
</style>
