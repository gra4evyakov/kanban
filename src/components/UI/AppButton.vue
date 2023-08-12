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
  height: fit-content;
  padding: var(--base-padding);

  transition: box-shadow 0.2s ease-in-out;

  border: none;
  border-radius: var(--ui-radius);
  background-color: var(--ui-background);
}

.button:hover,
.button:focus {
  box-shadow: var(--ui-shadow);
}

.rounded {
  border-radius: 50%;
}
</style>
