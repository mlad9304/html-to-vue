import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/index')
      },
      {
        path: '/processed',
        name: 'processed',
        component: () => import('@/views/processed/index')
      },
      {
        path: '/phone',
        name: 'phone',
        component: () => import('@/views/phone/index')
      },
      {
        path: '/congratulation',
        name: 'congratulation',
        component: () => import('@/views/congratulation/index')
      },
      {
        path: '/congrats',
        name: 'congrats',
        component: () => import('@/views/congrats/index')
      }
    ]
  }]
})
