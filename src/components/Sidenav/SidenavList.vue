<template>
  <div
    class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
    id="sidenav-collapse-main"
  >
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-collapse navText="Dashboard" :to="{ name: 'Dashboard' }">
          <template #icon>
            <shop />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Tables" :to="{ name: 'Signup' }">
          <template #icon>
            <office />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Billing" :to="{ name: 'Login' }">
          <template #icon>
            <credit-card />
          </template>
        </sidenav-collapse>
      </li>

    </ul>
  </div>
</template>
<script>
import SidenavCollapse from "./SidenavCollapse.vue";
import Shop from "../Icon/Shop.vue";
import Office from "../Icon/Office.vue";
import CreditCard from "../Icon/CreditCard.vue";
import Box3d from "../Icon/Box3d.vue";
import CustomerSupport from "../Icon/CustomerSupport.vue";
import Document from "../Icon/Document.vue";
import Spaceship from "../Icon/Spaceship.vue";
import Settings from "../Icon/Settings.vue";

export default {
  name: "SidenavList",
  props: {
    cardBg: String,
  },
  data() {
    return {
      title: "Soft UI Dashboard PRO",
      controls: "dashboardsExamples",
      isActive: "active",
    };
  },
  components: {
    SidenavCollapse,
    Shop,
    Office,
    CreditCard,
    Box3d,
    CustomerSupport,
    Document,
    Spaceship,
    Settings,
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
  },
};
</script>
