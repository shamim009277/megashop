import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutPage.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartPage.vue'),
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutPage.vue'),
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/ShopPage.vue'),
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductPage.vue'),
    }
    ,
    {
       path: '/user/dashboard',
       name: 'user-dashboard',
       component: () => import('../views/user/Dashboard.vue'),
    }
  ],
})

export default router
