import { createWebHistory, createRouter } from "vue-router";
import Khatat from "../Pages/Khatat";
import About from "../Pages/About.vue";
import Contact from "../Pages/Contact.vue";
import FAQ from "../Pages/FAQ.vue";
import Terms from "../Pages/Terms";
import Privacy from "../Pages/Privacy";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Auth/Dashboard.vue";
import ResetPassword from "../Pages/ResetPassword";
import Settings from "../Pages/Settings";
import Jobs from "../Pages/Jobs";
import ErrorPage from "../Pages/ErrorPage";


const routes = [
  { path: "/", name: "Khatat", component: Khatat },
  { path: "/pages/about-us", name: "About", component: About,  meta: { title: 'من نحن', requiresAuth: false } },
  { path: "/pages/contact", name: "Contact", component: Contact,  meta: { title: 'تواصل معنا', requiresAuth: false } },
  { path: "/pages/faq", name: "FAQ", component: FAQ,  meta: { title: 'الأسئلة الشائعة', requiresAuth: false } },
  { path: "/pages/terms", name: "Terms", component: Terms, meta: { title: 'الشروط والأحكام', requiresAuth: false } },
  { path: "/pages/privacy", name: "Privacy", component: Privacy,  meta: { title: 'سياسة الخصوصية', requiresAuth: false } },
  { path: "/account/signup", name: "Signup", component: Signup, meta: { title: 'انضم إلينا', requiresAuth: false } },
  { path: "/account/login", name: "Login", component: Login, meta: { title: 'تسجيل الدخول', requiresAuth: false } },
  { path: "/student/dashboard", name: "Dashboard", component: Dashboard, meta: { title: 'لوحة التحكم', requiresAuth: true } },
  { path: "/account/reset-password", name: "ResetPassword", component: ResetPassword, meta: { title: 'استعادة كلمة السر', requiresAuth: false } },
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

router.beforeEach((to, from, next) => {
  const Pages = ['/', '/account/login', '/account/signup', '/account/reset-password', '/pages/about-us', '/pages/contact', '/pages/faq', '/pages/terms', '/pages/privacy', '/pages/reset-password'];
  const pageComponent = Pages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if (!pageComponent && !loggedIn) {
    return next('/account/login');
  }

  if (pageComponent && loggedIn) {
    return next('/student/dashboard');
  }

  next();

})

