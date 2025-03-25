<template>
  <h1>Tabela sa tokenima</h1>
  <table>
    <tr>
      <th>Rbr.</th>
      <th>Token</th>
      <th>Kreiran</th>
      <th>Izmenjen</th>
      <th>Iskorišćen</th>
    </tr>
    <tr v-for="(tokenData,i) in allTokensData" :key="i">
      <td>{{i + 1}}</td>
      <td>{{tokenData.token}}</td>
      <td>{{tokenData.created_at}}</td>
      <td>{{tokenData.updated_at}}</td>
      <td>{{(tokenData.is_used === 1) ? "true" : "false"}}</td>
      <td><DashboardButton @click="deleteOneToken(tokenData.token)" type="error">Obriši token</DashboardButton></td>
    </tr>
  </table>
  <div class="buttons-container">
  <div>
    <input type="text" placeholder="Unesite broj tokena" v-model="tokensCount">
  <DashboardButton type="success" @click="generateTokens">Generiši tokene</DashboardButton>
  </div>
  <DashboardButton type="error" @click="deleteAllTokens">Obriši sve tokene</DashboardButton>
  </div>
</template>
<script>
import DashboardButton from "@/components/adminDashboard/DashboardButton.vue";
export default {
  name: "TokensTable",
  components: {DashboardButton},
  data() {
    return {
      allTokensData: [],
      tokensCount: 0
    }
  },
  methods: {
    deleteOneToken(token) {
      if(confirm("Da li ste sigurni da želite obrisati token?")) {
        fetch("http://127.0.0.1:8000/api/delete-one-token/" + token, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "mode": "no-cors",
            "Access-Control-Allow-Origin": "*",
          }
        })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              this.$router.go();
            });
      }
    },
    generateTokens() {
      fetch("http://127.0.0.1:8000/api/generate-tokens-from-dashboard?count="+this.tokensCount, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mode": "no-cors",
          "Access-Control-Allow-Origin": "*",
        }
      })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.$router.go();
          });
    },
    deleteAllTokens() {
      if(confirm("Da li ste sigurni da želite obrisati sve tokene?")) {
      fetch("http://127.0.0.1:8000/api/delete-all-tokens", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "mode": "no-cors",
          "Access-Control-Allow-Origin": "*",
        }
      })
          .then(res => res.json())
          .then(data => {
            console.log(data.message);
            this.$router.go();
          });
    }
      }
  },
  mounted() {
    fetch("http://127.0.0.1:8000/api/all-tokens-data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "mode": "no-cors",
        "Access-Control-Allow-Origin": "*",
      }
    })
        .then(res => res.json())
    .then(data => this.allTokensData = data)
  }
}

</script>


<style scoped>
  table {
    border: 1px solid black;
  }
  th {
    border: 1px solid black;
  }
  td {
    border: 1px solid black;
    max-width: 200px;
    text-align: center;
    overflow: auto;
  }
  .buttons-container {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .buttons-container button {
    margin-top: 10px;
  }
  label {
    font-weight: 500;
  }
  input {
    color: rgb(50,50,50);
    border: 0;
    border-bottom: 2px solid rgb(50,50,50);
    font-weight: 600;
    margin-left: 10px;
    font-size: 16px;
  }
  input:focus {
    outline: none;
  }
</style>