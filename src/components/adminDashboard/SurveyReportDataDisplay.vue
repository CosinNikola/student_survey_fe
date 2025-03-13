<template>
  <hr>
  <div v-for="(dataLabel, i) in dataLabels" :key="i" class="display">
    <label>{{dataLabel}}: </label>
    <span>{{this.dataValues[i]}}</span>
  </div>
</template>
<script>
export default {
  name: "SurveyReportDataDisplay",
  props: ["dataLabels", "data"],
  computed: {
    dataValues() {
      return Object.values(this.data).map(num => {
        if(typeof num === "number") {
          return num;
        }
        else {
        if(!isNaN(Number(num))) {
          return Number(num).toFixed(2);
        }
        else {
          return num;
        }
        }
      })
    }
  },
  mounted() {
    console.log(Object.values(this.dataValues));
  }
};
</script>


<style scoped>
  .display {
    font-weight: 500;
  }

  span {
    font-weight: bold;
  }
</style>