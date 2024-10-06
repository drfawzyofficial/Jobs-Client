<template>
    <div class="breadcrumb container-fluid py-3">
        <div class="container">
            <h4 class="main-page-title fw-bold px-4 py-3">الشروط والأحكام</h4>
        </div>
    </div>
</template>

<script>
// Import Methods, Packages, Files
import { onMounted, ref, toRefs, defineProps } from 'vue'
export default  {
    name: 'Breadcrumb',
    setup() {

        // Calling, Declarations, Data
        const props = defineProps({ title: String });
        const { title } = toRefs(props);

        // Return
        return {
            title
        }
    }


}
</script>

<style scoped>
  .breadcrumb .main-page-title {
    background-color: #2B7A7B;
    color: #FFF;
  }

  @media (max-width: 575.98px) {
    .breadcrumb .main-page-title {
      font-size: 1.3rem;
    }
  }
</style>