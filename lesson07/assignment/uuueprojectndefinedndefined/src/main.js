//import './assets/main.css'
//import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router' 
//import VueRouter from 'vue-router'
//import routes from './router'

//const app = createApp(App)

//app.use(router)

//app.mount('#app')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

