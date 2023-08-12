<script setup>
import AppButton from './UI/AppButton.vue'
import AppCloseIcon from './icons/AppCloseIcon.vue'
import AppArrowIcon from './icons/AppArrowIcon.vue'
import { ref } from 'vue'

const emits = defineEmits(['delete-item'])
const { task } = defineProps({
  task: Object
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
        <AppButton class="section-list__button" @click="deleteItem" rounded>
          <AppCloseIcon />
        </AppButton>
      </div>
    </div>
    <div class="item-date">
      <span class="time">{{ task.time }}</span>
      <span class="date">{{ task.date }}</span>
    </div>
    <div class="arrow">
      <AppArrowIcon
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
  </li>
</template>

<style scoped>
.section-list__item {
  position: relative;
  cursor: pointer;
  padding: 10px;
  margin-bottom: 10px;
  display: grid;
  grid-template-rows: min-content min-content;
  border-radius: var(--section-radius);
  background-color: white;
  box-shadow: var(--section-shadow);
  transition: box-shadow 0.2s ease-in-out;
}
.item-title {
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.item-description {
  margin-top: 10px;
  font-size: 0.7em;
}

.item-date {
  display: flex;
  justify-content: space-between;
  font-size: 0.7em;
}

.section-list__item:hover {
  box-shadow: var(--section-shadow);
}

.section-list__button {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease-in-out;
}

.section-list__item:hover .section-list__button,
.section-list__item:focus-within .section-list__button {
  opacity: 1;
  visibility: visible;
}

.arrow {
  width: 100%;
  position: absolute;
  bottom: -5px;
  left: 50%;
  border-radius: 5px;
  transform: translateX(-50%);
  background-color: gainsboro;
}
.arrow-image {
  margin: auto;
  transform: rotate(-90deg);
  transition: transform 0.3s ease-in-out;
}

.rotate {
  transform: rotate(90deg);
  transition: transform 0.3s ease-in-out;
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
