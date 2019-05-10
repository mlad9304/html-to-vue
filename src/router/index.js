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
      }
    ]
  }]
})
