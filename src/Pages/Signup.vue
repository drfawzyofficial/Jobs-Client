<template>
    <Layout>
        <div class="Signup container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="form-box customer_signup" id="customer_signup">
                            <h4 class="text-center fw-bold mb-3">التسجيل</h4>
                            <p class="info text-center mb-3">في البداية ودنا نعرف أكثر عنك عشان نقدر نخدمك بأفضل طريقة
                                ممكنة</p>
                            <form-wizard color="#2B7A7B" shape="circle" @on-complete="onSignup" nextButtonText="التالي"
                                backButtonText="السابق" finishButtonText="إرسال">
                                <tab-content title="المعلومات الشخصية" :beforeChange="validateStep">
                                    <div class="personal-info">
                                        <div class="row mb-3">
                                            <div class="col-md-6">
                                                <div>
                                                    <input type="text" class="form-control form-control-lg"
                                                        placeholder="الاسم الأول*" required
                                                        v-model="signupPayload.first_name">
                                                    <div id="first_name_help" class="form-text">
                                                        الاسم الأول يبدأ من 3 أحرف
                                                    </div>
                                                </div>
                                                <div v-if="errors.first_name"><span style="color: red">{{
                                                    errors.first_name }}</span></div>
                                            </div>
                                            <div class="col-md-6 mt-3 mt-md-0">
                                                <div>
                                                    <input type="text" class="form-control form-control-lg"
                                                        placeholder="الاسم الأخير*" required
                                                        v-model="signupPayload.last_name">
                                                    <div id="last_name_help" class="form-text">
                                                        الاسم الأخير يبدأ من 3 أحرف
                                                    </div>
                                                </div>
                                                <div v-if="errors.last_name"><span style="color: red">{{
                                                    errors.last_name }}</span></div>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <input type="email" class="form-control form-control-lg"
                                                placeholder="البريد الإلكتروني*" required v-model="signupPayload.email">
                                            <div id="email_help" class="form-text">
                                                    مثل الصيغة: email@gmail.com
                                            </div>
                                            <div v-if="errors.email"><span style="color: red">{{
                                                errors.email }}</span></div>
                                        </div>
                                        <div class="mb-3">
                                            <input type="text" class="form-control form-control-lg"
                                                placeholder="رقم الهاتف" required v-model="signupPayload.phone">
                                            <div id="email_help" class="form-text">
                                                    مثل الصيغة: 05xxxxxxxx
                                            </div>
                                            <div v-if="errors.phone"><span style="color: red">{{
                                                errors.phone }}</span></div>
                                        </div>
                                        <div class="mb-3">
                                            <input type="password" class="form-control form-control-lg"
                                                placeholder="كلمة المرور*" required v-model="signupPayload.password">
                                            <div id="password_help" class="form-text">
                                                يجب أن تتكون كلمة المرور من 6 أحرف على الأقل وتحتوي على حرف كبير وحرف صغير ورقم
                                            </div>
                                            <div v-if="errors.password"><span style="color: red">{{
                                                errors.password }}</span></div>
                                        </div>
                                        <div class="mb-3">
                                            <input type="password" class="form-control form-control-lg"
                                                placeholder="تأكيد كلمة المرور*" required
                                                v-model="signupPayload.password_confirmation">
                                            <div v-if="errors.password_confirmation"><span style="color: red">{{
                                                errors.password_confirmation }}</span></div>
                                        </div>
                                        <div class="mb-3">
                                            <select class="form-select form-select-lg"
                                                v-model="signupPayload.applicantGender">
                                                <option value="none">الجنس</option>
                                                <option value="ذكر">ذكر</option>
                                                <option value="أنثى">أنثى</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label for="DOB" class="form-label">تاريخ الميلاد</label>
                                            <input class="form-control form-control-lg" type="date"
                                                v-model="signupPayload.DOB">
                                        </div>
                                        <div class="mb-3">
                                            <select class="form-select form-select-lg"
                                                v-model="signupPayload.applicantEdu">
                                                <option value="none">المرحلة التعليمية</option>
                                                <option v-for="(val, index) in helperObj.applicantEdus" :key="index"
                                                    :value="val">{{ val }}</option>
                                            </select>
                                        </div>
                                        <!-- <div class="mb-3">
                                            <label class="form-label">الجنسية</label>
                                            <select class="form-select form-select-lg" v-model="signupPayload.nationality">
                                                <option v-for="(val, index) in nationalities" :key="index"
                                                    :value="val">{{ val }}</option>
                                            </select>
                                        </div> -->
                                        <!-- Checkbox to ask if the user took the English test -->
                                        <div class="mb-3 d-block d-sm-flex align-items-center">
                                            <label class="form-label">
                                                هل أنت سعودي/ة الجنسية؟
                                            </label>
                                            <div class="form-check ms-3">
                                                <input type="radio" name="nationality" class="form-check-input"
                                                    id="saudinationalityYes" @change="toggleSaudiNationality(true)"
                                                    :checked="signupPayload.saudinationality === true" />
                                                <label class="form-label" for="saudinationalityYes">
                                                    نعم
                                                </label>
                                            </div>
                                            <div class="form-check ms-3">
                                                <input type="radio" name="nationality" class="form-check-input"
                                                    id="saudinationalityNo" @change="toggleSaudiNationality(false)"
                                                    :checked="signupPayload.saudinationality === false" />
                                                <label class="form-label" for="saudinationalityNo">
                                                    لا
                                                </label>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <select class="form-select form-select-lg"
                                                v-model="signupPayload.saudiCity">
                                                <option value="none">مقر الإقامة</option>
                                                <option v-for="(nationality, index) in saudiCities" :key="index"
                                                    :value="nationality">
                                                    {{ nationality }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="interests mb-3">
                                            <label class="form-label">ما نوع الفرص التي تبحث عنها؟ ( اختر 3 على
                                                الأقل )</label>
                                            <div v-if="errors.interests"><span style="color: red">{{
                                                errors.interests }}</span></div>
                                            <div class="choose-interest">
                                                <button type="button" class="btn btn-interest m-1"
                                                    v-for="(interest, index) in helperObj.chanceCategories" :key="index"
                                                    @click="selectInterest(interest)"
                                                    :class="{ 'btn-selected': signupPayload.interests.includes(interest) }">{{
                                                        interest }}
                                                </button>
                                            </div>
                                        </div>
                                        <div class="interests">
                                            <label class="form-label">حدد مجالات اهتمامك بالترتيب ( اختر 3 على
                                                الأقل )</label>
                                            <div v-if="errors.Subinterests"><span style="color: red">{{
                                                errors.Subinterests }}</span></div>
                                            <div class="choose-interest">
                                                <button type="button" class="btn btn-interest m-1"
                                                    v-for="(interest, index) in helperObj.chanceSubcategories"
                                                    :key="index" @click="selectSubInterest(interest)"
                                                    :class="{ 'btn-selected': signupPayload.Subinterests.includes(interest) }">{{
                                                        interest }}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </tab-content>
                                <tab-content title="مستوى اللغة الإنجليزية">
                                    <div class="english-test">
                                        <div class="mb-3">
                                            <!-- Checkbox to ask if the user took the English test -->
                                            <div class="form-check mb-3">
                                                <input type="checkbox" class="form-check-input" id="englishTestCheckbox"
                                                    v-model="signupPayload.tookEnglishTest" />
                                                <label class="form-label" for="englishTestCheckbox">
                                                    هل سبق لك وأخذت أحد اختبارات اللغة الإنجليزية الآتية:
                                                    (STEP, DOULINGO, IELTS, CEFR, TOEIC, TOEFL)؟
                                                </label>
                                            </div>
                                            <ul v-if="signupPayload.tookEnglishTest" class="nav nav-tabs mt-2"
                                                id="myTab" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link active" data-bs-toggle="tab"
                                                        data-bs-target="#IELTS" id="IELTS-tab" type="button" role="tab"
                                                        aria-controls="home" aria-selected="true">IELTS</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" data-bs-toggle="tab"
                                                        data-bs-target="#TOEFL" id="TOEFL-tab" type="button" role="tab"
                                                        aria-controls="TOEFL" aria-selected="false">TOEFL</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" data-bs-toggle="tab"
                                                        data-bs-target="#TOEIC" type="button" role="tab"
                                                        aria-controls="TOEIC" aria-selected="false">TOEIC</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" data-bs-toggle="tab"
                                                        data-bs-target="#DUOLINGO" type="button" role="tab"
                                                        aria-controls="DUOLINGO" aria-selected="false">DUOLINGO</button>
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
                                            <div v-if="signupPayload.tookEnglishTest" class="tab-content"
                                                id="myTabContent">
                                                <div class="tab-pane fade show active p-3" id="IELTS" role="tabpanel"
                                                    aria-labelledby="home-tab">
                                                    <button type="button" class="btn btn-degree m-1"
                                                        v-for="(obj, index) in IELTSDegress" :key="index"
                                                        @click="selectIELTS(obj.degree)"
                                                        :class="{ 'btn-selected': obj.degree == signupPayload.EnglishStandard.IELTS }">{{
                                                            obj.degree }}</button>
                                                </div>
                                                <div class="tab-pane fade p-3" id="TOEFL" role="tabpanel">
                                                    <input type="text" class="form-control form-control-lg"
                                                    placeholder="الدرجة بين 0 و120"
                                                    v-model="signupPayload.EnglishStandard.TOEFL">
                                                </div>
                                                <div class="tab-pane fade p-3" id="TOEIC" role="tabpanel">
                                                    <input type="text" class="form-control form-control-lg"
                                                    placeholder="الدرجة بين 0 و990"
                                                    v-model="signupPayload.EnglishStandard.TOEIC">
                                                </div>
                                                <div class="tab-pane fade p-3" id="DUOLINGO" role="tabpanel">
                                                    <input type="text" class="form-control form-control-lg"
                                                    placeholder="الدرجة بين 0 و160"
                                                    v-model="signupPayload.EnglishStandard.DUOLINGO">
                                                </div>
                                                <div class="tab-pane fade p-3" id="Step" role="tabpanel">
                                                    <input type="text" class="form-control form-control-lg"
                                                    placeholder="الدرجة بين 0 و100"
                                                    v-model="signupPayload.EnglishStandard.STEP">
                                                </div>
                                                <div class="tab-pane fade p-3" id="CEFR" role="tabpanel">
                                                    <button type="button" class="btn btn-degree m-1"
                                                        v-for="(obj, index) in CEFRs" :key="index"
                                                        @click="selectCEFR(obj.degree)"
                                                        :class="{ 'btn-selected': obj.degree == signupPayload.EnglishStandard.CEFR }">{{
                                                            obj.degree }}</button>
                                                </div>
                                            </div>
                                            <div v-if="signupPayload.tookEnglishTest">
                                                <button type="button" class="btn btn-primary"
                                                    @click="resetEnglishStandard()">
                                                    <span class="word">إعادة التعيين</span>
                                                    <!-- <span class="material-symbols-outlined align-middle ms-1">
                                                    check
                                                </span> -->
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </tab-content>
                                <tab-content title="اختبارات مقاييس القدرات العقلية">
                                    <div class="brain-test">
                                        <!-- Checkbox to ask if the user took the Brain test -->
                                        <div class="form-check mb-3">
                                            <input type="checkbox" class="form-check-input" id="englishTestCheckbox"
                                                v-model="signupPayload.tookBrainTest" />
                                            <label class="form-label" for="englishTestCheckbox">
                                                هل سبق لك وأخذت أحد اختبارات القدرات العقلية الآتية: (قدرات, تحصيلي,
                                                مقياس موهبة) (SAAT, GAT, ACT, SAT)؟
                                            </label>
                                        </div>
                                        <ul v-if="signupPayload.tookBrainTest" class="nav nav-tabs mt-2" id="otherMyTab"
                                            role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" data-bs-toggle="tab"
                                                    data-bs-target="#SAT" id="SAT-tab" type="button" role="tab"
                                                    aria-controls="SAT" aria-selected="true">SAT</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#Qudrat"
                                                    id="Qudrat-tab" type="button" role="tab" aria-controls="Qudrat"
                                                    aria-selected="false">قدرات</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#GAT"
                                                    id="GAT-tab" type="button" role="tab" aria-controls="GAT"
                                                    aria-selected="false">GAT</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#ACT"
                                                    id="ACT-tab" type="button" role="tab" aria-controls="ACT"
                                                    aria-selected="false">ACT</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#Talent"
                                                    id="Talent-tab" type="button" role="tab" aria-controls="Talent"
                                                    aria-selected="false">مقياس موهبة</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" data-bs-toggle="tab"
                                                    data-bs-target="#AchivementTest" id="AchivementTest-tab"
                                                    type="button" role="tab" aria-controls="AchivementTest"
                                                    aria-selected="false">التحصيل المعرفي</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#SAAT"
                                                    id="SAAT-tab" type="button" role="tab" aria-controls="SAAT"
                                                    aria-selected="false">SAAT</button>
                                            </li>
                                        </ul>
                                        <div v-if="signupPayload.tookBrainTest" class="tab-content"
                                            id="myOtherTabContent">
                                            <div class="tab-pane fade show active p-3" id="SAT" role="tabpanel">
                                                <input type="text" class="form-control form-control-lg"
                                                    placeholder="الدرجة بين 0 و1600"
                                                    v-model="signupPayload.BrainStandard.SAT">
                                            </div>
                                            <div class="tab-pane fade p-3" id="Qudrat" role="tabpanel">
                                                <input type="text" class="form-control form-control-lg"
                                                    placeholder="الدرجة بين 0 و100"
                                                    v-model="signupPayload.BrainStandard.Qudrat">
                                            </div>
                                            <div class="tab-pane fade p-3" id="GAT" role="tabpanel">
                                                <input type="text" class="form-control form-control-lg"
                                                    placeholder="الدرجة بين 0 و100"
                                                    v-model="signupPayload.BrainStandard.GAT">
                                            </div>
                                            <div class="tab-pane fade p-3" id="ACT" role="tabpanel">
                                                <input type="text" class="form-control form-control-lg"
                                                    placeholder="الدرجة بين 0 و36"
                                                    v-model="signupPayload.BrainStandard.ACT">
                                            </div>
                                            <div class="tab-pane fade p-3" id="Talent" role="tabpanel">
                                                <input type="text" class="form-control form-control-lg"
                                                    placeholder="الدرجة بين 0 و2000"
                                                    v-model="signupPayload.BrainStandard.Talent">
                                            </div>
                                            <div class="tab-pane fade p-3" id="AchivementTest" role="tabpanel">
                                                <input type="text" class="form-control form-control-lg"
                                                    placeholder="الدرجة بين 0 و100"
                                                    v-model="signupPayload.BrainStandard.AchivementTest">
                                            </div>
                                            <div class="tab-pane fade p-3" id="SAAT" role="tabpanel">
                                                <input type="text" class="form-control form-control-lg"
                                                    placeholder="الدرجة بين 0 و100"
                                                    v-model="signupPayload.BrainStandard.SAAT">
                                            </div>
                                        </div>
                                        <div v-if="signupPayload.tookBrainTest">
                                            <button type="button" class="btn btn-primary" @click="resetBrainStandard()">
                                                <span class="word">إعادة التعيين</span>
                                                <!-- <span class="material-symbols-outlined align-middle ms-1">
                                                    check
                                                </span> -->
                                            </button>
                                        </div>
                                    </div>
                                </tab-content>
                                <tab-content title="الموافقة">
                                    <div class="accept-conditions">
                                        <div class="form-check mb-3">
                                            <input type="checkbox" class="form-check-input" id="acceptConditions"
                                                v-model="signupPayload.acceptConditions" />
                                            <label class="form-label" for="acceptConditions">
                                                أوافق على <router-link class="accept-condition" to="/pages/terms">الشروط
                                                    والأحكام</router-link> و<router-link class="accept-condition"
                                                    to="/pages/privacy">سياسة الخصوصية</router-link> لمنصة خطط.*
                                            </label>
                                        </div>
                                        <div class="form-check mb-3">
                                            <input type="checkbox" class="form-check-input" id="enable_notifications"
                                                v-model="signupPayload.enable_notifications" />
                                            <label class="form-label" for="enable_notifications">
                                                أوافق على تلقي الإشعارات من منصة خطط عند إضافة فرص جديدة، ويمكنني
                                                إلغاؤها في أي وقت لاحقًا.
                                            </label>
                                        </div>
                                    </div>
                                </tab-content>
                            </form-wizard>
                            <div class="create_new_account text-center mt-3">
                                <router-link class="store-animation-anchor fw-medium" to="/account/login">لديك
                                    حساب؟</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
// Import Methods, Packages, Files
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
//local registration
import { FormWizard, TabContent } from 'vue3-form-wizard'
import 'vue3-form-wizard/dist/style.css'
import { isMinLength, matchesRegex, isConfirmed, isMinArrayLength } from "../assets/utils/util";
export default {
    name: 'Signup',
    components: {
        FormWizard,
        TabContent
    },
    setup() {

        // Calling, Declarations, Data
        const store = useStore()
        const loading_status = computed(() => store.state.Collection.loading_status);
        const signupPayload = ref({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            password: "",
            password_confirmation: "",
            applicantGender: 'none',
            applicantEdu: "none",
            DOB: "",
            saudinationality: true,
            saudiCity: "none",
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
            acceptConditions: false,
            enable_notifications: false,
        });
        const errors = ref({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            password: "",
            password_confirmation: "",
            interests: "",
            Subinterests: ""
        });

        store.dispatch("Collection/GetHelper")
        // Get the helperObj as a computed property from the store
        const helperObj = computed(() => store.state.Collection.helperObj);

        console.log(helperObj.value);


        // Get jobCategories from helperObj as a computed property
        const selectedJobCategories = computed(() => helperObj.value.jobCategories || []);

        // Filter out "التصنيف" from the jobCategories
        const jobCategories = computed(() => {
            return selectedJobCategories.value.filter(item => item !== 'التصنيف');
        });
        // const nationalities = ref([
        //    "سعودي", 'أفغاني', 'ألباني', 'جزائري', 'أمريكي', 'أندوري', 'أنغولي', 'أنتيغوي', 'أرجنتيني',
        //     'أرميني', 'أسترالي', 'نمساوي', 'أذربيجاني', 'باهاماسي', 'بحريني', 'بنغلاديشي',
        //     'باربادوسي', 'بيلاروسي', 'بلجيكي', 'بليزي', 'بنين', 'بوتاني', 'بوليفي', 'بوسني',
        //     'برازيلي', 'بريطاني', 'بلغاري', 'بوركيني', 'بورمي', 'بوروندي', 'كمبودي', 'كاميروني',
        //     'كندي', 'كاب فيردي', 'تشادي', 'تشيلي', 'صيني', 'كولومبي', 'كوموري', 'كوستاريكي',
        //     'كرواتي', 'كوبي', 'قبرصي', 'تشيكي', 'كونغولي', 'دنماركي', 'جيبوتي', 'دومينيكي',
        //     'إكوادوري', 'مصري', 'إماراتي', 'غيني استوائي', 'إريتري', 'إستوني', 'إثيوبي', 'فنلندي',
        //     'فرنسي', 'غابوني', 'غامبي', 'جورجي', 'ألماني', 'غاني', 'يوناني', 'غرينادي', 'غواتيمالي',
        //     'غيني', 'غوياني', 'هايتي', 'هندوراسي', 'هنغاري', 'آيسلندي', 'هندي', 'إندونيسي', 'إيراني',
        //     'عراقي', 'إيرلندي', 'فلسطيني', 'إيطالي', 'جامايكي', 'ياباني', 'أردني', 'كازاخستاني',
        //     'كيني', 'كيريباتي', 'كوري', 'كويتي', 'قرغيزستاني', 'لاوسي', 'لاتفي', 'لبناني', 'ليبي',
        //     'ليتواني', 'لوكسمبورغي', 'مدغشقري', 'مالاوي', 'ماليزي', 'مالديفي', 'مالي', 'مالطي',
        //     'ماوريتاني', 'مكسيكي', 'مولدوفي', 'موناكوي', 'منغولي', 'مغربي', 'موزمبيقي', 'ناميبي',
        //     'نيبالي', 'هولندي', 'نيوزيلندي', 'نيجيري', 'نيكاراغوي', 'نيجيري', 'نرويجي', 'عماني',
        //     'باكستاني', 'بنمي', 'بابواني', 'باراغوي', 'بيروفي', 'فلبيني', 'بولندي', 'برتغالي',
        //     'قطري', 'روماني', 'روسي', 'رواندي', 'سانت لوسي', 'سلفادوري', 'ساموائي',
        //     'سنغالي', 'صربي', 'سيشلي', 'سنغافوري', 'سلوفاكي', 'سلوفيني', 'سومالي', 'جنوب أفريقي',
        //     'إسباني', 'سريلانكي', 'سوداني', 'سورينامي', 'سوازيلندي', 'سويدي', 'سويسري', 'سوري',
        //     'تايواني', 'طاجيكستاني', 'تنزاني', 'تايلاندي', 'توغولي', 'تونسي', 'تركي', 'تركماني',
        //     'توفالي', 'أوغندي', 'أوكراني', 'أوروغواي', 'أوزبكستاني', 'فانواتي', 'فنزويلي', 'فيتنامي',
        //     'يمني', 'زامبي', 'زيمبابوي'
        // ]);

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

        // Methods
        const onSignup = () => {
            store.dispatch('Auth/Signup', signupPayload.value);
        };

        const selectIELTS = (degree) => {
            signupPayload.value.EnglishStandard.IELTS = degree;
        };

        const selectCEFR = (degree) => {
            signupPayload.value.EnglishStandard.CEFR = degree;
        };

        const toggleSaudiNationality = (value) => {
            if (value === true) {
                signupPayload.value.saudinationality = true;
            } else {
                signupPayload.value.saudinationality = false;
            }
        };

        const selectInterest = (interest) => {
            if (signupPayload.value.interests.includes(interest)) {
                signupPayload.value.interests = signupPayload.value.interests.filter((item) => item !== interest);
            } else {
                signupPayload.value.interests.push(interest);
            }
        };
        const selectSubInterest = (interest) => {
            if (signupPayload.value.Subinterests.includes(interest)) {
                signupPayload.value.Subinterests = signupPayload.value.Subinterests.filter((item) => item !== interest);
            } else {
                signupPayload.value.Subinterests.push(interest);
            }
        };
        const resetEnglishStandard = () => {
            signupPayload.value.EnglishStandard = {
                IELTS: '',
                TOEFL: '',
                TOEIC: '',
                DUOLINGO: '',
                STEP: '',
                CEFR: '',
            }
        }
        const resetBrainStandard = () => {
            signupPayload.value.BrainStandard = {
                SAT: '',
                Qudrat: '',
                GAT: '',
                ACT: '',
                Talent: '',
                AchivementTest: '',
                SAAT: ''
            }
        }

        const validateStep = () => {
            if (!isMinLength(signupPayload.value.first_name, 2)) {
                errors.value.first_name = "الاسم الأول يجب الأ يقل عن 3 أحرف.";
            } else {
                errors.value.first_name = "";
            }

            if (!isMinLength(signupPayload.value.last_name, 2)) {
                errors.value.last_name = "الاسم الأخير يجب الأ يقل عن 3 أحرف.";
            } else {
                errors.value.last_name = "";
            }

            if (!matchesRegex(signupPayload.value.email, /^\S+@\S+\.\S+$/)) {
                errors.value.email = "البريد الإلكتروني يجب أن يكون على الصيغة المحددة.";
            } else {
                errors.value.email = "";
            }

            if (!matchesRegex(signupPayload.value.phone, /^05\d{8}$/)) {
                errors.value.phone = "رقم الهاتف يجب أن يكون على الصيغة الموضحة";
            } else {
                errors.value.phone = "";
            }

            if (!matchesRegex(signupPayload.value.password, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/)) {
                errors.value.password = "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل وتحتوي على حرف كبير وحرف صغير ورقم.";
            } else {
                errors.value.password = "";
            }

            if (!isConfirmed(signupPayload.value.password, signupPayload.value.password_confirmation)) {
                errors.value.password_confirmation = "كلمة المرور غير متطابقة";
            } else {
                errors.value.password_confirmation = "";
            }

            if (!isMinArrayLength(signupPayload.value.interests, 3)) {
                errors.value.interests = "يجب اختيار 3 أنواع من الفرص على الأقل.";
            } else {
                errors.value.interests = "";
            }

            if (!isMinArrayLength(signupPayload.value.Subinterests, 3)) {
                errors.value.Subinterests = "يجب اختيار 3 مجالات اهتمام على الأقل.";
            } else {
                errors.value.Subinterests = "";
            }

            // //  Check if all values in `errors.value` are empty
            return Object.values(errors.value).every(error => error === "");

        };

        // Return
        return {
            loading_status,
            signupPayload,
            saudiCities,
            IELTSDegress,
            CEFRs,
            selectIELTS,
            selectCEFR,
            selectInterest,
            selectSubInterest,
            helperObj,
            resetEnglishStandard,
            resetBrainStandard,
            jobCategories,
            toggleSaudiNationality,
            onSignup,
            errors,
            validateStep
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

.accept-condition {
    color: blue;
}

.accept-condition:hover {
    text-decoration: underline;
}
</style>