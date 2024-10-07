<template>
    <div class="container-fluid header position-relative" id="header">
        <div class="sidebar sidebar-mobilemenu animate__animated  animate__slideInRight animate__faster">
            <div class="account-lang-box  pb-3">
                <div class="remove-sidebar pointer-cursor">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-x">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
            </div>
            <ul class="sidebar-mobilemenu-items">
                <li class="item mt-3" v-for="(item, index) in navLinks" :key="index">
                    <router-link class="menu-link store-animation-anchor fw-medium" :to="item.link">{{  item.title }}</router-link>
                </li>
            </ul>
        </div>
        <div class="app-overlay"></div>
        <div class="container position-relative">
            <div class="row">
                <div class="col-12">
                    <div class="header__1">
                        <div class="mobile-sidebar pointer-cursor">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M4 6h16"></path>
                                <path d="M7 12h13"></path>
                                <path d="M10 18h10"></path>
                            </svg>
                        </div>
                        <ul class="items">
                            <li class="item ms-4" v-for="(item, index) in navLinks" :key="index">
                                <router-link class="menu-link fw-bold" :to="item.link">{{  item.title }}</router-link>
                            </li>

                        </ul>
                        <div class="logo">
                            <img src="@/assets/images/logo.png" height="100" width="100"/>
                        </div>
                        <div class="icons">
                            <router-link class="icon account" to="/account/signup">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-user">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// Import Methods, Packages, Files
import { onMounted, ref } from 'vue'
export default {
    name: 'Header',
    setup() {
        onMounted(() => {
                // Access Elements
    let search_btn = $(".search");
    let mobile_sidebar = $(".mobile-sidebar");
    let remove_sidebar = $(".remove-sidebar");
    let app_overlay = $(".app-overlay");
    let sidebar_search = $(".sidebar-search");
    let sidebar_mobilemenu = $(".sidebar-mobilemenu");
    let btn_accordion = $(".btn-accordion");

    // to open the sidebar
    search_btn.on("click", function (e) {
        e.stopPropagation();
        app_overlay.fadeIn();
        sidebar_search.fadeIn();
    });
    mobile_sidebar.on("click", function (e) {
        e.stopPropagation();
        app_overlay.fadeIn();
        sidebar_mobilemenu.fadeIn();
    });

    // Close Sidebar when clicking on remove button
    remove_sidebar.on("click", function () {
        sidebar_mobilemenu.fadeOut();
        sidebar_search.fadeOut();
        app_overlay.fadeOut();
    });

    // open accordion
    btn_accordion.on("click", function () {
        let plus_icon = $(".plus-icon");
        let minus_icon = $(".minus-icon");
        if (plus_icon.css("display") == "none") {

        }
        alert(icon_shape);
    });

    // Close Search Sidebar when clicking outside of it
    $(document).click(function (e) {
        if (sidebar_search.is(":visible") && !sidebar_search.is(e.target) && !sidebar_search.has(e.target).length) {
            sidebar_search.fadeOut();
            app_overlay.fadeOut();
        }
        if (sidebar_mobilemenu.is(":visible") && !sidebar_mobilemenu.is(e.target) && !sidebar_mobilemenu.has(e.target).length) {
            sidebar_mobilemenu.fadeOut();
            app_overlay.fadeOut();
        }
    });

        })
        // Calling, Declarations, Data
        const token = localStorage.getItem("token");
        const navLinks = ref([{ title: "الرئيسية", link: "/" }, { title: "من نحن", link: "/about-us" }, { title: "التواصل", link: "/contact" }]);
        // Return
        return {
            token,
            navLinks
        }
    }


}
</script>

<style scoped>
@import '../assets/css/header.css';
@import '../assets/css/sidebar.css';
</style>