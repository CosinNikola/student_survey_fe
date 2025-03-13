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
        this.$store.commit('setStudyProgramsData', data);
        console.log(this.$store.state.studyProgramsData);
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
        this.$store.commit('setSubjectsData', data);
        console.log(this.$store.state.subjectsData);
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
        this.$store.commit('setTeachersData', data);
        console.log(this.$store.state.teachersData);
      }); fetch("http://127.0.0.1:8000/api/associates", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "mode": "no-cors",
        "Access-Control-Allow-Origin": "*",
      }
    })
      .then(res => res.json())
      .then(data => {
        this.$store.commit('setAssociatesData', data);
        console.log(this.$store.state.associatesData);
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