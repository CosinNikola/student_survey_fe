<template>
  <TeachersManagementNav />
  <div class="display">
    <router-view/>
  </div>
</template>
<script>
import TeachersManagementNav from './TeachersManagementNav.vue'
export default {
  name: "TeachersManagement",
  components: {TeachersManagementNav}
}
</script>


<style scoped>
.display {
  padding: 0 30px 0 30px;
  text-align: start;
}
</style>