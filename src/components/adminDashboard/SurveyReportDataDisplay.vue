<template>
  <div v-for="(dataLabel, i) in dataLabels" :key="i">
    <label>{{dataLabel}}:</label>
    <span>{{this.dataValues[i]}}</span>
  </div>
    <hr>
</template>
<script>
export default {
  name: "SurveyReportDataDisplay",
  props: ["dataLabels", "data"],
  computed: {
    dataValues() {
      return Object.values(this.data);
    }
  },
  mounted() {
    console.log(Object.values(this.dataValues));
  }
};
</script>


<style scoped>

</style>