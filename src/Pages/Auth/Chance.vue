<template>
    <DashboardLayout>
        <div class="chance container-fluid py-5">
            <div class="container">
                <div class="chance-container">
                    <div class="wishlist-feature mt-3 d-flex justify-content-center">
                        <button @click="toggleWishlist()" style="background-color: transparent;">
                            <span v-if="isInWishlist()" style="color: red;"><i
                                    class="bi bi-suit-heart-fill fs-4"></i></span>
                            <span v-else><i class="bi bi-suit-heart fs-4"></i></span>
                        </button>
                    </div>
                    <div class="chance-details">
                        <h4 class="fw-bold">{{ chance.chanceName }}</h4>
                        <div class="mt-2">
                            <span>التصنيف الرئيسي: </span>
                            <span>{{ chance.chanceCategory }}</span>
                        </div>
                        <div class="mt-2">
                            <span>التصنيف الفرعي: </span>
                            <span>{{ chance.chanceSubcategory }}</span>
                        </div>
                        <div class="mt-2">
                            <span>الجهة المقدمة: </span>
                            <span>{{ chance.provider }}</span>
                        </div>
                        <div class="mt-2">
                            <span>تاريخ التسجيل: </span>
                            <span>{{ chance.chanceRegStartDate }} - {{ chance.chanceRegEndDate }}</span>
                        </div>
                        <div class="mt-2">
                            <span>تاريخ إقامة الفرصة: </span>
                            <span>{{ chance.chanceStartDate }} - {{ chance.chanceEndDate }}</span>
                        </div>
                    </div>
                    <div class="chance-details mt-3">
                        <h4 class="fw-bold">المتطلبات الأكاديمية</h4>
                        <div class="table-responsiveness">
                            <table class="table table-striped mt-2">
                                <thead>
                                    <tr>
                                        <th scope="col">المتطلبات الأكاديمية</th>
                                        <th scope="col">التفاصيل</th>
                                        <th scope="col">استعداد للفرصة</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>اختبارات اللغة الإنجليزية</td>
                                        <td>
                                            <span
                                                v-for="([key, value], index) in Object.entries(chance.EnglishStandard)"
                                                :key="index">
                                                {{ key }}: {{ value }},
                                            </span>
                                        </td>
                                        <td>
                                            <span class="info-badge fw-bold mt-2"
                                                :class="'chance-' + getvalidateEnglishClass()">{{ validateEnglish()
                                                }}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>اخبتارات القدرات العقلية</td>
                                        <td>
                                            <span v-for="([key, value], index) in Object.entries(chance.BrainStandard)"
                                                :key="index">
                                                {{ key }}: {{ value }},
                                            </span>
                                        </td>
                                        <td>
                                            <span class="info-badge fw-bold mt-2"
                                                :class="'chance-' + getvalidateBrainClass()">{{ validateBrain()
                                                }}</span>
                                        </td>
                                    </tr>
                                    <!-- <tr>
                                        <td>المعدل التراكمي</td>
                                        <td>
                                            <span v-for="([key, value], index) in Object.entries(chance.CurStandard)"
                                                :key="index">
                                                {{ key }}: {{ value }},
                                            </span>
                                        </td>
                                        <td>@fat</td>
                                    </tr> -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="chance-details mt-3">
                        <h4 class="fw-bold">تفاصيل الفرصة</h4>
                        <p>{{ chance.chanceDesc }}</p>
                    </div>
                    <div class="chance-details mt-3">
                        <h4 class="fw-bold">باقي التفاصيل</h4>
                        <div class="mt-2">
                            <span>السعر: </span>
                            <span>{{ chance.chancePrice + " " + "ريال" }}</span>
                        </div>
                        <!-- <div class="mt-2">
                            <span>الجنسية: </span>
                            <span>{{ chance.nationality }}</span>
                        </div> -->
                        <div class="mt-2">
                            <span>الجنس: </span>
                            <span>{{ chance.applicantGender }}</span>
                        </div>
                        <div class="mt-2">
                            <span>المرحلة الدراسية: </span>
                            <span v-for="(val, index) in chance.applicantEdus" :key="index">
                                {{ val }},
                            </span>
                        </div>
                        <div class="mt-2">
                            <span>الموقع: </span>
                            <span>{{ chance.programStatus }}</span>
                            <span v-if="chance.programStatus == 'حضوري'">
                                في
                                <span class="ms-1" v-for="(val, index) in chance.cities" :key="index" :value="val"> {{
                                    val }} </span>
                            </span>
                        </div>
                    </div>
                    <div class="chance-details mt-3">
                        <h4 class="fw-bold">
                            <span>للتسجيل والمزيد من المعلومات: </span>
                            <a href="{{  chance.chanceLink }}" target="_blank" style="color: blue">زيارة الرابط</a>
                        </h4>
                    </div>
                </div>
                <div class="chance-review-post mt-3">
                    <h4 class="fw-bold">اكتب تقييما</h4>
                    <div class="mt-2">
                        <textarea class="form-control" placeholder="اكتب تقييمك هنا" rows="4"
                            v-model="review.comment"></textarea>
                        <div class="rating">
                            <span v-for="star in stars" :key="star"
                                :class="['star star1', { selected: star <= selectedStars }]" @click="selectStars(star)">
                                ★
                            </span>
                        </div>
                        <button class="btn btn-primary" @click="sendReview()">نشر <i class="bi bi-send"></i></button>
                    </div>`
                </div>
                <div class="chance-reviews">
                    <h4 class="fw-bold">التقييمات</h4>
                    <div class="row">
                    <div class="col-lg-3 col-md-4 col-6 mt-3" v-if="reviews.length > 0"
                        v-for="(review, index) in reviews" :key="index">
                        <div class="review bg-white position-relative p-3 rounded shadow-sm">
                            <p>{{ review.comment }}</p>
                            <div class="rating">
                                <span v-for="star in 5" :key="star"
                                    :class="['star star2', { gold: star <= review.stars }]">
                                    ★
                                </span>
                            </div>
                        </div>
                    </div>
                    <div v-else class="col-12">
                        <div class="alert alert-info">
                            <h5>لا يوجد تقييمات</h5>
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
import { useRoute } from 'vue-router';

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
        const route = useRoute();
        const stars = [1, 2, 3, 4, 5]; // Total number of stars
        const reviews = computed(() => store.state.Auth.reviews);
        const selectedStars = ref(0);
        const review = ref({
            _chanceID: route.params.id,
            comment: "",
            stars: 0
        });
        store.dispatch("Auth/GetProfile")
        store.dispatch("Auth/chanceGet", { chance_id: route.params.id });
        const chance = computed(() => store.state.Auth.chance);
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
        const toggleWishlist = () => {
            let wishlistStorage = getWishlist();
            const index = wishlistStorage.findIndex((_id) => _id === chance.value._id);
            if (index === -1) {
                wishlistStorage.push(chance.value._id);
            } else {
                wishlistStorage.splice(index, 1);
            }
            localStorage.setItem("wishlist", JSON.stringify(wishlistStorage));
            wishlists.value = wishlistStorage;
        };

        // Method to check if a chance is in the wishlist
        const isInWishlist = () => {
            return wishlists.value.includes(chance.value._id);
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

        const validateEnglish = () => {
            let english_standard_boolean = checkEnglishStandard(chance.value);
            if (english_standard_boolean == false)
                return "يتطلب استعداد"

            return "يستوفي الشروط"
        }

        const getvalidateEnglishClass = () => {
            const status = validateEnglish();
            if (status === "يستوفي الشروط") {
                return "open";
            } else if (status === "يتطلب استعداد") {
                return "not-started";
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

        const validateBrain = () => {
            let brain_standard_boolean = checkBrainStandard(chance.value);
            if (brain_standard_boolean == false)
                return "يتطلب استعداد"

            return "يستوفي الشروط"
        }

        const getvalidateBrainClass = () => {
            const status = validateBrain();
            if (status === "يستوفي الشروط") {
                return "open";
            } else if (status === "يتطلب استعداد") {
                return "not-started";
            }
        }

        store.dispatch("Auth/ReviewsGet", { _chanceID: route.params.id });

        const selectStars = (star) => {
            selectedStars.value = star; // Set the selected number of stars
        };

        const sendReview = () => {
            review.value.stars = selectedStars.value;
            store.dispatch("Auth/sendReview", review.value);
        };








        // Return
        return {
            loading_status,
            user,
            selectStars,
            selectedStars,
            stars,
            review,
            reviews,
            isInWishlist,
            toggleWishlist,
            chance,
            wishlists,
            validateEnglish,
            getvalidateEnglishClass,
            validateBrain,
            sendReview,
            getvalidateBrainClass
        }
    }
}
</script>

<style scoped>
.chance .chance-container {
    border-radius: 12px;
    background-color: #FFF;
    border: 1px solid #DDD;
    padding: 1rem;
    position: relative;
}

.chance .chance-container .wishlist-feature {
    position: absolute;
    top: 1rem;
    left: 1rem;
}

;

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

.star {
    font-size: 2rem;
    color: gray;
    transition: color 0.3s;
}
.star.star1 {
    cursor: pointer;
}

.star.star1:hover {
    color: gold;
    /* Highlight stars on hover */
}

.star.selected {
    color: gold;
    /* Change color for selected stars */
}

.star.gold {
    color: gold;
}


</style>