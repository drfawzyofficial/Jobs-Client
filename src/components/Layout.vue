<template>
    <Announcement></Announcement>
    <Header></Header>
    <slot></slot>
    <Footer></Footer>
  </template>
  
  <script>
  // Import Methods, Packages, Files.
  import Announcement from "@/components/Announcement.vue"
  import Header from "@/components/Header.vue"
  import Footer from "@/components/Footer.vue"
  import { onMounted, ref, toRefs, defineProps } from 'vue'
  export default {
    name: 'Layout',
    components: {
        Announcement,
        Header,
        Footer
    },
    setup() {

    }
  }
  </script>
  
  <style scoped>

  </style>