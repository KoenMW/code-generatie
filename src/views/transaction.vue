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
  <div id="transfer" class="bg-dark">

    <section>
      <div class="container">
        <form ref="form">
          <h1 id="title">Bank Transfer</h1>
          <hr />
          <h5 class="mb-4"></h5>
          <div class="form-group">
            <label id="label" for="fromAccount">From Account:</label><br>
            <select id="select" v-model="fromAccountId">
              <option v-for="account in accounts" :value="account.id">{{ account.name }}</option>
            </select>
          </div>
          <div class="form-group">
            <label id="label" for="Account">Receiver:</label><br>
            <input type="text" id="select" v-model="toAccountId" required>
          </div>
          <div class="form-group">
            <label id="label" for="Account">Iban:</label><br>
            <input type="text" id="select" v-model="iban" required>
          </div>
          <div class="form-group">
            <label id="label" for="amount">Amount:</label><br>
            <input type="number" id="select" v-model="amount" required>
          </div>
          <button type="submit" id="submitButton" class="btn" @click="transfer">Transfer</button>

        </form>
      </div>
    </section>

  </div>
</template>
  
<script>
export default {
  data() {
    return {
      accounts: [
        { id: 1, name: 'Checking', balance: 1000 },
        { id: 2, name: 'Savings', balance: 5000 },
        { id: 3, name: 'Credit Card', balance: -2000 },
      ],
      fromAccountId: null,
      toAccountId: null,
      amount: null,
    }
  },
  methods: {
    transfer() {
      const fromAccount = this.accounts.find(account => account.id === this.fromAccountId)
      const toAccount = this.accounts.find(account => account.id === this.toAccountId)
      if (fromAccount.balance < this.amount) {
        alert('Insufficient funds')
        return
      }
      fromAccount.balance -= this.amount
      toAccount.balance += this.amount
      alert('Transfer successful')
    },
  },
}
</script>
