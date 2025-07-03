<template>
  <AssociatesManagementNav />
  <div class="display">
    <router-view/>
  </div>
</template>
<script>
import AssociatesManagementNav from "@/components/adminDashboard/AssociatesManagement/AssociatesManagementNav.vue";

export default {
  name: "AssociatesManagement",
  components: {AssociatesManagementNav}
}
</script>


<style scoped>
.display {
  padding: 0 30px 0 30px;
  text-align: start;
}
</style>