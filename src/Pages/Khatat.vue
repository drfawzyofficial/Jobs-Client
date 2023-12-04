<template>
    <div>
        <div :class="['navbar-area navbar-style-three', { 'is-sticky': isSticky }]">
            <div class="vumy-nav">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <router-link class="navbar-brand" to="/">
                            <img src="../assets/images/white-logo.png" alt="logo">
                        </router-link>
                        <router-link class="navbar-brand" to="/">
                            <img src="../assets/images/logo.png" alt="logo">
                        </router-link>

                        <div class="navbar-toggler" @click="show = !show" :aria-pressed="show ? 'true' : 'false'"
                            v-bind:class="{ show: button_show_state }" v-on:click="button_show_state = !button_show_state">
                            <span class="icon-bar top-bar"></span>
                            <span class="icon-bar middle-bar"></span>
                            <span class="icon-bar bottom-bar"></span>
                        </div>

                        <div class="collapse navbar-collapse" :class="{ show: show }">
                            <ul class="navbar-nav">
                                <li class="nav-item" v-for="(link, index) in navLinks" :key="index">
                                    <a class="nav-link" @click="goToSection(link)">{{ link }}</a>
                                </li>
                            </ul>
                        </div>

                        <div class="others-option">
                            <a data-bs-toggle="modal" data-bs-target="#Signup" class="btn-style-one green-color2">
                                Signup
                                <i class="ph-caret-right"></i>
                            </a>
                        </div>

                    </nav>
                </div>
            </div>
        </div>
        <div class="homePage" id="الرئيسية">
            <div class="overlay"></div>
         </div>
        <div class="features-area pb-75" id="المميزات">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200">
                    <div class="features-item">
                        <div class="icon">
                            <i class="flaticon-big-data"></i>
                        </div>
                        <h3 class="nunito-font">Big Data Integration</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis, donec.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                    <div class="features-item">
                        <div class="icon">
                            <i class="flaticon-data-management"></i>
                        </div>
                        <h3 class="nunito-font">Big Data Management</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis, donec.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                    <div class="features-item">
                        <div class="icon">
                            <i class="flaticon-monitor"></i>
                        </div>
                        <h3 class="nunito-font">Big Data Analysis</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis, donec.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="overview-area ptb-100 bg-f9f9f9" id="الفوائد">
        <div class="container">
            <div class="section-title">
                <h2 class="nunito-font">Big Data Value & Benefits</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur mauris amet, placerat fames orci elementum adipiscing.</p>
            </div>
            <div class="overview-item-style-two">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12 overview-image" data-aos="fade-up" data-aos-duration="1200">
                        <img src="../assets/images/overview/overview7.png" alt="overview-image">
                    </div>
                    <div class="col-lg-6 col-md-12 overview-content">
                        <h2 class="nunito-font">Sales Increase</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis, donec.</p>
                        <ul class="overview-list">
                            <li data-aos="fade-up" data-aos-duration="1200">
                                <i class="flaticon-draw-check-mark"></i>
                                <h3>Recommender Systems</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis, donec.</p>
                            </li>
                            <li data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                                <i class="flaticon-draw-check-mark"></i>
                                <h3>Demand Prediction</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis, donec.</p>
                            </li>
                            <li data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                                <i class="flaticon-draw-check-mark"></i>
                                <h3>Omnichannel Analytics</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis, donec.</p>
                            </li>
                            <li data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                                <i class="flaticon-draw-check-mark"></i>
                                <h3>Lead Generation</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis, donec.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
           
        </div>
        </div>
        <div class="why-choose-us-area pt-100 pb-75" id="لماذا نحن؟">
        <div class="container">
            <div class="section-title">
                <h2 class="nunito-font">Why Choose Vumy?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur mauris amet, placerat fames orci elementum adipiscing.</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200">
                    <div class="single-why-choose-us-box">
                        <div class="icon">
                            <i class="flaticon-expand"></i>
                        </div>
                        <h3 class="nunito-font">
                            <router-link to="/services-details">Easy to Deploy</router-link>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis, donec.</p>
                        <router-link to="/services-details" class="link-btn">
                            Learn More 
                            <i class="ph-caret-right"></i>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                    <div class="single-why-choose-us-box active">
                        <div class="icon">
                            <i class="flaticon-return-on-investment"></i>
                        </div>
                        <h3 class="nunito-font">
                            <router-link to="/services-details">Cost Effective</router-link>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis, donec.</p>
                        <router-link to="/services-details" class="link-btn">
                            Learn More 
                            <i class="ph-caret-right"></i>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                    <div class="single-why-choose-us-box">
                        <div class="icon">
                            <i class="flaticon-simple"></i>
                        </div>
                        <h3 class="nunito-font">
                            <router-link to="/services-details">Simple & Flexible</router-link>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis, donec.</p>
                        <router-link to="/services-details" class="link-btn">
                            Learn More 
                            <i class="ph-caret-right"></i>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200">
                    <div class="single-why-choose-us-box">
                        <div class="icon">
                            <i class="flaticon-bell"></i>
                        </div>
                        <h3 class="nunito-font">
                            <router-link to="/services-details">Real-Time Alerts</router-link>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis, donec.</p>
                        <router-link to="/services-details" class="link-btn">
                            Learn More 
                            <i class="ph-caret-right"></i>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                    <div class="single-why-choose-us-box">
                        <div class="icon">
                            <i class="flaticon-maximize"></i>
                        </div>
                        <h3 class="nunito-font">
                            <router-link to="/services-details">Massively Scalable</router-link>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis, donec.</p>
                        <router-link to="/services-details" class="link-btn">
                            Learn More 
                            <i class="ph-caret-right"></i>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                    <div class="single-why-choose-us-box">
                        <div class="icon">
                            <i class="flaticon-security"></i>
                        </div>
                        <h3 class="nunito-font">
                            <router-link to="/services-details">Robust Security</router-link>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis, donec.</p>
                        <router-link to="/services-details" class="link-btn">
                            Learn More 
                            <i class="ph-caret-right"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="working-process-area ptb-100 bg-13965f" id="العملية">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="working-process-img" data-aos="fade-up" data-aos-duration="1200">
                        <img src="../assets/images/working-process2.png" alt="working-process">
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="working-process-text">
                        <span class="sub-title">Our Working Process</span>
                        <h2 class="nunito-font">Dedicated to help anything people’s needs</h2>
                        <ul class="working-process-list">
                            <li data-aos="fade-up" data-aos-duration="1200">
                                <div class="number">
                                    1
                                </div>
                                <h3>Integrate</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis, donec.</p>
                            </li>
                            <li data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                                <div class="number">
                                    2
                                </div>
                                <h3>Manage</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis, donec.</p>
                            </li>
                            <li data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                                <div class="number">
                                    3
                                </div>
                                <h3>Analyze</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis, donec.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="shape10"><img src="../assets/images/shape/shape10.png" alt="shape"></div>
        <div class="shape11"><img src="../assets/images/shape/shape11.png" alt="shape"></div>
        </div>
        <div class="testimonials-area o-hidden ptb-100" id="التقييمات">
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
        <div class="faq-area bg-f9f9f9 pt-100" id="الأسئلة الشائعة">
        <div class="container">
            <div class="section-title">
                <h2 class="nunito-font">Dedicated to help anything people’s needs</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur mauris amet, placerat fames orci elementum adipiscing.</p>
            </div>
            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <div class="faq-accordion">
                        <div class="accordion" id="faqAccordion">
                            <div class="accordion-item" data-aos="fade-up" data-aos-duration="1200">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What is the company culture?
                                </button>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                    <div class="accordion-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis, donec.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Which market is the startup targeting?
                                </button>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div class="accordion-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis, donec.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    What is the runway of the business?
                                </button>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div class="accordion-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis, donec.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Who are the investors in the company?
                                </button>
                                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div class="accordion-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis, donec.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    How can I safely browse the internet?  
                                </button>
                                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div class="accordion-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis, donec.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="ask-question-form">
                        <h3 class="nunito-font">Have a question?</h3>
                        <form @submit.prevent>
                            <div class="form-group">
                                <input type="text" placeholder="Full Name">
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Enter your email address">
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Company">
                            </div>
                            <div class="form-group">
                                <textarea cols="30" rows="5" placeholder="Your Message"></textarea>
                            </div>
                            <button type="submit" class="btn-style-one orange-color">Submit Now <i class="ph-caret-right"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="template-footer-six pt-100" id="التواصل">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-footer-widget">
                            <router-link to="/" class="logo">
                                <img src="../assets/images/logo.png" alt="logo">
                            </router-link>
                            <p>Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua minim.</p>
                            <ul class="social-links">
                                <li>
                                    <a href="https://www.https://www.linkedin.com/.com/" target="_blank">
                                        <i class="flaticon-facebook-app-symbol"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <i class="flaticon-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i class="flaticon-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i class="flaticon-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-footer-widget">
                            <h3 class="nunito-font">Contact Info</h3>
                            <ul class="footer-contact-info">
                                <li>
                                    <i class="ph-phone-call"></i>
                                    <span>Mon to Fri : 10:00AM - 06:00PM</span>
                                    <a href="tel:1235421457852">+123 54214 578 52</a>
                                </li>
                                <li>
                                    <i class="ph-envelope-simple-open"></i>
                                    <span>Do You Have a Question?</span>
                                    <a href="mailto:hello@vumy.com">hello@vumy.com</a>
                                </li>
                                <li>
                                    <i class="ph-map-pin"></i>
                                    <span>2750 Quadra Street Victoria, Canada</span>
                                    <a href="#" target="_blank">Find Us on Map</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-footer-widget">
                            <h3>Newsletter</h3>
                            <div class="box">
                                <p>Latest resources, sent to your inbox weekly</p>
                                <form class="newsletter-form" @submit.prevent>
                                    <input type="text" class="input-newsletter" placeholder="Enter your email address"
                                        name="EMAIL">
                                    <button type="submit" class="btn-style-one orange-color">Subscribe Now <i
                                            class="ph-caret-right"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="copyright-area">
                <div class="container">
                    <p>
                        Copyright @{{ new Date().getFullYear() }} جميع الحقوق محفوظة لدى خطط
                    </p>
                </div>
            </div>
            <div class="shape5"><img src="../assets/images/shape/shape5.png" alt="shape"></div>
        </div>
        <!-- Signup Modal -->
        <div class="modal fade" id="Signup" tabindex="-1" aria-labelledby="Signup" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="SignupTitle">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Signup Modal -->
    </div>
</template>

<script>
// Import Methods, Packages, Files
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
export default {
    name: 'Khatat',
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    setup() {
        onMounted(() => {
            const that = this;
            window.addEventListener("scroll", () => {
                let scrollPos = window.scrollY;
                if (scrollPos >= 100) {
                    that.isSticky = true;
                } else {
                    that.isSticky = false;
                }
            });
        });
        // Calling, Declarations, Data
        const store = useStore()
        const navLinks = ref(["الرئيسية", "الفوائد", "لماذا نحن؟", "العملية", "التقييمات", "الأسئلة الشائعة", "التواصل"]);
        const isSticky = ref(false);
        const show = ref(false);
        const button_show_state = ref(false);
        const settings = ref({
            itemsToShow: 1,
            snapAlign: 'center',
        });
        const carouselItems = ref([
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
        ])
        const breakpoints = {
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
        }

        // Methods
        const goToSection = (sectionName) => {
            const el = document.getElementById(sectionName);
            el.scrollIntoView({ behavior: "smooth" });
        }

        // Return
        return {
            navLinks,
            goToSection,
            isSticky,
            show,
            button_show_state,
            settings,
            carouselItems,
            breakpoints
        }
    }
}
</script>
