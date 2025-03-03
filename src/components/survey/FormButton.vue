<template>
  <button class="form-button" @click="redirect">{{value}}</button>
</template>

<script>
export default {
  name: "FormButton",
  props: ["value", "route"],
  methods: {
    redirect() {
      this.$router.push(this.route);
    }
  },
};
</script>


<style scoped>
.form-button {
  color: white;
  background-color: rgb(50,50,50);
  border: 0;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  padding: 8px 10px;
  width: 100%
}
.form-button:hover {
  cursor: pointer;
  background-color: gray;
}

.text-white {
  color: white;
  text-decoration: none;
}
</style>