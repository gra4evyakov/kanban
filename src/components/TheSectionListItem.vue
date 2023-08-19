<script setup>
import UiButton from './ui/UiButton.vue'
import IconClose from './icons/IconClose.vue'
import IconArrow from './icons/IconArrow.vue'
import IconComplete from './icons/IconComplete.vue'
import { ref } from 'vue'

const emits = defineEmits(['delete-item'])
const { task, title } = defineProps({
  task: Object,
  title: String
})

const descriptionIsOpen = ref(false)

const deleteItem = () => {
  emits('delete-item')
}
const openDescription = () => {
  if (task.description) descriptionIsOpen.value = !descriptionIsOpen.value
}
</script>

<template>
  <li
    tabindex="0"
    class="section-list__item"
    @click="openDescription"
    @blur="descriptionIsOpen = false"
  >
    <div class="item-title">
      <p>{{ task.name }}</p>
      <div class="item-tools">
        <UiButton class="section-list__button" @click="deleteItem" rounded>
          <IconClose />
        </UiButton>
      </div>
    </div>
    <div class="item-info">
      <span class="priority" :class="`priority-${task.priority}`"
        >Приоритет: {{ task.priority }}</span
      >
      <div class="item-info__date">
        <span class="time">{{ task.time }}</span>
        <span class="date">{{ task.date }}</span>
      </div>
    </div>
    <div class="arrow">
      <IconArrow
        class="arrow-image"
        :class="{ rotate: descriptionIsOpen }"
        v-if="task.description"
      />
    </div>
    <Transition>
      <div v-if="descriptionIsOpen" class="item-description">
        <p>Описание: {{ task?.description }}</p>
      </div>
    </Transition>
    <IconComplete class="icon" v-if="title === 'done'" />
  </li>
</template>

<style scoped>
.section-list__item {
  position: relative;

  display: grid;

  margin-bottom: 10px;
  padding: 10px;

  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;

  border-radius: var(--section-radius);
  background-color: white;
  box-shadow: var(--section-shadow);

  grid-template-rows: min-content min-content;
}
.item-title {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 5px;
}

.item-description {
  margin-top: 10px;

  font-size: 0.7em;
}

.item-info {
  display: flex;
  justify-content: space-between;

  font-size: 0.7em;
}

.item-info__date {
  display: flex;
  gap: 10px;
}

.section-list__item:hover {
  box-shadow: var(--section-shadow);
}

.section-list__button {
  visibility: hidden;

  transition: opacity 0.2s ease-in-out;

  opacity: 0;
}

.section-list__item:hover .section-list__button,
.section-list__item:focus-within .section-list__button {
  visibility: visible;

  opacity: 1;
}

.arrow {
  position: absolute;
  bottom: -5px;
  left: 50%;

  width: 100%;

  transform: translateX(-50%);

  border-radius: 5px;
  background-color: gainsboro;
}

.icon {
  position: absolute;
  right: 5px;
  top: 5px;
}
.arrow-image {
  margin: auto;

  transition: transform 0.3s ease-in-out;
  transform: rotate(-90deg);
}

.rotate {
  transition: transform 0.3s ease-in-out;
  transform: rotate(90deg);
}

.priority-3 {
  color: rgba(255, 0, 0);
}
.priority-2 {
  color: rgba(255, 0, 0, 0.75);
}
.priority-1 {
  color: rgba(255, 0, 0, 0.5);
}
.priority-0 {
  color: rgba(255, 0, 0, 0.25);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
