import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import RolesView from '@/views/RolesView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutMe',
    component: AboutView
  },
  {
    path: '/roles',
    name: 'MyRoles',
    component: RolesView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {top: 0, left: 0, behavior: 'smooth'}
  }
})

export default router
