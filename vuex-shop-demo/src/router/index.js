import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/range0',
    name: 'range0',
    component: () => import('../views/Range0.vue'),
  },
  {
    path:'/range5',
    name: 'rwd',
    component: () => import('../views/Range5.vue'),
  },
  {
    path:'/range6',
    name: 'vuejs',
    component: () => import('../views/Range6.vue'),
  },
  {
    path:'/range1',
    name: 'reactjs',
    component: () => import('../views/Range1.vue'),
  },
  {
    path:'/range2',
    name: 'html5',
    component: () => import('../views/Range2.vue'),
  },
  {
    path:'/range3',
    name: 'nodejs',
    component: () => import('../views/Range3.vue'),
  },
  {
    path:'/range4',
    name: 'range4',
    component: () => import('../views/Range4.vue'),
  },
  {
    path:'/range7',
    name: 'range7',
    component: () => import('../views/Range7.vue'),
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue'),
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
