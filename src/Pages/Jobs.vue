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

        <div class="template-footer-five py-3 bg-greencolor3" id="التواصل">
            <div class="copyright-area">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-4 col-md-5">
                            <p>
                                @{{ new Date().getFullYear() }} Vumy. All Rights Reserved by
                                <a href="https://envytheme.com/" target="_blank">EnvyTheme</a>
                            </p>
                        </div>
                        <div class="col-lg-4 col-md-3">
                            <div class="logo">
                                <router-link to="/">
                                    <img src="../assets/images/logo.png" alt="logo">
                                </router-link>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <ul class="social-links">
                                <li>
                                    <a href="https://www.https://www.linkedin.com/.com/" target="_blank">
                                        <i class="flaticon-facebook-app-symbol"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <i class="flaticon-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i class="flaticon-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i class="flaticon-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Signup Modal -->
        <div class="modal fade" id="Signup" tabindex="-1" aria-labelledby="Signup" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="SignupTitle">التسجيل</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="signup-form">
                            <div class="mb-3">
                                <input class="form-control form-control-lg" type="text" placeholder="الاسم بالكامل"
                                    v-model="signupPayload.fullname">
                            </div>
                            <div class="mb-3">
                                <input class="form-control form-control-lg" type="text" placeholder="البريد الإلكتروني"
                                    v-model="signupPayload.email">
                            </div>
                            <div class="mb-3">
                                <input class="form-control form-control-lg" type="password" placeholder="كلمة السر"
                                    v-model="signupPayload.password">
                            </div>
                            <div class="mb-3">
                                <input class="form-control form-control-lg" type="password" placeholder="تأكيد كلمة السر"
                                    v-model="signupPayload.password_confirmation">
                            </div>
                            <div>
                                <button type="button" class="btn-style-one green-color2 text-white" @click="onSignup">
                                    <span v-if="!loading_status"><i class="ph ph-user"></i></span>
                                    <span v-else class="spinner-border spinner-border-sm ms-1" role="status"></span>
                                    التسجيل
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Signup Modal -->
        <!-- Login Modal -->
        <div class="modal fade" id="Login" tabindex="-1" aria-labelledby="Signup" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="LoginTitle">تسجيل الدخول</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="signup-form">
                            <div class="mb-3">
                                <input class="form-control form-control-lg" type="text" placeholder="البريد الإلكتروني"
                                    v-model="loginPayload.email">
                            </div>
                            <div class="mb-3">
                                <input class="form-control form-control-lg" type="password" placeholder="كلمة السر"
                                    v-model="loginPayload.password">
                            </div>
                            <div>
                                <button type="button" class="btn-style-one green-color2 text-white" @click="onLogin">
                                    <span v-if="!loading_status"><i class="ph ph-user"></i></span>
                                    <span v-else class="spinner-border spinner-border-sm ms-1" role="status"></span>
                                    الدخول
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Signup Modal -->
    </div>
</template>

<script>
// Import Methods, Packages, Files
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'
export default {
    name: 'Khatat',
    setup() {
        // Calling, Declarations, Data
        const store = useStore()
        const loading_status = computed(() => store.state.Collection.loading_status);
        const user = computed(() => store.state.Auth.user);
        const isSticky = ref(false);
        const show = ref(false);
        store.dispatch("Auth/GetProfile")
        const signupPayload = ref({
            fullname: "",
            email: "",
            password: "",
            password_confirmation: ""
        })
        const loginPayload = ref({
            email: "",
            password: "",
        })
        const Logout = () => {
            store.dispatch("Auth/Logout")
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

        // Return
        return {
            loading_status,
            user,
            goToSection,
            isSticky,
            show,
            button_show_state,
            signupPayload,
            loginPayload,
            Logout
        }
    }
}
</script>
