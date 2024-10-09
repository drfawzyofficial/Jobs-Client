import { createWebHistory, createRouter } from "vue-router";
import Khatat from "../Pages/Khatat";
import About from "../Pages/About.vue";
import Contact from "../Pages/Contact.vue";
import FAQ from "../Pages/FAQ.vue";
import Terms from "../Pages/Terms";
import Privacy from "../Pages/Privacy";
import Signup from "../Pages/Signup";
import Settings from "../Pages/Settings";
import Jobs from "../Pages/Jobs";
import ErrorPage from "../Pages/ErrorPage";


const routes = [
  { path: "/", name: "Khatat", component: Khatat },
  { path: "/pages/about-us", name: "About", component: About,  meta: { title: 'من نحن' } },
  { path: "/pages/contact", name: "Contact", component: Contact,  meta: { title: 'تواصل معنا' } },
  { path: "/pages/faq", name: "FAQ", component: FAQ,  meta: { title: 'الأسئلة الشائعة' } },
  { path: "/pages/terms", name: "Terms", component: Terms, meta: { title: 'الشروط والأحكام' } },
  { path: "/pages/privacy", name: "Privacy", component: Privacy,  meta: { title: 'سياسة الخصوصية' } },
  { path: "/account/signup", name: "Signup", component: Signup, meta: { title: 'انضم إلينا' } },
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
