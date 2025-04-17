<template>
  <div id="HomeSlider" class="home-slider carousel slide" data-bs-ride="true">
    <div class="carousel-inner">
      <div class="carousel-inner">
        <div class="carousel-item" v-for="(item, index) in sliders" :key="index" :class="{ active: index === 0 }">
          <img :src="item.image.src" :alt="item.image.alt" :title="item.image.title" class="store-animation-shadow" loading="lazy"/>
          <div class="carousel-caption">
            <h2 class="heading-slider">{{ item.heading }}</h2>
            <router-link class="btn btn-primary d-inline-block mt-2" to="/account/login">ابدأ الخدمة</router-link>
          </div>
          <div class="overlay"></div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#HomeSlider" data-bs-slide="next">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#HomeSlider" data-bs-slide="prev">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
// Import Methods, Packages, Files
import { useStore } from 'vuex'
import { ref } from 'vue'
export default {
  name: 'Home-Slider',
  setup() {

    // Calling, Declarations, Data
    const store = useStore()
    const sliders = ref([
      {
        heading: "توعية الطلاب بالفرص المتاحة ومتطلباتها",
        image: {
          src: require("@/assets/images/home_1.png"),
          alt: 'Placeholder Image 1',
          title: 'Image 1',
        },
      },
      {
        heading: "شرح المتطلبات اللازمة للاستفادة من الفرص",
        image: {
          src: require("@/assets/images/home_2.png"),
          alt: 'Placeholder Image 2',
          title: 'Image 2',
        },
      },
      {
        heading: "تقديم معلومات شاملة عن الفرص المتوفرة",
        image: {
          src: require("@/assets/images/home_3.png"),
          alt: 'Placeholder Image 3',
          title: 'Image 3',
        },
      },
    ]);
    // return
    return {
      sliders
    }
  }


}
</script>

<style scoped>
.home-slider .carousel-item img {
  height: 650px;
  width: 100%;
}

.home-slider  .carousel-control-next, .home-slider .carousel-control-prev, .home-slider .carousel-caption {
  z-index: 2;
}
.home-slider .btn-primary {
  background-color: #44B797 !important;
  border-color: #44B797 !important
}
.home-slider .btn-primary:hover {
  background-color: #1c725a !important;
  border-color: #1c725a !important
}
@media (max-width: 575.98px) {
  .home-slider .carousel-item img {
  height: 350px;
}
.heading-slider {
  font-size: 20px;
}
}
</style>