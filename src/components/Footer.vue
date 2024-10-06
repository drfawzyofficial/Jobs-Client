<template>
    <div class="container">
            <footer class="py-3 my-4">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item" v-for="(item, index) in navLinks" :key="index">
                        <router-link class="px-2 fw-medium store-animation-anchor" :to="item.link">{{  item.title }}</router-link>
                    </li>
                </ul>
                <p class="text-center text-muted">جميع الحقوق محفوظة &copy; لدى خطط {{ new Date().getFullYear() }}</p>
            </footer>
        </div>
</template>
<script>
// Import Methods, Packages, Files
import { onMounted, ref } from 'vue'
export default {
    name: 'Footer',
    setup() {

        // Calling, Declarations, Data
        const token = localStorage.getItem("token");
        const navLinks = ref([{ title: "الشروط والأحكام", link: "/terms"}, { title: "الخصوصية", link: "/privacy"}, { title: "الأسئلة الشائعة", link: "/faq"}]);
        return {
            token,
            navLinks
        }
    }


}
</script>