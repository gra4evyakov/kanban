<script setup>
import { useKanbanStore } from '../../stores/kanban'

const kanban = useKanbanStore()
</script>

<template>
  <div class="select">
    <p>Сортировка по:</p>
    <select class="select" v-model="kanban.selectedSortOption">
      <option v-for="item in kanban.sortList" :key="item.value" :value="item.value">
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
