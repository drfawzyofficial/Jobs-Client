<template>
  <div class="resetpassword container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="account-auth form-box" id="recover">
            <h4 class="text-center fw-bold mb-4">استعادة كلمة المرور</h4>
            <div class="my-3" v-if="errorMsg">
              <span class="error fw-medium">{{ errorMsg }}</span>
            </div>
            <div class="my-3" v-if="successMsg">
              <span class="success fw-medium">{{ successMsg }}</span>
            </div>
            <form-wizard color="#2B7A7B" shape="circle" @on-complete="onComplete" nextButtonText="التالي" backButtonText="السابق" finishButtonText="إرسال">
              <tab-content title="البريد أو رقم الهاتف" :before-change="validateIDentifier">
                <div>
                  <input placeholder="البريد الإلكتروني أو الهاتف" type="text" class="form-control form-control-lg"
                    required v-model="resetPasswordPayload.identifier">
                </div>
              </tab-content>
              <tab-content title="الكود المرسل" :before-change="validateCode">
                <div>
                  <input placeholder="الكود المرسل" type="text" class="form-control form-control-lg" required
                    v-model="resetPasswordPayload.code">
                </div>
              </tab-content>
              <tab-content title="تغيير كلمة المرور">
                <div>
                  <div class="mb-3">
                    <input placeholder="كلمة المرور" type="password" class="form-control form-control-lg" required
                      v-model="resetPasswordPayload.password">
                  </div>
                  <div>
                    <input placeholder="تأكيد كلمة المرور" type="password" class="form-control form-control-lg" required
                      v-model="resetPasswordPayload.password_confirmation">
                  </div>
                </div>
              </tab-content>
              <div class="loader" v-if="loadingWizard"></div>

            </form-wizard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import Methods, Packages, Files
import { onMounted, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Vue3FormWizard from 'vue3-form-wizard'
import 'vue3-form-wizard/dist/style.css'
//local registration
import { FormWizard, TabContent } from 'vue3-form-wizard'
import 'vue3-form-wizard/dist/style.css'
import { Fetch } from "../assets/utils";
export default {
  name: 'ResetPassword',
  components: {
    FormWizard,
    TabContent
  },
  setup() {

    // Calling, Declarations, Data
    const router = useRouter();
    const store = useStore()
    const items = ref([{ content: "أهلًأ بكم في موقع خطط", link: "/" }, { content: "يمكنك الإنضمام إلينا الآن", link: "/account/signup" }, { content: "الشروط والأحكام الخاصة بنا", link: "/pages/terms" }]);
    const resetPasswordPayload = ref({
      identifier: "",
      code: "",
      password: "",
      password_confirmation: "",
    });
    const loadingWizard = ref(false);
    const errorMsg = ref("");
    const successMsg = ref("");
    const validateIDentifier = async () => {
      const data = await Fetch("POST", "/student/password/forgot", { identifier: resetPasswordPayload.value.identifier });
      if (data.statusCode === 200) {
        errorMsg.value = ""
        return true;
      } else {
        errorMsg.value = data.message;
      }
    };
    const validateCode = async () => {
      const data = await Fetch("POST", "/student/password/reset", { identifier: resetPasswordPayload.value.identifier, code: resetPasswordPayload.value.code });
      if (data.statusCode === 200) {
        errorMsg.value = ""
        return true;
      } else if (data.statusCode == 401 || data.statusCode == 500) {
        window.location.reload();
      } else {
        errorMsg.value = data.message;
      }
    };

    const onComplete = async () => {
      const data = await Fetch("POST", "/student/password/reset/change", resetPasswordPayload.value);
      if (data.statusCode === 200) {
        errorMsg.value = ""
        successMsg.value = "تم إستعادة كلمة السر بنجاح";
        setTimeout(() => {
          router.push({ name: "Login" });
        }, 3000);
      } else if (data.statusCode == 401 || data.statusCode == 500) {
        window.location.reload();
      } else {
        errorMsg.value = data.message;
      }
    };

    // Return
    return {
      items,
      loadingWizard,
      errorMsg,
      successMsg,
      resetPasswordPayload,
      validateIDentifier,
      validateCode,
      onComplete
    }
  }


}
</script>

<style scoped>
@import '../assets/css/account.css';

.resetpassword {
  padding: 52px 0;
}

.vue-form-wizard .wizard-progress-bar {
  float: right !important;
}

.wizard-card-footer {
  display: none;
}

span.error {
  color: #e74c3c;
  font-size: 18px;
  display: flex;
  justify-content: center;
}

span.success {
  color: rgb(3, 215, 3);
  font-size: 18px;
  display: flex;
  justify-content: center;
}

</style>