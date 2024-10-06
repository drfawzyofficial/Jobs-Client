<template>
    <div id="app">
      <Announcement></Announcement>
        <Header></Header>
        <Transition name="slide-fade">
            <router-view />
        </Transition>
        <Footer></Footer>
    </div>
   
</template>

<script>
import Announcement from "@/components/Announcement.vue"
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
export default {
    name: 'App',
    components: {
      Announcement,
      Header,
      Footer,
    },
}
</script>


<style scoped>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>