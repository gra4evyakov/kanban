<script setup>
import UiButton from './UiButton.vue'
import UiInput from './UiInput.vue'
import UiRange from './UiRange.vue'
import UiTextarea from './UiTextarea.vue'

const emits = defineEmits(['close', 'send-data'])

const task = {
  name: '',
  description: '',
  date: '',
  time: '',
  priority: 0
}

const sendData = () => {
  const currentDate = new Date()
  task.id = Date.now()
  task.date = getCurrentDate(currentDate)
  task.time = getCurrentTime(currentDate)
  emits('send-data', task)
  emits('close')
}
const close = () => {
  emits('close')
}

const getCurrentDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0') // Месяцы в JavaScript начинаются с 0
  const year = date.getFullYear()

  return `${day}.${month}.${year}`
}

const getCurrentTime = (date) => {
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')

  return `${hours}:${minutes}`
}

const editPriority = (priority) => {
  task.priority = priority
}
</script>

<template>
  <div class="layout" @click="close">
    <form class="modal" @submit.prevent="sendData" @click.stop>
      <h3 class="modal-title">Добавить задачу</h3>
      <UiInput v-model="task.name" rounded placeholder="Название" required />
      <UiRange @edit-priority="editPriority" />
      <UiTextarea v-model="task.description" rounded placeholder="Описание" />
      <UiButton type="submit">Добавить задачу</UiButton>
    </form>
  </div>
</template>

<style scoped>
.layout {
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.466);
}
.modal {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 50%;
  padding: 20px;

  border-radius: 15px;
  background-color: white;

  gap: 20px;
}
</style>
