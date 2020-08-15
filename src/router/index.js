import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MainSelect from '../views/MainSelect.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Characters',
    name: 'Characters',
    component: () => import('../views/MainSelect.vue'),
  },
  {
    path: '/Characters/:characterEpisode',
    name: 'Episode',
    component: () => import('../views/MainSelect.vue'),
  },
  {
    path: '/Characters/:characterEpisode/:character',
    name: 'Character',
    component: () => import('../views/Character.vue')
  },
  {
    path: '/Submit',
    name: 'Submit',
    component: () => import('../views/Submit.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
