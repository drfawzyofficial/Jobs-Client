<template>
    <div class="why-choose-us-area pt-100 pb-75" id="WhyUs">
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
</template>

<script>
export default {
    name: 'WhyChooseUs'
}
</script>