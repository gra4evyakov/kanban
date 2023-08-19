<script setup>
import { ref } from 'vue'
import { useKanbanStore } from '../stores/kanban'

import TheSection from './TheSection.vue'
import TheHeader from './TheHeader.vue'

import UiModal from './ui/UiModal.vue'
import UiSelect from './ui/UiSelect.vue'

const kanbanStore = useKanbanStore()

const showModal = ref(false)

const toggleModal = () => {
  showModal.value = !showModal.value
}
const closeModal = () => {
  showModal.value = false
}
const addTask = (task) => {
  kanbanStore.addTask(task)
}
</script>

<template>
  <div class="kanban">
    <TheHeader title="Board" @toggle-modal="toggleModal" />
    <UiSelect />
    <div class="sections">
      <TheSection
        v-for="(section, title) in kanbanStore.sortedSections"
        :key="title"
        :title="title"
        :length="section.value.length"
        :color="kanbanStore.sectionColor[title]"
      />
    </div>
  </div>
  <UiModal v-if="showModal" :is-open="showModal" @close="closeModal" @send-data="addTask" />
</template>

<style scoped>
.kanban {
  display: grid;

  height: 100%;
  max-height: 100%;

  grid-template-rows: min-content min-content 1fr;
  row-gap: var(--section-gap);
}

.sections {
  display: grid;
  overflow: hidden;

  padding: var(--base-padding);

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  column-gap: var(--section-gap);
}

@media screen and (max-width: 768px) {
  .sections {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: var(--section-gap);
  }
}
</style>
