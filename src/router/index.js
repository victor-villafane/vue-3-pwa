// import ContactView from '@/views/ContactView.vue'
// import DetalleView from '@/views/DetalleView.vue'
// import HomeView from '@/views/HomeView.vue'
// import StoreView from '@/views/StoreView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: '/contact',
    component: () => import("@/views/ContactView.vue"),
  },
  {
    path: '/store',
    component: () => import("@/views/StoreView.vue"),
  },
  {
    path: "/detalle/:id",
    component: () => import("@/views/DetalleView.vue")
  },
  {
    path: "/favorito",
    component: () => import("@/views/FavoriteView.vue")
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
