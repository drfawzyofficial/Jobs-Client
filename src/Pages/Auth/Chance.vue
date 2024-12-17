<template>
    <DashboardLayout>
        <div class="chance container-fluid py-4">
            <div class="container">
                <div class="chance-container">
                    <h3>{{ chance.chanceName }}</h3>
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
        store.dispatch("Auth/GetProfile")
        console.log(route.params.id);
        store.dispatch("Auth/chanceGet", { chance_id: route.params.id });
        const chance = computed(() => store.state.Auth.chance);
        console.log(chance);
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
            if (chance.applicantNat !== user.value.nationality) {
                return "لا يستوفي الشروط";
            }

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
            user,
            isInWishlist,
            toggleWishlist,
            chance,
            wishlists,
            validateDate,
            getValidateDateClass,
            validateChance,
            getValidateChanceClass
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