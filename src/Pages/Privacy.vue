<template>
    <Breadcrumb :title="pageTitle" />
</template>

<script>
// Import Methods, Packages, Files
import Header from "../components/Footer.vue"
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'
import $ from 'jquery'; 
export default {
    name: 'Khatat',
    components: {
        Header
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

</style>