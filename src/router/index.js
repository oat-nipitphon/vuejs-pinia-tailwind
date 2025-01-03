import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import RegisterView from '@/views/Auth/RegisterView.vue'
import LoginView from '@/views/Auth/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/PageNotFound.vue'),
    },
    {
      path: '/SettingView',
      name: 'SettingView',
      component: () => import('../views/SettingView.vue'),
    },
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/LoginView',
      name: 'LoginView',
      component: LoginView,
    },
    {
      path: '/RegisterView',
      name: 'RegisterView',
      component: RegisterView,
    },
    {
      path: '/Dashboard_UsersView',
      name: 'Dashboard_UsersView',
      component: () => import('../views/Users/Dashboard_UsersView.vue'),
    },
    {
      path: '/Dashboard_PostsView',
      name: 'Dashboard_PostsView',
      component: () => import('../views/Posts/Dashboard_PostsView.vue'),
    },
    {
      path: '/Dashboard_ProductsView',
      name: 'Dashboard_ProductsView',
      component: () => import('../views/Products/Dashboard_ProductsView.vue'),
    },
    {
      path: '/Dashboard_ProfileView',
      name: 'Dashboard_ProfileView',
      component: () => import('../views/Profile/Dashboard_ProfileView.vue'),
    },
  ],
})

export default router
