<template>
  <div>
    <!-- Page Wrapper -->
    <div id="wrapper">

      <!-- Sidebar -->
      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar"   :class="{ open: isOpen }">
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
          <div class="chance container-fluid py-5">
            <div class="container">
              <div class="chance-container">
                <div class="top-left">
                  <div class="wishlist-feature mt-3 d-flex justify-content-center">
                    <button @click="toggleWishlist()" style="background-color: transparent;">
                      <span v-if="isInWishlist()" style="color: red;"><i class="bi bi-suit-heart-fill fs-4"></i></span>
                      <span v-else><i class="bi bi-suit-heart fs-4"></i></span>
                    </button>
                  </div>
                  <div class="no-of-clicks fs-4">
                    <span>{{ chance.noOfClicks }}</span>
                    <span class="ms-1"><i class="bi bi-eye"></i></span>
                  </div>
                </div>
                <div class="chance-details">
                  <h4 class="fw-bold">{{ chance.chanceName }}</h4>
                  <div class="mt-2">
                    <span class="fw-bold">التصنيف الرئيسي: </span>
                    <span>{{ chance.chanceCategory }}</span>
                  </div>
                  <div class="mt-2">
                    <span class="fw-bold">التصنيف الفرعي: </span>
                    <span>{{ chance.chanceSubcategory }}</span>
                  </div>
                  <div class="mt-2">
                    <span class="fw-bold">الجهة المقدمة: </span>
                    <span>{{ chance.provider }}</span>
                  </div>
                  <div class="mt-2">
                    <span class="fw-bold">تاريخ التسجيل: </span>
                    <span>{{ chance.chanceRegStartDate }} - {{ chance.chanceRegEndDate }}</span>
                  </div>
                  <div class="mt-2">
                    <span class="fw-bold">تاريخ إقامة الفرصة: </span>
                    <span>{{ chance.chanceStartDate }} - {{ chance.chanceEndDate }}</span>
                  </div>
                </div>
                <div class="chance-details mt-3">
                  <h4 class="fw-bold">المتطلبات الأكاديمية</h4>
                  <div class="table-responsive">
                    <table class="table table-striped mt-2">
                      <thead>
                        <tr>
                          <th scope="col">المتطلبات الأكاديمية</th>
                          <th scope="col">التفاصيل</th>
                          <th scope="col">استعداد للفرصة</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>اختبارات اللغة الإنجليزية</td>
                          <td>
                            <span>
                              {{ Object.entries(chance.EnglishStandard)
                                .filter(([key, value]) => value) // Remove entries where value is falsy (empty, null, etc.)
                                .map(([key, value]) => `${key}: ${value}`) // Format key-value pairs
                                .join(" - ") || "لا يوجد شروط محددة"}} <!-- Join them with " - " and remove the last "-" automatically -->
                            </span>
                          </td>
                          <td>
                            <template v-if="validateEnglish() === 'يتطلب استعداد'">
                              <button class="info-badge fw-bold mt-2" :class="'chance-' + getvalidateEnglishClass()"
                                @click="openModalBox()">
                                {{ validateEnglish() }}
                              </button>
                            </template>
                            <template v-else>
                              <span class="info-badge fw-bold mt-2" :class="'chance-' + getvalidateEnglishClass()">
                                {{ validateEnglish() }}
                              </span>
                            </template>
                          </td>
                        </tr>
                        <tr>
                          <td>اخبتارات القدرات العقلية</td>
                          <td>
                            <span>
                            {{ Object.entries(chance.BrainStandard)
                              .filter(([key, value]) => value) // إزالة القيم الفارغة أو null
                              .map(([key, value]) => {
                                const keyMap = {
                                  "Qudrat": "قدرات",
                                  "AchivementTest": "اختبار التحصيل المعرفي",
                                  "Talent": "مقياس موهبة"
                                };
                                return `${keyMap[key] || key}: ${value}`; // استبدال المفتاح إذا كان موجودًا في القاموس
                              })
                              .join(" - ") || "لا يوجد شروط محددة" }} 
                          </span>
                          </td>
                          <td>
                            <template v-if="validateBrain() === 'يتطلب استعداد'">
                              <button class="info-badge fw-bold mt-2" :class="'chance-' + getvalidateBrainClass()"
                                @click="openModalBrainBox()">
                                {{ validateBrain() }}
                              </button>
                            </template>
                            <template v-else>
                              <span class="info-badge fw-bold mt-2" :class="'chance-' + getvalidateBrainClass()">
                                {{ validateBrain() }}
                              </span>
                            </template>
                          </td>
                        </tr>
                        <!-- <tr>
                                    <td>المعدل التراكمي</td>
                                    <td>
                                        <span v-for="([key, value], index) in Object.entries(chance.CurStandard)"
                                            :key="index">
                                            {{ key }}: {{ value }},
                                        </span>
                                    </td>
                                    <td>@fat</td>
                                </tr> -->
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="chance-details mt-3">
                  <h4 class="fw-bold">تفاصيل الفرصة</h4>
                  <p v-html="chance.chanceDesc"></p>
                </div>
                <div class="chance-details mt-3">
                  <h4 class="fw-bold">باقي التفاصيل</h4>
                  <div class="mt-2">
                    <span class="fw-bold">السعر: </span>
                    <span>{{ chance.chancePrice + " " + "ريال" }}</span>
                  </div>
                  <!-- <div class="mt-2">
                        <span>الجنسية: </span>
                        <span>{{ chance.nationality }}</span>
                    </div> -->
                  <div class="mt-2">
                    <span class="fw-bold">الجنس: </span>
                    <span>{{ chance.applicantGender }}</span>
                  </div>
                  <div class="mt-2">
                    <span class="fw-bold">المرحلة الدراسية: </span>
                    ( <span v-for="(val, index) in chance.applicantEdus" :key="index">
                      {{ val }}<span v-if="index !== chance.applicantEdus.length - 1"> - </span>
                    </span> )
                  </div>
                  <div class="mt-2">
                    <span class="fw-bold">الموقع: </span>
                    <span>{{ chance.programStatus }}</span>
                    <span v-if="chance.programStatus == 'حضوري'">
                      في
                      (<span class="ms-1" v-for="(val, index) in chance.cities" :key="index" :value="val"> 
                        {{ val }}<span v-if="index !== chance.cities.length - 1"> - </span>
                      </span> )
                    </span>
                  </div>
                </div>
                <div class="chance-details mt-3">
                  <h4 class="fw-bold">
                    <span>للتسجيل والمزيد من المعلومات: </span>
                    <a :href="chance.chanceLink" target="_blank" style="color: blue">زيارة الرابط</a>
                  </h4>
                </div>
              </div>
              <div class="chance-review-post mt-3">
                <h4 class="fw-bold">اكتب تقييمًا</h4>
                <div class="mt-2">
                  <textarea class="form-control" placeholder="اكتب تقييمك هنا" rows="4"
                    v-model="review.comment"></textarea>
                  <div class="rating">
                    <span v-for="star in stars" :key="star" :class="['star star1', { selected: star <= selectedStars }]"
                      @click="selectStars(star)">
                      ★
                    </span>
                  </div>
                  <button class="btn btn-primary" @click="sendReview()">نشر <i class="bi bi-send"></i></button>
                </div>
              </div>
              <div class="chance-reviews mt-4">
                <h4 class="fw-bold">التقييمات</h4>
                <div class="row">
                  <div class="col-lg-3 col-md-4 col-6 mt-3" v-if="reviews.length > 0" v-for="(review, index) in reviews"
                    :key="index">
                    <div class="review bg-white position-relative p-3 rounded shadow-sm">
                      <p>{{ review.comment }}</p>
                      <div class="rating">
                        <span v-for="star in 5" :key="star" :class="['star star2', { gold: star <= review.stars }]">
                          ★
                        </span>
                      </div>
                      <h6 class="fw-bold">{{ review._studentID.first_name + " " + review._studentID.last_name }}</h6>
                    </div>
                  </div>
                  <div v-else class="col-12">
                    <div class="alert alert-info">
                      <h6>لا يوجد تقييمات</h6>
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


    <!-- Modal Content -->
    <div class="modal fade" ref="modalContentRef">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title fw-bold">الفرص المتعلقة</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body special">
            <div class="alert alert-info" v-if="EnglishChancesRelated.length === 0">لا يوجد فرص متعلقة</div>
            <div class="row chances" v-else>
              <div class="col-lg-4 col-sm-6 col-12 mt-4" v-for="(chance, index) in EnglishChancesRelated" :key="index">
                <div class="chance bg-white position-relative d-inline-block w-100">
                  <div class="position-absolute additional-info d-flex flex-column">
                    <span class="info-badge fw-bold" :class="'date-' + getValidateDateClass(chance)">{{
                      validateDate(chance)
                    }}</span>
                    <span class="info-badge fw-bold mt-2" :class="'chance-' + getValidateChanceClass(chance)">{{
                      validateChance(chance) }}</span>
                  </div>
                  <div class="position-absolute wishlist-feature">
                    <button @click="toggleWishlist(chance._id)">
                      <span v-if="isInWishlist(chance._id)" style="color: red;"><i
                          class="bi bi-suit-heart-fill fs-4"></i></span>
                      <span v-else><i class="bi bi-suit-heart fs-4"></i></span>
                    </button>
                  </div>
                  <a :href="'/student/chance/' + chance._id" @click="IncrementChance(chance._id)">
                    <div class="chance-img">
                      <img :src="chance.chanceImage" />
                    </div>
                    <div class="chance-content p-3">
                      <h6 class="fw-bold">{{ chance.chanceName }}</h6>
                      <h6 class="fw-bold">{{ chance.marketingDesc }}</h6>
                      <h6 class="fw-bold">{{ chance.provider }}</h6>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-danger" @click="closeModal()">
              <span>إغلاق</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Content -->

      <!-- Modal Content -->
      <div class="modal fade" ref="modalContentBrainRef">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title fw-bold">الفرص المتعلقة</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body special">
            <div class="alert alert-info" v-if="BrainChancesRelated.length === 0">لا يوجد فرص متعلقة</div>
            <div class="row chances" v-else>
              <div class="col-lg-4 col-sm-6 col-12 mt-4" v-for="(chance, index) in BrainChancesRelated" :key="index">
                <div class="chance bg-white position-relative d-inline-block w-100">
                  <div class="position-absolute additional-info d-flex flex-column">
                    <span class="info-badge fw-bold" :class="'date-' + getValidateDateClass(chance)">{{
                      validateDate(chance)
                    }}</span>
                    <span class="info-badge fw-bold mt-2" :class="'chance-' + getValidateChanceClass(chance)">{{
                      validateChance(chance) }}</span>
                  </div>
                  <div class="position-absolute wishlist-feature">
                    <button @click="toggleWishlist(chance._id)">
                      <span v-if="isInWishlist(chance._id)" style="color: red;"><i
                          class="bi bi-suit-heart-fill fs-4"></i></span>
                      <span v-else><i class="bi bi-suit-heart fs-4"></i></span>
                    </button>
                  </div>
                  <a :href="'/student/chance/' + chance._id" @click="IncrementChance(chance._id)">
                    <div class="chance-img">
                      <img :src="chance.chanceImage" />
                    </div>
                    <div class="chance-content p-3">
                      <h6 class="fw-bold">{{ chance.chanceName }}</h6>
                      <h6 class="fw-bold">{{ chance.marketingDesc }}</h6>
                      <h6 class="fw-bold">{{ chance.provider }}</h6>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-danger" @click="closeModalNow()">
              <span>إغلاق</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Content -->

  </div>
</template>

<script>
// Import Methods, Packages, Files
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import { Modal } from 'bootstrap';

export default {
  name: 'Chances',
  components: {
  },
  setup() {

    // Calling, Declarations, Data
    const store = useStore()
    const loading_status = computed(() => store.state.Collection.loading_status);
    const user = computed(() => store.state.Auth.user);
    const navLinks = ref([{ title: "لوحة التحكم", link: "/student/dashboard", icon: '<i class="bi bi-house fs-5"></i>' }, { title: "الفرص", link: "/student/chances", icon: '<i class="bi bi-person-workspace fs-5"></i>' }, { title: "المفضلات", link: "/student/wishlists", icon: '<i class="bi bi-suit-heart-fill fs-5"></i>' }, { title: "الإعدادات", link: "/student/settings", icon: '<i class="bi bi-gear fs-5"></i>' }, { title: "تواصل معنا", link: "/student/contact", icon: '<i class="bi bi-send fs-5"></i>' }]);
    const wishlists = ref([]);
    const route = useRoute();
    const stars = [1, 2, 3, 4, 5]; // Total number of stars
    const reviews = computed(() => store.state.Auth.reviews);
    const EnglishChancesRelated = computed(() => store.state.Auth.EnglishChancesRelated);
    const BrainChancesRelated = computed(() => store.state.Auth.BrainChancesRelated);
    const selectedStars = ref(0);
    const review = ref({
      _chanceID: route.params.id,
      comment: "",
      stars: 0
    });
    const modalContentRef = ref(null);
    const modalContentBrainRef = ref(null);
    store.dispatch("Auth/GetProfile")
    store.dispatch("Auth/chanceGet", { chance_id: route.params.id });
    const chance = computed(() => store.state.Auth.chance);
    // get wishlist from local storage
    const getWishlist = () => {
      const storedWishlist = localStorage.getItem('wishlist') || [];
      if (storedWishlist.length > 0) {
        return JSON.parse(storedWishlist);
      }
      else return [];
    }

    const isOpen = ref(false);

    let wishlistStorage = getWishlist();
    wishlists.value = wishlistStorage;

    // Toggle wishlist state for a chance id
    const toggleWishlist = () => {
      let wishlistStorage = getWishlist();
      const index = wishlistStorage.findIndex((_id) => _id === chance.value._id);
      if (index === -1) {
        wishlistStorage.push(chance.value._id);
      } else {
        wishlistStorage.splice(index, 1);
      }
      localStorage.setItem("wishlist", JSON.stringify(wishlistStorage));
      wishlists.value = wishlistStorage;
    };

    // Method to check if a chance is in the wishlist
    const isInWishlist = () => {
      return wishlists.value.includes(chance.value._id);
    };


    const checkEnglishStandard = (chance) => {
      // Validate English standards (if applicable)
      if (user.value.tookEnglishTest) {
        let allNull = true; // Flag to check if all values are null or falsy
        for (let key in chance.EnglishStandard) {
          if (!chance.EnglishStandard[key]) continue;
          allNull = false; // Found a non-null value, so set the flag to false
          if (key == "  ") {
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

    const validateEnglish = () => {
      let english_standard_boolean = checkEnglishStandard(chance.value);
      if (english_standard_boolean == false)
        return "يتطلب استعداد"

      return "يستوفي الشروط"
    }

    const getvalidateEnglishClass = () => {
      const status = validateEnglish();
      if (status === "يستوفي الشروط") {
        return "open";
      } else if (status === "يتطلب استعداد") {
        return "not-started";
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

    const validateBrain = () => {
      let brain_standard_boolean = checkBrainStandard(chance.value);
      if (brain_standard_boolean == false)
        return "يتطلب استعداد"

      return "يستوفي الشروط"
    }

    const getvalidateBrainClass = () => {
      const status = validateBrain();
      if (status === "يستوفي الشروط") {
        return "open";
      } else if (status === "يتطلب استعداد") {
        return "not-started";
      }
    }

    store.dispatch("Auth/ReviewsGet", { _chanceID: route.params.id });

    const selectStars = (star) => {
      selectedStars.value = star; // Set the selected number of stars
    };

    const onLogout = () => {
      store.dispatch("Auth/Logout", { data: null })
    }

    const sendReview = () => {
      review.value.stars = selectedStars.value;
      store.dispatch("Auth/sendReview", review.value);
    };

    const closeModal = () =>  {
      Modal.getInstance(modalContentRef.value).hide();
    }

    const closeModalNow = () =>  {
      Modal.getInstance(modalContentBrainRef.value).hide();
    }

    const openModalBox = () => {
      new Modal(modalContentRef.value).show();
      store.dispatch("Auth/EnglishChancesRelated", { _id: route.params.id});
    }

    const openModalBrainBox = () => {
      new Modal(modalContentBrainRef.value).show();
      store.dispatch("Auth/BrainChancesRelated", { _id: route.params.id});
    }

    const IncrementChance = (_chanceID) => {
      store.dispatch("Auth/IncrementChance", { _chanceID: _chanceID })
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
      user,
      selectStars,
      selectedStars,
      stars,
      review,
      reviews,
      isInWishlist,
      toggleWishlist,
      chance,
      wishlists,
      validateEnglish,
      getvalidateEnglishClass,
      validateBrain,
      sendReview,
      getvalidateBrainClass,
      navLinks,
      onLogout,
      openModalBox,
      closeModal,
      closeModalNow,
      modalContentRef,
      EnglishChancesRelated,
      IncrementChance,
      validateDate,
      getValidateDateClass,
      getValidateChanceClass,
      validateChance,
      modalContentBrainRef,
      openModalBrainBox,
      BrainChancesRelated,
      isOpen,
      toggleSidebar,
    }
  }
}
</script>

<style scoped>
.chance .chance-container {
  border-radius: 12px;
  background-color: #FFF;
  border: 1px solid #DDD;
  padding: 1rem;
  position: relative;
}

.chance .chance-container .top-left {
  position: absolute;
  top: 1rem;
  left: 1rem;
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

.star {
  font-size: 2rem;
  color: gray;
  transition: color 0.3s;
}

.star.star1 {
  cursor: pointer;
}

.star.star1:hover {
  color: gold;
  /* Highlight stars on hover */
}

.star.selected {
  color: gold;
  /* Change color for selected stars */
}

.star.gold {
  color: gold;
}

.chances .chance {
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  border: 1px solid #3c9f9a;
}

.chances .chance:hover {
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important;

}


.chances .chance .additional-info {
  left: 15px;
  top: 15px;
}

.info-badge {
  padding: 6px;
  border-radius: 8px;
  color: #FFF;
  font-size: 12px;
  text-align: center
}

.chances .chance .wishlist-feature {
  right: 15px;
  top: 15px;
}

.chances .chance .wishlist-feature button {
  background-color: transparent;
}

.chances .chance .chance-img img {
  width: 100%;
  height: 175px;
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

.chance-details ul,
.chance-details ol{
  list-style-type: initial;
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
</style>