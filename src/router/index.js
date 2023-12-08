import { createWebHistory, createRouter } from "vue-router";
import Khatat from "../Pages/Khatat";
import Settings from "../Pages/Settings";
import Jobs from "../Pages/Jobs";
import ErrorPage from "../Pages/ErrorPage";


const routes = [
  { path: "/", name: "Khatat", component: Khatat },
  { path: "/user/settings", name: "Settings", component: Settings },
  { path: "/user/jobs", name: "Jobs", component: Jobs },
  { path: "/:pathMatch(.*)*", name: "ErrorPage", component: ErrorPage },

];

export const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});
