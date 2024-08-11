<script setup lang="ts">
import CommonButton from './common/CommonButton.vue'
import CommonPulldown from './common/CommonPulldown.vue'

import { defineEmits } from 'vue';
defineEmits<{
 buttonClick: [],
}>();

</script>
<template>
  <div class="container">
    <header>
      <h1>title:GmioHealth</h1>
      <CommonPulldown/>
    <CommonButton 
    @click="$emit('buttonClick')"
    button-name="push"/>
    </header>

  </div>
</template>
<style scoped>

.container {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
}

header {
  margin: 0;
  width: 100%;
  background: gray;
}
</style>
