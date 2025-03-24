<template>
    <footer class="container-fluid footer">
        <div class="container">
            <div class="row pb-4">
                <div class="col-lg-6">
                    <div class="info">
                        <div class="andalib-logo">
                            <router-link to="/">
                                <img src="@/assets/images/logo_white.png" height="80" />
                            </router-link>
                        </div>
                        <p class="mt-3 text-white">منصة خطط هي منصة رائدة تسعى إلى تعريفك بأفضل الفرص المتاحة حولك؛
                            معبّدةً بذلك الطريق لتحقيق أهدافك الشخصية والأكاديمية. </p>
                        <div class="d-flex mt-2" style="gap: 20px">
                            <div class="social-icon" v-for="(social, index) in socialIcons" :key="index">
                                <a :href="social.link" class="text-white fs-2" target="_blank">
                                    <span v-html="social.icon"></span>
                                    <span class="visually-hidden">{{ social.title }}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 mt-3 mt-lg-0">
                    <div class="footer-links">
                        <h5 class="fw-bold text-white">روابط هامة</h5>
                        <div class="link" v-for="(item, index) in navLinks" :key="index">
                            <router-link class="fw-medium" :to="item.link">{{ item.title }}</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 mt-3 mt-lg-0">
                    <div class="contact">
                        <h5 class="fw-bold text-white">تواصل معنا</h5>
                        <!-- <div class="contact-part">
                            <span class="icon">
                                <i class="bi bi-telephone"></i>
                            </span>
                            <span class="fw-medium text-white ms-2">+966123456</span>
                        </div> -->
                        <div class="contact-part">
                            <span class="icon">
                                <i class="bi bi-envelope"></i>
                            </span>
                            <span class="fw-medium text-white ms-2">khattitsite@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-social mt-3 d-flex justify-content-center flex-row">
                <div class="copyright-text">
                    <span class="fw-medium text-white">جميع الحقوق محفوظة © {{ new Date().getFullYear() }}</span>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
// Import Methods, Packages, Files
import { onMounted, ref } from 'vue'
export default {
    name: 'Footer',
    setup() {

        // Calling, Declarations, Data
        const token = localStorage.getItem("token");
        const navLinks = ref([{ title: "من نحن", link: "/pages/about-us" }, { title: "الشروط والأحكام", link: "/pages/terms" }, { title: "سياسة الخصوصية", link: "/pages/privacy" }, { title: "الأسئلة الشائعة", link: "/pages/faq" }]);
        const socialIcons = ref([{ title: "Instagram", icon: '<i class="bi bi-instagram"></i>', link: "https://www.instagram.com/khattitsite/profilecard/?igsh=NTc4MTIwNjQ2YQ==" }, { title: "telegram", icon: '<i class="bi bi-telegram"></i>', link: "https://t.me/+uMD9z_GqZJc3NmQ0" }, { title: "TikTok", icon: '<i class="bi bi-tiktok"></i>', link: "https://www.tiktok.com/@khattit.site" }, { title: "linkedIn", icon: '<i class="bi bi-linkedin"></i>', link: "https://www.linkedin.com/company/khattit/about/?viewAsMember=true" }, { title: "x", icon: '<i class="bi bi-twitter-x"></i>', link: "https://x.com/khattitsite?s=21" }]);
        return {
            token,
            navLinks,
            socialIcons
        }
    }


}
</script>

<style scoped>
@import '../assets/css/footer.css';
</style>