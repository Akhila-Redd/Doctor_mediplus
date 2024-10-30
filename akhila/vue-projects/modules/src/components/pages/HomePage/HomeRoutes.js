import FirstComp1 from "./FirstComp1.vue";
import FirstComp2 from "./FirstComp2.vue";
import FirstComp3 from "./FirstComp3.vue";
import HomePage from "./HomePage.vue";

const homeRoutes = [
  {
    path: "/",
    component: HomePage,
    redirect: "/first-comp1",
    children: [
      {
        path: "first-comp1",
        component: FirstComp1,
      },
      {
        path: "first-comp2",
        component: FirstComp2,
      },
      {
        path: "first-comp3",
        component: FirstComp3,
      },
    ],
  },
];
export default homeRoutes;
