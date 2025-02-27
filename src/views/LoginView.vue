<template>
  <div>
    <LoginForm />
  </div>
</template>
<script>
import LoginForm from '../components/login/LoginForm.vue';

export default {
  name: "LoginView",
  components: {
    LoginForm,
  },
};
</script>
<style scoped>
div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 80vh;
}
</style>