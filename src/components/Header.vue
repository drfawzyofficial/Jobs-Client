<template>
    <div class="container">
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
                <router-link to="/">
                    <img src="../assets/images/logo.png" height="125" width="125"/>
                </router-link>
                <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li v-for="(item, index) in navLinks" :key="index">
                        <router-link class="store-animation-anchor fw-medium ms-3" :to="item.link">{{  item.title }}</router-link>
                    </li>
                </ul>
                <div class="col-md-3 text-end">
                    <router-link class="btn btn-lg btn-primary" to="/join">انضم إلينا</router-link>
                </div>
            </header>
        </div>
</template>
<script>
// Import Methods, Packages, Files
import { onMounted, ref } from 'vue'
export default {
    name: 'Header',
    setup() {

        // Calling, Declarations, Data
        const token = localStorage.getItem("token");
        const navLinks = ref([{ title: "الرئيسية", link: "/"}, { title: "من نحن", link: "/about-us"}, { title: "التواصل", link: "/contact"}]);
        // Return
        return {
            token,
            navLinks
        }
    }


}
</script>