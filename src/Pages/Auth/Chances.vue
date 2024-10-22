<template>
     <DashboardLayout>
        <div class="chances container-fluid py-4">
            <div class="breadcrumb-auth">
                    <h3 class="fw-bold">جميع الفرص</h3>
                    <p>هنا تفاصيل جميع الفرص. يتم عرض كل فرصة بالتفاصيل الخاصة بها ويمكنك زيارة الفرصة أو إضافتها في المفضلة للرجوع إليها في وقت لاحق. كما أنه يوجد خدمة فلترة الفرص. استمتع بإيجاد الفرص وتصفحها</p>
                </div>
            <div class="row">
                <div class="col-lg-3 col-md-4 col-6 mt-4" v-for="(chance, index) in chances" :key="index">
                    <router-link class="chance bg-white position-relative d-inline-block" >
                        <div class="position-absolute additional-info d-flex flex-column">
                            <span class="add-info-badge fw-bold">{{  chance.jobCategory }}</span>
                            <span class="add-info-badge fw-bold mt-2">{{  chance.programStatus }}</span>
                        </div>
                        <div class="position-absolute wishlist-feature">
                            <button @click="toggleWishlist(chance._id)">
                            <span v-if="isInWishlist(chance._id)" style="color: red;"><i class="bi bi-suit-heart-fill fs-4"></i></span>
                            <span v-else ><i class="bi bi-suit-heart fs-4"></i></span>
                            </button>
                        </div>
                        <div class="chance-img">
                            <img :src="chance.jobImage"/>
                        </div>
                        <div class="chance-content p-3">
                            <h5 class="chance-name fw-bold">{{  chance.jobName }}</h5>
                            <h6 class="chance-name fw-bold">تصنيف الفرصة: {{  chance.jobCategory }}</h6>
                        </div>
                    </router-link>
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
    name: 'Chances',
    components: {
    },
    setup() {
       
        // Calling, Declarations, Data
        const store = useStore()
        const loading_status = computed(() => store.state.Collection.loading_status);
        const user = computed(() => store.state.Auth.user);
        const wishlists = ref([]);
        const filter = ref({
            jobName: "",
            jobPrice: "",
            programStatus: "حالة البرنامج",
            jobStartDate: "",
            jobEndDate: "",
            jobCategory: "التصنيف",
            jobStartDate: "",
            jobEndDate: "",
            applicantNat: "الجنسية",
            applicantAge: "العمر",
            applicantEdu: "المرحلة"
        })
        store.dispatch("Auth/GetProfile")
        store.dispatch("Auth/ChancesGet", { page_no: 1 });
        const chances = computed(() => store.state.Auth.chances);

       

        // get wishlist from local storage
        const getWishlist = () => {
            const storedWishlist = localStorage.getItem('wishlist') || [];
            if(storedWishlist.length > 0) {
                return JSON.parse(storedWishlist);
            }
            else return [];
        }

        let wishlistStorage = getWishlist();
        wishlists.value = wishlistStorage;

         // Toggle wishlist state for a job id
        const toggleWishlist = (job_id) => {
            let wishlistStorage = getWishlist();
            const index = wishlistStorage.findIndex((_id) => _id === job_id);
            if (index === -1) {
                wishlistStorage.push(job_id);
            } else {
                wishlistStorage.splice(index, 1);
            }
            localStorage.setItem("wishlist", JSON.stringify(wishlistStorage));
            wishlists.value = wishlistStorage;
        };

        // Method to check if a job is in the wishlist
        const isInWishlist = (job_id) => {
            return wishlists.value.includes(job_id);
        };



        // Return
        return {
            loading_status,
            user,
            filter,
            isInWishlist,
            toggleWishlist,
            chances,
            wishlists
        }
    }
}
</script>

<style scoped>
.chances .chance {
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    border: 1px solid #3c9f9a;
}
.chances .chance:hover {
    box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important;
  
}


.chances .chance .additional-info {
    left: 15px;
    top: 15px;
}
.chances .chance .additional-info .add-info-badge {
    padding: 4px;
    border-radius: 8px;
    background-color: #3c9f9a;
    color: #FFF;
    font-size: 12px;
    text-align: center
}
.chances .chance .wishlist-feature {
    right: 15px;
    top: 15px;
}
.chances .chance .wishlist-feature button {
    background-color: transparent;
}
.chances .chance .chance-img img {
    width: 100%;
    height: 250px;
}
</style>