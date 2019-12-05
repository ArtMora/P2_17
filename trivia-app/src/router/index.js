import Vue from 'vue'
import VueRouter from 'vue-router'
import MenuScreen from '../views/MenuScreen.vue'
import FunFactsScreen from '../views/FunFactsScreen.vue'
import GeneralKnowledgeScreen from '../views/GeneralKnowledgeScreen.vue'
import HistoryScreen from '../views/HistoryScreen.vue'
import SportsScreen from '../views/SportsScreen.vue'

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
  },
  {
    path: '/funfacts',
    name: 'funFacts',
    component: FunFactsScreen
  },
  {
    path: '/generalknowledge',
    name: 'generalKnowledge',
    component: GeneralKnowledgeScreen
  },
  {
    path: '/history',
    name: 'history',
    component: HistoryScreen
  },
  {
    path: '/sports',
    name: 'sports',
    component: SportsScreen
  }
]

const router = new VueRouter({
  routes
})

export default router
