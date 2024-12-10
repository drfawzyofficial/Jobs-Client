<template>
    <Layout>
        <AboutCarousel></AboutCarousel>
        <Features></Features>
    </Layout>
</template>

<script>
// Import Methods, Packages, Files
import Breadcrumb from "@/components/Breadcrumb.vue";
import Features from "@/components/Features.vue";
import AboutCarousel from "@/components/about-carousel.vue";
import HomeSlider from "@/components/home-slider.vue"
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
export default {
    name: 'About',
    components: {
        Breadcrumb,
        Features,
        AboutCarousel,
        HomeSlider
    },
    setup() {

        // Calling, Declarations, Data
        const route = useRoute();
        const pageTitle = computed(() => route.meta.title);

        // Return
        return {
            pageTitle
        }
    }
}
</script>

<style scoped>

</style>