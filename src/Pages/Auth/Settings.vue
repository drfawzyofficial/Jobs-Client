<template>
    <DashboardLayout>
        <div class="settings container-fluid py-5 bg-greencolor3">
            <div class="container">

                <div class="row">
                    <div class="col-md-4">
                        <div class="nav flex-column nav-pills bg-white p-3 rounded-12" id="v-pills-tab" role="tablist"
                            aria-orientation="vertical">
                            <button class="nav-link active" id="v-pills-activation-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-activation" type="button" role="tab"
                                aria-controls="v-pills-activation" aria-selected="true">
                                <span class="fs-4 align-middle"><i class="ph ph-user-gear"></i></span>
                                <span class="ms-1">تفعيل الحساب</span>
                            </button>
                            <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile"
                                aria-selected="true" @click="editProfileSection()">
                                <span class="fs-4 align-middle"><i class="ph ph-user-circle"></i></span>
                                <span class="ms-1">بيانات الحساب</span>
                            </button>
                            <button class="nav-link" id="v-pills-security-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-security" type="button" role="tab" aria-controls="v-pills-security"
                                aria-selected="false">
                                <span class="fs-4 align-middle"><i class="ph ph-shield-check"></i></span>
                                <span class="ms-1">آمان الحساب</span>
                            </button>
                            <button class="nav-link" id="v-pills-delete-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-delete" type="button" role="tab" aria-controls="v-pills-delete"
                                aria-selected="false">
                                <span class="fs-4 align-middle"><i class="ph ph-trash"></i></span>
                                <span class="ms-1">حذف الحساب</span>
                            </button>

                        </div>
                    </div>
                    <div class="col-md-8 mt-3 mt-md-0">
                        <div class="tab-content bg-white p-3 rounded-12" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-activation" role="tabpanel"
                                aria-labelledby="v-pills-activation-tab" tabindex="0">
                                <h5>تفعيل الحساب</h5>
                                <p>برجاء قم بإدخال الكود الذي تم إرساله إلى البريد الإلكتروني الخاص بك لكي تقوم بتفعيل
                                    الحساب وإن لم تجده في بريدك الإلكتروني أو صلاحيته قد انتهت يمكنك إعادة إرسال الكود مرة
                                    أخرى</p>
                                <div class="mb-3">
                                    <input class="form-control form-control-lg" type="text" placeholder="برجاء كتابة الكود"
                                        aria-label="account-activation" v-model="codePayload.code">
                                </div>
                                <div>
                                    <button type="button" class="btn-style-one green-color2" @click="submitCode()"
                                        :disabled="user && user.is_verified">
                                        <span v-if="!loading_status" class="fs-5 align-middle"><i
                                                class="ph ph-user-gear"></i></span>
                                        <span v-else class="spinner-border spinner-border-sm ms-1" role="status"></span>
                                        <span class="ms-2">تفعيل</span>
                                    </button>
                                    <button type="button" class="btn-style-one green-color2 ms-2" @click="resendCode()"
                                        :disabled="user && user.is_verified">
                                        <span v-if="!loading_status" class="fs-5 align-middle"><i
                                                class="ph ph-paper-plane-tilt"></i></span>
                                        <span v-else class="spinner-border spinner-border-sm ms-1" role="status"></span>
                                        <span class="ms-2">الإرسال</span>
                                    </button>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                                aria-labelledby="v-pills-profile-tab" tabindex="0">
                                <h5 class="mb-3">تغيير بياناتك الشخصية</h5>
                                <div class="profile-pic-wrapper mb-3">
                                    <div class="pic-holder">
                                        <img id="profilePic" class="pic" :src="user.avatar" v-if="user && user.avatar">
                                        <input class="uploadProfileInput" type="file" name="profile_pic"
                                            id="newProfilePhoto" accept="image/*" style="opacity: 0;"
                                            @change="onFileChange" />
                                        <label for="newProfilePhoto" class="upload-file-block">
                                            <div class="text-center">
                                                <div class="mb-2">
                                                    <i class="fa fa-camera fa-2x"></i>
                                                </div>
                                                <div class="text-uppercase">
                                                    تحديث <br /> الصورة الشخصية
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-6">
                                        <label for="fullname" class="form-label">الاسم بالكامل</label>
                                        <input class="form-control form-control-lg" type="text"
                                            v-model="profilePayload.fullname">
                                    </div>
                                    <div class="col-md-6 mt-3 mt-md-0">
                                        <label for="email" class="form-label">البريد الإلكتروني</label>
                                        <input class="form-control form-control-lg" type="text" 
                                        v-model="profilePayload.email">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-6">
                                        <label for="gender" class="form-label">اختيار الجنس</label>
                                        <select class="form-select form-select-lg mb-3" v-model="profilePayload.gender">
                                            <option value="الجنس">الجنس</option>
                                            <option value="ذكر">ذكر</option>
                                            <option value="أنثى">أنثى</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6 mt-3 mt-md-0">
                                        <label for="applicantAge" class="form-label">العمر</label>
                                        <input class="form-control form-control-lg" type="text"
                                        placeholder="اكتب العمر الخاص بك من 18 إلى 60" v-model="profilePayload.applicantAge">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-6">
                                        <label for="bio" class="form-label">نبذة تعريفية</label>
                                        <textarea class="form-control" rows="3" 
                                        v-model="profilePayload.bio"></textarea>
                                    </div>
                                    <div class="col-md-6 mt-3 mt-md-0">
                                        <label for="dOB" class="form-label">تاريخ الميلاد</label>
                                        <input class="form-control form-control-lg" type="date"
                                        v-model="profilePayload.dOB">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-6">
                                        <label for="applicantNat" class="form-label">الجنسية</label>
                                        <select class="form-select form-select-lg" v-model="profilePayload.applicantNat">
                                            <option v-for="(val, index) in helperObj.applicantNats" :key="index" :value="val">{{ val }}</option>
                                        </select>   
                                    </div>
                                    <div class="col-md-6 mt-3 mt-md-0">
                                        <label for="applicantEdu" class="form-label">المرحلة الدراسية</label>
                                    <select class="form-select form-select-lg" v-model="profilePayload.applicantEdu">
                                        <option v-for="(val, index) in helperObj.applicantEdus" :key="index" :value="val">{{ val }}</option>
                                    </select>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="tags" class="form-label">الكلمات المفتاحية</label>
                                    <vue3-tags-input :tags="profilePayload.tags" :select="true" :select-items="selectItems"
                                        @on-select="handleSelectedTag" 
                                        @on-tags-changed="handleChangeTag"
                                        placeholder="أدخل كلمات البحث المفتاحية">
                                        <template #item="{ tag, index }">
                                            {{ tag }}
                                        </template>
                                        <template #no-data>
                                            No Data
                                        </template>
                                        <template #select-item="tag">
                                            {{ tag.text }}
                                        </template>
                                    </vue3-tags-input>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">تحديد مستوى الإنجليزية</label>
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#IELTS"
                                                id="IELTS-tab" type="button" role="tab" aria-controls="home"
                                                aria-selected="true">IELTS</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#TOFEL"
                                                id="TOFEL-tab" type="button" role="tab" aria-controls="TOFEL"
                                                aria-selected="false">TOFEL</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#TOEIC"
                                                type="button" role="tab" aria-controls="TOEIC"
                                                aria-selected="false">TOEIC</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#DUOLINGO"
                                                type="button" role="tab" aria-controls="DUOLINGO"
                                                aria-selected="false">DUOLINGO</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#Step"
                                                type="button" role="tab" aria-controls="Step"
                                                aria-selected="false">Step</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#CEFR"
                                                type="button" role="tab" aria-controls="CEFR"
                                                aria-selected="false">CEFR</button>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade show active p-3" id="IELTS" role="tabpanel"
                                            aria-labelledby="home-tab">
                                            <button type="button" class="btn btn-degree m-2"
                                                v-for="(obj, index) in IELTSDegress" :key="index"
                                                @click="selectIELTSDegree(obj.degree)"
                                                :class="{ 'btn-store': obj.degree == profilePayload.EnglishStandard.IELTSDegree }">{{
                                                    obj.degree }}</button>
                                        </div>
                                        <div class="tab-pane fade p-3" id="TOFEL" role="tabpanel">
                                            <input type="range" class="form-range" min="0" max="120"
                                                v-model="profilePayload.EnglishStandard.TOFELDegree">
                                            <h6 class="ms-2">{{ profilePayload.EnglishStandard.TOFELDegree }}</h6>
                                        </div>
                                        <div class="tab-pane fade p-3" id="TOEIC" role="tabpanel">
                                            <input type="range" class="form-range" min="0" max="990"
                                                v-model="profilePayload.EnglishStandard.TOEICDegree">
                                            <h6 class="ms-2">{{ profilePayload.EnglishStandard.TOEICDegree }}</h6>
                                        </div>
                                        <div class="tab-pane fade p-3" id="DUOLINGO" role="tabpanel">
                                            <input type="range" class="form-range" min="0" max="160"
                                                v-model="profilePayload.EnglishStandard.DUOLINGODegree">
                                            <h6 class="ms-2">{{ profilePayload.EnglishStandard.DUOLINGODegree }}</h6>
                                        </div>
                                        <div class="tab-pane fade p-3" id="Step" role="tabpanel">
                                            <input type="range" class="form-range" min="0" max="100"
                                                v-model="profilePayload.EnglishStandard.stepDegree">
                                            <h6 class="ms-2">{{ profilePayload.EnglishStandard.stepDegree }}</h6>
                                        </div>
                                        <div class="tab-pane fade p-3" id="CEFR" role="tabpanel">
                                            <button type="button" class="btn btn-degree m-2"
                                                v-for="(obj, index) in CEFRDegrees" :key="index"
                                                @click="selectCEFRDegree(obj.degree)"
                                                :class="{ 'btn-store': obj.degree == profilePayload.EnglishStandard.CEFRDegree }">{{
                                                    obj.degree }}</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">تحديد مستوى القدرات العقلية</label>
                                    <ul class="nav nav-tabs" id="otherMyTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#Sat"
                                                id="Sat-tab" type="button" role="tab" aria-controls="Sat"
                                                aria-selected="true">Sat</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#Qudrat"
                                                id="Qudrat-tab" type="button" role="tab" aria-controls="Qudrat"
                                                aria-selected="false">Qudrat</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#GAT" id="GAT-tab"
                                                type="button" role="tab" aria-controls="GAT"
                                                aria-selected="false">GAT</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#act" id="act-tab"
                                                type="button" role="tab" aria-controls="act"
                                                aria-selected="false">act</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#Talent"
                                                id="Talent-tab" type="button" role="tab" aria-controls="Talent"
                                                aria-selected="false">Talent</button>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="myOtherTabContent">
                                        <div class="tab-pane fade show active p-3" id="Sat" role="tabpanel">
                                            <input type="range" class="form-range" min="0" max="1600"
                                                v-model="profilePayload.BrainStandard.Sat">
                                            <h6 class="ms-2">{{ profilePayload.BrainStandard.Sat }}</h6>
                                        </div>
                                        <div class="tab-pane fade p-3" id="Qudrat" role="tabpanel">
                                            <input type="range" class="form-range" min="0" max="100"
                                                v-model="profilePayload.BrainStandard.Qudrat">
                                            <h6 class="ms-2">{{ profilePayload.BrainStandard.Qudrat }}</h6>
                                        </div>
                                        <div class="tab-pane fade p-3" id="GAT" role="tabpanel">
                                            <input type="range" class="form-range" min="0" max="100"
                                                v-model="profilePayload.BrainStandard.GAT">
                                            <h6 class="ms-2">{{ profilePayload.BrainStandard.GAT }}</h6>
                                        </div>
                                        <div class="tab-pane fade p-3" id="act" role="tabpanel">
                                            <input type="range" class="form-range" min="1" max="36"
                                                v-model="profilePayload.BrainStandard.act">
                                            <h6 class="ms-2">{{ profilePayload.BrainStandard.act }}</h6>
                                        </div>
                                        <div class="tab-pane fade p-3" id="Talent" role="tabpanel">
                                            <input type="range" class="form-range" min="0" max="2000"
                                                v-model="profilePayload.BrainStandard.Talent">
                                            <h6 class="ms-2">{{ profilePayload.BrainStandard.Talent }}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">المعدل التراكمي المطلوب</label>
                                    <ul class="nav nav-tabs" id="otherMyTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#SaudiCur"
                                                id="SaudiCur-tab" type="button" role="tab" aria-controls="SaudiCur"
                                                aria-selected="true">المنهج السعودي</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#BritishCur"
                                                id="BritishCur-tab" type="button" role="tab" aria-controls="BritishCur"
                                                aria-selected="false">المنهج البريطاني</button>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="myOtherTabContent">
                                        <div class="tab-pane fade show active p-3" id="SaudiCur" role="tabpanel">
                                            <input type="range" class="form-range" min="0" max="100"
                                                v-model="profilePayload.CurStandard.SaudiCur">
                                            <h6 class="ms-2">{{ profilePayload.CurStandard.SaudiCur }}</h6>
                                        </div>
                                        <div class="tab-pane fade p-3" id="BritishCur" role="tabpanel">
                                            <input type="range" class="form-range" min="0" max="100"
                                                v-model="profilePayload.CurStandard.BritishCur">
                                            <h6 class="ms-2">{{ profilePayload.CurStandard.BritishCur }}</h6>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <button type="button" class="btn-style-one green-color2" @click="editProfile()">
                                        <span v-if="!loading_status" class="fs-5 align-middle"><i
                                                class="ph ph-recycle"></i></span>
                                        <span v-else class="spinner-border spinner-border-sm ms-1" role="status"></span>
                                        <span class="ms-2">تحديث</span>
                                    </button>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="v-pills-security" role="tabpanel"
                                aria-labelledby="v-pills-security-tab" tabindex="0">
                                <h5>تأمين الحساب</h5>
                                <p>قم بتغيير كلمة السر الخاصة بك إذا كنت تظن أن الحساب قد تم اختراقه من قبل أحد المستخدمين
                                </p>
                                <div class="mb-3">
                                    <input class="form-control form-control-lg" type="password"
                                        placeholder="كلمة السر القديمة" aria-label="account-current_password"
                                        v-model="passwordPayload.current_password">
                                </div>
                                <div class="mb-3">
                                    <input class="form-control form-control-lg" type="password"
                                        placeholder="كلمة السر الجديدة" aria-label="account-new_password"
                                        v-model="passwordPayload.new_password">
                                </div>
                                <div class="mb-3">
                                    <input class="form-control form-control-lg" type="password"
                                        placeholder="تأكيد كلمة السر الجديدة" aria-label="account-new_password_confirmation"
                                        v-model="passwordPayload.new_password_confirmation">
                                </div>
                                <div>
                                    <button type="button" class="btn-style-one green-color2" @click="changePassword()">
                                        <span v-if="!loading_status" class="fs-5 align-middle"><i
                                                class="ph ph-recycle"></i></span>
                                        <span v-else class="spinner-border spinner-border-sm ms-1" role="status"></span>
                                        <span class="ms-2">تغيير</span>
                                    </button>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="v-pills-delete" role="tabpanel"
                                aria-labelledby="v-pills-delete-tab" tabindex="0">
                                <h5>حذف الحساب</h5>
                                <p>حذف الحساب يؤدي حذف حسابك نهائيًا من المنصة ولن تتمكن من استعادته مرة أخرى. فكر وتمهل قبل
                                    حذف الحساب</p>
                                <div>
                                    <button type="button" class="btn btn-danger" @click="deleteAccount()">
                                        <span v-if="!loading_status" class="fs-5 align-middle"><i
                                                class="ph ph-trash"></i></span>
                                        <span v-else class="spinner-border spinner-border-sm ms-1" role="status"></span>
                                        <span class="ms-2">حذف</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>

<script>
// Import Methods, Packages, Files
import Vue3TagsInput from 'vue3-tags-input';
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'
export default {
    name: 'Khatat',
    components: {
        Vue3TagsInput
    },
    setup() {
        // Calling, Declarations, Data
        const store = useStore()
        const loading_status = computed(() => store.state.Collection.loading_status);
        const user = computed(() => store.state.Auth.user);
        const isSticky = ref(false);
        const show = ref(false);
        store.dispatch("Auth/GetProfile")
        const selectItems = ref([{ text: 'مسابقات' }, { text: 'مهارات' }, { text: 'ذكاء' }]);
        store.dispatch("Collection/GetHelper")
        const helperObj = computed(() => store.state.Collection.helperObj);
        const AdminLogout = () => {
            store.dispatch("Auth/Logout", { data: null })
        }

        const profilePayload = ref({
            fullname: "",
            email: "",
            gender: "الجنس",
            applicantAge: "",
            dOB: "",
            bio: "",
            tags: [],
            applicantNat: "الجنسية",
            applicantEdu: "المرحلة",
            EnglishStandard: {
                IELTSDegree: '',
                TOFELDegree: '',
                TOEICDegree: '',
                DUOLINGODegree: '',
                stepDegree: '',
                CEFRDegree: '',
            },
            BrainStandard: {
                Sat: '',
                Qudrat: '',
                GAT: '',
                act: '',
                Talent: '',
            },
            CurStandard: {
                SaudiCur: '',
                BritishCur: ''
            }
        })
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
        const CEFRDegrees = ref([
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

        onMounted(() => {
            const that = this;
            window.addEventListener("scroll", () => {
                let scrollPos = window.scrollY;
                if (scrollPos >= 100) {
                    isSticky.value = true;
                } else {
                    isSticky.value = false;
                }
            });
        });

        // Methods
        const goToSection = (sectionName) => {
            const el = document.getElementById(sectionName);
            el.scrollIntoView({ behavior: "smooth" });
        }

        const editProfileSection = () => {
            profilePayload.value.fullname = user.value.fullname;
            profilePayload.value.email = user.value.email;
            profilePayload.value.gender = user.value.gender ? user.value.gender : profilePayload.value.gender;
            profilePayload.value.applicantAge = user.value.applicantAge ? user.value.applicantAge : profilePayload.value.applicantAge;
            profilePayload.value.dOB = user.value.dOB ? user.value.dOB : profilePayload.value.dOB;
            profilePayload.value.bio = user.value.bio ? user.value.bio : profilePayload.value.bio;
            profilePayload.value.tags = user.value.tags ? user.value.tags : profilePayload.value.tags;
            profilePayload.value.applicantNat = user.value.applicantNat ? user.value.applicantNat : profilePayload.value.applicantNat;
            profilePayload.value.applicantEdu = user.value.applicantEdu ? user.value.applicantEdu : profilePayload.value.applicantEdu;
            profilePayload.value.EnglishStandard.CEFRDegree = user.value.EnglishStandard.CEFRDegree ? user.value.EnglishStandard.CEFRDegree : profilePayload.value.EnglishStandard.CEFRDegree;
            profilePayload.value.EnglishStandard.DUOLINGODegree = user.value.EnglishStandard.DUOLINGODegree ? user.value.EnglishStandard.DUOLINGODegree : profilePayload.value.EnglishStandard.DUOLINGODegree;
            profilePayload.value.EnglishStandard.IELTSDegree = user.value.EnglishStandard.IELTSDegree ? user.value.EnglishStandard.IELTSDegree : profilePayload.value.EnglishStandard.IELTSDegree;
            profilePayload.value.EnglishStandard.TOEICDegree = user.value.EnglishStandard.TOEICDegree ? user.value.EnglishStandard.TOEICDegree : profilePayload.value.EnglishStandard.TOEICDegree;
            profilePayload.value.EnglishStandard.TOFELDegree = user.value.EnglishStandard.TOFELDegree ? user.value.EnglishStandard.TOFELDegree : profilePayload.value.EnglishStandard.TOFELDegree;
            profilePayload.value.EnglishStandard.stepDegree = user.value.EnglishStandard.stepDegree ? user.value.EnglishStandard.stepDegree : profilePayload.value.EnglishStandard.stepDegree;
            profilePayload.value.BrainStandard.GAT = user.value.BrainStandard.GAT ? user.value.BrainStandard.GAT : profilePayload.value.BrainStandard.GAT;
            profilePayload.value.BrainStandard.Qudrat = user.value.BrainStandard.Qudrat ? user.value.BrainStandard.Qudrat : profilePayload.value.BrainStandard.Qudrat;
            profilePayload.value.BrainStandard.Sat = user.value.BrainStandard.Sat ? user.value.BrainStandard.Sat : profilePayload.value.BrainStandard.Sat;
            profilePayload.value.BrainStandard.Talent = user.value.BrainStandard.Talent ? user.value.BrainStandard.Talent : profilePayload.value.BrainStandard.Talent;
            profilePayload.value.BrainStandard.act = user.value.BrainStandard.act ? user.value.BrainStandard.act : profilePayload.value.BrainStandard.act;
            profilePayload.value.CurStandard.BritishCur = user.value.CurStandard.BritishCur ? user.value.CurStandard.BritishCur : profilePayload.value.CurStandard.BritishCur;
            profilePayload.value.CurStandard.SaudiCur = user.value.CurStandard.SaudiCur ? user.value.CurStandard.SaudiCur : profilePayload.value.CurStandard.SaudiCur;
        }

        const handleSelectedTag = (tag) => {
            profilePayload.value.tags.push(tag.text);
        }
        const handleChangeTag = (tags) => {
            profilePayload.value.tags = tags;
    }

    const selectIELTSDegree = (degree) => {
             profilePayload.value.EnglishStandard.IELTSDegree = degree;
        }
        const selectCEFRDegree = (degree) => {
            profilePayload.value.EnglishStandard.CEFRDegree = degree;
        }

        // Return
        return {
            helperObj,
            loading_status,
            user,
            goToSection,
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
            editProfileSection,
            selectItems,
            handleSelectedTag,
            handleChangeTag,
            IELTSDegress,
            CEFRDegrees,
            selectIELTSDegree,
            selectCEFRDegree

        }
    }
}
</script>
