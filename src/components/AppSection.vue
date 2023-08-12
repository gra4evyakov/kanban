<script setup>
import AppSectionList from './AppSectionList.vue'

const { title, tasks } = defineProps({
  title: String,
  tasks: Array
})

const tasksCount = tasks ? tasks.length : 0
</script>

<template>
  <div class="section">
    <div class="section-title">
      <h3>{{ title }} {{ tasksCount }}</h3>
    </div>
    <AppSectionList :tasks="tasks" :title="title" :group="title" />
  </div>
</template>

<style scoped>
.section {
  overflow: hidden;
  padding: 5px;
  display: grid;
  grid-template-rows: min-content 1fr;
  row-gap: 10px;
  background-color: rgb(243, 242, 242);
  border-radius: 10px;
  box-shadow: 0px 0px 2px grey;
}

.section-title {
  padding: 5px;
  text-transform: uppercase;
}
</style>
