<template>
  <button @click="submitData">Pretraži</button>
</template>
<script>
export default {
  name: "SurveyReportSubmitButton"
};
</script>


<style scoped>
    button {
      color: white;
      background-color: rgb(50,50,50);
      border: 0;
      border-radius: 10px;
      font-size: 16px;
      font-weight: bold;
      padding: 8px 10px;
      width: 100px;
    }
    button:hover {
      cursor: pointer;
      background-color: gray;
    }

</style>