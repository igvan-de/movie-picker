import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'movie-picker',
      component: () => import('../views/MoviePickerView.vue'),
    },
    {
      path: '/movie-details',
      name: 'movie-details',
      component: () => import('../views/MovieDetailsView.vue'),
    }
  ]
})

export default router
