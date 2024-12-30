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
                    <router-link class="wishlist bg-white position-relative d-inline-block W-100">
                        <div class="position-absolute additional-info d-flex flex-column">
                            <span class="info-badge fw-bold" :class="'date-' + getValidateDateClass(wishlist)">{{
                                validateDate(wishlist)
                            }}</span>
                            <span class="info-badge fw-bold mt-2" :class="'chance-' + getValidateChanceClass(wishlist)">{{
                                validateChance(wishlist) }}</span>
                        </div>
                        <div class="position-absolute wishlist-feature">
                            <button @click="toggleWishlist(wishlist._id)">
                                <span style="color: red;"><i class="bi bi-suit-heart-fill fs-4"></i></span>
                            </button>
                        </div>
                        <div class="wishlist-img">
                            <img :src="wishlist.chanceImage" />
                        </div>
                        <div class="wishlist-content p-3">
                            <h6 class="fw-bold">{{ wishlist.chanceName }}</h6>
                            <h6 class="fw-bold"> الوصف التسويقي: {{ wishlist.marketingDesc }}</h6>
                            <h6 class="fw-bold">مقدم الفرصة: {{ wishlist.provider }}</h6>
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
            store.dispatch("Auth/WishlistsGet", { wishlists: wishlistStorage, page_no: 1 });
        };

        let wishlistStorage = getWishlist();
        store.dispatch("Auth/WishlistsGet", { wishlists: wishlistStorage, page_no: 1 });
        store.dispatch("Auth/GetProfile")

        const checkEnglishStandard = (chance) => {
            // Validate English standards (if applicable)
            if (user.value.tookEnglishTest) {
                for (let key in chance.EnglishStandard) {
                    if (!chance.EnglishStandard[key]) continue;
                    if (key == "CEFRDegree") {
                        const userValue = user.value.EnglishStandard[key] || "";
                        const chanceValue = chance.EnglishStandard[key] || "";
                        if (userValue === chanceValue) {
                            return true;
                        }
                    } else {
                        const userValue = parseFloat(user.value.EnglishStandard[key]) || 0;
                        const chanceValue = parseFloat(chance.EnglishStandard[key]) || 0;
                        if (userValue >= chanceValue) {
                            return true;
                        }
                    }

                }
                return false;
            } else {
                for (let key in chance.EnglishStandard) {
                    if (chance.EnglishStandard[key]) return false;
                }
                return true;
            }
        }

        const checkBrainStandard = (chance) => {
            // Validate English standards (if applicable)
            if (user.value.tookBrainTest) {
                for (let key in chance.BrainStandard) {
                    if (!chance.BrainStandard[key]) continue;
                    const userValue = parseFloat(user.value.BrainStandard[key]) || 0;
                    const chanceValue = parseFloat(chance.BrainStandard[key]) || 0;
                    if (userValue >= chanceValue) {
                        return true;
                    }

                }
                return false;
            } else {
                for (let key in chance.BrainStandard) {
                    if (chance.BrainStandard[key]) return false;
                }
                return true;
            }
        }

        const validateChance = (chance) => {
            const userAge = new Date().getFullYear() - new Date(user.value.DOB).getFullYear();
            if (chance.applicantGender !== user.value.applicantGender) {
                return "لا يستوفي الشروط"
            }
            if (parseInt(chance.applicantAge) !== userAge) {
                return "لا يستوفي الشروط"
            }
            if (!chance.applicantEdus.includes(user.value.applicantEdu)) {
                return "لا يستوفي الشروط";
            }
            // if (chance.applicantNat !== user.value.nationality) {
            //     return "لا يستوفي الشروط";
            // }

            let english_standard_boolean = checkEnglishStandard(chance);
            let brain_standard_boolean = checkBrainStandard(chance);

            if (english_standard_boolean == false || brain_standard_boolean == false)
                return "يتطلب استعداد"

            return "يستوفي الشروط"
        }

        const getValidateChanceClass = (chance) => {
            const status = validateChance(chance);
            if (status === "يستوفي الشروط") {
                return "open";
            } else if (status === "يتطلب استعداد") {
                return "not-started";
            } else if (status === "لا يستوفي الشروط") {
                return "closed";
            }
        }


        const validateDate = (chance) => {
            const currentDate = new Date(); // Get the current date
            const regStartDate = new Date(chance.chanceRegStartDate); // Convert to Date object
            const regEndDate = new Date(chance.chanceRegEndDate); // Convert to Date object
            if (currentDate >= regStartDate && currentDate <= regEndDate) {
                return "مفتوح";
            }
            else if (currentDate < regStartDate) {
                return "لم يبدأ";
            } else {
                return "مغلق";
            }
        }

        const getValidateDateClass = (chance) => {
            const status = validateDate(chance);
            if (status === "مفتوح") {
                return "open";
            } else if (status === "لم يبدأ") {
                return "not-started";
            } else if (status === "مغلق") {
                return "closed";
            }
        }

        // Return
        return {
            loading_status,
            toggleWishlist,
            wishlists,
            user,
            validateDate,
            getValidateDateClass,
            validateChance,
            getValidateChanceClass
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
.info-badge {
    padding: 6px;
    border-radius: 8px;
    color: #FFF;
    font-size: 12px;
    text-align: center
}
.date-open,
.chance-open {
    background-color: green;
}

.date-closed,
.chance-closed {
    background-color: #a71616;
}

.date-not-started,
.chance-not-started {
    background-color: #fbb054;
}
</style>