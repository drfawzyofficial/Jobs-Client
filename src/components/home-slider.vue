<template>
  <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="..." class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="..." class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="..." class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
// Import Methods, Packages, Files
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'
export default {
  name: 'Home-Slider',
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