<template>
    <DashboardLayout>
        <div class="chances container-fluid py-4">
            <div class="breadcrumb-auth">
                <h3 class="fw-bold">جميع الفرص</h3>
                <p>هنا تفاصيل جميع الفرص. يتم عرض كل فرصة بالتفاصيل الخاصة بها ويمكنك زيارة الفرصة أو إضافتها في المفضلة
                    للرجوع إليها في وقت لاحق. كما أنه يوجد خدمة فلترة الفرص. استمتع بإيجاد الفرص وتصفحها</p>
            </div>
            <div class="row mt-3">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="fw-bold">بحث كامل</h4>
                            <p class="mt-2">يهدف البحث الكامل إلى تصفية كافة الفرص بشكل شامل. يمكنك إدخال بعض أو جميع المدخلات أدناه، ثم الضغط على زر البحث لتصفية الفرص المتاحة.</p>
                            <div class="row my-3">
                                <div class="col-lg-3 col-md-6">
                                    <select class="form-select form-select-lg" v-model="filter.chance_case">
                                        <option value="none">حالة الفرصة</option>
                                        <option value="open">مفتوح</option>
                                        <option value="not_started">لم يبدأ</option>
                                        <option value="closed">مغلق</option>
                                    </select>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <select class="form-select form-select-lg" v-model="filter.edu_case">
                                        <option value="none">المرحلة التعليمية</option>
                                        <option  v-for="(edu, index) in helperObj.applicantEdus" :key="index" :value="edu ">{{  edu }}</option>
                                    </select>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <select class="form-select form-select-lg" v-model="filter.interest_case">
                                        <option value="none">التصنيف الأساسي</option>
                                        <option value="more_relevant">الأكثر ملائمة</option>
                                        <option  v-for="(category, index) in helperObj.chanceCategories" :key="index" :value="category ">{{  category }}</option>
                                    </select>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <button type="button" class="btn btn-primary" @click="search()">
                                        <span>بحث</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-4 col-6 mt-4" v-for="(chance, index) in chances" :key="index">
                    <router-link class="chance bg-white position-relative d-inline-block w-100" :to="'/student/chance/' + chance._id">
                        <div class="position-absolute additional-info d-flex flex-column">
                            <span class="info-badge fw-bold" :class="'date-' + getValidateDateClass(chance)">{{
                                validateDate(chance)
                            }}</span>
                            <span class="info-badge fw-bold mt-2" :class="'chance-' + getValidateChanceClass(chance)">{{
                                validateChance(chance) }}</span>
                        </div>
                        <div class="position-absolute wishlist-feature">
                            <button @click="toggleWishlist(chance._id)">
                                <span v-if="isInWishlist(chance._id)" style="color: red;"><i
                                        class="bi bi-suit-heart-fill fs-4"></i></span>
                                <span v-else><i class="bi bi-suit-heart fs-4"></i></span>
                            </button>
                        </div>
                        <div class="chance-img">
                            <img :src="chance.chanceImage" />
                        </div>
                        <div class="chance-content p-3">
                            <h6 class="fw-bold">{{ chance.chanceName }}</h6>
                            <h6 class="fw-bold">{{ chance.marketingDesc }}</h6>
                            <h6 class="fw-bold">{{ chance.provider }}</h6>
                        </div>
                    </router-link>
                </div>
            </div>
            <!-- <div class="row mt-3">
                <div class="col-12">
                    <vue-paginate
                    :page-count="chancesCount"
                    :click-handler="handlePageClick"
                    :prev-text="'Previous'"
                    :next-text="'Next'"
                    :container-class="'pagination'"
                    :page-class="'page-item'"
                    />
                </div>
            </div> -->
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
        store.dispatch("Auth/GetProfile")
        const user = computed(() => store.state.Auth.user);
        const wishlists = ref([]);
        const filter = ref({
            chance_case: "open",
            edu_case: "none",
            interest_case: "more_relevant"
        })
     
       
        store.dispatch("Auth/ChancesGet", { chance_case: filter.value.chance_case, edu_case: filter.value.edu_case, interest_case: filter.value.interest_case });
        const chancesCount = computed(() => store.state.Admin_Store.chancesCount);
        const chances = computed(() => store.state.Auth.chances);
        const helperObj = computed(() => store.state.Collection.helperObj);
        store.dispatch("Collection/GetHelper")
        // get wishlist from local storage
        const getWishlist = () => {
            const storedWishlist = localStorage.getItem('wishlist') || [];
            if (storedWishlist.length > 0) {
                return JSON.parse(storedWishlist);
            }
            else return [];
        }

        let wishlistStorage = getWishlist();
        wishlists.value = wishlistStorage;

        // Toggle wishlist state for a chance id
        const toggleWishlist = (chance_id) => {
            let wishlistStorage = getWishlist();
            const index = wishlistStorage.findIndex((_id) => _id === chance_id);
            if (index === -1) {
                wishlistStorage.push(chance_id);
            } else {
                wishlistStorage.splice(index, 1);
            }
            localStorage.setItem("wishlist", JSON.stringify(wishlistStorage));
            wishlists.value = wishlistStorage;
        };

        // Method to check if a chance is in the wishlist
        const isInWishlist = (chance_id) => {
            return wishlists.value.includes(chance_id);
        };

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
            const currentDate = new Date().toISOString().split('T')[0]; // Get the current date
            const regStartDate = chance.chanceRegStartDate // Convert to Date object
            const regEndDate = chance.chanceRegEndDate // Convert to Date object
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
        const search = () => {
            console.log(filter.value);
            store.dispatch("Auth/ChancesGet", { chance_case: filter.value.chance_case, edu_case: filter.value.edu_case, interest_case: filter.value.interest_case  })
        }

        const handlePageClick = (pageNum) => store.dispatch("Admin/ChancesGet", { chance_case: filter.value.chance_case });
        // Return
        return {
            loading_status,
            user,
            filter,
            isInWishlist,
            toggleWishlist,
            chances,
            chancesCount,
            wishlists,
            validateDate,
            getValidateDateClass,
            validateChance,
            getValidateChanceClass,
            search,
            handlePageClick,
            helperObj
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

.info-badge {
    padding: 6px;
    border-radius: 8px;
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
    height: 175px;
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