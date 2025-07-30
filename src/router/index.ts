import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/os/lib/spring-jwt-auth',
    },
    {
      path: '/os/lib/spring-jwt-auth',
      name: 'spring-jwt-auth',
      component: () => import('@/views/os/lib/SpringJwtAuthView.vue')
    },
    {
      path: '/os/lib/spring-boot-microservice-security-jwt',
      name: 'spring-boot-microservice-security-jwt',
      component: () => import('@/views/os/lib/SpringBootMicroserviceSecurityJwtView.vue')
    }
  ]
})

export default router
