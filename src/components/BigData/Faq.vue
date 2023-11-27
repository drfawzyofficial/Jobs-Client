<template>
    <div class="faq-area bg-f9f9f9 pt-100" id="FAQ">
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
</template>

<script>
export default {
    name: 'Faq',
}
</script>