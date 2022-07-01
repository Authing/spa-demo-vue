import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory('/'),
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

