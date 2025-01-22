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
                  <span class="fs-1 text-white" v-html="feature.icon"></span>
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
          icon: '<i class="bi bi-send"></i>',
          description: 'سهولة الوصول إلى الفرص المميزة',
        },
        {
          icon: '<i class="bi bi-funnel"></i>',
          description: 'عرض الفرص حسب اهتماماتك',
        },
        {
          icon: '<i class="bi bi-arrow-repeat"></i>',
          description: 'تحديثات مستمرة للفرص الجديدة',
        },
        {
          icon: '<i class="bi bi-link"></i>',
          description: 'إمكانية الوصول المباشر الى رابط التقديم للفرصة',
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
    background-color: #44B797;
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
  