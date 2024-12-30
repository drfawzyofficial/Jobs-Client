<template>
    <Layout>
        <div class="terms container-fluid">
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
    name: 'Terms',
    components: {
        Breadcrumb,
        ImageWithText
    },
    setup() {
        // Calling, Declarations, Data
        const route = useRoute();
        const pageTitle = computed(() => route.meta.title);
        const content = `
            <h3 class="fw-bold">الشروط والأحكام لمنصة خطط</h3>
    <p>باستخدامك لمنصتنا، فإنك توافق على الالتزام بالشروط والأحكام التالية. يُرجى قراءة هذه الشروط بعناية لضمان الاستخدام الأمثل للمنصة</p>
   <div class="mt-2">
        <h4 class="fw-bold">1. استخدام المنصة</h4>
        <ul>
            <li>تُستخدم منصة خطط فقط للأغراض التعليمية والتطويرية، لربط الطلاب بالفرص المناسبة لقدراتهم واهتماماتهم</li>
            <li>يلتزم المستخدم باستخدام المنصة بطريقة مسؤولة وعدم إساءة استخدامها أو محاولة الوصول غير المصرح به إلى بيانات الآخرين</li>
        </ul>
    </div>
    
    <div class="mt-2">
        <h4 class="fw-bold">2. إنشاء الحساب</h4>
        <ul>
            <li>يُطلب من المستخدم تقديم بيانات دقيقة وكاملة عند إنشاء الحساب</li>
            <li>يتحمل المستخدم مسؤولية الحفاظ على سرية بيانات تسجيل الدخول الخاصة به وعدم مشاركتها مع الآخرين</li>
            <li>يحتفظ فريق منصة خطط بالحق في تعليق أو إغلاق أي حساب يثبت انتهاكه لهذه الشروط</li>
        </ul>
    </div>
     <div class="mt-2">
        <h4 class="fw-bold">3. المحتوى والفرص</h4>
        <ul>
            <li>تعمل المنصة كوسيط بين الطلاب ومقدمي الفرص، ولا تتحمل المسؤولية عن دقة أو مصداقية المعلومات المقدمة من الأطراف الثالثة</li>
            <li>يجب على المستخدم التحقق من تفاصيل الفرص المقدمة قبل اتخاذ أي إجراء بناءً عليها</li>
        </ul>
    </div>
     <div class="mt-2">
        <h4 class="fw-bold">4. حقوق الملكية الفكرية</h4>
        <ul>
            <li>جميع حقوق الملكية الفكرية المتعلقة بالمحتوى، التصميم، والشعار الخاص بمنصة خطط محفوظة</li>
            <li>يُحظر  نسخ، إعادة إنتاج، أو توزيع أي جزء من المنصة دون إذن كتابي مسبق</li>
        </ul>
    </div>
         <div class="mt-2">
        <h4 class="fw-bold">تعديلات على الشروط</h4>
        <ul>
           <li>تحتفظ المنصة بحق تعديل هذه الشروط في أي وقت. سيتم إعلام المستخدمين بأي تغييرات مهمة عبر البريد الإلكتروني أو إشعار داخل المنصة.</li>
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
.terms {
    padding-top: 52px;
    padding-bottom: 52px;
}
</style>