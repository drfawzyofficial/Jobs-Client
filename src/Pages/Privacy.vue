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