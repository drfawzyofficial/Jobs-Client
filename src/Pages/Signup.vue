<template>
    <div class="Signup container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="form-box customer_signup" id="customer_signup">
                        <h4 class="text-center fw-bold mb-3">التسجيل</h4>
                        <p class="info text-center mb-3">في البداية ودنا نعرف أكثر عنك لكي نقوم بخدمتك بأفضل طريقة ممكنة
                        </p>
                        <div class="personal-info mb-3">
                            <label class="form-label text-danger">المعلومات الشخصية*</label>
                            <div class="mb-3">
                                <input type="text" class="form-control form-control-lg" placeholder="الاسم كامل"
                                    required v-model="signupPayload.fullname">
                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control form-control-lg" placeholder="البريد الإلكتروني"
                                    required v-model="signupPayload.email">
                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control form-control-lg" placeholder="رقم الهاتف"
                                    required v-model="signupPayload.phone">
                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control form-control-lg" placeholder="كلمة المرور"
                                    required v-model="signupPayload.password">
                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control form-control-lg"
                                    placeholder="تأكيد كلمة المرور" required
                                    v-model="signupPayload.password_confirmation">
                            </div>
                            <select class="form-select form-select-lg" v-model="signupPayload.nationality">
                                <option v-for="(nationality, index) in nationalities" :key="index" :value="nationality">
                                    {{ nationality }}
                                </option>
                            </select>
                        </div>
                        <div class="academic-information mb-3">
                            <div class="mb-3">
                                <label class="form-label text-danger">تحديد مستوى الإنجليزية*</label>
                                <ul class="nav nav-tabs mt-2" id="myTab" role="tablist">
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
                                            :class="{ 'btn-selected': obj.degree == signupPayload.EnglishStandard.IELTSDegree }">{{
                                                obj.degree }}</button>
                                    </div>
                                    <div class="tab-pane fade p-3" id="TOFEL" role="tabpanel">
                                        <input type="range" class="form-range" min="0" max="120"
                                            v-model="signupPayload.EnglishStandard.TOFELDegree">
                                        <h6 class="ms-2">{{ signupPayload.EnglishStandard.TOFELDegree }}</h6>
                                    </div>
                                    <div class="tab-pane fade p-3" id="TOEIC" role="tabpanel">
                                        <input type="range" class="form-range" min="0" max="990"
                                            v-model="signupPayload.EnglishStandard.TOEICDegree">
                                        <h6 class="ms-2">{{ signupPayload.EnglishStandard.TOEICDegree }}</h6>
                                    </div>
                                    <div class="tab-pane fade p-3" id="DUOLINGO" role="tabpanel">
                                        <input type="range" class="form-range" min="0" max="160"
                                            v-model="signupPayload.EnglishStandard.DUOLINGODegree">
                                        <h6 class="ms-2">{{ signupPayload.EnglishStandard.DUOLINGODegree }}</h6>
                                    </div>
                                    <div class="tab-pane fade p-3" id="Step" role="tabpanel">
                                        <input type="range" class="form-range" min="0" max="100"
                                            v-model="signupPayload.EnglishStandard.stepDegree">
                                        <h6 class="ms-2">{{ signupPayload.EnglishStandard.stepDegree }}</h6>
                                    </div>
                                    <div class="tab-pane fade p-3" id="CEFR" role="tabpanel">
                                        <button type="button" class="btn btn-degree m-2"
                                            v-for="(obj, index) in CEFRDegrees" :key="index"
                                            @click="selectCEFRDegree(obj.degree)"
                                            :class="{ 'btn-selected': obj.degree == signupPayload.EnglishStandard.CEFRDegree }">{{
                                                obj.degree }}</button>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label text-danger">تحديد مستوى القدرات العقلية*</label>
                                <ul class="nav nav-tabs mt-2" id="otherMyTab" role="tablist">
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
                                            v-model="signupPayload.BrainStandard.Sat">
                                        <h6 class="ms-2">{{ signupPayload.BrainStandard.Sat }}</h6>
                                    </div>
                                    <div class="tab-pane fade p-3" id="Qudrat" role="tabpanel">
                                        <input type="range" class="form-range" min="0" max="100"
                                            v-model="signupPayload.BrainStandard.Qudrat">
                                        <h6 class="ms-2">{{ signupPayload.BrainStandard.Qudrat }}</h6>
                                    </div>
                                    <div class="tab-pane fade p-3" id="GAT" role="tabpanel">
                                        <input type="range" class="form-range" min="0" max="100"
                                            v-model="signupPayload.BrainStandard.GAT">
                                        <h6 class="ms-2">{{ signupPayload.BrainStandard.GAT }}</h6>
                                    </div>
                                    <div class="tab-pane fade p-3" id="act" role="tabpanel">
                                        <input type="range" class="form-range" min="1" max="36"
                                            v-model="signupPayload.BrainStandard.act">
                                        <h6 class="ms-2">{{ signupPayload.BrainStandard.act }}</h6>
                                    </div>
                                    <div class="tab-pane fade p-3" id="Talent" role="tabpanel">
                                        <input type="range" class="form-range" min="0" max="2000"
                                            v-model="signupPayload.BrainStandard.Talent">
                                        <h6 class="ms-2">{{ signupPayload.BrainStandard.Talent }}</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label class="form-label text-danger">المعدل التراكمي المطلوب*</label>
                                <ul class="nav nav-tabs mt-2" id="otherMyTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#SaudiCur"
                                            id="SaudiCur-tab" type="button" role="tab" aria-controls="SaudiCur"
                                            aria-selected="true">المنهج
                                            السعودي</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#BritishCur"
                                            id="BritishCur-tab" type="button" role="tab" aria-controls="BritishCur"
                                            aria-selected="false">المنهج
                                            البريطاني</button>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myOtherTabContent">
                                    <div class="tab-pane fade show active p-3" id="SaudiCur" role="tabpanel">
                                        <input type="range" class="form-range" min="0" max="100"
                                            v-model="signupPayload.CurStandard.SaudiCur">
                                        <h6 class="ms-2">{{ signupPayload.CurStandard.SaudiCur }}</h6>
                                    </div>
                                    <div class="tab-pane fade p-3" id="BritishCur" role="tabpanel">
                                        <input type="range" class="form-range" min="0" max="100"
                                            v-model="signupPayload.CurStandard.BritishCur">
                                        <h6 class="ms-2">{{ signupPayload.CurStandard.BritishCur }}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="interests mb-3">
                            <label class="form-label text-danger">التصنيفات الأساسية*</label>
                            <div class="choose-interest">
                                <button type="button" class="btn btn-interest m-2" v-for="(interest, index) in jobCategories"
                                    :key="index" @click="selectInterest(interest)"
                                    :class="{ 'btn-selected': selectedInterests.includes(interest) }">{{
                                        interest }}
                                </button>
                            </div>
                        </div>
                        <div class="submit text-center">
                            <button type="submit" class="btn btn-primary" @click="onSignup()">
                                <span class="text">تسجيل الحساب</span>
                                <span v-if="!loading_status" class="ms-1"><i class="bi bi-send"></i></span>
                                <span v-else class="spinner-border spinner-border-sm ms-1" role="status"></span>
                            </button>
                        </div>
                        <div class="create_new_account text-center mt-3">
                            <router-link class="store-animation-anchor fw-medium" to="/account/login">لديك
                                حساب؟</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Import Methods, Packages, Files
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
export default {
    name: 'Signup',
    components: {
    },
    setup() {

        // Calling, Declarations, Data
        const store = useStore()
        const loading_status = computed(() => store.state.Collection.loading_status);
        const signupPayload = ref({
            fullname: "",
            email: "",
            phone: "",
            password: "",
            password_confirmation: "",
            nationality: "اختر الجنسية",
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
            },
            interests: []
        });
        store.dispatch("Collection/GetHelper")
         // Get the helperObj as a computed property from the store
        const helperObj = computed(() => store.state.Collection.helperObj);

        // Get jobCategories from helperObj as a computed property
        const selectedJobCategories = computed(() => helperObj.value.jobCategories || []);

        // Filter out "التصنيف" from the jobCategories
        const jobCategories = computed(() => {
        return selectedJobCategories.value.filter(item => item !== 'التصنيف');
        });

        const nationalities = ref([
            'اختر الجنسية', 'أفغاني', 'ألباني', 'جزائري', 'أمريكي', 'أندوري', 'أنغولي', 'أنتيغوي', 'أرجنتيني',
            'أرميني', 'أسترالي', 'نمساوي', 'أذربيجاني', 'باهاماسي', 'بحريني', 'بنغلاديشي',
            'باربادوسي', 'بيلاروسي', 'بلجيكي', 'بليزي', 'بنين', 'بوتاني', 'بوليفي', 'بوسني',
            'برازيلي', 'بريطاني', 'بلغاري', 'بوركيني', 'بورمي', 'بوروندي', 'كمبودي', 'كاميروني',
            'كندي', 'كاب فيردي', 'تشادي', 'تشيلي', 'صيني', 'كولومبي', 'كوموري', 'كوستاريكي',
            'كرواتي', 'كوبي', 'قبرصي', 'تشيكي', 'كونغولي', 'دنماركي', 'جيبوتي', 'دومينيكي',
            'إكوادوري', 'مصري', 'إماراتي', 'غيني استوائي', 'إريتري', 'إستوني', 'إثيوبي', 'فنلندي',
            'فرنسي', 'غابوني', 'غامبي', 'جورجي', 'ألماني', 'غاني', 'يوناني', 'غرينادي', 'غواتيمالي',
            'غيني', 'غوياني', 'هايتي', 'هندوراسي', 'هنغاري', 'آيسلندي', 'هندي', 'إندونيسي', 'إيراني',
            'عراقي', 'إيرلندي', 'فلسطيني', 'إيطالي', 'جامايكي', 'ياباني', 'أردني', 'كازاخستاني',
            'كيني', 'كيريباتي', 'كوري', 'كويتي', 'قرغيزستاني', 'لاوسي', 'لاتفي', 'لبناني', 'ليبي',
            'ليتواني', 'لوكسمبورغي', 'مدغشقري', 'مالاوي', 'ماليزي', 'مالديفي', 'مالي', 'مالطي',
            'ماوريتاني', 'مكسيكي', 'مولدوفي', 'موناكوي', 'منغولي', 'مغربي', 'موزمبيقي', 'ناميبي',
            'نيبالي', 'هولندي', 'نيوزيلندي', 'نيجيري', 'نيكاراغوي', 'نيجيري', 'نرويجي', 'عماني',
            'باكستاني', 'بنمي', 'بابواني', 'باراغوي', 'بيروفي', 'فلبيني', 'بولندي', 'برتغالي',
            'قطري', 'روماني', 'روسي', 'رواندي', 'سانت لوسي', 'سلفادوري', 'ساموائي', 'سعودي',
            'سنغالي', 'صربي', 'سيشلي', 'سنغافوري', 'سلوفاكي', 'سلوفيني', 'سومالي', 'جنوب أفريقي',
            'إسباني', 'سريلانكي', 'سوداني', 'سورينامي', 'سوازيلندي', 'سويدي', 'سويسري', 'سوري',
            'تايواني', 'طاجيكستاني', 'تنزاني', 'تايلاندي', 'توغولي', 'تونسي', 'تركي', 'تركماني',
            'توفالي', 'أوغندي', 'أوكراني', 'أوروغواي', 'أوزبكستاني', 'فانواتي', 'فنزويلي', 'فيتنامي',
            'يمني', 'زامبي', 'زيمبابوي'
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
        const interests = ref(["مسابقات", "برامج", "مهارات"])
        const selectedInterests = ref([]);

       // Methods
        const onSignup = () => {
            signupPayload.value.interests = selectedInterests.value;
            console.log(signupPayload.value);
            // store.dispatch('Auth/Signup', signupPayload.value);
        };

        const selectIELTSDegree = (degree) => {
            signupPayload.value.EnglishStandard.IELTSDegree = degree;
        };

        const selectCEFRDegree = (degree) => {
            signupPayload.value.EnglishStandard.CEFRDegree = degree;
        };

        const selectInterest = (interest) => {
        if (selectedInterests.value.includes(interest)) {
            selectedInterests.value = selectedInterests.value.filter((item) => item !== interest);
        } else {
            selectedInterests.value.push(interest);
        }
        };

        // Return
        return {
            loading_status,
            signupPayload,
            nationalities,
            IELTSDegress,
            CEFRDegrees,
            selectIELTSDegree,
            selectCEFRDegree,
            interests,
            selectedInterests,
            selectInterest,
            jobCategories,
            onSignup,
        }
    }
}
</script>

<style scoped>
@import '../assets/css/account.css';

.Signup {
    padding: 52px 0;
}

.btn-degree {
    height: 40px;
    width: 40px;
    background-color: #DEF2F1;
    border: 1px solid #3aafa9;
    transition: all 0.3s ease-in-out;
}

.btn-interest{
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
</style>