<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="tools">
    <h1 class="tools-title">{{ title }}</h1>
    <div class="tools-actions">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.tools {
  padding: 5px 10px;
  display: flex;
  align-items: center;
}

.tools-title {
  padding-right: 10px;
}

.tools-actions {
  display: flex;
  gap: 10px;
  margin-left: auto;
}
</style>
