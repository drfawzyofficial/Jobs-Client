<template>
  <DashboardLayout>
    <div class="dashboard container-fluid py-4">

      <!-- Page Heading -->
      <div class="breadcrumb-auth">
        <h3 class="fw-bold">إحصائيات سريعة</h3>
        <p>في لوحة تحكم الطالب، يمكنك الوصول إلى جميع الإحصائيات الخاصة بك بسهولة. ستجد إحصائيات سريعة تعكس أداءك الأكاديمي، إلى جانب البيانات الشخصية والمعلومات المتعلقة بالإنجازات والمقررات الدراسية. تمنحك هذه اللوحة نظرة شاملة على تقدمك وتساعدك في متابعة أهدافك الدراسية.</p>
      </div>

      <div class="row mt-4">

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col ml-2">
                  <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    عدد المسئولين</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{{ statistics.admins_count }}</div>
                </div>
                <div class="col-auto">
                  <i class="bi bi-people fs-5"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Earnings (Annual) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col ml-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                   عدد الطلاب</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{{  statistics.students_count }}</div>
                </div>
                <div class="col-auto">
                  <i class="bi bi-people fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tasks Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-info shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col ml-2">
                  <div class="text-xs font-weight-bold text-info text-uppercase mb-1">عدد الفرص
                  </div>
                  <div class="row no-gutters align-items-center">
                    <div class="col-auto">
                      <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">{{  statistics.chances_count }}</div>
                    </div>
                  </div>
                </div>
                <div class="col-auto">
                  <i class="bi bi-person-workspace fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pending Requests Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col ml-2">
                  <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    عدد المفضلات</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{{ wishlists_count }}</div>
                </div>
                <div class="col-auto">
                  <i class="bi bi-heart fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <!-- Basic Card Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">رسالة ترحيبية</h6>
            </div>
            <div class="card-body">
              أهلًا بك <strong>{{ user.first_name + " " + user.last_name}}</strong>. نتمنى لك تجربة مستخدم رائعة مع منصة خطط. جميع المعلومات الشخصية الخاصة بك محفوظة بسريعة تامة لدينا.
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <!-- Basic Card Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="text-primary fw-bold">فكرة موقع خطط</h6>
            </div>
            <div class="card-body">
              منصة خطط هي منصة رائده قادرة على ايصالك لافضل الفرص المتاحة حولك لتمكنك من تحقيق اهدافك عن طريق تسهيل وصولك الى افضل الفرص والأنشطة المتاحة حولك
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <!-- Basic Card Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">إيجاد الفرص</h6>
            </div>
            <div class="card-body">
              إيجاد الفرص هو الخطوة الأولى لتحقيق أحلامك وتطوير ذاتك. في عالمنا اليوم، تتوفر العديد من الفرص التعليمية والمهنية، لكن العثور على الفرصة المناسبة ستجده في موقعنا  

            </div>
          </div>
        </div>
       
        <div class="col-lg-6">
          <!-- Basic Card Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">الفرصة</h6>
            </div>
            <div class="card-body">
             يتم عرض جميع الفرص بناءًا على المعلومات التي تقدمها إلينا عند التسجيل. وبناءًا على ذك نقوم بعرض الفرص ولكل فرصة تفاصيل خاصة يمكنك التسجيل فيها 
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
import { computed, onMounted } from 'vue'
export default {
    setup() {

        // Calling, Declarations, Data
        const store = useStore()
        const user = computed(() => store.state.Auth.user);
        const statistics = computed(() => store.state.Auth.statistics);
        const loading_status = computed(() => store.state.Collection.loading_status);
        const wishlist = JSON.parse(localStorage.getItem("wishlist"));
        let wishlists_count;
        if(!wishlist || wishlist.length === 0)
          wishlists_count = 0;
        else  wishlists_count = wishlist.length;
        store.dispatch("Auth/GetProfile")
        store.dispatch("Auth/GetStatistics")
        const AdminLogout = () => {
            store.dispatch("Auth/Logout", { data: null })
        }

        // Return
        return {
            loading_status,
            AdminLogout,
            statistics,
            wishlists_count,
            user
        }
    }
}
</script>
<!-- Script -->

<style scoped></style>