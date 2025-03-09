<template>
  <div class="container">
    <div v-if="this.dataIsPresent">
      <div class="data-group" v-for="reportData in data" :key="reportData.label">
        <label class="data-group__label">{{reportData.label}}</label>:
        <span class="data-group__value">{{reportData.value}}</span>
      </div>
    </div>
      <p v-else>Trenutno nema podataka!</p>
  </div>
</template>
<script>
export default {
  name: "ReportDataDisplay",
  props: ["data"],
  data() {
    return {
      displayDataKeys : Object.keys(this.data),
    }
  },
  mounted() {
    console.log(typeof this.data);
  },
  computed: {
    dataIsPresent() {
        return this.data.length !== null;
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