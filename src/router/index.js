import { createWebHistory, createRouter } from "vue-router";
import Khatat from "../Pages/Khatat";
import ErrorPage from "../Pages/ErrorPage";


const routes = [
  { path: "/", name: "Khatat", component: Khatat },
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
