<script setup>
const { title } = defineProps({
  title: String,
  length: Number
})
</script>

<template>
  <div class="section">
    <div class="section-title">
      <h3>{{ title }} {{ length }}</h3>
    </div>
    <slot />
  </div>
</template>

<style scoped>
.section {
  overflow: hidden;
  padding: var(--section-padding);
  display: grid;
  grid-template-rows: min-content 1fr;
  row-gap: var(--section-gap);
  background-color: rgb(243, 242, 242);
  border-radius: var(--section-radius);
  box-shadow: var(--section-shadow)
}

.section-title {
  padding: var(--section-padding);
  text-transform: uppercase;
}
</style>
