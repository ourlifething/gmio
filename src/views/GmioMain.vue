<script setup>
import Main from '../components/GmioMain.vue'
import Head from '../components/GmioHead.vue'
import CommonModal from '@/components/common/CommonModal.vue'
import { ref } from 'vue'
const isModal = ref(false)
const closeModal = () => {
  isModal.value = false
}
const showModal = () => {
  isModal.value = true
}
</script>
<template>
  <Head @button-click="showModal" />

  <CommonModal :visible="isModal" @close-modal="closeModal" @update:visible="isModal = $event" />
  <Main />
</template>
