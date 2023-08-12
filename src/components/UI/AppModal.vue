<script setup>
import AppButton from './AppButton.vue'
import AppInput from './AppInput.vue'
import AppTextarea from './AppTextarea.vue'

const emits = defineEmits(['close', 'form-data'])

const task = {
  name: '',
  description: '',
  date: '',
  time: ''
}
const formData = () => {
  const currentDate = new Date()
  task.id = Date.now()
  task.date = getCurrentDate(currentDate)
  task.time = getCurrentTime(currentDate)
  console.log(task);
  emits('form-data', task)
  emits('close')
}
const close = () => {
  emits('close')
}

const getCurrentDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы в JavaScript начинаются с 0
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

const getCurrentTime = (date) => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${hours}:${minutes}`;
}
</script>

<template>
  <div class="layout" @click="close">
    <form class="modal" @submit.prevent="formData" @click.stop>
      <h3 class="modal-title">Добавить задачу</h3>
      <AppInput v-model="task.name" rounded placeholder="Название" required />
      <AppTextarea v-model="task.description" rounded placeholder="Описание" />
      <AppButton type="submit">Добавить задачу</AppButton>
    </form>
  </div>
</template>

<style scoped>
.layout {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.466);
}
.modal {
  padding: 20px;
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: white;
  border-radius: 15px;
}
</style>
