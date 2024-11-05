import { createRouter,createWebHistory } from "vue-router";
import HomeRoutes from "./components/pages/Homemodule/HomeRoutes";
const routes =[
    ...HomeRoutes
]
const router = createRouter({
    history:createWebHistory(),routes
});
export default router;
 