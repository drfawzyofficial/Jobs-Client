<template>
  <div class="announcement-bar container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-8 col-11 mx-auto">
          <div id="announcementCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="text-center">
                  <a href="/" class="announcement-bar__link" target="_blank">
                    <span class="fw-bold text-white">أهلًا بكم في تلك المرحلة</span>
                  </a>
                </div>
              </div>
              <div class="carousel-item">
                <div class="text-center">
                  <a href="/" class="announcement-bar__link" target="_blank">
                    <span class="fw-bold text-white">أهلًا بكم في تلك المرحلة الثانية</span>
                  </a>
                </div>
              </div>
              <div class="carousel-item">
                <div class="text-center">
                  <a href="/" class="announcement-bar__link" target="_blank">
                    <span class="fw-bold text-white">أهلًا بكم في تلك المرحلة الثالثة</span>
                  </a>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#announcementCarousel"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">السابق</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#announcementCarousel"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">التالي</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import Methods, Packages, Files
import { onMounted, ref, toRefs, defineProps } from 'vue'
export default {
  name: 'Announcement-Bar',
  setup() {

    // Calling, Declarations, Data
    const props = defineProps({ title: String });
    const { title } = toRefs(props);

    // Return
    return {
      title
    }
  }


}
</script>

<style scoped>
.announcement-bar {
  padding-top: 32px;
  padding-bottom: 32px;
  background-color: #3AAFA9;
}

.announcement-bar .carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
}

.announcement-bar .carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}



.announcement-bar .carousel-control-next,
.announcement-bar .carousel-control-prev {
  width: auto;
}

.announcement-bar .carousel-control-next {
  left: -30px;
}

.announcement-bar .carousel-control-prev {
  right: -30px;
}
</style>