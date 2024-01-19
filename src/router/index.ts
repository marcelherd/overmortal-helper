import { createRouter, createWebHistory } from 'vue-router'
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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/events/adventure',
      name: 'adventure',
      component: () => import('../views/events/AdventureView.vue')
    },
    {
      path: '/events/beastwaves',
      name: 'beastwaves',
      component: () => import('../views/events/BeastwavesView.vue')
    },
    {
      path: '/events/starscraper',
      name: 'starscraper',
      component: () => import('../views/events/StarscraperView.vue')
    }
  ]
})

export default router
