import { createRouter, createWebHistory } from 'vue-router'
import InfoView from '../views/InfoView.vue'
import { useFunctions } from '@/stores/functions.js' // Importa tu tienda

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: InfoView,
      beforeEnter: (to, from, next) => {
        const infoStore = useFunctions() // Usa tu tienda
        infoStore.setIsInInfoRoute(false)
        infoStore.animationCard();
        next()
      }
    },
    {
      path: '/info',
      name: 'info',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/InfoView.vue'),
      beforeEnter: (to, from, next) => {
        const infoStore = useFunctions() // Usa tu tienda
        infoStore.setIsInInfoRoute(true)
        infoStore.animationCard();
        next()
      }
    }
  ]
})

export default router
