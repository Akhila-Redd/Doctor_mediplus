// import { createApp, createWebHistory } from "vue-router";
// import StudentDetails from "./components/StudentDetails.vue";
// import FormComponent from "./components/FormComponent.vue";

// const routes = [
//   {
//     path: "/",
//     name: "Form",
//     component: FormComponent,
//   },
//   {
//     path: "/student-details",
//     name: "StudentDetails",
//     component:StudentDetails
//   },
// ];
// const router = createApp({
//   history: createWebHistory(),
//   routes,
// });
// export default router;
import { createRouter, createWebHistory } from 'vue-router';
import StudentDetails from './components/StudentDetails.vue';
import FormComponent from './components/FormComponent.vue';

const routes = [
  {
    path: '/',
    name: 'Form',
    component: FormComponent
  },
  {
    path: '/student-details',
    name: 'StudentDetails',
    component: StudentDetails
  }
];

const router = createRouter({
  history: createWebHistory(), // Use history mode
  routes
});

export default router;

