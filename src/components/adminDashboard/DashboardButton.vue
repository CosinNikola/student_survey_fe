<template>
  <button :class="(type === 'success') ? 'btn-success' : (type === 'error') ? 'btn-error' : ''"><slot/></button>
</template>
<script>
export default {
  name: "DashboardButton",
  props: ['type']
}
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

.btn-success {
  background-color: green;
}
.btn-success:hover {
  background-color: limegreen;
}
.btn-error {
  background-color: darkred;
}
.btn-error:hover {
  background-color: red;
}
</style>