import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import bar from "../views/bar";
import Table from "../views/Table";
import main from "../views/main";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    redirect:'/main',
    component: Home
  },
  {
    path: '/fruit',
    name: 'fruit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/main.vue')
  },
  {
    path: '/bar',
    name: 'bar',
    component: bar
  },
  {
    path: '/table',
    name: 'table',
    component: Table
  },
  {
    path: '/main',
    name: 'main',
    component: main,

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
