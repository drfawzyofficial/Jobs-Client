<template>
  <div class="Login container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-12">
            <div class="customer_login form-box" id="customer_login">
              <h4 class="text-center fw-bold mb-3">تسجيل الدخول</h4>
              <div class="mb-3">
                <label for="email" class="form-label">
                  البريد الإلكتروني أو رقم الهاتف
                </label>
                <input type="text" class="form-control form-control-lg" required v-model="loginPayload.identifier">
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">
                  كلمة المرور
                </label>
                <input type="password" class="form-control form-control-lg" required v-model="loginPayload.password">
              </div>
              <div class="forgot-password mb-4">
                <div class="forgot-password-btn-div">
                  <router-link class="store-animation-anchor fw-medium primary-color" to="/account/reset-password">هل نسيت كلمة المرور؟</router-link>
                </div>
              </div>
              <div class="submit text-center">
                <button type="submit" class="btn btn-primary"  @click="onLogin()">
                  <span class="text">تسجيل الدخول</span>
                  <span v-if="!loading_status" class="ms-1"><i class="bi bi-send"></i></span>
                  <span v-else class="spinner-border spinner-border-sm ms-1" role="status"></span>
                </button>
              </div>
              <div class="create_new_account text-center mt-3">
                <router-link class="store-animation-anchor fw-medium" to="/account/signup">ليس لديك حساب؟</router-link>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import Methods, Packages, Files
import { onMounted, ref, toRefs, computed } from 'vue'
import { useStore } from 'vuex';
export default {
  name: 'Login',
  setup() {

    // Calling, Declarations, Data
    const store = useStore();
    const loading_status = computed(() => store.state.Collection.loading_status);
    const items = ref([{ content: "أهلًأ بكم في موقع خطط", link: "/" }, { content: "يمكنك الإنضمام إلينا الآن", link: "/account/signup" }, { content: "الشروط والأحكام الخاصة بنا", link: "/pages/terms" }]);
    const loginPayload = ref({
            identifier: "",
            password: "",
        });
    const onLogin = () => {
            store.dispatch("Auth/Login", loginPayload.value)
        }
    // Return
    return {
      items,
      loginPayload,
      loading_status,
      onLogin
    }
  }


}
</script>

<style scoped>
@import '../assets/css/account.css';
.Login {
  padding: 52px 0;
}
</style>