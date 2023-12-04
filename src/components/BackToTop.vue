<template>
    <div @click="scrollToTop()" :class="['progress-wrap', { 'active-progress': isTop }]">
        <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
    </div>
    <div @click="scrollToTop()" :class="['back-to-top-btn', { 'go-top': isTop }]">
        <i class='bx bx-chevron-up'></i>
    </div>
</template>

<script>
// Import Methods, Packages, Files
import { onMounted, ref } from 'vue'
export default {
    name: 'BackToTop',
    setup() {

        // Calling, Declarations, Data
        const isTop = ref(false);
        onMounted(() => {
            const that = this
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if (scrollPos >= 100) {
                    isTop.value = true
                } else {
                    isTop.value = false
                }
            })
        })

        // Methods
        const scrollToTop = () => {
            window.scrollTo(0, 0);
        }

        // Return
        return {
            isTop,
            scrollToTop
        }
    }


}
</script>