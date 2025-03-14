<template>
  <div class="container">
  <label for="">{{ labelText }}: </label>
  <select v-model="selectedValue" @change="this.sendData()">
    <option v-for="oneData in this.data" :value="oneData.id" :key="oneData.id">
      {{ (Object.keys(oneData)).includes("name")? oneData.name : `${(oneData.vocation) ? oneData.vocation : ""} ${oneData.first_name} ${oneData.last_name} ` }}
    </option>
  </select>
  </div>
</template>

<script>
export default {
  name: "SurveyReportSelectMenu",
  props: ["data", "labelText"],
  data() {
    return {
      selectedValue: "",
    }
  },
  methods: {
    sendData() {
      this.$emit("sendData", this.selectedValue);
    }
  }
};
</script>


<style scoped>
  label {
    font-weight: 500;
  }
  select {
    color: rgb(50,50,50);
    border: 0;
    border-bottom: 2px solid rgb(50,50,50);
    font-weight: 600;
    margin-left: 10px;
    font-size: 16px;
  }
  select:focus {
    outline: none;
  }

  .container {
    display: flex;
    flex-direction: row;
  }
</style>