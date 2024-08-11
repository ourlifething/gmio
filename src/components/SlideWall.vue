<script setup lang="ts">
import { defineEmits } from 'vue'
defineEmits<{ handleClick: [] }>()
</script>

<template>
  <div class="slide-wall">
    <div class="slide">
      <p>title</p>
      <button @click="$emit('handleClick')">ok</button>
      <button>close</button>
    </div>
  </div>
</template>
<style scoped>
.slide-wall {
  position: fixed;
  right: 0;
  bottom: -200px;
  width: 100%;
  height: 200px;
  background: gray;
  transform: translateY(-100%); /* 初期状態は画面外 */
  transition: transform 0.3s ease-in-out;
}
.slide-wall-enter-active {
  transform: translateY(0%); /* スライドイン */
}

.slide-wall-leave-active {
  transform: translateY(100%); /* スライドアウト（上から下） */
}
</style>
