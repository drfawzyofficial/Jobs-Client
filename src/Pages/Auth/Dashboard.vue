<template>
  <div>
    <!-- Page Wrapper -->
    <div id="wrapper">

      <!-- Sidebar -->
      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar"
        :class="{ open: isOpen }">
        <li class="nav-item" v-for="(item, index) in navLinks" :key="index">
          <router-link class="fw-medium nav-link" :to="item.link">
            <span class="item-icon" v-html="item.icon"></span>
            <span class="item-title ms-2">{{ item.title }}</span>
          </router-link>
        </li>
      </ul>
      <!-- End of Sidebar -->

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">

        <!-- Main Content -->
        <div id="content">

          <!-- Topbar -->
          <nav class="navbar navbar-expand navbar-light bg-white topbar static-top shadow">


            <!-- Topbar Navbar -->
            <ul class="navbar-nav">

              <!-- Nav Item - Search Dropdown (Visible Only XS) -->
              <li class="nav-item dropdown no-arrow d-sm-none">
                <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-search fa-fw"></i>
                </a>
                <!-- Dropdown - Messages -->
                <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                  aria-labelledby="searchDropdown">
                  <form class="form-inline mr-auto w-100 navbar-search">
                    <div class="input-group">
                      <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                        aria-label="Search" aria-describedby="basic-addon2">
                      <div class="input-group-append">
                        <button class="btn btn-primary" type="button">
                          <i class="fas fa-search fa-sm"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>

              <!-- Nav Item - Alerts -->
              <li class="nav-item dropdown no-arrow mx-1">
                <!-- Dropdown - Alerts -->
                <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="alertsDropdown">
                  <h6 class="dropdown-header">
                    Alerts Center
                  </h6>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle bg-primary">
                        <i class="fas fa-file-alt text-white"></i>
                      </div>
                    </div>
                    <div>
                      <div class="small text-gray-500">December 12, 2019</div>
                      <span class="font-weight-bold">A new monthly report is ready to download!</span>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle bg-success">
                        <i class="fas fa-donate text-white"></i>
                      </div>
                    </div>
                    <div>
                      <div class="small text-gray-500">December 7, 2019</div>
                      $290.29 has been deposited into your account!
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle bg-warning">
                        <i class="fas fa-exclamation-triangle text-white"></i>
                      </div>
                    </div>
                    <div>
                      <div class="small text-gray-500">December 2, 2019</div>
                      Spending Alert: We've noticed unusually high spending for your account.
                    </div>
                  </a>
                  <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                </div>
              </li>

              <!-- Nav Item - Messages -->
              <li class="nav-item dropdown no-arrow mx-1">
                <a class="nav-link dropdown-toggle" @click="onLogout()" id="messagesDropdown" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="bi bi-box-arrow-right"></i>
                </a>
                <!-- Dropdown - Messages -->
                <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="messagesDropdown">
                  <h6 class="dropdown-header">
                    Message Center
                  </h6>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="dropdown-list-image mr-3">
                      <img class="rounded-circle" src="img/undraw_profile_1.svg" alt="...">
                      <div class="status-indicator bg-success"></div>
                    </div>
                    <div class="font-weight-bold">
                      <div class="text-truncate">Hi there! I am wondering if you can help me with a
                        problem I've been having.</div>
                      <div class="small text-gray-500">Emily Fowler · 58m</div>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="dropdown-list-image mr-3">
                      <img class="rounded-circle" src="img/undraw_profile_2.svg" alt="...">
                      <div class="status-indicator"></div>
                    </div>
                    <div>
                      <div class="text-truncate">I have the photos that you ordered last month, how
                        would you like them sent to you?</div>
                      <div class="small text-gray-500">Jae Chun · 1d</div>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="dropdown-list-image mr-3">
                      <img class="rounded-circle" src="img/undraw_profile_3.svg" alt="...">
                      <div class="status-indicator bg-warning"></div>
                    </div>
                    <div>
                      <div class="text-truncate">Last month's report looks great, I am very happy with
                        the progress so far, keep up the good work!</div>
                      <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="dropdown-list-image mr-3">
                      <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="...">
                      <div class="status-indicator bg-success"></div>
                    </div>
                    <div>
                      <div class="text-truncate">Am I a good boy? The reason I ask is because someone
                        told me that people say this to all dogs, even if they aren't good...</div>
                      <div class="small text-gray-500">Chicken the Dog · 2w</div>
                    </div>
                  </a>
                  <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                </div>
              </li>

              <div class="topbar-divider d-none d-sm-block"></div>

              <!-- Nav Item - User Information -->
              <li class="nav-item dropdown no-arrow">
                <router-link class="nav-link dropdown-toggle" to="/student/settings" id="userDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <span class="ml-2 d-none d-lg-inline text-gray-600 small">{{ user.first_name + " " + user.last_name
                    }}</span>
                  <img class="img-profile rounded-circle" :src="user.avatar" v-if="user && user.avatar">
                </router-link>
                <!-- Dropdown - User Information -->
                <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-user fa-sm fa-fw ml-2 text-gray-400"></i>
                    Profile
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-cogs fa-sm fa-fw ml-2 text-gray-400"></i>
                    Settings
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-list fa-sm fa-fw ml-2 text-gray-400"></i>
                    Activity Log
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                    <i class="fas fa-sign-out-alt fa-sm fa-fw ml-2 text-gray-400"></i>
                    Logout
                  </a>
                </div>
              </li>

            </ul>


            <!-- Sidebar Toggle (Topbar) -->
            <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3" @click="toggleSidebar">
              <i class="bi bi-bar-chart-steps"></i>
            </button>

          </nav>
          <!-- End of Topbar -->

          <!-- Begin Page Content -->
          <div class="dashboard container-fluid py-4">

            <!-- Page Heading -->
            <div class="breadcrumb-auth">
              <h3 class="fw-bold">إحصائيات سريعة</h3>
              <p>في لوحة تحكم الطالب، يمكنك الوصول إلى جميع الإحصائيات الخاصة بك بسهولة. ستجد إحصائيات سريعة تعكس أداءك
                الأكاديمي، إلى جانب البيانات الشخصية والمعلومات المتعلقة بالإنجازات والمقررات الدراسية. تمنحك هذه اللوحة
                نظرة شاملة على تقدمك وتساعدك في متابعة أهدافك الدراسية.</p>
            </div>

            <div class="row mt-4">
              <h5 class="fw-bold mb-2">إحصائيات عامة</h5>
              <div class="col-xl-3 col-6">
                <router-link class="card border-left-primary shadow h-100 py-2" to="/student/chances">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col ml-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          جميع الفرص</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">{{ statistics.general.totalChances }}</div>
                      </div>
                      <div class="col-auto">
                        <i class="bi bi-briefcase fs-4"></i>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>

              <!-- Earnings (Annual) Card Example -->
              <div class="col-xl-3 col-6">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col ml-2">
                        <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                          فرص حضورية</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">{{ statistics.general.locatedChances }}
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="bi bi-briefcase fs-4"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Tasks Card Example -->
              <div class="col-xl-3 col-6 mt-4 mt-xl-0">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col ml-2">
                        <div class="text-xs font-weight-bold text-info text-uppercase mb-1"> فرص عن بعد
                        </div>
                        <div class="row no-gutters align-items-center">
                          <div class="col-auto">
                            <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">{{ statistics.general.remoteChances
                            }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="bi bi-briefcase fs-4"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Pending Requests Card Example -->
              <div class="col-xl-3 col-6 mt-4 mt-xl-0">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col ml-2">
                        <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                          فرص بشروط خاصة</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">{{
                          statistics.general.specialConditionsChances }}</div>
                      </div>
                      <div class="col-auto">
                        <i class="bi bi-briefcase fs-4"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-3">
              <h5 class="fw-bold mb-2">إحصائيات مبنية على الوقت</h5>
              <!-- Earnings (Monthly) Card Example -->
              <div class="col-lg-4 col-6">
                <div class="card border-left-success shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col ml-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          فرص مفتوحة التسجيل</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">{{ statistics.dateBased.openChances }}</div>
                      </div>
                      <div class="col-auto">
                        <i class="bi bi-calendar fs-4"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Earnings (Annual) Card Example -->
              <div class="col-lg-4 col-6">
                <div class="card border-left-success shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col ml-2">
                        <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                          فرص ستفتح قريبًا</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">{{ statistics.dateBased.notStartedChances }}
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="bi bi-calendar fs-4"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Tasks Card Example -->
              <div class="col-lg-4 mt-4 mt-lg-0">
                <div class="card border-left-success shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col ml-2">
                        <div class="text-xs font-weight-bold text-info text-uppercase mb-1">فرص مغلقة التسجيل
                        </div>
                        <div class="row no-gutters align-items-center">
                          <div class="col-auto">
                            <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">{{
                              statistics.dateBased.closedChances }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="bi bi-calendar fs-4"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-3">
              <h5 class="fw-bold mb-2">إحصائيات تخصك</h5>
              <!-- Earnings (Monthly) Card Example -->
              <div class="col-lg-4 col-6">
                <div class="card border-left-info shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col ml-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          طلاب من مثل جنسك</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">{{ statistics.special.studentsByGender }}
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="bi bi-calendar fs-4"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Earnings (Annual) Card Example -->
              <div class="col-lg-4 col-6">
                <div class="card border-left-info shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col ml-2">
                        <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                          طلاب من مثل مرحلتك التعليمية</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">{{
                          statistics.special.studentsByEducationLevel }}</div>
                      </div>
                      <div class="col-auto">
                        <i class="bi bi-calendar fs-4"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Tasks Card Example -->
              <div class="col-lg-4 mt-4 mt-lg-0">
                <div class="card border-left-info shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col ml-2">
                        <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                          طلاب نفس مقر إقامتك
                        </div>
                        <div class="row no-gutters align-items-center">
                          <div class="col-auto">
                            <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">{{
                              statistics.special.studentsByAccommodation }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="bi bi-calendar fs-4"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <!-- /.container-fluid -->

        </div>
        <!-- End of Main Content -->

        <!-- Footer -->
        <footer class="sticky-footer bg-white">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>جميع الحقوق محفوظة &copy; لدى خطط {{ new Date().getFullYear() }}</span>
            </div>
          </div>
        </footer>
        <!-- End of Footer -->

      </div>
      <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="bi bi-arrow-up-circle"></i>
    </a>

    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a class="btn btn-primary" href="login.html">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// Import Methods, Packages, Files
import { useStore } from 'vuex'
import { computed, onMounted, onUnmounted, ref } from 'vue'
export default {
  setup() {

    // onMounted(() => {
    //   $(document).on('click', '#sidebarToggleTop', () => {
    //     $('.sidebar').toggle();
    //   });
    //   $(document).mouseup(function (e) {
    //     var $sidebar = $(".sidebar"); // Adjust the selector for your sidebar
    //     if (!$sidebar.is(e.target) && $sidebar.has(e.target).length === 0) {
    //       // If the click is outside the sidebar, hide it
    //       $sidebar.fadeOut(); // Adjust this based on your toggle class
    //     }
    //   });
    // });


    // Calling, Declarations, Data
    const store = useStore()
    const user = computed(() => store.state.Auth.user);
    const statistics = computed(() => store.state.Auth.statistics);
    const loading_status = computed(() => store.state.Collection.loading_status);
    const wishlist = JSON.parse(localStorage.getItem("wishlist"));
    const navLinks = ref([{ title: "لوحة التحكم", link: "/student/dashboard", icon: '<i class="bi bi-house fs-5"></i>' }, { title: "الفرص", link: "/student/chances", icon: '<i class="bi bi-person-workspace fs-5"></i>' }, { title: "المفضلات", link: "/student/wishlists", icon: '<i class="bi bi-suit-heart-fill fs-5"></i>' }, { title: "الإعدادات", link: "/student/settings", icon: '<i class="bi bi-gear fs-5"></i>' }, { title: "تواصل معنا", link: "/student/contact", icon: '<i class="bi bi-gear fs-5"></i>' }]);
    const isOpen = ref(false);

    store.dispatch("Auth/GetProfile")
    store.dispatch("Auth/GetStatistics")
    const onLogout = () => {
      store.dispatch("Auth/Logout", { data: null })
    }

    const toggleSidebar = () => {
      isOpen.value = !isOpen.value;
    };

    // Return
    return {
      loading_status,
      statistics,
      navLinks,
      onLogout,
      user,
      isOpen,
      toggleSidebar,
    }
  }
}
</script>
<!-- Script -->

<style scoped>
@media (max-width: 768.98px) {
  .sidebar {
    display: none;
    width: 6.5rem;
  }

  .sidebar.open {
    display: block;
  }
}
</style>