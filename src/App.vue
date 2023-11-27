<template>
    <div id="app">
    <router-view/>
     <BackToTop />
    </div>
</template>

<script>
import BackToTop from './components/Layouts/BackToTop'

export default {
    name: 'App',
    components: {
        BackToTop,
    },
    data() {
        return {
            isLoading: true
        }
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false
        }, 2000)
    }
}
</script>