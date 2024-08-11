<script setup lang="ts">
import { defineEmits } from 'vue'
// defineEmits<{
//     isModal:[modal:boolean],
// }>();
defineEmits<{
  buttonClick: [];
}>()
defineProps<{
  buttonName: string
}>()

// defineEmits(['buttonClick'])
</script>

<template>
  <!-- <button @click="$emit('isModal', true)">{{ buttonName }}</button> -->
  <button @click="$emit('buttonClick')">{{ buttonName }}</button>
</template>
