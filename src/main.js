import { createApp } from "vue";
import App from "./App.vue";
import { router } from './router';
import { store } from './store'
import AOS from "aos";
import $ from 'jquery';
window.$ = $;
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./assets/css/bootstrap.rtl.min.css";
import "./assets/css/style.css";
import Layout from "@/components/Layout.vue"
import DashboardLayout from "@/components/DashboardLayout.vue"
const app = createApp(App).use(router).use(store);
app.component('Layout', Layout);
app.use(AOS.init());
app.mount("#app");
