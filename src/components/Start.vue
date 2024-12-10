<template>
  <div class="start container-fluid">
    
  </div>
</template>

<script>
// Import Methods, Packages, Files
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'
export default {
  name: 'start',
  setup() {

    // Calling, Declarations, Data
    const store = useStore()
    const loading_status = computed(() => store.state.Collection.loading_status);
    const navLinks = ref(["الرئيسية", "المميزات", "الخدمات", "العملية", "الأسئلة الشائعة", "التواصل"]);

    // return
    return {
      loading_status,
      navLinks
    }
  }


}
</script>

<style scoped>

</style>