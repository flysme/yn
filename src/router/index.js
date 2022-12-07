import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.config'
Vue.use(VueRouter)

// import Home from '../views/Home.vue'
// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.afterEach((to) => {
  document.title = to.meta.title
})

export default router
