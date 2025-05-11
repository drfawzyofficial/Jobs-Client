<template>
  <div>
    <!-- Page Wrapper -->
    <div id="wrapper">

      <!-- Sidebar -->
      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar"    :class="{ open: isOpen }">
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
                <router-link v-if="user" class="nav-link dropdown-toggle" to="/student/settings" id="userDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <span class="ml-2 d-none d-lg-inline text-gray-600 small">{{ user.first_name + " " + user.last_name
                    }}</span>
                  <img class="img-profile rounded-circle" :src="user.avatar" v-if="user && user.avatar" loading="lazy">
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
          <div class="wishlists container-fluid py-4">
            <div class="breadcrumb-auth">
              <h3 class="fw-bold">جميع المفضلات</h3>
              <p>يمكنك هنا إدارة الفرص التي قمت بإضافتها إلى مفضلاتك، ويمكنك إضافة أو إزالة أي فرصة بكل سهولة.</p>
            </div>
            <p class="alert alert-info mt-3">عدد المفضلات: {{ wishlistsCount  }}</p>
            <div class="row" v-if="wishlists.length > 0">
              <div class="col-xl-3 col-lg-4 col-sm-6 mt-4" 
                v-for="(wishlist, index) in wishlists" :key="index">
                <div class="wishlist position-relative bg-white position-relative d-inline-block w-100">
                  <div class="position-absolute additional-info d-flex flex-column">
                    <span class="info-badge fw-bold" :class="'date-' + getValidateDateClass(wishlist)">{{
                      validateDate(wishlist)
                    }}</span>
                    <span class="info-badge fw-bold mt-2" :class="'chance-' + getValidateChanceClass(wishlist)">{{
                      validateChance(wishlist) }}</span>
                  </div>
                  <div class="position-absolute wishlist-feature">
                    <button @click="toggleWishlist(wishlist._id)">
                      <span style="color: red;"><i class="bi bi-suit-heart-fill fs-4"></i></span>
                    </button>
                  </div>
                <router-link :to="'/student/chance/' + wishlist._id">
                  <div class="wishlist-img">
                    <img loading="lazy" :src="wishlist.chanceImage" />
                  </div>
                  <div class="wishlist-content p-3">
                    <h6 class="fw-bold">{{ wishlist.chanceName }}</h6>
                    <p>{{ wishlist.marketingDesc }}</p>
                    <span class="fw-bold">{{ wishlist.provider }}</span>
                  </div>
                </router-link>
                </div>
              </div>
            </div>
            <div v-else class="mt-4">
              <p class="alert alert-info">لا يوجد مفضلات</p>
            </div>
            <div class="mt-4 d-flex justify-content-center" v-if="wishlistsPagesCount > 1">
              <Paginate :page-count="wishlistsPagesCount" :click-handler="clickCallback" :prev-text="'السابق'"
                :next-text="'التالي'" :container-class="'pagination'" :page-class="'page-item'">
              </Paginate>
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
  </div>
</template>


<script>
// Import Methods, Packages, Files
import { useStore } from 'vuex'
import { computed, ref, onMounted } from 'vue'
import Paginate from 'vuejs-paginate-next';

export default {
  name: 'Wishlists',
  components: {
    Paginate
  },
  setup() {
    

    // Calling, Declarations, Data
    const store = useStore();
    const loading_status = computed(() => store.state.Collection.loading_status);
    const user = computed(() => store.state.Auth.user);
    const wishlists = computed(() => store.state.Auth.wishlists);
    const navLinks = ref([{ title: "لوحة التحكم", link: "/student/dashboard", icon: '<i class="bi bi-house fs-5"></i>' }, { title: "الفرص", link: "/student/chances", icon: '<i class="bi bi-person-workspace fs-5"></i>' }, { title: "المفضلات", link: "/student/wishlists", icon: '<i class="bi bi-suit-heart-fill fs-5"></i>' }, { title: "الإعدادات", link: "/student/settings", icon: '<i class="bi bi-gear fs-5"></i>' }, { title: "تواصل معنا", link: "/student/contact", icon: '<i class="bi bi-send fs-5"></i>' }]);
    const isOpen = ref(false);

    // get wishlist from local storage
    const getWishlist = () => {
      const storedWishlist = localStorage.getItem('wishlist') || [];
      if (storedWishlist.length > 0) {
        return JSON.parse(storedWishlist);
      }
      else return [];
    }


    // Toggle wishlist state for a job id
    const toggleWishlist = (job_id) => {
      let wishlistStorage = getWishlist();
      const index = wishlistStorage.findIndex((_id) => _id === job_id);
      wishlistStorage.splice(index, 1);
      localStorage.setItem("wishlist", JSON.stringify(wishlistStorage));
      store.dispatch("Auth/WishlistsGet", { wishlists: wishlistStorage, page_no: 1 });
    };

    let wishlistStorage = getWishlist();
    store.dispatch("Auth/WishlistsGet", { wishlists: wishlistStorage, page_no: 1 });
    const wishlistsPagesCount = computed(() => store.state.Auth.wishlistsPagesCount);
    const wishlistsCount = computed(() => store.state.Auth.wishlistsCount);
    store.dispatch("Auth/GetProfile")

    const checkEnglishStandard = (chance) => {
      // Validate English standards (if applicable)
      if (user.value.tookEnglishTest) {
        let allNull = true; // Flag to check if all values are null or falsy
        for (let key in chance.EnglishStandard) {
          if (!chance.EnglishStandard[key]) continue;
          allNull = false; // Found a non-null value, so set the flag to false
          if (key == "CEFR") {
            const userValue = user.value.EnglishStandard[key] || "";
            const chanceValue = chance.EnglishStandard[key] || "";
            if (userValue === chanceValue) {
              return true;
            }
          } else {
            const userValue = parseFloat(user.value.EnglishStandard[key]) || 0;
            const chanceValue = parseFloat(chance.EnglishStandard[key]) || 0;
            if (userValue >= chanceValue) {
              return true;
            }
          }
        }
        if (allNull) {
          return true;
        }
        return false
      } else {
        for (let key in chance.EnglishStandard) {
          if (chance.EnglishStandard[key]) return false;
        }
        return true;
      }
    }

    const checkBrainStandard = (chance) => {
      // Validate English standards (if applicable)
      if (user.value.tookBrainTest) {
        let allNull = true; // Flag to check if all values are null or falsy
        for (let key in chance.BrainStandard) {
          if (!chance.BrainStandard[key]) continue;
          allNull = false; // Found a non-null value, so set the flag to false
          const userValue = parseFloat(user.value.BrainStandard[key]) || 0;
          const chanceValue = parseFloat(chance.BrainStandard[key]) || 0;
          if (userValue >= chanceValue) {
            return true;
          }

        }
        if (allNull) {
          return true;
        }
        return false
      } else {
        for (let key in chance.BrainStandard) {
          if (chance.BrainStandard[key]) return false;
        }
        return true;
      }
    }


    const validateChance = (chance) => {
      // const userAge = new Date().getFullYear() - new Date(user.value.DOB).getFullYear();
      // if (parseInt(chance.applicantAge) !== userAge) {
      //   return "لا يستوفي الشروط"
      // }
      if (chance.applicantGender !== user.value.applicantGender) {
        return "لا يستوفي الشروط"
      }

      if (!chance.applicantEdus.includes(user.value.applicantEdu)) {
        return "لا يستوفي الشروط";
      }
      if (chance.chancePriority === "saudi") {
        if (user.value.saudinationality === false) {
          return "لا يستوفي الشروط";
        } else {
          if (chance.programStatus === "حضوري" && !chance.cities.includes(user.value.saudiCity)) {
            return "لا يستوفي الشروط";
          }
        }
      } else {
        if (chance.programStatus === "حضوري" && !chance.cities.includes(user.value.saudiCity)) {
          return "لا يستوفي الشروط";
        }
      }
      let english_standard_boolean = checkEnglishStandard(chance);
      let brain_standard_boolean = checkBrainStandard(chance);

      if (english_standard_boolean == false || brain_standard_boolean == false)
        return "يتطلب استعداد"

      return "يستوفي الشروط"
    }


    const getValidateChanceClass = (chance) => {
      const status = validateChance(chance);
      if (status === "يستوفي الشروط") {
        return "open";
      } else if (status === "يتطلب استعداد") {
        return "not-started";
      } else if (status === "لا يستوفي الشروط") {
        return "closed";
      }
    }

    const validateDate = (chance) => {
      const currentDate = new Date().toISOString().split('T')[0]; // Get the current date
      const regStartDate = chance.chanceRegStartDate // Convert to Date object
      const regEndDate = chance.chanceRegEndDate // Convert to Date object
      if (currentDate >= regStartDate && currentDate <= regEndDate) {
        return "مفتوح التسجيل";
      }
      else if (currentDate < regStartDate) {
        return "يفتح قريبًا";
      } else {
        return "مغلق التسجيل";
      }
    }

    const getValidateDateClass = (chance) => {
      const status = validateDate(chance);
      if (status === "مفتوح التسجيل") {
        return "open";
      } else if (status === "يفتح قريبًا") {
        return "not-started";
      } else if (status === "مغلق التسجيل") {
        return "closed";
      }
    }
    const onLogout = () => {
      store.dispatch("Auth/Logout", { data: null })
    }

    const clickCallback = (pageNum) => store.dispatch(store.dispatch("Auth/WishlistsGet", { wishlists: wishlistStorage, page_no: pageNum }));

    const toggleSidebar = (e) => {
      e.stopPropagation();
      isOpen.value = !isOpen.value;
    };

    onMounted(() => {
      document.addEventListener('click', (event) => {
        const sidebar = $(".sidebar");
        if (sidebar && !sidebar.is(event.target)) {
          isOpen.value = false;
        }
      });
    });

    // Return
    return {
      loading_status,
      toggleWishlist,
      wishlists,
      validateDate,
      getValidateDateClass,
      validateChance,
      getValidateChanceClass,
      navLinks,
      onLogout,
      wishlistsPagesCount,
      wishlistsCount,
      user,
      clickCallback,
      isOpen,
      toggleSidebar,
    }
  }
}
</script>

<style scoped>
.wishlists .wishlist {
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  border: 1px solid #3c9f9a;
}

.wishlists .wishlist:hover {
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important;

}


.wishlists .wishlist .additional-info {
  left: 15px;
  top: 15px;
}

.wishlists .wishlist .additional-info .add-info-badge {
  padding: 4px;
  border-radius: 8px;
  background-color: #3c9f9a;
  color: #FFF;
  font-size: 12px;
  text-align: center
}

.wishlists .wishlist .wishlist-feature {
  right: 8px;
  top: 15px;
}

.wishlists .wishlist .wishlist-feature button {
  background-color: transparent;
}

.wishlists .wishlist .wishlist-img img {
  width: 100%;
  height: 175px;
}

.info-badge {
  padding: 6px;
  border-radius: 8px;
  color: #FFF;
  font-size: 12px;
  text-align: center
}

.date-open,
.chance-open {
  background-color: green;
}

.date-closed,
.chance-closed {
  background-color: #a71616;
}

.date-not-started,
.chance-not-started {
  background-color: #fbb054;
}
@media (max-width: 768.98px) {
  .sidebar {
    display: none;
    width: 6.5rem;
  }
  .sidebar.open {
    display: block;
  }
}
@media (max-width: 575.98px) {
  .wishlists .wishlist .wishlist-img img {
    height: 150px;
  }
  .wishlists .wishlist .wishlist-content {
    padding: 0.3rem;
  }
  .wishlists .wishlist .wishlist-content h5 {
    font-size: 1.1rem;
  }
  .wishlists .wishlist .wishlist-content p {
    font-size: 14px;
  }
  .wishlists .wishlist .wishlist-content span {
    font-size: 0.8rem;
  }
  .wishlists .wishlist .wishlist-feature {
    right: 0;
  }
}
@media (max-width: 400px) {
  .wishlists .wishlist .wishlist-img img {
    height: 125px;
  }
}
</style>