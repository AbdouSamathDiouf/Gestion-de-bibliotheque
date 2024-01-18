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
      name: 'HomeApp',
      component: HomeApp,
      //alias: "/accueil"
    },
    {
      path: '/theme/:themeId',
      name: 'ThemeApp',
      component: ThemeApp,
      //alias: "/theme"
    },
    {
      path: '/resource/:resourceId',
      name: 'ResourceDetail',
      component: ResourceDetail,
     // alias: "/resource"
    },
    {
      path: '/add-resource/:themeId',
      name: 'AddResource',
      component: AddResource,
     // alias: "/ajout"
    },
    {
      path: '/:catchAll(.*)',
      component: NotFound
    }
  ]
})

export default router

