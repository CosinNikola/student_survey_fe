<template>
  <div class="container">
    <div v-if="this.showData === 1">
      <div class="data-group" v-for="(reportDataValue, i) in dataValues" :key="i">
        <label class="data-group__label">{{dataLabels[i]}}</label>:
        <span class="data-group__value">{{dataValues[i]}}</span><span v-if="i === 2">%</span>
      </div>
    </div>
    <div v-else-if="this.showData === 2">Trenutno nema podataka!</div>
  </div>
</template>
<script>
export default {
  name: "ReportGeneralDataDisplay",
  props: ["dataLabels", "dataValues"],
  data() {
    return {
      showData: 0,
    }
  },
  updated() {
    if(this.dataValues[2] > 0) {
      this.showData = 1;
    }
    else if(this.dataValues[2] === 0){
      this.showData = 2;
    }
    else {
      this.showData = 0;
    }
  },
  computed: {
    dataIsPresent() {
       return true;
    }
  }
};
</script>


<style scoped>
  .container {
    font-weight: 500;
    text-align: start;
  }
  span {
    font-weight: bold;
  }
</style>