<template>
     <AboutCarousel></AboutCarousel>
     <Features></Features>
</template>

<script>
// Import Methods, Packages, Files
import Breadcrumb from "@/components/Breadcrumb.vue";
import Features from "@/components/Features.vue";
import AboutCarousel from "@/components/about-carousel.vue";
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
export default {
    name: 'About',
    components: {
        Breadcrumb,
        Features,
        AboutCarousel
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