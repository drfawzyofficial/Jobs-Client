<template>
    <footer class="container-fluid footer">
        <div class="container">
            <div class="row pb-4">
                <div class="col-lg-6">
                    <div class="info">
                        <div class="andalib-logo">
                            <router-link to="/">
                                <img src="@/assets/images/logo_white.png" height="100" width="100"/>
                            </router-link>
                        </div>
                        <p class="mt-3 text-white">منصة خطط هي منصة رائده قادرة على ايصالك لافضل الفرص المتاحة حولك لتمكنك من تحقيق اهدافك عن طريق تسهيل وصولك الى افضل الفرص والأنشطة المتاحة حولك</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 mt-3 mt-lg-0">
                    <div class="footer-links">
                        <h5 class="fw-bold text-white">من نحن</h5>
                        <div class="link" v-for="(item, index) in navLinks" :key="index">
                            <router-link class="fw-medium" :to="item.link">{{  item.title }}</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 mt-3 mt-lg-0">
                    <div class="contact">
                        <h5 class="fw-bold text-white">تواصل معنا</h5>
                        <div class="contact-part">
                            <span class="icon">
                                <i class="bi bi-telephone"></i>
                            </span>
                            <span class="fw-medium text-white ms-2">+96612345678</span>
                        </div>
                        <div class="contact-part">
                            <span class="icon">
                                <i class="bi bi-envelope"></i>
                            </span>
                            <span class="fw-medium text-white ms-2">contact@khatat.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-social mt-3 d-flex justify-content-between flex-row">
                <div class="copyright-text">
                    <span class="fw-medium text-white">جميع الحقوق محفوظة © 2024</span>
                </div>
                <div class="social-icons">
                    <router-link v-for="(social, index) in socialIcons" :key="index" :to="social.link" class="icon-link" >
                        <span v-html="social.icon"></span>
                        <span class="visually-hidden">{{ social.title}}</span>
                    </router-link>
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
        const navLinks = ref([{ title: "من نحن", link: "/pages/about-us" }, { title: "تواصل معنا", link: "/pages/contact" }, { title: "الشروط والأحكام", link: "/pages/terms" }, { title: "سياسة الخصوصية", link: "/pages/privacy" }, { title: "الأسئلة الشائعة", link: "/pages/faq" }]);
        const socialIcons = ref([{ title: "facebook", icon: '<i class="bi bi-facebook"></i>', link: "https://www.facebook.com/" }, { title: "linkedIn", icon: '<i class="bi bi-linkedin"></i>', link: "https://www.linkedin.com/" },{ title: "Instagram", icon: '   <i class="bi bi-instagram"></i>', link: "https://www.instagram.com/"  }]);
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