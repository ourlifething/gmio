<template>
  <div v-if="visible" class="modal-backdrop" @mousedown="startDrag">
    <div
      class="modal-content"
      :style="{ top: state.top + 'px', left: state.left + 'px' }"
      ref="modal"
      @mousedown.stop
    >
      <header class="modal-header" @mousedown="startDrag">
        <button @click="closeModal">Close</button>
      </header>
      <div class="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps, defineEmits, onMounted, onUnmounted } from 'vue'

defineProps<{ visible: boolean }>()
const emit = defineEmits(['update:visible', 'close-modal'])

const state = reactive({
  top: 100,
  left: 100,
  dragging: false,
  offsetX: 0,
  offsetY: 0
})

const modal = ref<HTMLDivElement | null>(null)

const startDrag = (event: MouseEvent) => {
  if (!modal.value) return
  state.dragging = true
  state.offsetX = event.clientX - modal.value.getBoundingClientRect().left
  state.offsetY = event.clientY - modal.value.getBoundingClientRect().top

  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', stopDrag)
}

const onDrag = (event: MouseEvent) => {
  if (!state.dragging) return
  state.top = event.clientY - state.offsetY
  state.left = event.clientX - state.offsetX
}

const stopDrag = () => {
  state.dragging = false
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
}

const closeModal = () => {
  emit('update:visible', false)
  emit('close-modal')
}

onMounted(() => {
  document.addEventListener('mouseup', stopDrag)
  document.addEventListener('mousemove', onDrag)
})

onUnmounted(() => {
  document.removeEventListener('mouseup', stopDrag)
  document.removeEventListener('mousemove', onDrag)
})
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: absolute;
  width: 300px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 2px solid red; /* ここで赤い線を追加 */
}

.modal-header {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: move; /* Indicates that the element is draggable */
}

.modal-body {
  padding: 20px;
}
</style>
