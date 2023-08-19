<script setup>
import UiButton from './ui/UiButton.vue'
import IconLogo from './icons/IconLogo.vue'
import IconPlus from './icons/IconPlus.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

const emits = defineEmits(['toggleModal'])
const toggleModal = () => {
  emits('toggleModal')
}
</script>

<template>
  <div class="tools">
    <h1 class="tools-title">{{ props.title }}</h1>
    <IconLogo />
    <div class="tools-actions">
      <UiButton @click="toggleModal" background>
        Новая задача
        <IconPlus />
      </UiButton>
    </div>
  </div>
</template>

<style scoped>
.tools {
  display: flex;
  align-items: center;
  gap: 10px;
}

.tools-title {
  padding-right: 10px;
}

.tools-image {
  width: 30px;
  height: 30px;
}

.tools-actions {
  display: flex;

  margin-left: auto;

  gap: 10px;
}
</style>
