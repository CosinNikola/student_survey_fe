<template>
  <SubjectsManagementNav />
  <div class="display">
    <router-view/>
  </div>
</template>
<script>
import SubjectsManagementNav from './SubjectsManagementNav.vue'
export default {
  name: "SubjectsManagement",
  components: {SubjectsManagementNav},
}
</script>


<style scoped>
  .display {
    padding: 0 30px 0 30px;
    text-align: start;
  }
</style>