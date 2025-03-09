<template>
  <div class="page">
    <AdminDashboardNav />
    <DashboardContainer />
  </div>
</template>

<script>
import DashboardContainer from "@/components/dashboard/DashboardContainer.vue";
import AdminDashboardNav from "@/components/adminDashboard/AdminDashboardNav.vue";

export default {
  name: "AdminDashboard",
  components: { AdminDashboardNav, DashboardContainer }
};
</script>


<style scoped>
.page {
  display: flex;
  flex-direction: row;
}
</style>