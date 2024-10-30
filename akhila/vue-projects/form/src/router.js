
import { createRouter, createWebHistory } from 'vue-router';
import StudentList from './components/StudentList.vue';
import FormData from './components/FormData.vue';
const routes = [
    {
      path: '/',
      name: 'formdata',
      component: FormData
    },
    {
      path: '/student',
      name: 'student',
      component: StudentList,
    },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;



