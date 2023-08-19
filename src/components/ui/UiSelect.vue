<script setup>
import { useKanbanStore } from '../../stores/kanban'

const kanbanStore = useKanbanStore()
</script>

<template>
  <div class="select">
    <p>Сортировка по:</p>
    <select class="select" v-model="kanbanStore.selectedSortOption">
      <option v-for="item in kanbanStore.sortOptions" :key="item.value" :value="item.value">
        {{ item.label }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.select {
  display: flex;
  align-items: center;
  padding: var(--base-padding);
  margin-left: auto;
  border: none;
  border-radius: var(--ui-radius);
  background-color: var(--ui-background);
}
</style>
