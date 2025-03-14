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
  components: { AdminDashboardNav, DashboardContainer },

   mounted() {
    fetch("http://127.0.0.1:8000/api/study-programs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "mode": "no-cors",
        "Access-Control-Allow-Origin": "*",
      }
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("studyProgramsData", JSON.stringify(data));
      });

    fetch("http://127.0.0.1:8000/api/subjects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "mode": "no-cors",
        "Access-Control-Allow-Origin": "*",
      }
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("subjectsData", JSON.stringify(data));
      });

    fetch("http://127.0.0.1:8000/api/teachers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "mode": "no-cors",
        "Access-Control-Allow-Origin": "*",
      }
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("teachersData", JSON.stringify(data));
      });
    fetch("http://127.0.0.1:8000/api/associates", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "mode": "no-cors",
        "Access-Control-Allow-Origin": "*",
      }
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("associatesData", JSON.stringify(data));
      });

  }

};
</script>


<style scoped>
.page {
  display: flex;
  flex-direction: row;
}
</style>