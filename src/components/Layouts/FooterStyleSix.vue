<template>
    <div class="template-footer-six pt-100" id="Contact">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="single-footer-widget">
                        <router-link to="/" class="logo">
                            <img src="../../assets/images/logo.png" alt="logo">
                        </router-link>
                        <p>Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim.</p>
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
                                <input type="text" class="input-newsletter" placeholder="Enter your email address" name="EMAIL">
                                <button type="submit" class="btn-style-one orange-color">Subscribe Now <i class="ph-caret-right"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="copyright-area">
            <div class="container">
                <p>
                    Copyright @{{currentYear}} Vumy. All Rights Reserved by 
                    <a href="https://envytheme.com/" target="_blank">EnvyTheme</a>
                </p>
            </div>
        </div>
        <div class="shape5"><img src="../../assets/images/shape/shape5.png" alt="shape"></div>
    </div>
</template>

<script>
export default {
    name: 'FooterStyleSix',
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    }
}
</script>