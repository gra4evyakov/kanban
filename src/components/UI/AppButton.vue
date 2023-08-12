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
  padding: var(--base-padding);
  height: fit-content;
  border: none;
  border-radius: var(--ui-radius);
  background-color: var(--ui-background);
  transition: box-shadow 0.2s ease-in-out;
}

.button:hover,
.button:focus {
  box-shadow: var(--ui-shadow)
}

.rounded {
  border-radius: 50%;
}
</style>
