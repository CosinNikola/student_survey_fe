<template>
  <div class="container">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link">Pocetna</a>
      </li><li class="nav-item">
        <a class="nav-link">Pregled anketa</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "DashboardNav"
};
</script>


<style scoped>
body {
  margin: 0;
  padding: 0;
}
  .container {
    display: flex;
    flex-direction: column;
    width: 10%;
    background-color: rgb(50,50,50);
    color: white;
    height: 100vh;
    //padding-top: 10px;
  }
  .nav {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .nav-item {
    //height: 100%;
    //width: 100%;
  }
  .nav-link {
    display:block;
    font-weight: bold;
    padding: 10px;
  }
  .nav-link:hover {
    background-color: gray;
    cursor: pointer;
  }

</style>