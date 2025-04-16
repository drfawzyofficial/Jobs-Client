<template>
  <div>
    <!-- Page Wrapper -->
    <div id="wrapper">

      <!-- Sidebar -->
      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar"
        :class="{ open: isOpen }">
        <li class=" nav-item" v-for="(item, index) in navLinks" :key="index">
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
                <router-link class="nav-link dropdown-toggle" to="/student/dashboard" id="userDropdown" role="button" data-toggle="dropdown"
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
          <div class="settings container-fluid py-4">
            <div class="container">
              <div class="breadcrumb-auth">
                <h3 class="fw-bold">إعدادات الحساب</h3>
                <p>صفحة إعدادات الحساب تتيح لك تفعيل الحساب وتأمينه من خلال تغيير كلمة المرور القديمة إلى كلمة مرور
                  جديدة، بالإضافة إلى إمكانية تعديل أو حذف البيانات الشخصية بكل سهولة. تضمن هذه الصفحة التحكم الكامل
                  بمعلوماتك الشخصية وتعزيز أمان حسابك.</p>
              </div>
              <div class="row mt-4">
                <div class="col-12">
                  <div v-if="profilePayload" class="p-3 bg-white shadow">
                    <h5 class="fw-bold">تعديل الملف الشخصي</h5>
                    <p class="mb-3">يمكنك تعديل الملف الشخصي لإضافة أو تحديث معلوماتك الشخصية، مما يساعد في تحسين تجربتك
                      وتوفير بيانات دقيقة.</p>
                    <div class="row mb-4">
                      <div class="col-md-6">
                        <input class="form-control form-control-lg" type="text" v-model="profilePayload.first_name" 
                          placeholder="الاسم الأول">
                      </div>
                      <div class="col-md-6 mt-4 mt-md-0">
                        <input class="form-control form-control-lg" type="text" v-model="profilePayload.last_name"
                          placeholder="الاسم الأخير">
                      </div>
                    </div>
                    <div class="row mb-4">
                      <div class="col-md-6">
                        <input class="form-control form-control-lg" type="text" v-model="profilePayload.email"
                          placeholder="البريد الإلكتروني">
                      </div>
                      <div class="col-md-6 mt-4 mt-md-0">
                        <input class="form-control form-control-lg" type="text" v-model="profilePayload.phone"
                          placeholder="رقم الهاتف">
                      </div>
                    </div>
                    <div class="row mb-4">
                      <div class="col-md-6">
                        <select class="form-select form-select-lg" v-model="profilePayload.applicantGender">
                          <option value="none">الجنس</option>
                          <option value="ذكر">ذكر</option>
                          <option value="أنثى">أنثى</option>
                        </select>
                      </div>
                      <div class="col-md-6 mt-4 mt-md-0">
                        <input class="form-control form-control-lg" type="date" placeholder="تاريخ الميلاد"
                          v-model="profilePayload.DOB">
                      </div>
                    </div>
                    <div class="row mb-4">
                      <div class="col-md-6">
                        <select class="form-select form-select-lg" v-model="profilePayload.applicantEdu">
                          <option value="none">المرحلة التعليمية</option>
                          <option v-for="(val, index) in helperObj.applicantEdus" :key="index" :value="val">{{ val }}
                          </option>
                        </select>
                      </div>
                      <div class="col-md-6 mt-4 mt-md-0">
                        <select class="form-select form-select-lg" v-model="profilePayload.saudiCity">
                          <option value="none">مقر الإقامة</option>
                          <option v-for="(nationality, index) in saudiCities" :key="index" :value="nationality">
                            {{ nationality }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="mb-3 d-block d-sm-flex align-items-center">
                      <label class="form-label">
                        هل أنت سعودي الجنسية؟
                      </label>
                      <div class="form-check ms-3">
                        <input type="radio" name="nationality" class="form-check-input" id="saudinationalityYes"
                          @change="toggleSaudiNationality(true)" :checked="profilePayload.saudinationality === true" />
                        <label class="form-label" for="saudinationalityYes">
                          نعم
                        </label>
                      </div>
                      <div class="form-check ms-3">
                        <input type="radio" name="nationality" class="form-check-input" id="saudinationalityNo"
                          @change="toggleSaudiNationality(false)"
                          :checked="profilePayload.saudinationality === false" />
                        <label class="form-label" for="saudinationalityNo">
                          لا
                        </label>
                      </div>
                    </div>
                    <div class="row mb-4">
                      <div class="col-md-6">
                        <div class="interests">
                          <label class="form-label">ما نوع الفرص التي تبحث عنها؟(اختر 3 على الأقل)</label>
                          <div class="choose-interest">
                            <button type="button" class="btn-interest m-1"
                              v-for="(interest, index) in helperObj.chanceCategories" :key="index"
                              @click="selectInterest(interest)"
                              :class="{ 'btn-selected': profilePayload.interests.includes(interest) }">{{
                                interest }}
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 mt-4 mt-md-0">
                        <div class="interests">
                          <label class="form-label">حدد مجالات اهتمامك بالترتيب؟ (اختر 3 على الأقل)</label>
                          <div class="choose-interest">
                            <button type="button" class="btn-interest m-1"
                              v-for="(interest, index) in helperObj.chanceSubcategories" :key="index"
                              @click="selectSubInterest(interest)"
                              :class="{ 'btn-selected': profilePayload.Subinterests.includes(interest) }">{{
                                interest }}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="english-test mb-4">
                      <div class="mb-4">
                        <!-- Checkbox to ask if the user took the English test -->
                        <div class="form-check mb-4">
                          <input type="checkbox" class="form-check-input" id="englishTestCheckbox"
                            v-model="profilePayload.tookEnglishTest" />
                          <label class="form-label" for="englishTestCheckbox">
                            هل سبق لك وأخذت أحد اختبارات مقياس اللغة الإنجليزية الآتية:
                            (STEP, DOULINGO, IELTS, CEFR, TOEIC, TOEFL)؟
                          </label>
                        </div>
                        <ul v-if="profilePayload.tookEnglishTest" class="nav nav-tabs mt-2" id="myTab" role="tablist">
                          <li class="nav-item" role="presentation">
                            <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#IELTS" id="IELTS-tab"
                              type="button" role="tab" aria-controls="home" aria-selected="true">IELTS</button>
                          </li>
                          <li class="nav-item" role="presentation">
                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#TOEFL" id="TOEFL-tab"
                              type="button" role="tab" aria-controls="TOEFL" aria-selected="false">TOEFL</button>
                          </li>
                          <li class="nav-item" role="presentation">
                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#TOEIC" type="button"
                              role="tab" aria-controls="TOEIC" aria-selected="false">TOEIC</button>
                          </li>
                          <li class="nav-item" role="presentation">
                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#DUOLINGO" type="button"
                              role="tab" aria-controls="DUOLINGO" aria-selected="false">DUOLINGO</button>
                          </li>
                          <li class="nav-item" role="presentation">
                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#Step" type="button"
                              role="tab" aria-controls="Step" aria-selected="false">STEP</button>
                          </li>
                          <li class="nav-item" role="presentation">
                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#CEFR" type="button"
                              role="tab" aria-controls="CEFR" aria-selected="false">CEFR</button>
                          </li>
                        </ul>
                        <div v-if="profilePayload.tookEnglishTest" class="tab-content py-3" id="myTabContent">
                          <div class="tab-pane fade show active" id="IELTS" role="tabpanel"
                            aria-labelledby="home-tab">
                            <button type="button" class="btn btn-degree m-1" v-for="(obj, index) in IELTSDegress"
                              :key="index" @click="selectIELTS(obj.degree)"
                              :class="{ 'btn-selected': obj.degree == profilePayload.EnglishStandard.IELTS }">{{
                                obj.degree }}</button>
                          </div>
                          <div class="tab-pane fade" id="TOEFL" role="tabpanel">
                            <input type="text" class="form-control form-control-lg" placeholder="الدرجة بين 0 و120"
                              v-model="profilePayload.EnglishStandard.TOEFL">
                          </div>
                          <div class="tab-pane fade" id="TOEIC" role="tabpanel">
                            <input type="text" class="form-control form-control-lg" placeholder="الدرجة بين 0 و990"
                              v-model="profilePayload.EnglishStandard.TOEIC">
                          </div>
                          <div class="tab-pane fade" id="DUOLINGO" role="tabpanel">
                            <input type="text" class="form-control form-control-lg" placeholder="الدرجة بين 0 و160"
                              v-model="profilePayload.EnglishStandard.DUOLINGO">

                          </div>
                          <div class="tab-pane fade" id="Step" role="tabpanel">
                            <input type="text" class="form-control form-control-lg" placeholder="الدرجة بين 0 و100"
                              v-model="profilePayload.EnglishStandard.STEP">
                          </div>
                          <div class="tab-pane fade" id="CEFR" role="tabpanel">
                            <button type="button" class="btn btn-degree m-1" v-for="(obj, index) in CEFRs" :key="index"
                              @click="selectCEFR(obj.degree)"
                              :class="{ 'btn-selected': obj.degree == profilePayload.EnglishStandard.CEFR }">{{
                                obj.degree }}</button>
                          </div>
                        </div>
                        <div v-if="profilePayload.tookEnglishTest">
                          <button type="button" class="btn btn-primary" @click="resetEnglishStandard()">
                            <span class="word">إعادة التعيين <i class="bi bi-arrow-counterclockwise ms-1"></i></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="brain-test mb-4">
                      <!-- Checkbox to ask if the user took the Brain test -->
                      <div class="form-check mb-4">
                        <input type="checkbox" class="form-check-input" id="englishTestCheckbox"
                          v-model="profilePayload.tookBrainTest" />
                        <label class="form-label" for="englishTestCheckbox">
                          هل سبق لك وأخذت أحد اختبارات القدرات العقلية الآتية: (قدرات, تحصيلي, مقياس موهبة) (SAAT, GAT,
                          ACT, SAT)؟
                        </label>
                      </div>
                      <ul v-if="profilePayload.tookBrainTest" class="nav nav-tabs mt-2" id="otherMyTab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#SAT" id="SAT-tab"
                            type="button" role="tab" aria-controls="SAT" aria-selected="true">SAT</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" data-bs-toggle="tab" data-bs-target="#Qudrat" id="Qudrat-tab"
                            type="button" role="tab" aria-controls="Qudrat" aria-selected="false">قدرات</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" data-bs-toggle="tab" data-bs-target="#GAT" id="GAT-tab" type="button"
                            role="tab" aria-controls="GAT" aria-selected="false">GAT</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" data-bs-toggle="tab" data-bs-target="#ACT" id="ACT-tab" type="button"
                            role="tab" aria-controls="ACT" aria-selected="false">ACT</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" data-bs-toggle="tab" data-bs-target="#Talent" id="Talent-tab"
                            type="button" role="tab" aria-controls="Talent" aria-selected="false">مقياس موهبة</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" data-bs-toggle="tab" data-bs-target="#AchivementTest"
                            id="AchivementTest-tab" type="button" role="tab" aria-controls="AchivementTest"
                            aria-selected="false">التحصيل المعرفي</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" data-bs-toggle="tab" data-bs-target="#SAAT" id="SAAT-tab"
                            type="button" role="tab" aria-controls="SAAT" aria-selected="false">SAAT</button>
                        </li>
                      </ul>
                      <div v-if="profilePayload.tookBrainTest" class="tab-content py-3" id="myOtherTabContent">
                        <div class="tab-pane fade show active" id="SAT" role="tabpanel">
                          <input type="text" class="form-control form-control-lg" placeholder="الدرجة بين 0 و1600"
                            v-model="profilePayload.BrainStandard.SAT">
                        </div>
                        <div class="tab-pane fade" id="Qudrat" role="tabpanel">
                          <input type="text" class="form-control form-control-lg" placeholder="الدرجة بين 0 و100"
                            v-model="profilePayload.BrainStandard.Qudrat">
                        </div>
                        <div class="tab-pane fade" id="GAT" role="tabpanel">
                          <input type="text" class="form-control form-control-lg" placeholder="الدرجة بين 0 و100"
                            v-model="profilePayload.BrainStandard.GAT">
                        </div>
                        <div class="tab-pane fade" id="ACT" role="tabpanel">
                          <input type="text" class="form-control form-control-lg" placeholder="الدرجة بين 0 و36"
                            v-model="profilePayload.BrainStandard.ACT">
                        </div>
                        <div class="tab-pane fade" id="Talent" role="tabpanel">
                          <input type="text" class="form-control form-control-lg" placeholder="الدرجة بين 0 و2000"
                            v-model="profilePayload.BrainStandard.Talent">
                        </div>
                        <div class="tab-pane fade" id="AchivementTest" role="tabpanel">
                          <input type="text" class="form-control form-control-lg" placeholder="الدرجة بين 0 و100"
                            v-model="profilePayload.BrainStandard.AchivementTest">
                        </div>
                        <div class="tab-pane fade" id="SAAT" role="tabpanel">
                          <input type="text" class="form-control form-control-lg" placeholder="الدرجة بين 0 و100"
                            v-model="profilePayload.BrainStandard.SAAT">
                        </div>
                      </div>
                      <div v-if="profilePayload.tookBrainTest">
                        <button type="button" class="btn btn-primary" @click="resetBrainStandard()">
                          <span class="word">إعادة التعيين <i class="bi bi-arrow-counterclockwise ms-1"></i></span>
                          <!-- <span class="material-symbols-outlined align-middle ms-1">
                                                    check
                                                </span> -->
                        </button>
                      </div>
                    </div>
                    <hr>
                    <div>
                      <button type="button" class="btn btn-primary ms-2" @click="editProfile()" :disabled="loading_status">
                        <span class="text">الإرسال</span>
                        <span v-if="!loading_status" class="ms-1"><i class="bi bi-send"></i></span>
                        <span v-else class="spinner-border spinner-border-sm ms-1" role="status"></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-12 mt-4">
                  <div class="p-3 bg-white shadow">
                    <h5 class="fw-bold">تفعيل الحساب</h5>
                    <p class="mb-2">الرجاء قم بإدخال الرمز الذي تم إرساله إلى البريد الإلكتروني الخاص بك لكي تقوم بتفعيل
                      الحساب وإن لم تجده في بريدك الإلكتروني أو صلاحيته قد انتهت يمكنك إعادة إرسال الرمز مرة
                      أخرى.</p>
                    <div class="mb-3">
                      <input class="form-control form-control-lg" type="text" placeholder="أدخل رمز التفعيل هنا"
                        aria-label="account-activation" v-model="codePayload.code">
                      <div id="account_activation_help" class="form-text">
                        إذا لم تصلك الرسالة، يرجى التحقق من مجلد <strong>'الرسائل غير المرغوب فيها/السبام'</strong> قبل
                        طلب إعادة الإرسال.
                      </div>
                    </div>
                    <div>
                      <button type="button" class="btn btn-primary" @click="submitCode()"
                      :disabled="(user && user.is_verified) || loading_status">
                        <span class="text">تفعيل</span>
                        <span v-if="!loading_status" class="ms-1"><i class="bi bi-arrow-clockwise"></i></span>
                        <span v-else class="spinner-border spinner-border-sm ms-1" role="status"></span>
                      </button>
                      <button type="button" class="btn btn-primary ms-2" @click="resendCode()"
                      :disabled="(user && user.is_verified) || loading_status">
                        <span class="text">الإرسال</span>
                        <span v-if="!loading_status" class="ms-1"><i class="bi bi-send"></i></span>
                        <span v-else class="spinner-border spinner-border-sm ms-1" role="status"></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-12 mt-4">
                  <div class="p-3 bg-white shadow">
                    <h5 class="fw-bold">تفعيل الاشعارات</h5>
                    <p class="mb-2">يمكنك تفعيل الإشعارات للفرص التي تهمك، فقط اضغط على زر الإشعارات لتلقي التحديثات
                      مباشرة.</p>
                    <div class="form-check form-switch d-flex align-items-center mb-3">
                      <input class="form-check-input" type="checkbox" id="enableNotifications"
                        v-model="profilePayload.enable_notifications" @change="updateNotifications">
                      <label class="form-check-label ms-2" for="enableNotifications">تفعيل الإشعارات للفرص المهتم
                        بها</label>
                    </div>
                  </div>
                </div>
                <div class="col-12 mt-4">
                  <div class="p-3 bg-white shadow">
                    <h5 class="fw-bold">تأمين الحساب</h5>
                    <p class="mb-2">قم بتغيير كلمة السر الخاصة بك إذا كنت تظن أن الحساب قد تم اختراقه من قبل أحد
                      المستخدمين.
                    </p>
                    <div class="mb-4">
                      <input class="form-control form-control-lg" type="password" placeholder="كلمة السر القديمة"
                        aria-label="account-current_password" v-model="passwordPayload.current_password">
                    </div>
                    <div class="mb-4">
                      <input class="form-control form-control-lg" type="password" placeholder="كلمة السر الجديدة"
                        aria-label="account-new_password" v-model="passwordPayload.new_password">
                    </div>
                    <div class="mb-3">
                      <input class="form-control form-control-lg" type="password" placeholder="تأكيد كلمة السر الجديدة"
                        aria-label="account-new_password_confirmation"
                        v-model="passwordPayload.new_password_confirmation">
                    </div>
                    <div>
                      <button type="button" class="btn btn-primary" @click="changePassword()" :disabled="loading_status">
                        <span class="text">تغيير</span>
                        <span v-if="!loading_status" class="ms-1"><i class="bi bi-arrow-clockwise"></i></span>
                        <span v-else class="spinner-border spinner-border-sm ms-1" role="status"></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-12 mt-4">
                  <div class="p-3 bg-white shadow">
                    <h5 class="fw-bold">حذف الحساب</h5>
                    <p class="mb-3">حذف الحساب يؤدي حذف حسابك نهائيًا من المنصة ولن تتمكن من استعادته مرة أخرى. فكر
                      وتمهل قبل
                      حذف الحساب.</p>
                    <div>
                      <button type="button" class="btn btn-danger" @click="deleteAccount()" :disabled="loading_status">
                        <span class="text">حذف</span>
                        <span v-if="!loading_status" class="ms-1"><i class="bi bi-trash"></i></span>
                        <span v-else class="spinner-border spinner-border-sm ms-1" role="status"></span>
                      </button>
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
import { computed, onMounted, ref } from 'vue'
export default {
  name: 'Settings',
  components: {
  },
  setup() {
    // Calling, Declarations, Data
    const store = useStore()
    const loading_status = computed(() => store.state.Collection.loading_status);
    const user = computed(() => store.state.Auth.user);
    const isSticky = ref(false);
    const show = ref(false);
    store.dispatch("Auth/GetProfile");
    const selectItems = ref([{ text: 'مسابقات' }, { text: 'مهارات' }, { text: 'ذكاء' }]);
    store.dispatch("Collection/GetHelper")
    const helperObj = computed(() => store.state.Collection.helperObj);
    const navLinks = ref([{ title: "لوحة التحكم", link: "/student/dashboard", icon: '<i class="bi bi-house fs-5"></i>' }, { title: "الفرص", link: "/student/chances", icon: '<i class="bi bi-person-workspace fs-5"></i>' }, { title: "المفضلات", link: "/student/wishlists", icon: '<i class="bi bi-suit-heart-fill fs-5"></i>' }, { title: "الإعدادات", link: "/student/settings", icon: '<i class="bi bi-gear fs-5"></i>' }, { title: "تواصل معنا", link: "/student/contact", icon: '<i class="bi bi-send fs-5"></i>' }]);



    const profilePayload = ref({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      applicantGender: "",
      applicantEdu: "",
      DOB: "",
      saudiresiding: true,
      saudiCity: "",
      tookEnglishTest: false,
      tookBrainTest: false,
      EnglishStandard: {
        IELTS: '',
        TOEFL: '',
        TOEIC: '',
        DUOLINGO: '',
        STEP: '',
        CEFR: '',
      },
      BrainStandard: {
        SAT: '',
        Qudrat: '',
        GAT: '',
        ACT: '',
        Talent: '',
        AchivementTest: '',
        SAAT: ''
      },
      interests: [],
      Subinterests: [],
      enable_notifications: false
    });

    const isOpen = ref(false);

    const saudiCities = ref([
      "الرياض",
      "مكة المكرمة",
      "جدة",
      "المدينة المنورة",
      "الدمام",
      "الأحساء",
      "القطيف",
      "الخبر",
      "الجبيل",
      "الطائف",
      "الدرعية",
      "بريدة",
      "عنيزة",
      "الرس",
      "الخرج",
      "الدوادمي",
      "المجمعة",
      "شقراء",
      "الأفلاج",
      "حوطة بني تميم",
      "الحريق",
      "المزاحمية",
      "ثادق",
      "حريملاء",
      "الدلم",
      "القنفذة",
      "رابغ",
      "تربة",
      "الخرمة",
      "ينبع",
      "العلا",
      "البكيرية",
      "البدائع",
      "الخفجي",
      "رأس تنورة",
      "بقيق",
      "أبها",
      "خميس مشيط",
      "تبوك",
      "حائل",
      "عرعر",
      "جازان",
      "الريث",
      "ضمد",
      "نجران",
      "الباحة",
      "بلجرشي",
      "سكاكا",
      "دومة الجندل"
    ]);



    const IELTSDegress = ref([
      {
        degree: "0"
      },
      {
        degree: "1"
      },
      {
        degree: "1.5"
      },
      {
        degree: "2"
      },
      {
        degree: "2.5"
      },
      {
        degree: "3"
      },
      {
        degree: "3.5"
      },
      {
        degree: "4"
      },
      {
        degree: "4.5"
      },
      {
        degree: "5"
      },
      {
        degree: "5.5"
      },
      {
        degree: "6"
      },
      {
        degree: "6.5"
      },
      {
        degree: "7"
      },
      {
        degree: "7.5"
      },
      {
        degree: "8"
      },
      {
        degree: "8.5"
      },
      {
        degree: "9"
      },


    ]);
    const CEFRs = ref([
      {
        degree: "A1"
      },
      {
        degree: "A2"
      },
      {
        degree: "B1"
      },
      {
        degree: "B2"
      },
      {
        degree: "C1"
      },
      {
        degree: "C2"
      },
    ]);
    const passwordPayload = ref({
      current_password: "",
      new_password: "",
      new_password_confirmation: ""
    })
    const editProfile = () => {
      store.dispatch("Auth/editProfile", profilePayload.value)
    }
    const codePayload = ref({
      code: "",
    })

    const Logout = () => {
      store.dispatch("Auth/Logout")
    }
    const submitCode = () => {
      store.dispatch("Auth/submitCode", codePayload.value)
    }
    const resendCode = () => {
      store.dispatch("Auth/resendCode", {})
    }
    const deleteAccount = () => {
      store.dispatch("Auth/deleteAccount", {})
    }
    const changePassword = () => {
      store.dispatch("Auth/changePassword", passwordPayload.value)
    }
    const onFileChange = async (e) => {
      let formData = new FormData();
      formData.append("avatar", e.target.files[0]);
      store.dispatch("Auth/changeAvatar", formData);
    }
    const button_show_state = ref(false);
    const onLogout = () => {
      store.dispatch("Auth/Logout", { data: null })
    }

    const toggleSaudiNationality = (value) => {
      if (value === true) {
        profilePayload.value.saudinationality = true;
      } else {
        profilePayload.value.saudinationality = false;
      }
    };

    // onMounted(() => {
    //   const that = this;
    //   window.addEventListener("scroll", () => {
    //     let scrollPos = window.scrollY;
    //     if (scrollPos >= 100) {
    //       isSticky.value = true;
    //     } else {
    //       isSticky.value = false;
    //     }
    //   });
    // });

    // Methods
    const selectInterest = (interest) => {
      if (profilePayload.value.interests.includes(interest)) {
        profilePayload.value.interests = profilePayload.value.interests.filter((item) => item !== interest);
      } else {
        profilePayload.value.interests.push(interest);
      }
    };
    const selectSubInterest = (interest) => {
      if (profilePayload.value.Subinterests.includes(interest)) {
        profilePayload.value.Subinterests = profilePayload.value.Subinterests.filter((item) => item !== interest);
      } else {
        profilePayload.value.Subinterests.push(interest);
      }
    };

    const resetEnglishStandard = () => {
      profilePayload.value.EnglishStandard = {
        IELTS: '',
        TOEFL: '',
        TOEIC: '',
        DUOLINGO: '',
        STEP: '',
        CEFR: '',
      }
    }
    const resetBrainStandard = () => {
      profilePayload.value.BrainStandard = {
        SAT: '',
        Qudrat: '',
        GAT: '',
        ACT: '',
        Talent: '',
        AchivementTest: '',
        SAAT: ''
      }
    }




    const selectIELTS = (degree) => {
      profilePayload.value.EnglishStandard.IELTS = degree;
    }
    const selectCEFR = (degree) => {
      profilePayload.value.EnglishStandard.CEFR = degree;
    }

    const updateNotifications = async () => {
      store.dispatch("Auth/updateNotifications", { enable_notifications: profilePayload.value.enable_notifications });
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
      profilePayload.value = user.value;
    });


    // Return
    return {
      helperObj,
      isSticky,
      show,
      button_show_state,
      Logout,
      codePayload,
      submitCode,
      resendCode,
      deleteAccount,
      passwordPayload,
      changePassword,
      profilePayload,
      editProfile,
      onFileChange,
      selectItems,
      IELTSDegress,
      CEFRs,
      selectIELTS,
      selectCEFR,
      navLinks,
      onLogout,
      user,
      saudiCities,
      toggleSaudiNationality,
      selectInterest,
      selectSubInterest,
      resetEnglishStandard,
      resetBrainStandard,
      updateNotifications,
      isOpen,
      toggleSidebar,
      loading_status
    }
  }
}
</script>

<style scoped>
.btn-degree {
  height: 40px;
  /* width: 40px; */
  background-color: #DEF2F1;
  border: 1px solid #3aafa9;
  transition: all 0.3s ease-in-out;
}

.btn-interest {
  background-color: #DEF2F1;
  border: 1px solid #3aafa9;
  transition: all 0.3s ease-in-out;
}


.btn-degree:hover {
  background-color: #3B7A7B;
  color: #FFF;
}

.btn-selected {
  background-color: #3B7A7B;
  color: #FFF;
}

.nav-tabs .nav-link {
  color: #2B7A7B;
}

.nav-tabs .nav-link.active {
  color: #2B7A7B;
  font-weight: 600;
}

.form-switch .form-check-input {
  width: 3em;
  height: 1.5em;
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
  .nav-tabs .nav-link {
    padding: 0.2rem 0.5rem;
  }
}

</style>