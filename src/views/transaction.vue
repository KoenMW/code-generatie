<style>
#transfer {
  margin: 0 auto;
  margin-top: 10%;
  width: 50%;
  padding: 10px;
  border-radius: 5px;

}

#label {
  margin-top: 10px;
  margin-bottom: 10px;

}

#submitButton {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 20%;
  background-color: #9F82EB;
}

#submitButton:hover {
  background-color: #321A72;
}

#select {

  margin-bottom: 10px;
}

#title {
  color: #9F82EB;
}

hr {
  border: 1px solid #9F82EB;
}
</style>

<template>
  <div class="container px-4 py-5">
    <h2 id="title" class="pb-2  ">Transfer</h2>
    <hr />
    <div id="transfer" class="bg-dark">
      <div class="container form">
        <label id="label" for="fromAccount">From Account:</label><br>
        <select id="accountDropdown" v-model="fromAccountIban" class="form-control" required>
          <template v-for="account in accounts">
            <option  :value="account.iban" class="">Iban: {{ account.iban }} Balance: {{ account.balance }}</option>
          </template>
        </select>

        <label id="label" for="Account" class="form-label">Receiver Iban:</label><br>
        <input type="text" id="select" v-model="toAccountIban" class="form-control" required placeholder="Iban">

        <label id="label" for="amount">Amount:</label><br>
        <input type="number" id="select" v-model="amount" class="form-control" required min="0" step="0.01" @input="validateAmount">

        <label id="label" for="description">Description:</label><br>
        <input type="text" id="select" v-model="description" class="form-control">

        <button type="submit" id="submitButton" class="btn" @click="transfer">Transfer</button>
      </div>

    </div>
    <div class="alert alert-danger m-5" role="alert" v-if="errorMessage">
      <strong>Error:</strong> {{ errorMessage }}
    </div>
  </div>
</template>
  
<script>
import axios from '../axios';
import accountview from '../components/accountView.vue'
import loginService from '../stores/login'
export default {
  data() {
    return {
      accounts: [],
      fromAccountIban: "",
      toAccountIban: "",
      amount: 0,
      description: "",
      errorMessage: ""
    }
  },
  setup() {
    return {
      store: loginService()
    }
  },
  components: {
    accountview
  },
  methods: {
    async transfer() {
      const fromAccount = this.accounts.find(account => account.iban === this.fromAccountIban)
      if (fromAccount.balance < this.amount) {
        alert('Insufficient funds' + fromAccount.balance)
        return
      }
      await axios.post('/transactions', {
        fromAccount: this.fromAccountIban,
        toAccount: this.toAccountIban,
        amount: this.amount,
        description: this.description
      }).then(response => {
        alert('Transfer successful')
        this.$router.push('/home')
      }).catch(error => {
        this.errorMessage = error.response.data.message
      });
    }, 
    validateAmount() {
      if (this.amount < 0) {
          this.amount = 0;
      }
      if(this.amount % 0.01 != 0)
      {
          this.amount = Math.round(this.amount * 100) / 100;
      }
    },
  },
  async mounted() {
    try {
        await axios.get('/accounts/' + this.store.id)
        .then(response => {
          this.accounts = response.data;
        }).catch(error => {
          console.log(error);
        });


    }
    catch (error) {
        console.log(error);
    }
  }
}
</script>
