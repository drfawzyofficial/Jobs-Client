<template>
    <div class="features container-fluid">
      <div class="container">
        <div class="features-box">
          <h3 class="h3 text-center">مميزاتنا</h3>
          <div class="row">
            <div    
              v-for="(feature, index) in features"
              :key="index"
              class="col-md-3 col-sm-6 col-12 mt-5"
            >
              <div class="feature text-center">
                <div class="feature-icon">
                  <img
                    :class="feature.iconClass"
                    :src="feature.iconSrc"
                    :alt="feature.alt"
                    :title="feature.title"
                  />
                </div>
                <p class="mt-3">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // Import Methods, Packages, Files
  import { ref } from 'vue';
  
  export default {
    name: 'Features',
    setup() {  
      // Feature data
      const features = ref([
        {
          iconSrc:
            '//projectkibrit.myshopify.com/cdn/shop/t/17/assets/feature-icon-0.svg?v=103073552329858857761721641982',
          iconClass: 'feature_icon_consistency-60',
          description: 'سهولة الوصول إلى الفرص المميزة',
          alt: 'سهولة الوصول إلى الفرص المميزة',
          title: 'سهولة الوصول إلى الفرص المميزة',
        },
        {
          iconSrc:
            '//projectkibrit.myshopify.com/cdn/shop/t/17/assets/feature-icon-1.svg?v=83754922483425242941721641982',
          iconClass: 'feature_icon_consistency-60',
          description: 'عرض الفرص حسب اهتماماتك',
          alt: 'عرض الفرص حسب اهتماماتك',
          title: 'عرض الفرص حسب اهتماماتك',
        },
        {
          iconSrc:
            '//projectkibrit.myshopify.com/cdn/shop/t/17/assets/feature-icon-2.svg?v=180777565639930553701721641982',
          iconClass: 'feature_icon_consistency-60',
          description: 'تحديثات مستمرة للفرص الجديدة',
          alt: 'تحديثات مستمرة للفرص الجديدة',
          title: 'تحديثات مستمرة للفرص الجديدة',
        },
        {
          iconSrc:
            '//projectkibrit.myshopify.com/cdn/shop/t/17/assets/feature-icon-3.svg?v=135821250968789223931721641982',
          iconClass: 'feature_icon_consistency-60',
          description: 'إمكانية الوصول المباشر الى رابط التقديم للفرصة',
          alt: 'إمكانية الوصول المباشر الى رابط التقديم للفرصة',
          title: 'إمكانية الوصول المباشر الى رابط التقديم للفرصة'
        },
      ]);
  
      // Return
      return {
        features,
      };
    },
  };
  </script>
  
  <style scoped>
  .features {
    padding-top: 52px;
    padding-bottom: 52px;
  }
  
  .features .features-box {
    padding: 30px;
    background-color: #000;
  }
  
  .features .features-box h3,
  .features .feature p {
    color: #fff;
  }
  
  .features .feature {
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding: 0 30px;
  }
  
  .feature_icon_consistency-60 {
    height: 60px;
    width: 60px;
  }
 
  </style>
  