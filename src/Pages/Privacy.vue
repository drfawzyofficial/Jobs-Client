<template>
    <Layout>
        <div class="privacy container-fluid">
            <div class="container">
                <div class="content" v-html="content"></div>
            </div>
        </div>
    </Layout>
</template>

<script>
// Import Methods, Packages, Files
import Breadcrumb from "@/components/Breadcrumb.vue";
import ImageWithText from "@/components/Image-with-Text.vue";
import { computed } from 'vue'
import { useRoute } from 'vue-router';

export default {
    name: 'Privacy',
    components: {
        Breadcrumb,
        ImageWithText
    },
    setup() {
        // Calling, Declarations, Data
        const route = useRoute();
        const pageTitle = computed(() => route.meta.title);
        const content = `
            <h3 class="fw-bold">سياسة الخصوصية لمنصة خطط</h3>
            <p>تاريخ آخر تحديث: 2025/04/23</p>
            <hr>
            <p>في منصة "خطط"، نحرص على حماية خصوصية مستخدمينا، ونعمل على ضمان الشفافية في كيفية جمع واستخدام وحماية المعلومات الشخصية. باستخدامك للمنصة، فإنك توافق على ما ورد في هذه السياسة.</p>

            <div class="mt-2">
                <h4 class="fw-bold">1. المعلومات التي نقوم بجمعها</h4>
                <ul style="list-style: unset; padding-right: 30px;">
                    <li>عند استخدامك للمنصة أو تسجيلك فيها، قد نقوم بجمع البيانات التالية:</li>
                    <ul style="list-style: unset; padding-right: 30px;">
                        <li>الاسم، البريد الإلكتروني، العمر، المرحلة الدراسية، المدينة، وغيرها من المعلومات التي تقدمها عند التسجيل.</li>
                        <li>بيانات استخدام المنصة مثل تفاعلك مع الفرص أو الصفحات التي تزورها.</li>
                        <li>أي معلومات تقدمها عند التواصل معنا أو التقديم على الفرص.</li>
                    </ul>
                </ul>
            </div>

            <div class="mt-2">
                <h4 class="fw-bold">2. كيف نستخدم المعلومات</h4>
                <ul style="list-style: unset; padding-right: 30px;">
                    <li>نستخدم البيانات التي نجمعها من أجل:</li>
                    <ul style="list-style: unset; padding-right: 30px;">
                        <li>تخصيص وعرض الفرص المناسبة لكل مستخدم.</li>
                        <li>تحسين تجربة المستخدم وتطوير الخدمات.</li>
                        <li>التواصل معك بخصوص الفرص الجديدة أو التحديثات المهمة.</li>
                        <li>حفظ بيانات حسابك لتسهيل استخدامك المستقبلي.</li>
                    </ul>
                </ul>
            </div>

            <div class="mt-2">
                <h4 class="fw-bold">3. مشاركة المعلومات</h4>
                <ul style="list-style: unset; padding-right: 30px;">
                    <li>لا تتم <strong>مشاركة أي معلومات تعريفية شخصية</strong> (مثل اسمك أو بريدك الإلكتروني أو أي معلومات يمكن أن تحدد هويتك كشخص) مع أي طرف ثالث.</li>
                    <li>قد نقوم بمشاركة <strong>بيانات عامة غير مرتبطة بأي شخص</strong> (مثل عدد المستخدمين، أو أكثر الفرص تفاعلاً) لأغراض تحليلية وتحسين الخدمة، بشرط ألا تحتوي على ما يحدد هوية أي مستخدم.</li>
                    <li>يُسمح بمشاركة البيانات فقط في الحالات التالية:</li>
                    <ul style="list-style: unset; padding-right: 30px;">
                        <li>بعد الحصول على موافقة صريحة من المستخدم.</li>
                        <li>إذا كانت المشاركة ضرورية لتقديم خدمة طلبها المستخدم (مثل التسجيل في دورة عبر طرف خارجي).</li>
                        <li>إذا طُلب ذلك من جهة رسمية بناءً على أنظمة المملكة.</li>
                        <li>مع جهات موثوقة تقدم خدمات للمنصة (مثل تحليل البيانات أو الدعم الفني)، بشرط التزامها بحماية وسرية البيانات.</li>
                    </ul>
                </ul>
            </div>

            <div class="mt-2">
                <h4 class="fw-bold">4. أمن المعلومات</h4>
                <ul style="list-style: unset; padding-right: 30px;">
                    <li>نطبق إجراءات فنية وتنظيمية لحماية بيانات المستخدم، ومنها:</li>
                    <ul style="list-style: unset; padding-right: 30px;">
                        <li>استخدام تشفير عند نقل البيانات.</li>
                        <li>تخزين المعلومات في بيئة آمنة.</li>
                        <li>تقييد الوصول إلى البيانات للموظفين المعنيين فقط.</li>
                    </ul>
                </ul>
            </div>

            <div class="mt-2">
                <h4 class="fw-bold">5. حقوق المستخدم</h4>
                <ul style="list-style: unset; padding-right: 30px;">
                    <li>يحق لك كمستخدم ما يلي:</li>
                    <ul style="list-style: unset; padding-right: 30px;">
                        <li>الوصول إلى بياناتك الشخصية المسجلة لدينا.</li>
                        <li>طلب تعديل أو تحديث معلوماتك.</li>
                        <li>طلب حذف حسابك وبياناتك بالكامل.</li>
                        <li>سحب الموافقة على استخدام بياناتك، متى كان ذلك ممكنًا.</li>
                    </ul>
                    <li>لطلب ممارسة أي من هذه الحقوق، يُرجى التواصل معنا عبر البريد الإلكتروني: khattitsite@gmail.com.</li>
                </ul>
            </div>

            <div class="mt-2">
                <h4 class="fw-bold">6. ملفات تعريف الارتباط (Cookies)</h4>
                <ul style="list-style: unset; padding-right: 30px;">
                    <li>تستخدم المنصة ملفات "كوكيز" لتحسين تجربة التصفح. يمكنك التحكم في إعدادات الكوكيز من خلال إعدادات متصفحك.</li>
                </ul>
            </div>

            <div class="mt-2">
                <h4 class="fw-bold">7. التعديلات على السياسة</h4>
                <ul style="list-style: unset; padding-right: 30px;">
                    <li>قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سيتم إعلامك عند وجود أي تغيير كبير. استمرارك في استخدام المنصة بعد التعديل يُعد موافقة على السياسة الجديدة.</li>
                </ul>
            </div>

            <div class="mt-2">
                <h4 class="fw-bold">8. التواصل معنا</h4>
                <ul style="list-style: unset; padding-right: 30px;">
                    <li>لأي استفسار أو طلب متعلق بسياسة الخصوصية، يُرجى مراسلتنا على: khattitsite@gmail.com.</li>
                </ul>
            </div>
            `


        // Return
        return {
            pageTitle,
            content
        }
    }
}
</script>

<style scoped>
.privacy {
    padding-top: 52px;
    padding-bottom: 52px;
}
</style>