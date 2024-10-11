<template>
    <div class="home-page">
        <div class="home-banner position-relative overflow-hidden p-3 p-md-5 text-center">
            <div class="col-md-5 p-lg-5 mx-auto my-5">
                <h2 class="fw-bold text-white">خطط...موقع فرص للطلاب</h2>
                <p class="lead text-white">منصة خطط هي منصة رائده قادرة على ايصالك لافضل الفرص المتاحة حولك لتمكنك من
                    تحقيق اهدافك عن طريق تسهيل وصولك الى افضل الفرص والأنشطة المتاحة حولك </p>
                <router-link to="/account/signup" class="btn btn-lg btn-primary mt-3">ابدأ الخدمة</router-link>
            </div>
            <div class="product-device shadow-sm d-none d-md-block"></div>
            <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
        <div class="khatat-statistics container-fluid py-5">
            <div class="container py-5">
                <div class="row">
                    <div class="col-md-6 mx-auto">
                       <div class="text-center">
                        <h2 class="fw-bold">خطط في أرقام</h2>
                            <p>من خلال شراكاتنا، نتمكن من تقديم حلول مبتكرة وخدمات ذات جودة عالية لعملائنا. نحن نعمل جنبًا إلى جنب مع شركائنا لتعزيز الابتكار وتحقيق أهدافنا المشتركة في مجالات التعليم، الصحة، والتكنولوجيا.</p>
                       </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 mt-4" v-for="(stat, index) in statisticsObj" :key="index">
                        <div class="counter-box">
                            <i class="fa fa-thumbs-o-up"></i>
                            <span class="counter">{{ stat.count }}</span>
                            <p>{{ stat.title }}</p>
                        </div>
                    </div>
                </div>	
            </div>
        </div>
        <div class="partners container-fluid py-5 bg-light">
            <div class="container py-5">
                <div class="row">
                    <div class="col-md-6 mx-auto">
                       <div class="text-center">
                            <h2 class="fw-bold">شركائنا</h2>
                            <p>من خلال شراكاتنا، نتمكن من تقديم حلول مبتكرة وخدمات ذات جودة عالية لعملائنا. نحن نعمل جنبًا إلى جنب مع شركائنا لتعزيز الابتكار وتحقيق أهدافنا المشتركة في مجالات التعليم، الصحة، والتكنولوجيا.</p>
                       </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-2 col-md-4 col-sm-6 mt-4" v-for="(partImg, index) in parnters" :key="index">
                        <div class="partner-img">
                            <img class="store-animation-shadow" src="../assets/images/banner.jpg"/>
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
import { computed, onMounted, ref } from 'vue'
export default {
    name: 'Khatat',
    components: {
    },
    setup() {
        onMounted(() => {
            $('.counter').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        })
        // Calling, Declarations, Data
        const store = useStore()
        const loading_status = computed(() => store.state.Collection.loading_status);
        const navLinks = ref(["الرئيسية", "المميزات", "الخدمات", "العملية", "الأسئلة الشائعة", "التواصل"]);
        const isSticky = ref(false);
        const show = ref(false);
        const signupPayload = ref({
            fullname: "",
            email: "",
            password: "",
            password_confirmation: ""
        });
        const statisticsObj = ref([
            { title: "عدد المستفيدين", count: 250 },
            { title: "عدد الفرص", count: 245 },
            { title: "عدد المسئولين", count: 3 }
        ]);
        const parnters = ref(["../assets/images/banner.jpg", "../assets/images/banner.jpg", "../assets/images/banner.jpg", "../assets/images/banner.jpg", "../assets/images/banner.jpg", "../assets/images/banner.jpg"]);
        const loginPayload = ref({
            email: "",
            password: "",
        })
        const onSignup = () => {
            store.dispatch("Auth/Signup", signupPayload.value)
        }
        const onLogin = () => {
            store.dispatch("Auth/Login", loginPayload.value)
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
            navLinks,
            goToSection,
            isSticky,
            show,
            button_show_state,
            signupPayload,
            loginPayload,
            onLogin,
            onSignup,
            statisticsObj,
            parnters
        }
    }
}
</script>

<style scoped>
.home-banner {
    background-color: #2B7A7B;
}
.counter-box {
	display: block;
	background: #F7F7F7;
	padding: 40px 20px 37px;
	text-align: center
}

.counter-box p {
	margin: 5px 0 0;
	padding: 0;
	color: #909090;
	font-size: 18px;
	font-weight: 500
}

.counter-box i {
	font-size: 60px;
	margin: 0 0 15px;
	color: #d2d2d2
}

.counter { 
	display: block;
	font-size: 32px;
	font-weight: 700;
	color: #666;
	line-height: 28px
}

.counter-box {
    transition: all 0.3s ease-in-out;
}

.counter-box:hover {
    background: #EEEEEE;
    color: #fff
}

.partners .partner-img img {
    height: 200px;
    width: 100%;
    border-radius: 6px;
}

</style>