<template>
  <option :value="value"><slot/></option>
</template>
<script>
export default {
  name: "SurveySelectMenuOption",
  props: ["value"]
};
</script>


<style scoped>

</style>