<template>
  <div class="page">
  <div class="survey-container">
    <div class="survey-container__header">{{title}}</div>
    <div class="survey-container__form">
      <slot/>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "SurveyContainer",
  props: ["title"]
};
</script>


<style scoped>
.page {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 80vh;
}

.survey-container {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 15px;
  width: 500px;
  box-shadow: 2px 2px 8px gray;
}

.survey-container__header {
  color: white;
  background-color: rgb(50,50,50);
  font-weight: bold;
  border-radius: 15px 15px 0 0;
  text-align: start;
  padding: 5px;
}

.survey-container__form {
  display:flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
}
</style>