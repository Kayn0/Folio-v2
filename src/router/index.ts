import { createRouter, createWebHistory } from 'vue-router'

import Work from '../views/Work/Work.vue'
import About from '../views/About/About.vue'

import OnlineBookings from '../views/Projects/OnlineBookings.vue'
import SalesDashboard from '../views/Projects/SalesDashboard.vue'
import ClinicalNotes from '../views/Projects/ClinicalNotes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'work',
      component: Work,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/About/About.vue'),
      component: About,
    },
    {
      path: '/online-bookings',
      name: 'OnlineBookings',
      component: OnlineBookings,
    },
    {
      path: '/sales-dashboard',
      name: 'SalesDashboard',
      component: SalesDashboard,
    },
    {
      path: '/clinical-notes',
      name: 'ClinicalNotes',
      component: ClinicalNotes,
    },
  ],
  scrollBehavior() {
    return { top: 0, left: 0 }
  },
})

export default router
