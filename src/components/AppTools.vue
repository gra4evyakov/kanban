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
    <slot name="icon" />
    <div class="tools-actions">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.tools {
  display: flex;
  align-items: center;

  padding: 5px 10px;
}

.tools-title {
  padding-right: 10px;
}

.tools-image {
  width: 30px;
  height: 30px;
}

.tools-actions {
  display: flex;

  margin-left: auto;

  gap: 10px;
}
</style>
