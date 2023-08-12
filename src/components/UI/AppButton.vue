<script setup>
defineProps({
  rounded: {
    type: Boolean
  },
  type: {
    type: String,
    default: 'button'
  }
})
</script>

<template>
  <button class="button" :type="type" :class="{ rounded: rounded }">
    <slot />
  </button>
</template>

<style scoped>
.button {
  padding: 5px 5px;
  height: fit-content;
  border: none;
  border-radius: 5px;
  background-color: gainsboro;
  transition: box-shadow 0.2s ease-in-out;
}

.button:hover,
.button:focus {
  box-shadow: 0px 0px 15px gainsboro;
}

.rounded {
  border-radius: 50%;
}
</style>
