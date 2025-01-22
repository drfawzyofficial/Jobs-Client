<template>
    <Layout>
        <div class="home-page">
            <HomeSlider></HomeSlider>
            <KhatatStatistics></KhatatStatistics>
            <Partners></Partners>
        </div>
    </Layout>
</template>

<script>
// Import Methods, Packages, Files
import Layout from "@/components/Layout.vue"
import HomeSlider from "@/components/home-slider.vue"
import KhatatStatistics from "@/components/khatat-statistics.vue"
import Partners from "@/components/Partners.vue"
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'
export default {
    name: 'Khatat',
    components: {
        Layout,
        HomeSlider,
        KhatatStatistics,
        Partners
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
            { title: "عدد المسؤولين", count: 3 }
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