<template>
  <div>
    <div class="form-container">
      <h1>Prijavi se</h1>
      <form>
        <div class="form-group__token">
          <label class="form-label">E-mail</label>
          <input type="text" class="form-input" id="email" placeholder="Unesite vaš email..."/>
        </div>
        <div class="form-group__token">
          <label class="form-label">Lozinka</label>
          <input type="password" class="form-input" id="password" placeholder="Unesite vašu lozinku..."/>
        </div>
        <button>Prijavi se</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm"
};
</script>

<style scoped>
.form-container {
  background-color: white;
  height: 250px;
  width: 300px;
  text-align: start;
  padding: 35px;
  border-radius: 10px;
  box-shadow: 2px 2px 4px #ccc;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
}

.form-container h1 {
  font-size: 26px;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  font-weight: normal;
}
form {
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 80%;
  width: 100%;
}

form button {
  color: white;
  background-color: rgb(50,50,50);
  border: 0;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  padding: 8px 10px;
  width: 100%;
}

form button:hover {
  cursor: pointer;
  background-color: gray;
}

.form-label {
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.form-input {
  border: 1px solid lightgray;
  font-size: 15px;
  padding: 5px;
  width: 100%;
}

.form-group__token {
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
}
</style>