//import { createRouter, createWebHistory } from 'vue-router'
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Recipes from '../components/Recipes.vue'
import Setup from '../components/Setup.vue'
import Verity from '../components/Verity.vue'

//const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  //routes: [
    //{
      //path: '/',
      //name: 'home',
      //component: HomeView
    //},
    //{
      //path: '/about',
      //name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue')
    //}
  //]
//})

Vue.use(VueRouter); 

const routes = [
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
];

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
