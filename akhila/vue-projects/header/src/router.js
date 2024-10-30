import { createRouter, createWebHistory } from 'vue-router';
import UserForm from './components/UserForm.vue';
import StudentDetail from './components/StudentDetail.vue';

const routes = [
  {
    path: '/',
    name: 'user-form',
    component: UserForm,
  },
  {
    path: '/student',
    name: 'student',
    component: StudentDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
