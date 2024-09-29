<template>
    <div>
        <div :class="['navbar-area p-relative', { 'is-sticky': isSticky }]">
            <div class="vumy-nav">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <router-link class="navbar-brand" to="/">
                            <img src="../assets/images/logo.png" alt="logo">
                        </router-link>

                        <div class="navbar-toggler" @click="show = !show" :aria-pressed="show ? 'true' : 'false'"
                            v-bind:class="{ show: button_show_state }" v-on:click="button_show_state = !button_show_state">
                            <span class="icon-bar top-bar"></span>
                            <span class="icon-bar middle-bar"></span>
                            <span class="icon-bar bottom-bar"></span>
                        </div>

                        <div class="collapse navbar-collapse" :class="{ show: show }">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/user/settings">
                                      إعدادات الحساب
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/user/jobs">
                                    الوظائف
                                    </router-link>
                                </li>
                            </ul>
                        </div>

                        <div class="others-option">
                            <button type="button" class="btn-style-one green-color2" @click="Logout()">
                                تسجيل الخروج
                                <span v-if="!loading_status"><i class="ph ph-sign-out"></i></span>
                                <span v-else class="spinner-border spinner-border-sm ms-1" role="status"></span>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

        <div class="settings container-fluid py-5 bg-greencolor3">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);"
                            aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <router-link to="/user/jobs">
                                        لوحة التحكم
                                    </router-link>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">الوظائف</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                       <div class="filter bg-white p-3 rounded-12">
                            <h5 class="mb-3">بحث كامل</h5>
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <input class="form-control form-control-lg" type="text" placeholder="اسم الفرصة"
                                        v-model="filter.jobName">
                                </div>
                                <div class="col-md-6 mt-3 mt-md-0">
                                    <input class="form-control form-control-lg" type="text"
                                        placeholder="سعر الدخول" v-model="filter.jobPrice">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <select class="form-select form-select-lg" v-model="filter.programStatus">
                                        <option value="حالة البرنامج">حالة البرنامج</option>
                                        <option value="الموقع">الموقع</option>
                                        <option value="عن بُعد">عن بُعد</option>
                                    </select>
                                </div>
                                <div class="col-md-6 mt-3 mt-md-0">
                                    <select class="form-select form-select-lg" v-model="filter.jobCategory">
                                        <option v-for="(val, index) in helperObj.jobCategories" :key="index" :value="val">{{ val }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <input class="form-control form-control-lg" type="date"
                                        v-model="filter.jobStartDate">
                                </div>
                                <div class="col-md-6 mt-3 mt-md-0">
                                    <input class="form-control form-control-lg" type="date"
                                        v-model="filter.jobEndDate">
                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <select class="form-select form-select-lg" v-model="filter.applicantNat">
                                        <option v-for="(val, index) in helperObj.applicantNats" :key="index" :value="val">{{ val }}</option>
                                    </select>
                                </div>
                                <div class="col-md-6 mt-3 mt-md-0">
                                    <select class="form-select form-select-lg" v-model="filter.applicantAge">
                                        <option v-for="(val, index) in helperObj.applicantAges" :key="index" :value="val">{{ val }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <select class="form-select form-select-lg" v-model="filter.applicantEdu">
                                        <option v-for="(val, index) in helperObj.applicantEdus" :key="index" :value="val">{{ val }}</option>
                                    </select>
                                </div>
                             </div>
                       
                       </div>
                    </div>
                    <div class="col-md-8 mt-3 mt-md-0">
                        <div class="all-jobs p-3 bg-white rounded-12" >
                            <h5>جميع الوظائف</h5>
                            <div class="row">
                                <div class="col-md-6 mt-4" v-for="(job, index) in jobs" :key="index">
                                    <div class="job bg-light shadow-sm rounded-12 p-3">
                                        <a class="job-link" :href="job.jobLink" target="_blank">
                                            <i class="ph ph-paper-plane-tilt"></i>
                                        </a>
                                        <div class="job-image d-flex align-items-center">
                                            <div class="image">
                                                <img class="shadow-sm" :src="job.jobImage"/>
                                            </div>
                                            <div class="job-content ms-2">
                                                <span class="d-block">الاسم: {{ job.jobName }}</span>
                                                <span class="d-block">التصنيف: {{ job.jobCategory }}</span>
                                            </div>
                                        </div>
                                        <div class="job-details mt-3">
                                            <h6>تفاصيل الوظيفة</h6>
                                            <div class="row mt-3">
                                                <div class="col-lg-6">
                                                    <div class="job-badge bg-greencolor3 p-2 rounded-12 text-center"  v-if="job.jobPrice">
                                                        <span v-if="job.jobPrice">السعر: {{ job.jobPrice }} ريال</span>
                                                        <span v-else>لا يوجد سعر</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 mt-2 mt-lg-0">
                                                    <div class="job-badge bg-greencolor3 p-2 rounded-12 text-center">
                                                    <span>المكان:  {{ job.programStatus }}</span>
                                                </div>
                                                </div>
                                            </div>
                                            <div class="row mt-2">
                                                <div class="col-lg-6">
                                                    <div class="job-badge bg-greencolor3 p-2 rounded-12 text-center"  v-if="job.jobPrice">
                                                        <span>{{ job.jobStartDate }}</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 mt-2 mt-lg-0">
                                                    <div class="job-badge bg-greencolor3 p-2 rounded-12 text-center">
                                                        <span> {{ job.jobEndDate }}</span>
                                                </div>
                                                </div>
                                            </div>
                                        
                                            <h6 class="mt-3">معلومات إضافية</h6>
                                            <div class="info-group-btns d-flex justify-content-center flex-wrap">
                                                <button type="button" class="btn btn-sm btn-store m-1"
                                                    @click="openModalBox('المستندات', job.documentsContent, true)">
                                                    <span>المستندات</span>
                                                </button>
                                                <button type="button" class="btn btn-sm btn-store m-1"
                                                    @click="openModalBox('الملاحظات', job.notesContent, true)">
                                                    <span>الملاحظات</span>
                                                </button>
                                                <button type="button" class="btn btn-sm btn-store m-1 "
                                                    @click="openModalBox('الإنجليزية', job.EnglishStandard, false)">
                                                    <span>الإنجليزية</span>
                                                </button>
                                                <button type="button" class="btn btn-sm btn-store m-1"
                                                    @click="openModalBox('العقلية', job.BrainStandard, false)">
                                                    <span>العقلية</span>
                                                </button>
                                            </div>
                                            <hr>
                                            <div class="w-100">
                                                <button type="button" class="checkBtn w-100" @click="checkConditions(job)">
                                                    التحقق من الشروط <i class="ph ph-check-circle align-middle"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Modal Content -->
            <div class="modal fade" ref="modalContentRef">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">{{ modalTitle }}</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" v-html="modalContent"></div>
                       
                    </div>
                </div>
            </div>
            <!-- Modal Content -->

               <!-- Modal Content -->
               <div class="modal fade" ref="modalCheckConditions">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">التحقق من صلاحية الوظيفة</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" v-html="checkConditionsContent"></div>
                    </div>
                </div>
            </div>
            <!-- Modal Content -->

        </div>


        <Footer></Footer>

    </div>
</template>

<script>
// Import Methods, Packages, Files
import Footer from "../components/Footer.vue"
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'

export default {
    name: 'Khatat',
    components: {
        Footer
    },
    setup() {
        // Calling, Declarations, Data
        const store = useStore()
        const loading_status = computed(() => store.state.Collection.loading_status);
        const user = computed(() => store.state.Auth.user);
        const isSticky = ref(false);
        const show = ref(false);
        const modalTitle = ref('');
        const modalContent = ref('');
        const checkConditionsContent = ref('');
        const modalCheckConditions = ref(null);
        const modalContentRef = ref(null);
        const filter = ref({
            jobName: "",
            jobPrice: "",
            programStatus: "حالة البرنامج",
            jobStartDate: "",
            jobEndDate: "",
            jobCategory: "التصنيف",
            jobStartDate: "",
            jobEndDate: "",
            applicantNat: "الجنسية",
            applicantAge: "العمر",
            applicantEdu: "المرحلة"
        })
        store.dispatch("Auth/GetProfile")
        store.dispatch("Collection/GetHelper")
        const helperObj = computed(() => store.state.Collection.helperObj);
        store.dispatch("Admin_Store/jobsGet", { page_no: 1 });
        const jobs = computed(() => store.state.Admin_Store.jobs);

        const Logout = () => {
            store.dispatch("Auth/Logout")
        }
        const button_show_state = ref(false);

       

        const openModalBox = (modalTitleP, modalContentP, detection) => {
            new Modal(modalContentRef.value).show()
            modalTitle.value = modalTitleP;
            if (detection === true) {
                modalContent.value = modalContentP;
            } else {
                let ul = '<ul>';
                let li;
                for (const property in modalContentP) {
                    li = `<li>${property}: ${modalContentP[property]}</li>`;
                    ul += li;
                }
                ul += '</ul>'
                modalContent.value = ul;
            }
        }


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

        const checkConditions = (job) => {
            // Code to know if ths user meets the job or not.
            console.log(job);
            console.log(user.value)
            new Modal(modalCheckConditions.value).show()
            let userProfile = user.value;
            let jobData = job;
            let meetJob = true;
            let reason = ``;
            if(userProfile.applicantNat !== jobData.applicantNat) {
                meetJob = false;
                reason += `<p class="text-danger">الوظيفة تتطلب الجنسية أن تكون ${jobData.applicantNat} والجنسية الخاصة بك هي ${userProfile.applicantNat}</p>`
            }
            if(userProfile.applicantAge !== jobData.applicantAge) {
                meetJob = false;
                reason += `<p class="text-danger">الوظيفة تتطلب العمر أن يكون ${jobData.applicantAge} والعمر الخاص بك هي ${userProfile.applicantAge}</p>`
            }

            if(meetJob) {
                checkConditionsContent.value = `
                    <div class="alert alert-success" role="alert">
                      شروط الوظيفة تناسبك
                    </div>
                `
            } else {
                checkConditionsContent.value = `
                    <div class="alert alert-warning" role="alert">
                      شروط الوظيفة لا تناسبك للأسباب الآتية: 
                    </div>
                    ${reason}
                `
            }
        
        }


        // Return
        return {
            loading_status,
            user,
            isSticky,
            modalTitle,
            modalContentRef,
            show,
            button_show_state,
            Logout,
            helperObj,
            filter,
            jobs,
            openModalBox,
            modalContent,
            checkConditions,
            modalCheckConditions,
            checkConditionsContent
        }
    }
}
</script>
