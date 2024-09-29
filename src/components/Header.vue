<template>
   
</template>
<script>
// Import Methods, Packages, Files
import { onMounted, ref } from 'vue'
export default {
    name: 'Footer',
    setup() {

        // Calling, Declarations, Data
        const token = localStorage.getItem("token");

        // Return
        return {
            token
        }
    }


}
</script>