<template>
  <div class="form-page">
    <h1>Izmeni korisnika</h1>
    <form>
      <div class="form-group">
        <label class="form-label">Naziv</label>
        <input type="text" class="form-input" v-model="subjectName">
      </div>
      <div class="form-group">
        <label class="form-label">Akronim</label>
        <input type="text" class="form-input" v-model="subjectAbbr">
      </div>
      <DashboardButton type="success" @click="(e) => {formSubmit(e)}">Potvrdi</DashboardButton>
    </form>
    <p v-if="errorMessageToggle" class="errorMsgDisplay">{{ errorMessage }}</p>
  </div>
</template>

<script>
import DashboardButton from "@/components/adminDashboard/DashboardButton.vue";

export default {
  name: "UserEdit",
  components: {DashboardButton}
}
</script>


<style scoped>

</style>