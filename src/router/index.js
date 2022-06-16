import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Dashbord from '../views/Dashbord.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashbord',
    name: 'Dashbord',
    component: Dashbord
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
