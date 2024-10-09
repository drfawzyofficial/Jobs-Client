<template>
    <div class="about-carousel container-fluid">
        <div class="container">
            <div class="about-def mt-5">
                <div class="image-block">
                    <img src="@/assets/images/banner.jpg" class="store-animation-shadow" alt="banner" />
                </div>
                <div class="about-content">
                    <h3>منصة خطط</h3>
                    <p class="mt-3">منصة خطط هي منصة رائده قادرة على ايصالك لافضل الفرص المتاحة حولك لتمكنك من تحقيق اهدافك عن طريق تسهيل وصولك الى افضل الفرص والأنشطة المتاحة حولك</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Import Methods, Packages, Files
import {  ref } from 'vue'

export default {
    name: 'AboutCarousel',
    setup() {

        // Calling, Declarations, Data
        const items = ref([
            { image: '@/assets/images/banner.jpg', alt: 'Image 1' },
            { image: '@/assets/images/banner.jpg', alt: 'Image 2' },
            { image: '@/assets/images/banner.jpg', alt: 'Image 3' },
        ]);

        // Return
        return {
            items
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

.about-carousel .about-content p {
    font-size: 20px;
}

.about-carousel .image-block  img {
    height: 450px;
    width: 100%;
    border-radius: 8px;
}


.about-carousel .about-content p {
    color: #000;
    font-size: 20px;
}

@media (max-width: 991.98px) {

    .about-carousel .images-block img {
        height: 400px;
    }
}

@media (max-width: 767.98px) {

    .about-carousel .images-block img {
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
        margin-top: 2.5rem;
        text-align: center;
        padding: 0 30px;
    }
}
</style>