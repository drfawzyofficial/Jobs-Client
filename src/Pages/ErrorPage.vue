<template>
    <div class="container-fluid">
        <div class="container py-5">
            <div class="not-found-content text-center py-5">
                <img class="img-fluid" src="../assets/images/error.png" alt="error-image">
                <h3>عذرًا! لا يمكن العثور على هذه الصفحة.</h3>
                <p>الصفحة التي تبحث عنها قد تكون تمت إزالتها أو تم تغيير اسمها أو غير متاحة مؤقتًا.</p>
                <router-link to="/" class="btn btn-lg btn-primary">الرئيسية</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ErrorPage'
}
</script>