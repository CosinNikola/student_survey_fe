<template>
  <div class="page">
    <TeacherDashboardNav />
    <DashboardContainer />
  </div>
</template>

<script>
import TeacherDashboardNav from '@/components/teacherDashboard/TeacherDashboardNav.vue'
import DashboardContainer from "@/components/dashboard/DashboardContainer.vue";
export default {
  name: "TeacherDashboardView",
  components: {
    TeacherDashboardNav,
    DashboardContainer,
  }
};
</script>


<style scoped>
  .page {
    display: flex;
    flex-direction: row;
  }
</style>