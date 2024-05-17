import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Recipes from '../components/Recipes.vue'
import Setup from '../components/Setup.vue'
import Verity from '../components/Verity.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/Recipes',
      name: 'Recipes',
      component: Recipes
    },
    {
      path: '/Setup',
      name: 'Setup',
      component: Setup
    },
    {
      path: '/Verity',
      name: 'Verity',
      component: Verity
    }
  ]
})

export default router
