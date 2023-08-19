<script setup>
import { computed } from 'vue'
import { useKanbanStore } from '../stores/kanban'
import draggable from 'vuedraggable'

import TheSectionList from './TheSectionList.vue'
import TheSectionListitem from './TheSectionListItem.vue'
import UiButton from './ui/UiButton.vue'
import IconDelete from './icons/IconDelete.vue'

const { title, length, color } = defineProps({
  title: String,
  length: Number,
  color: String
})

const kanbanStore = useKanbanStore()

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
  <div class="section" :class="color">
    <div class="section-title">
      <h3>{{ title }} {{ length }}</h3>
      <UiButton v-if="title === 'done'" @click="kanbanStore.clearDoneTasks">
        <IconDelete />
      </UiButton>
    </div>
    <TheSectionList>
      <draggable
        class="draggable"
        v-model="kanbanStore.sections[title]"
        v-bind="dragOptions"
        group="tasks"
        item-key="id"
      >
        <template #item="{ element }">
          <TheSectionListitem
            :class="element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'"
            @click="element.fixed = !element.fixed"
            :key="element.id"
            :task="element"
            :title="title"
            @delete-item="kanbanStore.removeTaskById(title, element.id)"
          />
        </template>
      </draggable>
    </TheSectionList>
  </div>
</template>

<style scoped>
.section {
  display: grid;
  overflow: hidden;

  padding: var(--section-padding);
  border-radius: var(--section-radius);
  box-shadow: var(--section-shadow);

  grid-template-rows: min-content 1fr;
  row-gap: var(--section-gap);
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: var(--section-padding);

  text-transform: uppercase;
}

.grey {
  background-color: rgb(243, 242, 242, 0.1);
}

.red {
  background-color: var(--section-inprogress-color);
}

.yellow {
  background-color: var(--section-inqa-color);
}

.green {
  background-color: var(--section-done-color);
}

.ghost {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
