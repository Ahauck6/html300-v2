import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipesView from '../views/RecipesView.vue'
import SetupView from '../views/SetupView.vue'
import VerityView from '../views/VerityView.vue'

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
      component: RecipesView
    },
    {
      path: '/Setup',
      name: 'Setup',
      component: SetupView
    },
    {
      path: '/Verity',
      name: 'Verity',
      component: VerityView
    }
  ]
})

export default router
