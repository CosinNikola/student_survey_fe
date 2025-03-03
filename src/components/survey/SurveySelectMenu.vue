<template>
  <select v-model="selectMenuValue" @change="handleSelectedValue(options[0].id)" name="" id="" class="form-group__select" >
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
  props: ["options", "id", "prevData"],
  data() {
    return {
      selectMenuValue: ""
    }
  },
  computed: {
    surveyData() {
      let surveyData = this.$store.state.surveyData;
      surveyData[this.id] = this.selectValue;
      return surveyData;
    },
    selectValue() {
      if(this.prevData.length > 0) {
       return this.prevData[this.id];
      }
      else {
       return this.selectMenuValue;
      }
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
        console.log(`ID ${this.id}: `,this.surveyData[this.id]);
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