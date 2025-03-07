<template>
    <div class="form-container">
      <h1>Prijava na anketu</h1>
        <form>
          <div class="form-group__token">
            <label id="token-label">Token</label>
            <input type="text" id="token" placeholder="Unesite vaš token..." v-model="token"/>
          </div>
          <button class="button" @click="login">Prijavite se</button>
        </form>
    </div>
</template>
<script>

export default {
    name: "TokenLoginForm",
  components: { },
  data() {
      return {
        token: "",
        formData: {
          token: "",
        }
      }
  },
  methods: {
      login(e) {
        this.formData = {
          token: this.token
        };
        e.preventDefault();
        fetch("http://127.0.0.1:8000/api/token-login", {
          method: "PUT",
          body: JSON.stringify(this.formData),
          headers: {
            "Content-Type": "application/json",
            "mode": "no-cors",
            "Access-Control-Allow-Origin": "*",
          }
        })
          .then(res => {
            if(res.status === 200){
              this.$router.push("/general-data");
            }
            else if (res.status === 404 && this.formData.token === "") {
              alert("Morate uneti token!");
            }
            else if (res.status === 404) {
              alert("Nazalost, Vas token je istekao!");
            }
          })
      }
  }
}
</script>
<style scoped>
  .form-container {
    background-color: white;
    height: 200px;
    width: 300px;
    text-align: start;
    padding: 35px;
    border-radius: 10px;
    box-shadow: 2px 2px 4px #ccc;
    display:flex;
    flex-direction: column;
    justify-content: center;
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
      justify-content: center;
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

    #token-label {
      font-weight: bold;
      font-size: 12px;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    #token {
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

  .button {
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
  .button:hover {
    cursor: pointer;
    background-color: gray;
  }
</style>