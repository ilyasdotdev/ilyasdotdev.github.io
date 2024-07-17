import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect() {
        return '/os/lib/spring-jwt-auth'
      },
    },
    {
      path: '/os/lib/spring-jwt-auth',
      name: 'spring-jwt-auth',
      component: () => import('@/views/os/lib/SpringJwtAuthView.vue')
    }
  ]
})

export default router
