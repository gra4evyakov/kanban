<script setup>
import AppSectionListItem from './AppSectionListItem.vue'
import { useKanbanStore } from '../stores/kanban'

const { tasks, title } = defineProps({
  tasks: Array,
  title: String
})
const kanban = useKanbanStore()
</script>

<template>
  <ul class="section-list">
    <AppSectionListItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @delete-item="kanban.removeTaskById(title, task.id)"
    />
  </ul>
</template>

<style scoped>
.section-list {
  padding: 5px;
  transition: overflow 0.3s linear;
  overflow-y: hidden;
  scrollbar-gutter: stable;
  /* -ms-overflow-style: none;
  scrollbar-width: none; */
}

.section-list:hover {
  overflow-y: scroll;
}

.section-list::-webkit-scrollbar-track {
  margin: 5px;
  padding: 2px 2px;
}
.section-list::-webkit-scrollbar {
  width: 7px;
  /* display: none; */
}
.section-list::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: gainsboro;
}
</style>
