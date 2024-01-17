/*import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
*/

import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Theme from '@/views/Theme.vue';
import ResourceDetail from '@/views/ResourceDetail.vue';
import AddResource from '@/views/AddResource.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/theme/:themeId',
      name: 'Theme',
      component: Theme,
    },
    {
      path: '/resource/:resourceId',
      name: 'ResourceDetail',
      component: ResourceDetail,
    },
    {
      path: '/add-resource/:themeId',
      name: 'AddResource',
      component: AddResource,
    },
    {
      path: '*',
      redirect: '/',
    }    
  ],
});

