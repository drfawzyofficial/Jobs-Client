<template>
  <div class="container-fluid image-with-text">
    <div class="container">
      <div class="image-with-text-container">
        <div class="image">
            <img class="store-animation-flash" :src="src" />
        </div>
        <div class="content" v-html="content"></div>
      </div>
    </div>
</div>
</template>

<script>
// Import Methods, Packages, Files
import { onMounted, ref, toRefs, defineProps } from 'vue'
export default {
  name: 'Breadcrumb',
  props: {
    src: String,
    title: String,
    content: String
  },
  setup(props) {

    // Calling, Declarations, Data
    const { src, title, content } = toRefs(props);

    // Return
    return {
      src,
      title,
      content
    }
  }


}
</script>

<style scoped>

.image-with-text {
  padding-top: 30px;
  padding-bottom: 30px;
}

.image-with-text-container .image img,
.image-with-text-container .image svg {
  width: 350px;
  border-radius: 4px;
}
.image-with-text-container {
  display: flex;
}

.image-with-text .image-with-text-container .content {
  padding-right: 1.5rem;
}


@media (max-width: 767.98px) {
  .image-with-text-container .image img,
  .image-with-text-container .image svg {
      width: 200px;
  }
}
@media (max-width: 575.98px) {
  .image-with-text-container {
      display: block;
  }
  .image-with-text-container .image img,
  .image-with-text-container .image svg {
      width: 100%;
  }
  .image-with-text .image-with-text-container .content {
      margin-top: 1rem;
      padding-right: 0;
  }
}
</style>