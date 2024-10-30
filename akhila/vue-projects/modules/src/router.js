import { createRouter,createWebHistory } from "vue-router";
import homeRoutes from "./components/pages/HomePage/HomeRoutes.js";
import AboutRoutes from "./components/pages/AboutPage/AboutRoutes.js";
const routes =[
    ...homeRoutes,
    ...AboutRoutes
]
const router = createRouter({
    history:createWebHistory(),routes
});
export default router;
 