<template>
  <div class="form-group">
    <label for="" class="form-group__label">{{labelText}}</label>
    <SurveySelectMenu @selectedData="handleSelectedData" :options="options" :name="name"></SurveySelectMenu>
  </div>
</template>

<script>
import SurveySelectMenu from "@/components/survey/SurveySelectMenu.vue";

export default {
  name: "SurveyFormGroup",
  components: { SurveySelectMenu },
  props: ["labelText", "options", "name"],
  data() {
    return {
      selectedData: ""
    }
  },
  methods: {
    handleSelectedData(data) {
      this.$emit("selectedData", data);
    }
  }
};
</script>


<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 80%;
}
.form-group__label {
  font-size: 14px;
}
</style>