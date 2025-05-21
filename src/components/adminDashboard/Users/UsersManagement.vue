<template>
    <UsersManagementNav />
  <div class="display">
    <h1>Prikaz korisnika</h1>
      <router-view></router-view>
  </div>
</template>
<script>
import UsersManagementNav from "@/components/adminDashboard/Users/UsersManagementNav.vue";

export default {
name: "UsersManagement",
  components: {UsersManagementNav}
}
</script>


<style scoped>
.display {
  padding: 0 30px 0 30px;
  text-align: start;
}
</style>