<template>
  <div class="accordionSection container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="faq-image">
            <img class="store-animation-shadow" src="@/assets/images/faq.jpg" />
          </div>
        </div>
        <div class="col-lg-6 mt-4 mt-lg-0">
          <h3>الأسئلة الشائعة</h3>
          <div class="accordion accordion-flush mt-3" id="accordionFlushExample">
            <div v-for="(item, index) in faqItems" :key="index" class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  :data-bs-target="`#faq-${index}`" aria-expanded="false" :aria-controls="`faq-${index}`">
                  <span>{{ item.question }}</span>
                </button>
              </h2>
              <div :id="`faq-${index}`" class="accordion-collapse collapse" :aria-labelledby="`heading-${index}`"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <p class="mb-0">{{ item.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'FAQComponent',
  setup() {
    // Data for FAQ items
    const faqItems = ref([
      {
        question: 'كيف يمكنني التسجيل في منصة خطط؟',
        answer: 'يمكنك التسجيل بسهولة من خلال النقر على زر "تسجيل" في الصفحة الرئيسية وملء البيانات المطلوبة، أو يمكنك التسجيل باستخدام حساباتك على وسائل التواصل الاجتماعي.',
      },
      {
        question: 'كيف أبحث عن الفرص المتاحة في منطقتي؟',
        answer: 'بمجرد تسجيل الدخول إلى حسابك، يمكنك استخدام ميزة البحث المتقدم في المنصة وتحديد موقعك والأنشطة التي تهمك للعثور على أفضل الفرص المتاحة بالقرب منك.',
      },
      {
        question: 'كيف أستطيع التقديم على الفرص المتاحة؟',
        answer: 'بعد العثور على الفرصة التي تهمك، اضغط على "التقديم" واتبع التعليمات المطلوبة لإرسال طلبك. سيقوم مزود الفرصة بمراجعة طلبك والتواصل معك عند القبول.',
      },
      {
        question: 'هل يمكنني التواصل مع مقدمي الفرص مباشرة؟',
        answer: 'نعم، توفر المنصة خيار التواصل المباشر مع مقدمي الفرص من خلال صفحة تفاصيل الفرصة. يمكنك إرسال استفساراتك أو طلب المزيد من المعلومات قبل التقديم.',
      },
      {
        question: 'هل توجد تكلفة لاستخدام المنصة؟',
        answer: 'التسجيل واستخدام الميزات الأساسية للمنصة مجاني، ولكن بعض الفرص والأنشطة قد تتطلب رسومًا من مقدمي الخدمة. سيتم توضيح ذلك في تفاصيل كل فرصة.'
      },
    ]);

    return {
      faqItems,
    };
  },
};
</script>

<style scoped>
.accordionSection {
  padding-top: 52px;
  padding-bottom: 52px;
}

.accordion .accordion-button {
  color: #444;
}

.accordion .accordion-button span {
  font-size: 20px;
  font-weight: 500;
}

.faq-image img,
.faq-image svg {
  width: 100%;
  height: 450px;
  border-radius: 8px;
}

@media (max-width: 575.98px) {

  .faq-image img,
  .faq-image svg {
    height: auto;
  }
  .accordion .accordion-button span {
  font-size: 16px;
}
}
</style>