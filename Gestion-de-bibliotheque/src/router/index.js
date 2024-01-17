import { createRouter, createWebHistory } from 'vue-router'
//import Vue from 'vue';
//import Router from 'vue-router';
import HomeApp from '@/views/HomeApp.vue';
import ThemeApp from '@/views/ThemeApp.vue';
import ResourceDetail from '@/views/ResourceDetail.vue';
import AddResource from '@/views/AddResource.vue';
import NotFound from '@/views/NotFound.vue';

//Vue.use(Router);
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path: '/',
      name: 'Home',
      component: HomeApp,
    },
    {
      path: '/theme/:themeId',
      name: 'Theme',
      component: ThemeApp,
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
      path: '/:catchAll(.*)',
      component: NotFound
    }
  ]
})

export default router

