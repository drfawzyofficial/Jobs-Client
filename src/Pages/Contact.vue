<template>
    <Layout>
        <div class="contact-us container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="contactForm form-box" id="ContactForm">
                            <h3 class="text-center fw-medium mb-3">تواصل معنا</h3>
                            <div class="mb-3"></div>
                            <div class="mb-3">
                                <label for="fullname" class="form-label">الاسم</label>
                                <input required="" type="text" class="form-control form-control-lg"
                                    v-model="contactPayload.fullname">
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">البريد الإلكتروني</label>
                                <input required="" type="text" class="form-control form-control-lg"
                                    v-model="contactPayload.email">
                            </div>
                            <div class="mb-3">
                                <label for="phone" class="form-label">رقم الهاتف</label>
                                <input required="" type="text" class="form-control form-control-lg " pattern="[0-9\-]*"
                                    v-model="contactPayload.phone">
                            </div>
                            <div class="mb-4">
                                <label for="message" class="form-label">الرسالة</label>
                                <textarea id="ContactForm-body" class="form-control form-control-lg" rows="3"
                                    v-model="contactPayload.message"></textarea>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary" @click="createContact()">
                                    <span class="btn-text">إرسال</span>
                                    <i class="bi bi-send"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
// Import Methods, Packages, Files
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router';
import { useStore } from 'vuex'
export default {
    name: 'Contact',
    components: {
    },
    setup() {

        // Calling, Declarations, Data
        const store = useStore()
        const route = useRoute();
        const pageTitle = computed(() => route.meta.title);
        const loading_status = computed(() => store.state.Collection.loading_status);
        const contactPayload = ref({
            fullname: "",
            email: "",
            phone: "",
            message: "",
        });
        // Methods
        const createContact = () => {
            store.dispatch("Auth/createContact", contactPayload.value)
        }

        // Return
        return {
            pageTitle,
            loading_status,
            contactPayload,
            createContact
        }
    }
}
</script>

<style scoped>
@import '../assets/css/account.css';
</style>