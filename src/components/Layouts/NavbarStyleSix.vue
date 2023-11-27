<template>
    <div :class="['navbar-area navbar-style-three', { 'is-sticky': isSticky }]">
        <div class="vumy-nav">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <router-link class="navbar-brand" to="/">
                        <img src="../../assets/images/white-logo.png" alt="logo">
                    </router-link>
                    <router-link class="navbar-brand" to="/">
                        <img src="../../assets/images/logo.png" alt="logo">
                    </router-link>

                    <div class="navbar-toggler" @click="show = !show" :aria-pressed="show ? 'true' : 'false'"
                        v-bind:class="{ show: button_show_state }" v-on:click="button_show_state = !button_show_state">
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                    </div>

                    <div class="collapse navbar-collapse" :class="{ show: show }">
                        <ul class="navbar-nav">
                            <li class="nav-item" v-for="(link, index) in navLinks" :key="index">
                                <a class="nav-link" @click="goToSection(link)">{{ link }}</a>
                            </li>
                        </ul>
                    </div>

                    <div class="others-option">
                        <a data-bs-toggle="modal" data-bs-target="#Signup" class="btn-style-one green-color2">
                            Signup
                            <i class="ph-caret-right"></i>
                        </a>
                    </div>
                  
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
// Import Methods, Packages, Files
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
export default {
    setup() {
        // Calling, Declarations, Data
        const store = useStore()
        const navLinks = ref(["Home", "Benefits", "WhyUs", "Process", "Reviews", "Contact"]);

        // Methods
        const goToSection = (sectionName) => {
            const el = document.getElementById(sectionName);
            el.scrollIntoView({ behavior: "smooth" });
        }

        // Return
        return {
            navLinks,
            goToSection,
        }
    }
}
</script>
