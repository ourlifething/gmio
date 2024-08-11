import { createRouter, createWebHistory } from 'vue-router'
import GmioMain from '@/views/GmioMain.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: GmioMain
    }
  ]
})

export default router
