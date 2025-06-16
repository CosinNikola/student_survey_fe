<template>
  <StudyProgramsManagementNav></StudyProgramsManagementNav>
  <div class="display">
    <router-view/>
  </div>
</template>
<script>
import StudyProgramsManagementNav
  from "@/components/adminDashboard/StudyProgramsManagement/StudyProgramsManagementNav.vue";

export default {
  name: "StudyProgramsManagement",
  components: {StudyProgramsManagementNav}
}
</script>


<style scoped>
.display {
  padding: 0 30px 0 30px;
  text-align: start;
}
</style>