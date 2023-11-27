import { createApp } from "vue";
import App from "./App.vue";
import { router } from './router';
import { store } from './store'
import AOS from "aos";
import BootstrapVue3 from "bootstrap-vue-3";
import Toaster from "@meforma/vue-toaster";

import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import "./assets/custom.scss";

const app = createApp(App).use(router).use(store).use(Toaster);

app.use(BootstrapVue3);
app.use(AOS.init());
app.mount("#app");
