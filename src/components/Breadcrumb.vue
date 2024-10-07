<template>
  <div class="breadcrumb container-fluid py-3">
    <div class="container">
      <h4 class="main-page-title fw-bold px-4 py-3">{{ title }}</h4>
    </div>
  </div>
</template>

<script>
// Import Methods, Packages, Files
import { onMounted, ref, toRefs, defineProps } from 'vue'
export default {
  name: 'Breadcrumb',
  props: {
    title: String,
    required: true
  },
  setup(props) {

    // Calling, Declarations, Data
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
  background-color: #3AAFA9;
  color: #FFF;
}

@media (max-width: 575.98px) {
  .breadcrumb .main-page-title {
    font-size: 1.3rem;
  }
}
</style>