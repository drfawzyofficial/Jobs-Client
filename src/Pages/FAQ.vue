<template>
     <Layout>
        <FAQComponent></FAQComponent>
     </Layout>
</template>

<script>
// Import Methods, Packages, Files
import Breadcrumb from "@/components/Breadcrumb.vue";
import FAQComponent from "@/components/FAQComponent.vue";
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';

export default {
    name: 'FAQ',
    components: {
        Breadcrumb,
        FAQComponent
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