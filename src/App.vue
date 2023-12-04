<template>
    <div id="app">
        <router-view />
        <BackToTop />
    </div>
</template>

<script>
import BackToTop from './components/BackToTop'

export default {
    name: 'App',
    components: {
        BackToTop,
    },
}
</script>