<template>
     <Breadcrumb :title="pageTitle" />
</template>

<script>
// Import Methods, Packages, Files
import Breadcrumb from "@/components/Breadcrumb.vue";
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';

export default {
    name: 'Contact',
    components: {
        Breadcrumb
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