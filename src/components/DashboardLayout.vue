<template>
  <div class="dashboard-layout p-5" id="dashboard-layout">
    <div class="dashboard-sidebar">
      <ul>
        <li class="link mt-3" v-for="(item, index) in navLinks" :key="index">
          <router-link class="fw-medium" :to="item.link">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
    <main class="content">
      <div class="container-fluid">
        <div class="container">
          <nav class="content-navbar d-flex justify-content-between">
            <div class="dashboard-word">
              <span class="fw-bold">لوحة التحكم</span>
            </div>
            <div class="account-settings d-flex">
              <div class="account-sidebar me-4">
                <span style="cursor: pointer;" class="fs-5" @click="onToggle()"><i class="bi bi-bar-chart-steps"></i></span>
              </div>
              <div class="logout">
                <span style="cursor: pointer;" class="fs-5" @click="onLogout()"><i class="bi bi-box-arrow-right"></i></span>
              </div>
            </div>
          
          </nav>
          <slot></slot>
          <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
            </ul>
            <p class="text-center text-muted">© 2022 Company, Inc</p>
          </footer>
        </div>
      </div>
    </main>
  </div>

</template>

<script>
// Import Methods, Packages, Files
import Sidenav from "@/components/Sidenav";
import Navbar from "@/components/Navbar.vue";
import { useStore } from 'vuex';
import { onMounted, ref } from 'vue'
export default {
  name: 'Dashboard',
  components: {
    Sidenav,
    Navbar
  },
  setup() {

    // Calling, Declarations, Data
    const store = useStore()
    const navLinks = ref([{ title: "الرئيسية", link: "/" }, { title: "من نحن", link: "/pages/about-us" }, { title: "التواصل", link: "/pages/contact" }, { title: "الأسئلة الشائعة", link: "/pages/faq" }]);
    const onLogout = () => {
      store.dispatch("Auth/Logout", { data: null })
    }
    const onToggle = () => {
      let dashboardSidebar = document.querySelector(".dashboard-sidebar");
      dashboardSidebar.classList.toggle("is-visible");
    }
    // Return
    return {
      navLinks,
      onLogout,
      onToggle
    }

    }
  }
</script>


<style scoped>

.dashboard-layout {
  background-color: #f8f9fa;
}

.account-sidebar {
  display: none;
}

.dashboard-layout .dashboard-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 30px;
  width: 200px;
}

.dashboard-layout .content {
  width: calc(100% - 200px);
  margin-right: 230px;
}

.dashboard-layout .content .content-navbar {
  width: 100%;
  height: auto;
}

@media (max-width: 991.98px) {

}

@media (max-width: 767.98px) {
  .account-sidebar {
  display: block;
}

  .dashboard-layout .dashboard-sidebar {
    display: none;
    left: 0;
    right: 0;
    z-index: 999;
    width: 50%;
    background-color: rgb(13, 137, 238);
    color: #FFF;
  }

  .dashboard-sidebar.is-visible {
    display: block;
  }

  .dashboard-layout .dashboard-sidebar .link a {
    font-size: 20px;
    color: #FFF;
  }

  .dashboard-layout .content {
    width: 100%;
    margin-right: 0;
  }
}

@media (max-width: 575.98px) {}
</style>