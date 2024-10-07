import { createApp } from "vue";
import App from "./App.vue";
import { router } from './router';
import { store } from './store'
import AOS from "aos";
import $ from 'jquery'; 
window.$ = $;
import 'bootstrap';
import "aos/dist/aos.css";
import "./assets/css/bootstrap.rtl.min.css";
import "./assets/css/style.css";

const app = createApp(App).use(router).use(store);

app.use(AOS.init());
app.mount("#app");
