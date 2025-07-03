<template>
  <div class="form-page">
    <h1>Izmeni saradnika</h1>
    <form>
      <div class="form-group">
        <label class="form-label">Zvanje</label>
        <input type="text" class="form-input" v-model="associateVocation">
      </div>
      <div class="form-group">
        <label class="form-label">Prezime</label>
        <input type="text" class="form-input" v-model="associateLastName">
      </div>
      <div class="form-group">
        <label class="form-label">Ime</label>
        <input type="text" class="form-input" v-model="associateFirstName">
      </div>
      <DashboardButton type="success" @click="(e) => {formSubmit(e)}">Potvrdi</DashboardButton>
    </form>
    <p v-if="errorMessageToggle" class="errorMsgDisplay">{{ errorMessage }}</p>
  </div>
</template>
<script>
import DashboardButton from "@/components/adminDashboard/DashboardButton.vue";

export default {
  name: "AssociateEdit",
  components: {DashboardButton},
  props: ['vocation', 'last_name', 'first_name', 'id'],
  data() {
    return {
      associateVocation: this.vocation,
      associateLastName: this.last_name,
      associateFirstName: this.first_name,
      associateId: this.id,
      errorMessageToggle: false,
      errorMessage: ""
    }
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      this.formData = {
        vocation: this.associateVocation,
        last_name: this.associateLastName,
        first_name: this.associateFirstName
      };
      fetch("http://127.0.0.1:8000/api/associates/" + this.associateId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "mode": "no-cors",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(this.formData)
      })
          .then(res => res.json())
          .then(() => {
            window.location.reload();
          })
    },
     }
}
</script>

<style scoped>

</style>