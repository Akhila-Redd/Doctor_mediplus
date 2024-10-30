import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import StudentDetail from './components/StudentDetail.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/students', component: StudentDetail },
    { path: '/students/:id', component: StudentDetail, props: true }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
