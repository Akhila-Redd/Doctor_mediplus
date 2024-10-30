// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import { isAuthenticated } from './auth'; 
import HomePage from './components/HomePage.vue';
import DashboardComp from './components/DashboardComp.vue';
import LoginComp from './components/LoginComp.vue';
import RegistationComp from './components/RegistationComp.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginComp },
  { path: '/register', component: RegistationComp},
 
  {
    path: '/dashboard',
    component: DashboardComp,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation Guard
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
   console.log('hai');
  } else {
    next(); 
  }
});

export default router;
