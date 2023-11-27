<template>
    <div class="testimonials-area o-hidden ptb-100" id="Reviews">
        <div class="container">
            <div class="section-title" data-aos="fade-up" data-aos-duration="1200">
                <h2 class="nunito-font">Here’s what our amazing clients are saying</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur mauris amet, placerat fames orci elementum adipiscing.</p>
            </div>
            <div class="testimonials-slides-three">
                <carousel
                    :autoplay="5000"
                    :settings='settings'
                    :breakpoints='breakpoints'
                >
                    <slide 
                        v-for="slide in carouselItems" 
                        :key="slide.id"
                    >
                        <div class="single-testimonials-box">
                            <i class="flaticon-left-quote"></i>
                            <h5>{{slide.title}}</h5>
                            <p>{{slide.desc}}</p>
                            <div class="info">
                                <h3>{{slide.name}}</h3>
                                <span>{{slide.position}}</span>
                            </div>
                        </div>
                    </slide>
                    
                    <template #addons>
                        <Pagination />
                    </template>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'Testimonials',
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        carouselItems: [
            {
                id: 1,
                title: '“I never really lost it to begin with.”',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna facilisi viverra felis eleifend ornare urna. Eu mauris, velit volutpat massa volutpat. Risus pellentesque felis nisl ut laoreet euismod vel, integer. Massa sodales lorem nisi, sed massa volutpat.',
                name: 'Lora Joly',
                position: 'Founder at Envato',
            },
            {
                id: 2,
                title: '“Every moment is a fresh beginning.”',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna facilisi viverra felis eleifend ornare urna. Eu mauris, velit volutpat massa volutpat. Risus pellentesque felis nisl ut laoreet euismod vel, integer. Massa sodales lorem nisi, sed massa volutpat.',
                name: 'David Warner',
                position: 'Founder at ThemeForest',
            },
            {
                id: 3,
                title: '“Whatever you do, do it well. From now!”',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna facilisi viverra felis eleifend ornare urna. Eu mauris, velit volutpat massa volutpat. Risus pellentesque felis nisl ut laoreet euismod vel, integer. Massa sodales lorem nisi, sed massa volutpat.',
                name: 'James Anderson',
                position: 'Founder at EnvyTheme',
            },
        ],
        breakpoints: {
            0: {
                itemsToShow: 1,
                snapAlign: 'center',
			},
            576: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            768: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
        },
    }),
})
</script>