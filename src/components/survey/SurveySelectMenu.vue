<template>
  <select name="" id="" class="form-group__select">
      <option disabled selected>--</option>
      <SurveySelectMenuOption @change="sendSelectedValue" v-bind:key="option.text" v-for="option in options" :value="option.value" v-model="this.selectValue">
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
  methods: {
    sendSelectedValue() {
      this.$emit("selectedData", this.selectValue);
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