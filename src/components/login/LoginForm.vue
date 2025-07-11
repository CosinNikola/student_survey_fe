<template>
  <div>
    <div class="form-container">
      <h1>Prijavi se</h1>
      <form>
        <div class="form-group__token">
          <label class="form-label">E-mail</label>
          <input type="text" class="form-input" id="email" placeholder="Unesite vaš email..." v-model="email"/>
        </div>
        <div class="form-group__token">
          <label class="form-label">Lozinka</label>
          <input type="password" class="form-input" id="password" placeholder="Unesite vašu lozinku..." v-model="password"/>
        </div>
        <p v-if="errorMessageToggle" class="errorMsgDisplay">{{ errorMessage }}</p>
        <button @click="login">Prijavi se</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      formData: {},
      errorMessage: "",
      errorMessageToggle: false
    }
  },
  methods: {
    login(e) {
      e.preventDefault();

      if(!this.email && !this.password) {
        this.errorMessage = "Sva polja moraju biti popunjena!";
        this.errorMessageToggle = true;
      }
      else {
      this.formData = {
        email: this.email,
        password: this.password
      }
      console.log(this.formData);


      fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        body: JSON.stringify(this.formData),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        }
      })
          .then(res => {
            if (!res.ok) {
              if (res.status === 401) {
                this.errorMessage = "Uneti podaci nisu ispravni!";
              } else {
                this.errorMessage = `Greška: ${res.status}`;
              }
              this.errorMessageToggle = true;
              return Promise.reject(this.errorMessage);
            }
            return res.json();
          })
        .then(data => {
          console.log(data);
          localStorage.setItem("token", data.access_token);
          localStorage.setItem("userData", JSON.stringify(data.user));

          if(data.user.role_id === 1) {
            this.$router.push("/admin-dashboard");
          }
          else if(data.user.role_id === 2) {
            this.$router.push("/teacher-dashboard");
          }
          }
        ).catch(err => {
          console.error("Login greška:", err);
          if (typeof err === "string") {
            // Već smo postavili errorMessage gore
            this.errorMessageToggle = true;
          } else {
            this.errorMessage = "Došlo je do greške pri logovanju.";
            this.errorMessageToggle = true;
          }
        });
      }
          // if(res.status === 200){
          //   // this.$router.push("/general-data");
          //
          // }
          // else if (res.status === 404 && this.formData.token === "") {
          //   alert("Morate uneti token!");
          // }
          // else if (res.status === 404) {
          //   alert("Nazalost, Vas token je istekao!");
          // }

    }
  }
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
.errorMsgDisplay {
  font-weight: bold;
  color: red;
}
</style>