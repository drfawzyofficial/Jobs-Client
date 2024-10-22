<template>
    <DashboardLayout>
        <div class="wishlists container-fluid py-4">
            <div class="breadcrumb-auth">
                <h3 class="fw-bold">جميع المفضلات</h3>
                <p>مرحبًا بك في صفحة المفضلات! هنا يمكنك إدارة الوظائف أو العناصر التي قمت بإضافتها إلى مفضلاتك. يمكنك
                    إضافة أو إزالة أي عنصر بكل سهولة، وسيتم حفظ اختياراتك تلقائيًا لتكون متاحة لك في أي وقت تزور فيه
                    لوحة التحكم. تأكد من استعراض قائمتك بانتظام لضمان عدم تفويت أي فرصة أو عنصر مهم بالنسبة لك!</p>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-4 col-6 mt-4" v-if="wishlists.length > 0" v-for="(wishlist, index) in wishlists" :key="index">
                    <router-link class="wishlist bg-white position-relative d-inline-block">
                        <div class="position-absolute additional-info d-flex flex-column">
                            <span class="add-info-badge fw-bold">{{ wishlist.jobCategory }}</span>
                            <span class="add-info-badge fw-bold mt-2">{{ wishlist.programStatus }}</span>
                        </div>
                        <div class="position-absolute wishlist-feature">
                            <button @click="toggleWishlist(wishlist._id)">
                                <span style="color: red;"><i class="bi bi-suit-heart-fill fs-4"></i></span>
                            </button>
                        </div>
                        <div class="wishlist-img">
                            <img :src="wishlist.jobImage" />
                        </div>
                        <div class="wishlist-content p-3">
                            <h5 class="wishlist-name fw-bold">{{ wishlist.jobName }}</h5>
                            <h6 class="wishlist-name fw-bold">تصنيف الفرصة: {{ wishlist.jobCategory }}</h6>
                        </div>
                    </router-link>
                </div>
                <div v-else class="col-12 mt-4">
                    <div class="alert alert-info">
                        <h5>لا يوجد مفضلات الآن</h5>
                        <p>قم بزيارة الفرص وتصفحها <router-link class="btn btn-sm btn-primary" to="/student/chances">زيارة الفرص</router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>

<script>
// Import Methods, Packages, Files
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
    name: 'Wishlists',
    components: {
    },
    setup() {

        // Calling, Declarations, Data
        const store = useStore();
        const loading_status = computed(() => store.state.Collection.loading_status);
        const user = computed(() => store.state.Auth.user);
        const wishlists = computed(() => store.state.Auth.wishlists);

        // get wishlist from local storage
        const getWishlist = () => {
            const storedWishlist = localStorage.getItem('wishlist') || [];
            if (storedWishlist.length > 0) {
                return JSON.parse(storedWishlist);
            }
            else return [];
        }

    
        // Toggle wishlist state for a job id
        const toggleWishlist = (job_id) => {
            let wishlistStorage = getWishlist();
            const index = wishlistStorage.findIndex((_id) => _id === job_id);
            wishlistStorage.splice(index, 1);
            localStorage.setItem("wishlist", JSON.stringify(wishlistStorage));
            store.dispatch("Auth/WishlistsGet", { wishlists: wishlistStorage });
        };

        let wishlistStorage = getWishlist();
        store.dispatch("Auth/WishlistsGet", { wishlists: wishlistStorage });
        store.dispatch("Auth/GetProfile")


        // Return
        return {
            loading_status,
            toggleWishlist,
            wishlists,
            user
        }
    }
}
</script>

<style scoped>
.wishlists .wishlist {
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    border: 1px solid #3c9f9a;
}

.wishlists .wishlist:hover {
    box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important;

}


.wishlists .wishlist .additional-info {
    left: 15px;
    top: 15px;
}

.wishlists .wishlist .additional-info .add-info-badge {
    padding: 4px;
    border-radius: 8px;
    background-color: #3c9f9a;
    color: #FFF;
    font-size: 12px;
    text-align: center
}

.wishlists .wishlist .wishlist-feature {
    right: 15px;
    top: 15px;
}

.wishlists .wishlist .wishlist-feature button {
    background-color: transparent;
}

.wishlists .wishlist .wishlist-img img {
    width: 100%;
    height: 250px;
}
</style>