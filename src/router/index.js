import { createWebHistory, createRouter } from "vue-router";
import Khatat from "../Pages/Khatat";
import Terms from "../Pages/Terms";
import Privacy from "../Pages/Privacy";
import Join from "../Pages/Join";
import Settings from "../Pages/Settings";
import Jobs from "../Pages/Jobs";
import ErrorPage from "../Pages/ErrorPage";


const routes = [
  { path: "/", name: "Khatat", component: Khatat },
  { path: "/terms", name: "Terms", component: Terms, meta: { title: 'الشروط والأحكام' } },
  { path: "/privacy", name: "Privacy", component: Privacy,  meta: { title: 'الخصوصية' } },
  { path: "/join", name: "Join", component: Join },
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
