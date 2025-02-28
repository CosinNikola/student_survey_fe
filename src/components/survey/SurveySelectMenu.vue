<template>
  <select v-model="selectValue" @change="handleSelectedValue(options[0].id)" name="" id="" class="form-group__select" >
      <option disabled selected>--</option>
      <SurveySelectMenuOption :key="option.id" v-for="option in options" :value="option.value">
        {{option.text}}
      </SurveySelectMenuOption>
  </select>
</template>

<script>
import SurveySelectMenuOption from "@/components/survey/SurveySelectMenuOption.vue";

export default {
  name: "SurveySelectMenu",
  components: { SurveySelectMenuOption },
  props: ["options"],
  data() {
    return {
      selectValue: ""
    }
  },
  computed: {
    surveyData() {
      let surveyData = this.$store.state.surveyData;
      surveyData.push(this.selectValue);
      return surveyData;
    }
  },
  methods: {
    handleSelectedValue(key) {
      // console.log(this.selectValue);
      if(key === "gender") {
        this.$store.commit('setGeneralDataGender', this.selectValue);
      }
      else if(key === "status") {
        this.$store.commit('setGeneralDataStatus', this.selectValue);
      } else if(key === "avgGrade") {
        this.$store.commit('setGeneralDataAvgGrade', this.selectValue);
      } else if(key === "classAttendance") {
        this.$store.commit('setGeneralDataClassAttendance', this.selectValue);
      }
      else {
        console.log(this.surveyData);
      }
    }
  }
};
</script>


<style scoped>

.form-group__select {
  color: rgb(50,50,50);
  border: 0;
  border-bottom: 1px solid rgb(50,50,50);
  font-weight: bold;
  margin-top: 5px;
  font-size: 16px;
}
.form-group__select:focus {
  outline: none;
}</style>