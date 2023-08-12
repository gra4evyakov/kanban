<script setup>
defineProps({
  modelValue: String,
  placeholder: String,
  rounded: Boolean
})

const emit = defineEmits(['update:modelValue'])
const updateValue = (value) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <textarea
    class="textarea"
    :class="{ rounded: rounded }"
    type="text"
    rows="10"
    :placeholder="placeholder"
    @input="updateValue($event.target.value)"
  />
</template>

<style scoped>
.textarea {
  width: 100%;
  padding: 5px 10px;
  border: none;
  background-color: gainsboro;
  transition: box-shadow 0.2s ease-in-out;
  resize: none;
}

.textarea:hover,
.textarea:focus {
  box-shadow: 0px 0px 10px gainsboro;
}

.rounded {
  border-radius: 5px;
}
</style>
