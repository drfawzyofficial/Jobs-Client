<template>
    <div>
        <NavbarStyleSix />
        <MainBanner />
        <Features />
        <DataValue />
        <WhyChooseUs />
        <WorkingProcess />
        <DataResources />
        <Testimonials />
        <Faq />
        <FooterStyleSix />
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
import NavbarStyleSix from '../components/Layouts/NavbarStyleSix'
import MainBanner from '../components/BigData/MainBanner'
import Features from '../components/BigData/Features'
import DataValue from '../components/BigData/DataValue'
import WhyChooseUs from '../components/BigData/WhyChooseUs'
import WorkingProcess from '../components/BigData/WorkingProcess'
import Testimonials from '../components/BigData/Testimonials'
import Faq from '../components/BigData/Faq'
import FooterStyleSix from '../components/Layouts/FooterStyleSix'

export default {
    name: 'BigDataPage',
    components: {
        NavbarStyleSix,
        MainBanner,
        Features,
        DataValue,
        WhyChooseUs,
        WorkingProcess,
        Testimonials,
        Faq,
        FooterStyleSix,
    }
}
</script>