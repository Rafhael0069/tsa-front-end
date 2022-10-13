import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthView from "../views/AuthView.vue"
import HomeView from "../views/HomeView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AuthMain',
    component: AuthView
  },
  {
    path: '/home',
    name: 'HomeView',
    component: HomeView
  }
]

const router = new VueRouter({
  routes
})

export default router
