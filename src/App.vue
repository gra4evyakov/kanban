<script setup>
import { computed, ref } from 'vue'
import { useKanbanStore } from './stores/kanban'
import draggable from 'vuedraggable'

import AppSection from './components/AppSection.vue'
import AppSectionList from './components/AppSectionList.vue'
import Appsectionlistitem from './components/AppSectionListItem.vue'

import AppTools from './components/AppTools.vue'

import AppButton from './components/UI/AppButton.vue'
import AppPlusIcon from './components/icons/AppPlusIcon.vue'
import AppModal from './components/UI/AppModal.vue'
import AppLogoIcon from './components/icons/AppLogoIcon.vue'
import AppSelect from './components/UI/AppSelect.vue'

const showModal = ref(false)
const kanban = useKanbanStore()

const toggleModal = () => {
  showModal.value = !showModal.value
}
const closeModal = () => {
  showModal.value = false
}
const addTask = (task) => {
  kanban.addTask(task)
}

const dragOptions = computed(() => {
  return {
    animation: 200,
    group: 'description',
    disabled: false,
    ghostClass: 'ghost'
  }
})
</script>

<template>
  <div class="kanban">
    <AppTools title="Board">
      <template v-slot:icon>
        <AppLogoIcon />
      </template>
      <AppButton @click="toggleModal" background>
        Новая задача
        <AppPlusIcon />
      </AppButton>
    </AppTools>
    <AppSelect />
    <div class="sections">
      <AppSection
        v-for="(section, title) in kanban.sortedSections"
        :key="title"
        :title="title"
        :length="section.length"
      >
        <AppSectionList>
          <draggable
            class="draggable"
            v-model="kanban.sections[title]"
            v-bind="dragOptions"
            group="tasks"
            item-key="id"
          >
            <template #item="{ element }">
              <Appsectionlistitem
                :class="element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'"
                @click="element.fixed = !element.fixed"
                :key="element.id"
                :task="element"
                @delete-item="kanban.removeTaskById(title, element.id)"
              />
            </template>
          </draggable>
        </AppSectionList>
      </AppSection>
    </div>
  </div>
  <AppModal v-if="showModal" :is-open="showModal" @close="closeModal" @form-data="addTask" />
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
.ghost {
  background: #fec1c1;
}
</style>
