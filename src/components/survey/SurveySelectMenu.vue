<template>
  <select v-model="selectMenuValue"  @change="handleSelectedValue(options[0].id)" name="" id="" class="form-group__select" >
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
  props: ["options", "id", "prevData", "name"],
  data() {
    return {
      selectMenuValue: "--"
    }
  },
  computed: {
    surveyData() {
      let surveyData = this.$store.state.surveyData;
      surveyData[this.id] = this.selectMenuValue;
      return surveyData;
    },
  },
  methods: {
    handleSelectedValue(key) {
      // console.log(this.selectValue);
      if(key === "gender") {
        this.$store.commit('setGeneralDataGender', this.selectMenuValue);
      }
      else if(key === "status") {
        this.$store.commit('setGeneralDataStatus', this.selectMenuValue);
      } else if(key === "avgGrade") {
        this.$store.commit('setGeneralDataAvgGrade', this.selectMenuValue);
      } else if(key === "classAttendance") {
        this.$store.commit('setGeneralDataClassAttendance', this.selectMenuValue);
      }
      else {
        console.log(`ID ${this.id}: `,this.surveyData[this.id]);
      }
    }
  },
  mounted() {
    // console.log(this.prevData);
    // console.log(this.prevData[this.name])
    if(this.prevData) {
      this.selectMenuValue = this.prevData[this.name];
    }
    else {
      this.selectMenuValue = "";
    }
    // this.selectMenuValue = this.prevData[this.name];
    // console.log(this.prevData);
    // console.log(this.selectMenuValue);
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