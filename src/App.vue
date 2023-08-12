<script setup>
import { ref, watchEffect} from 'vue'
import { useKanbanStore } from './stores/kanban'

import AppSection from './components/AppSection.vue'
import AppTools from './components/AppTools.vue'
import AppButton from './components/UI/AppButton.vue'
import AppInput from './components/UI/AppInput.vue'
import AppPlusIcon from './components/icons/AppPlusIcon.vue'
import AppModal from './components/UI/AppModal.vue'

const showModal = ref(false)
const kanban = useKanbanStore()
watchEffect(() => {
  for (const sectionKey of Object.keys(kanban.sections)) {
    localStorage.setItem(`kanban_${sectionKey}`, JSON.stringify(kanban.sections[sectionKey]))
  }
})

const toggleModal = () => {
  showModal.value = !showModal.value
}
const closeModal = () => {
  showModal.value = false
}
const addTask = (task) => {
  kanban.addTask(task)
}
</script>

<template>
  <div class="kanban">
    <AppTools title="Board">
      <AppButton @click="toggleModal" rounded background>
        <AppPlusIcon />
      </AppButton>
      <AppInput rounded background placeholder="Search" />
    </AppTools>
    <div class="sections">
      <AppSection
        v-for="(section, title) in kanban.sections"
        :key="title"
        :title="title"
        :tasks="section"
      />
    </div>
  </div>
  <AppModal v-if="showModal" :is-open="showModal" @close="closeModal" @form-data="addTask" />
</template>

<style scoped>
.kanban {
  height: 100%;
  max-height: 100%;
  display: grid;
  grid-template-rows: 50px 1fr;
  row-gap: 10px;
}

.sections {
  padding: 5px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  column-gap: 10px;
}
</style>
