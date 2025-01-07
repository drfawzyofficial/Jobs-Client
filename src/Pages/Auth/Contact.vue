<template>
    <DashboardLayout>
        <div class="settings container-fluid py-4">
            <div class="container">
                <div class="breadcrumb-auth">
                    <h3 class="fw-bold">تواصل معنا</h3>
                    <p>لا تتردد في التواصل معنا لأي استفسارات أو ملاحظات، نحن هنا لخدمتك على مدار الساعة.</p>
                </div>
                <div class="row mt-4">
                    <div class="col-12">
                        <div class="p-3 bg-white shadow">
                            <h5 class="fw-bold">استفسار</h5>
                            <p>يمكنك الاستفسار في أي وقت من خلال إرسال رسالة، وسيتم تحويلها إلى المسؤولين ليتم الرد
                                عليك. علمًا بأن الرد سيصل إلى بريدك الإلكتروني في رسالة واحدة فقط.</p>
                            <div class="mt-3">
                                <textarea id="ContactForm-body" class="form-control form-control-lg" rows="3"
                                    v-model="contactPayload.message"></textarea>
                            </div>
                            <div class="mt-3">
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
    </DashboardLayout>
</template>

<script>
// Import Methods, Packages, Files
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'
export default {
    name: 'Settings',
    components: {
    },
    setup() {
        // Calling, Declarations, Data
        const store = useStore()
        // const loading_status = computed(() => store.state.Collection.loading_status);
        const user = computed(() => store.state.Auth.user);
        store.dispatch("Auth/GetProfile")
        const contactPayload = ref({
            message: "",
        });

        // Methods

        const createContact = () => {
            console.log(contactPayload.value)
            store.dispatch("Auth/createContact", contactPayload.value)
        }

        // Return
        return {
            user,
            contactPayload,
            createContact

        }
    }
}
</script>
