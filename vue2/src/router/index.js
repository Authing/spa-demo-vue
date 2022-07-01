import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: '/',
  routes: [{
    path: '/',
    redirect: '/home'
  },{
    name: 'Home',
    path: '/home',
    component: () => import('@/pages/Home')
  },{
    name: 'Callback',
    path: '/callback',
    component: () => import('@/pages/Callback')
  }, {
    name: 'NotFound',
    path: '/:catchAll(.*)',
    component: () => import('@/pages/NotFound')
  }]
})
