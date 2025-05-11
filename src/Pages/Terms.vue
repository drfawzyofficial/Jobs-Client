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
<h3 class="fw-bold">الشروط والأحكام لاستخدام منصة خطط</h3>
<p>تاريخ آخر تحديث: 2025/04/23</p>
<hr>
<p>باستخدامك لمنصتنا، فإنك توافق على الالتزام بالشروط والأحكام التالية. يُرجى قراءة هذه الشروط بعناية لضمان الاستخدام الأمثل للمنصة.</p>

<div class="mt-2">
    <h4 class="fw-bold">أولاً: التعريفات</h4>
    <ul style="list-style: unset; padding-right: 30px;">
        <li><strong>المنصة</strong>: تشير إلى موقع "خطط" الإلكتروني وأي تطبيق تابع له.</li>
        <li><strong>المستخدم</strong>: أي شخص يقوم باستخدام المنصة، سواء للتصفح أو لإنشاء حساب أو للاستفادة من الخدمات.</li>
        <li><strong>الخدمات</strong>: جميع المحتويات والأدوات التي تقدمها المنصة، مثل الفرص التعليمية، الدورات، المعسكرات، الاستشارات، وغيرها.</li>
        <li><strong>مقدمو الخدمات</strong>: الجهات أو الأفراد الذين يعرضون فرصًا أو محتوى عبر منصة "خطط".</li>
        <li><strong>الطرف الثالث</strong>: أي جهة خارجية لا تتبع لمنصة "خطط" ولكن قد يتم الوصول إلى خدماتها عبر المنصة.</li>
    </ul>
</div>

<div class="mt-2">
    <h4 class="fw-bold">ثانيًا: استخدام المنصة</h4>
    <ul style="list-style: unset; padding-right: 30px;">
        <li>باستخدامك "خطط"، فأنت توافق على هذه الشروط.</li>
        <li>يُمنع استخدام المنصة لأي غرض غير قانوني أو مخالف للأدب العام أو يخالف القوانين المعمول بها.</li>
        <li>لا يجوز نسخ أو إعادة نشر أي محتوى من المنصة دون إذن مسبق.</li>
    </ul>
</div>

<div class="mt-2">
    <h4 class="fw-bold">ثالثًا: الحسابات</h4>
    <ul style="list-style: unset; padding-right: 30px;">
        <li>يجب تقديم معلومات صحيحة وحديثة عند التسجيل.</li>
        <li>المستخدم مسؤول عن الحفاظ على سرية معلومات الدخول الخاصة به.</li>
        <li>يحق لإدارة "خطط" إيقاف أو حذف الحسابات التي تنتهك الشروط.</li>
    </ul>
</div>

<div class="mt-2">
    <h4 class="fw-bold">رابعًا: الخصوصية</h4>
    <ul style="list-style: unset; padding-right: 30px;">
        <li>نحن نحترم خصوصيتك، ونتعامل مع معلوماتك بسرية تامة.</li>
        <li>لن نشارك بياناتك مع أي جهة خارجية إلا بموافقتك أو حسب الأنظمة.</li>
    </ul>
</div>

<div class="mt-2">
    <h4 class="fw-bold">خامسًا: حدود المسؤولية</h4>
    <ul style="list-style: unset; padding-right: 30px;">
        <li>منصة "خطط" غير مسؤولة عن جودة أو دقة المحتوى أو الخدمات المقدمة من مقدمي الخدمات.</li>
        <li>"خطط" لا تضمن النتائج أو الفائدة من أي دورة، معسكر تدريبي، أو خدمة تعليمية يتم الوصول إليها عبر المنصة.</li>
        <li>أي تعامل يتم بين المستخدم وأي طرف ثالث من خلال المنصة هو مسؤولية المستخدم بالكامل.</li>
        <li>"خطط" لا تتحمل أي مسؤولية عن أضرار مباشرة أو غير غير مباشرة ناتجة عن استخدام المنصة أو الخدمات الموجودة بها.</li>
    </ul>
</div>

<div class="mt-2">
    <h4 class="fw-bold">سادسًا: التعديلات</h4>
    <ul style="list-style: unset; padding-right: 30px;">
        <li>يحق لإدارة "خطط" تعديل هذه الشروط في أي وقت. يتم إشعار المستخدمين بالتحديثات، ويعتبر استمرار الاستخدام بعد التعديل موافقة ضمنية.</li>
    </ul>
</div>

<div class="mt-2">
    <h4 class="fw-bold">سابعًا: القانون المعمول به</h4>
    <ul style="list-style: unset; padding-right: 30px;">
        <li>تخضع هذه الشروط لأحكام وأنظمة المملكة العربية السعودية، وتختص المحاكم السعودية بالنظر في أي نزاع يتعلق بهذه الشروط.</li>
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