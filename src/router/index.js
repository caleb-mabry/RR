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
  path: '/Submit',
  name: 'Submit',
  component: () => import('../views/Submit.vue'),
},
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
