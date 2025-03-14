<template>
  <div class="container">
    <label for="">Odaberite godinu studija: </label>
    <select v-model="selectedValue" @change="this.sendData()">
      <option v-for="(year, i) in this.yearsOfStudy" :value="year" :key="i">
        {{year}}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: "SurveyReportYearOfStudy",
  data() {
    return {
        yearsOfStudy: [
          1, 2, 3
        ],
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
  padding: 2px;
}
select:focus {
  outline: none;
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>