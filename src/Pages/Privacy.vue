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
    <p>خصوصيتك هي أولويتنا، ونحن ملتزمون بحماية بياناتك وفق أعلى معايير الأمان. توضح هذه السياسة كيفية جمع واستخدام وحماية بياناتك الشخصية عند استخدام المنصة</p>
   
    </div>
     <div class="mt-2">
        <h4 class="fw-bold">1. البيانات التي نجمعها</h4>
        <ul>
            <li>المعلومات الإلزامية: تشمل الاسم، البريد الإلكتروني، رقم الهاتف، الجنس، تاريخ الميلاد، مكان الإقامة، وكلمة المرور.</li>
            <li>المعلومات الاختيارية: تشمل الاهتمامات الشخصية ودرجات الطالب في اختبارات مقياس القدرات العقلية واللغة الإنجليزية.</li>
        </ul>
    </div>
<div class="mt-2">
        <h4 class="fw-bold">2. كيفية استخدام البيانات</h4>
        <ul>
            <li>لتقديم الخدمات وربط المستخدمين بالفرص المناسبة.</li>
            <li>لتحسين تجربة المستخدم وتطوير خدمات المنصة.</li>
            <li>لتحليل التوجهات العامة واستخدامها في تحسين جودة الفرص المقدمة.</li>
        </ul>
    </div>
    <div class="mt-2">
        <h4 class="fw-bold">3. مشاركة البيانات</h4>
        <ul>
            <li>لن نشارك أي معلومات توحي بهوية المستخدم الشخصية مع أطراف ثالثة.</li>
            <li>قد يتم استخدام البيانات العامة المجمعة وغير المرتبطة بهوية المستخدم لتحسين الخدمات وتطوير جودة الفرص بالتعاون مع مقدميها.</li>
        </ul>
    </div>
    <div class="mt-2">
        <h4 class="fw-bold">4. أمان البيانات</h4>
        <ul>
            <li>تُحفظ جميع البيانات في خوادم آمنة ووفق أعلى معايير الحماية.</li>
            <li>يتم تطبيق تدابير تقنية وتنظيمية لحماية بيانات المستخدمين من الوصول غير المصرح به أو أي تهديدات أخرى.</li>
        </ul>
    </div>
     <div class="mt-2">
        <h4 class="fw-bold">5. حقوق المستخدم</h4>
        <ul>
            <li>للمستخدم الحق في الوصول إلى بياناته الشخصية، تعديلها، أو حذفها عند الطلب.</li>
            <li>يمكن للمستخدم سحب موافقته على استخدام بياناته لأغراض محددة في أي وقت.</li>
        </ul>
    </div>
    <div class="mt-2">
        <h4 class="fw-bold">6. تعديلات على سياسة الخصوصية</h4>
        <ul>
           <li>قد يتم تعديل هذه السياسة حسب الحاجة لتلبية المتطلبات التنظيمية أو لتحسين الخدمات. سيتم إعلام المستخدمين بأي تغييرات مهمة.</li>
           <li>إذا كان لديك أي استفسارات حول الشروط أو سياسة الخصوصية، يمكنك التواصل معنا عبر البريد الإلكتروني أو من خلال صفحة الدعم داخل المنصة.</li>
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