import { createWebHistory, createRouter } from "vue-router";
import BigDataPage from "../Pages/BigDataPage";
import ErrorPage from "../Pages/ErrorPage";


const routes = [
  { path: "/", name: "BigDataPage", component: BigDataPage },
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
