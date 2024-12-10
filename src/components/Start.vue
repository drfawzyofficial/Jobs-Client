<template>
  <div class="start container-fluid">
    
  </div>
</template>

<script>
// Import Methods, Packages, Files
import { ref } from 'vue'
export default {
  name: 'start',
  setup() {

    // Calling, Declarations, Data
    const navLinks = ref(["الرئيسية", "المميزات", "الخدمات", "العملية", "الأسئلة الشائعة", "التواصل"]);

    // return
    return {
      navLinks
    }
  }


}
</script>

<style scoped>

</style>