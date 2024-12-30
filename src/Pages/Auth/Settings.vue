<template>
    <DashboardLayout>
        <div class="settings container-fluid py-4">
            <div class="container">
                <div class="breadcrumb-auth">
                    <h3 class="fw-bold">إعدادات الحساب</h3>
                    <p>صفحة إعدادات الحساب تتيح لك تفعيل الحساب وتأمينه من خلال تغيير كلمة المرور القديمة إلى كلمة مرور جديدة، بالإضافة إلى إمكانية تعديل أو حذف البيانات الشخصية بكل سهولة. تضمن هذه الصفحة التحكم الكامل بمعلوماتك الشخصية وتعزيز أمان حسابك.</p>
                </div>
                <div class="row mt-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="p-3 bg-white shadow">
                                <h5 class="fw-bold">تفعيل الحساب</h5>
                                <p class="mb-3">برجاء قم بإدخال الكود الذي تم إرساله إلى البريد الإلكتروني الخاص بك لكي تقوم بتفعيل
                                    الحساب وإن لم تجده في بريدك الإلكتروني أو صلاحيته قد انتهت يمكنك إعادة إرسال الكود مرة
                                    أخرى</p>
                                <div class="mb-3">
                                    <input class="form-control form-control-lg" type="text" placeholder="برجاء كتابة الكود"
                                        aria-label="account-activation" v-model="codePayload.code">
                                </div>
                                <div>
                                    <button type="button" class="btn btn-primary" @click="submitCode()"
                                        :disabled="user && user.is_verified">
                                        <span>تفعيل <i class="bi bi-arrow-clockwise"></i></span>
                                    </button>
                                    <button type="button" class="btn btn-primary ms-2" @click="resendCode()"
                                        :disabled="user && user.is_verified">
                                        <span>الإرسال <i class="bi bi-send"></i></span>
                                    </button>
                                </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
                        <div class="p-3 bg-white shadow">
                                <h5 class="fw-bold">تأمين الحساب</h5>
                                <p class="mb-3">قم بتغيير كلمة السر الخاصة بك إذا كنت تظن أن الحساب قد تم اختراقه من قبل أحد المستخدمين
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
                                    <button type="button" class="btn btn-primary" @click="changePassword()">
                                        <span>تغيير <i class="bi bi-arrow-clockwise"></i></span>
                                    </button>
                                </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-12 mt-4 mt-lg-0">
                        <div class="p-3 bg-white shadow">
                            <h5 class="fw-bold">حذف الحساب</h5>
                                <p class="mb-3">حذف الحساب يؤدي حذف حسابك نهائيًا من المنصة ولن تتمكن من استعادته مرة أخرى. فكر وتمهل قبل
                                    حذف الحساب</p>
                                <div>
                                    <button type="button" class="btn btn-danger" @click="deleteAccount()">
                                        <span>حذف <i class="bi bi-trash"></i></span>
                                    </button>
                                </div>
                        </div>
                    </div>
                    <!-- <div class="col-12 mt-4">
                        <div class="p-3 bg-white shadow">
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
                                        <label for="first_name" class="form-label">الاسم الأول</label>
                                        <input class="form-control form-control-lg" type="text"
                                            v-model="profilePayload.first_name">
                                    </div>
                                    <div class="col-md-6">
                                        <label for="last_name" class="form-label">الاسم الأخير</label>
                                        <input class="form-control form-control-lg" type="text"
                                            v-model="profilePayload.last_name">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-6">
                                        <label for="email" class="form-label">البريد الإلكتروني</label>
                                        <input class="form-control form-control-lg" type="text" 
                                        v-model="profilePayload.email">
                                    </div>
                                    <div class="col-md-6 mt-3 mt-md-0">
                                        <label for="phone" class="form-label">رقم الهاتف</label>
                                        <input class="form-control form-control-lg" type="text" 
                                        v-model="profilePayload.phone">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-6 mt-3 mt-md-0">
                                        <label for="dOB" class="form-label">تاريخ الميلاد</label>
                                        <input class="form-control form-control-lg text-start" type="date"
                                        v-model="profilePayload.DOB">
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
                                                aria-selected="false">STEP</button>
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
                                                aria-selected="true">SAT</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#Qudrat"
                                                id="Qudrat-tab" type="button" role="tab" aria-controls="Qudrat"
                                                aria-selected="false">قدرات</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#GAT" id="GAT-tab"
                                                type="button" role="tab" aria-controls="GAT"
                                                aria-selected="false">GAT</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#act" id="act-tab"
                                                type="button" role="tab" aria-controls="act"
                                                aria-selected="false">ACT</button>
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
                                <div>
                                    <button type="button" class="btn btn-primary" @click="editProfile()">
                                        <span v-if="!loading_status" class="fs-5 align-middle"><i
                                                class="ph ph-recycle"></i></span>
                                        <span v-else class="spinner-border spinner-border-sm ms-1" role="status"></span>
                                        <span class="ms-2">تحديث</span>
                                    </button>
                                </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </DashboardLayout>
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
        // const loading_status = computed(() => store.state.Collection.loading_status);
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
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            applicantGender: "",
            applicantAge: "",
            applicantEdu: "",
            DOB: "",
            saudiresiding: true,
            saudiCity: "الرياض",
            tookEnglishTest: false,
            tookBrainTest: false,
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
                AchievementTest: '',
                SAAT: ''
            },
            interests: [],
            Subinterests: [],
        });
        profilePayload.value = user.value;
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
     
      
       

    const selectIELTSDegree = (degree) => {
             profilePayload.value.EnglishStandard.IELTSDegree = degree;
        }
        const selectCEFRDegree = (degree) => {
            profilePayload.value.EnglishStandard.CEFRDegree = degree;
        }

        // Return
        return {
            helperObj,
            user,
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
            CEFRDegrees,
            selectIELTSDegree,
            selectCEFRDegree

        }
    }
}
</script>
