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
  display: grid;
  overflow: hidden;

  padding: var(--section-padding);

  border-radius: var(--section-radius);
  background-color: rgb(243, 242, 242);
  box-shadow: var(--section-shadow);

  grid-template-rows: min-content 1fr;
  row-gap: var(--section-gap);
}

.section-title {
  padding: var(--section-padding);

  text-transform: uppercase;
}
</style>
