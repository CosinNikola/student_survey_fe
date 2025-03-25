<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "DashboardContainer",
};
</script>


<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 15px;
    box-shadow: 2px 2px 8px gray;
    width: 88vw;
    min-height: 96vh;
    margin-top: 15px;
    margin-left: 15px;
    align-items: start;
    padding-bottom: 30px;
  }
</style>