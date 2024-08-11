<script setup lang="ts">
import { ref } from 'vue';
import SlideWall from './SlideWall.vue';
import TestGraph from './common/TestGraph.vue';
const isShow = ref(false)
const buttonClick = () => {
  console.log('!')
  isShow.value = true
}
type peopleCard = {
    title:string
    type:number
    card:{
        Id:number
        employee_id:number
        name:string
        type:number
        color:number
    }
}
type cardSet= {cardSet:{ id: number; option: string; associatedPeopleCard: peopleCard; }}

type recordList = {
id:number
authority:number
dataList:Array<{key:number, value: string}>,
cardList:Array<cardSet>
}
const handleClick = ()=> {
  isShow.value = false
}
const handleClickName = (cardSets:cardSet) => {
  console.log('name',cardSets.cardSet.associatedPeopleCard.card.name)
}
</script>
<template>
  <button @click="buttonClick">open</button>
  <div class="main">
    <p>main</p>
    <p>name</p>
    <p>age</p>
    <p>color</p>
  </div>
  <TestGraph
  @handleClick="handleClickName"/>
  <transition name=slide-wall>
    <SlideWall
    v-if="isShow"
    @handleClick="handleClick"/>
  </transition>
 
</template>
<style scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
