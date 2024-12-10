<template>
  <div class="partners container-fluid py-5 bg-light">
    <div class="container">
      <h2 class="fw-bold text-center mb-3">شركائنا</h2>
        <Carousel :autoplay="5000" :wrap-around="true" :dir="rtl" :itemsToShow="4" :breakpoints="carouselBreakpoints"
        >
          <Slide v-for="(image, index) in slider_images" :key="index" class="image-item">
              <div class="carousel__item m-2">
                  <img :src="image.src" :alt="image.alt" :title="image.title"
                      class="store-animation-shadow" />
              </div>
          </Slide>
          <template #addons>
              <Pagination />
          </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
// Import Methods, Packages, Files
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Pagination, Slide } from 'vue3-carousel'
export default {
  name: 'partners',
  components: {
        Carousel,
        Slide,
        Pagination,
    },
  setup() {

    // Calling, Declarations, Data
    
        const slider_images = ref([
            {
                src: require("@/assets/images/student1.jpg"),
                alt: 'Placeholder Image 1',
                title: 'Image 1',
            },
            {
                src: require("@/assets/images/student2.jpg"),
                alt: 'Placeholder Image 2',
                title: 'Image 2',
            },
            {
                src: require("@/assets/images/student3.jpg"),
                alt: 'Placeholder Image 3',
                title: 'Image 3',
            },
            {
                src: require("@/assets/images/student1.jpg"),
                alt: 'Placeholder Image 1',
                title: 'Image 1',
            },
            {
                src: require("@/assets/images/student2.jpg"),
                alt: 'Placeholder Image 2',
                title: 'Image 2',
            },
            {
                src: require("@/assets/images/student3.jpg"),
                alt: 'Placeholder Image 3',
                title: 'Image 3',
            }
        ]);
        const carouselBreakpoints = ref({
        1200: {
          itemsToShow: 4, 
          itemsToScroll: 2, 
        },
        992: {
          itemsToShow: 3, 
          itemsToScroll: 2, 
        },
        768: {
          itemsToShow: 2, 
          itemsToScroll: 2,
        },
        576: {
          itemsToShow: 1, 
          itemsToScroll: 1,
        },
      });
    // return
    return {
      slider_images,
      carouselBreakpoints
    }
  }


}
</script>

<style scoped>
.partners .carousel__item img {
    height: 200px;
    border-radius: 6px;
}

</style>