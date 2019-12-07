import Vue from 'vue'
import VueRouter from 'vue-router'
import MenuScreen from '../views/MenuScreen.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'menu',
    component: MenuScreen
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
