import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/os/lib/spring-boot-microservice-security-jwt',
      name: 'spring-boot-microservice-security-jwt',
      component: () => import('@/views/os/lib/SpringBootMicroserviceSecurityJwtView.vue')
    },
    {
      path: '/projects/restaurant-management-system',
      name: 'restaurant-management-system',
      component: () => import('@/views/projects/RestaurantManagementSystemView.vue')
    },
    {
      path: '/projects/generic-pos',
      name: 'generic-pos',
      component: () => import('@/views/projects/GenericPosView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router
