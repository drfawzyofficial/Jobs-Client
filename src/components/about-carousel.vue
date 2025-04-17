<template>
    <div class="about-carousel container-fluid">
        <div class="container">
            <div class="about-def mt-5">
                <div class="image-block">
                    <Carousel :autoplay="5000" :wrap-around="true" :dir="rtl">
                        <Slide v-for="(image, index) in slider_images" :key="index" class="image-item">
                            <div class="carousel__item">
                                <img :src="image.src" :alt="image.alt" :title="image.title"
                                    class="store-animation-shadow" loading="lazy" />
                            </div>
                        </Slide>
                        <template #addons>
                            <Pagination />
                        </template>
                    </Carousel>
                </div>

                <div class="about-content">
                    <h1 class="fw-bold">منصة خطط</h1>
                    <p class="mt-1">منصة خطط هي منصة رائدة قادرة على إيصالك لأفضل الفرص المتاحة حولك لتمكينك من تحقيق أهدافك عن طريق تسهيل وصولك إلى أفضل الفرص والأنشطة المتاحة حولك.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Import Methods, Packages, Files
import { ref } from 'vue'
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Pagination, Slide } from 'vue3-carousel'
export default {
    name: 'AboutCarousel',
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    setup() {

        // Calling, Declarations, Data
        const items = ref([
            { image: '@/assets/images/banner.jpg', alt: 'Image 1' },
            { image: '@/assets/images/banner.jpg', alt: 'Image 2' },
            { image: '@/assets/images/banner.jpg', alt: 'Image 3' },
        ]);
        const slider_images = ref([
            {
                src: require("@/assets/images/about_1.png"),
                alt: 'Placeholder Image 1',
                title: 'Image 1',
            },
            {
                src: require("@/assets/images/about_2.png"),
                alt: 'Placeholder Image 2',
                title: 'Image 2',
            },
            {
                src: require("@/assets/images/about_3.png"),
                alt: 'Placeholder Image 3',
                title: 'Image 3',
            }
        ]);

        // Return
        return {
            items,
            slider_images
        }
    }


}
</script>

<style scoped>
.about-carousel {
    padding: 52px 0;
    background-color: #F7F7F7;
}


.about-def {
    display: flex;
}

.about-carousel .image-block,
.about-carousel .about-content {
    width: 50%;
}

.about-carousel .about-content {
    display: flex;
    justify-content: center;
    flex-flow: column;
    padding-right: 30px;
}


.about-carousel .carousel__item img {
    height: 450px;
    width: 100%;
    border-radius: 8px;
}


.about-carousel .about-content p {
    color: #000;
}

@media (max-width: 991.98px) {
    .about-carousel .carousel__item img{
        height: 350px;
    }
}

@media (max-width: 767.98px) {
    .about-carousel .carousel__item img{
        height: 300px;
    }

    .about-def {
        flex-flow: wrap;
    }

    .about-carousel .about-content,
    .about-carousel .image-block {
        width: 100%;

    }

    .about-carousel .about-content {
        margin-top: 1rem;
        text-align: center;
        padding-right: 0;

    }
}

@media (max-width: 575.98px) {
    .about-carousel .carousel__item img {
        height: 200px;
    }
}

</style>