<template>
    <DashboardLayout>
            <div class="row mt-4">
                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <mini-statistics-card title="Today's Money" value="$53,000" :percentage="{
                        value: '+505%',
                        color: 'text-success',
                    }" :icon="{
            component: 'ni ni-money-coins',
            background: iconBackground,
        }" direction-reverse />
                </div>
                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <mini-statistics-card title="Today's Users" value="2,300" :percentage="{
                        value: '+3%',
                        color: 'text-success',
                    }" :icon="{
            component: ' ni ni-world',
            background: iconBackground,
        }" direction-reverse />
                </div>
                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <mini-statistics-card title="New Clients" value="+3,462" :percentage="{
                        value: '-2%',
                        color: 'text-danger',
                    }" :icon="{
            component: 'ni ni-paper-diploma',
            background: iconBackground,
        }" direction-reverse />
                </div>
                <div class="col-xl-3 col-sm-6 mb-xl-0">
                    <mini-statistics-card title="Sales" value="$103,430" :percentage="{
                        value: '+5%',
                        color: 'text-success',
                    }" :icon="{
            component: 'ni ni-cart',
            background: iconBackground,
        }" direction-reverse />
                </div>
            </div>
    </DashboardLayout>
</template>

<script>
import MiniStatisticsCard from "../../components/MiniStatisticsCard.vue";
export default {
    name: "dashboard-default",
    data() {
        return {
  
        };
    },
    components: {
        MiniStatisticsCard,
    },
};
</script>


<style scoped>
</style>