<template>
    <div class="big-data-banner-area" id="Home">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="big-data-banner-content">
                        <span class="sub-title" data-aos="fade-up" data-aos-duration="1200">#Get your 7 days free trial</span>
                        <h1 class="nunito-font" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">Big data, bigger ideas, big deal</h1>
                        <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">Velit hendrerit sit auctor tempor sem. Congue mi tempor condimentum felis arcu, non cursus. Nulla pharetra porttitor sed platea arcu et leo odio.</p>
                        <div class="btn-box" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                            <router-link to="/contact" class="btn-style-one orange-color">
                                Get Started Now 
                                <i class="ph-caret-right"></i>
                            </router-link>
                            <router-link to="/about-us" class="btn-style-one white-color">
                                About Us 
                                <i class="ph-caret-right"></i>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="big-data-banner-image" data-aos="fade-up" data-aos-duration="1200">
                        <img src="../../assets/images/banner/banner6.png" alt="banner-image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainBanner'
}
</script>