<template>
    <div class="khatat-statistics container-fluid py-5">
        <div class="container">
            <h2 class="fw-bold text-center">خطط في أرقام</h2>
            <div class="row" v-if="statistics">
                <div class="col-md-4 mt-4">
                    <div class="counter-box">
                        <i class="fa fa-thumbs-o-up"></i>
                        <span class="counter">{{ statistics.chances_count }}</span>
                        <p>عدد الفرص </p>
                    </div>
                </div>
                <div class="col-md-4 mt-4">
                    <div class="counter-box">
                        <i class="fa fa-thumbs-o-up"></i>
                        <span class="counter">{{ statistics.students_count }}</span>
                        <p>عدد المستفيدين </p>
                    </div>
                </div>
                <div class="col-md-4 mt-4">
                    <div class="counter-box">
                        <i class="fa fa-thumbs-o-up"></i>
                        <span class="counter">{{ statistics.admins_count }}</span>
                        <p>عدد المسؤولين </p>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-6">
                    <div class="khatat-statistics-content text-center">
                        <h3 class="fw-bold">من نحن؟</h3>
                        <p class="fw-medium">منصة خطط هي منصة رائدة قادرة على ايصالك
                            لافضل الفرص المتاحة حولك لتمكنك من تحقيق
                            اهدافك عن طريق تسهيل وصولك الى افضل الفرص
                            والأنشطة المتاحة حولك.</p>
                    </div>
                </div>
                <div class="col-md-6 mt-3 mt-md-0">
                    <div class="khatat-statistics-content text-center">
                        <h3 class="fw-bold">لماذا نحن؟</h3>
                        <p class="fw-medium">خطط هو المكان المناسب لك؛ لأننا في خطط نقوم
                            بوصلك بجميع الفرص المتاحة التي تتناسب مع
                            الاهتمامات التي حددتها، ويمكنك عندها اختيار ما ترغب
                            منها لأي غاية تريد. بالإضافة إلى ذلك، يمكنك من خلال
                            منصتنا متابعة تقدمك في طريقك لتحقيق هدفك من
                            خلال بعض الإحصائيات العامة والأدوات الأخرى.</p>
                    </div>
                </div>
                <div class="col-12 mt-3">
                    <div class="visit-about text-center">
                        <router-link class="btn btn-primary" to="/pages/about-us">زيارة <i class="bi bi-eye"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Import Methods, Packages, Files
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'
export default {
    name: 'Khatat-Statistics',
    setup() {
        onMounted(() => {
            $('.counter').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        })

        // Calling, Declarations, Data
        const store = useStore()
        const navLinks = ref(["الرئيسية", "المميزات", "الخدمات", "العملية", "الأسئلة الشائعة", "التواصل"]);
        const statistics = computed(() => store.state.Auth.helperStatistics);
        store.dispatch("Auth/GetHelperStatistics")
        // return
        return {
            navLinks,
            statistics
        }
    }


}
</script>

<style scoped>
.counter-box {
    display: block;
    background: #F7F7F7;
    padding: 40px 20px 37px;
    text-align: center
}

.counter-box p {
    margin: 5px 0 0;
    padding: 0;
    color: #909090;
    font-size: 18px;
    font-weight: 500
}

.counter-box i {
    font-size: 60px;
    margin: 0 0 15px;
    color: #d2d2d2
}

.counter {
    display: block;
    font-size: 32px;
    font-weight: 700;
    color: #666;
    line-height: 28px
}

.counter-box {
    transition: all 0.3s ease-in-out;
}

.counter-box:hover {
    background: #EEEEEE;
    color: #fff
}
</style>