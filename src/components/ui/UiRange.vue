<script setup>
import { ref, watch } from 'vue'

const emits = defineEmits(['edit-priority'])
const editPriority = () => {
  emits('edit-priority', sliderValue.value)
}

const sliderValue = ref(0)
watch(sliderValue, () => {
  editPriority()
  console.log('изменение')
})
</script>

<template>
  <div class="priority">
    <label for="volume"> Приоритет : {{ sliderValue }} </label>
    <input v-model="sliderValue" type="range" id="volume" name="volume" min="0" max="3" />
  </div>
</template>

<style scoped>
.priority {
  display: flex;
  flex-direction: column;
  align-items: start;
}
</style>
