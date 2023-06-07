<template>
    <div class="container px-4 py-5">
        <h2 id="title" class="pb-2  ">Deposit/Withdraw</h2>
        <hr />

        <div>
            <div id="transfer" class="bg-dark">
                <div class="container form">
                    <label id="label" for="fromAccount">From Account:</label><br>
                    <select id="accountDropdown" v-model="selectedAccount" class="form-control" required>
                        <option v-for="account in accounts" :value="account" class="">Iban: {{ account.iban }} Balance: {{ account.balance }}</option>
                    </select>

                    <label id="label" for="amount">Amount:</label><br>
                    <input type="number" id="select" v-model="amount" class="form-control" required min="0" step="0.01" @input="validateAmount">

                    <button type="submit" id="submitButton" class="btn" @click="deposit">Deposit</button>
                    <button type="submit" id="submitButton" class="btn" @click="withdraw">Withdraw</button>
                </div>

                <singleAccountView :account="selectedAccount"></singleAccountView>

            </div>
        </div>
    </div>
</template>

<script>
import axios from '../axios';
import accountview from '../components/accountView.vue'
import loginService from '../stores/login'
import singleAccountView from '../components/singleAccountView.vue';
export default {
    data() {
        return {
            accounts: [],
            selectedAccount: Object,
            amount: 0
        }
    },
    setup() {
        return {
            store: loginService()
        }
    },
    components: {
        accountview,
        singleAccountView
    },
    methods: {
        async getAccounts() {
            try {
                const response = await axios.get('/accounts/' + this.store.getId);
                this.accounts = response.data;
                console.log(this.accounts)
                console.log(this.accounts[0].type)
            } catch (error) {
                console.error(error);
            }
        },
        async deposit() {
            try {
                const response = await axios.post('/transactions/deposit', {
                    iban: this.fromAccountIban,
                    amount: this.amount
                });
                alert('Deposit successful')
                this.accounts = response.data;
                this.amount = 0;
                this.description = "";
                this.getAccounts();
            } catch (error) {
                
                console.error(error);
            }
        },
        async withdraw() {
            if (this.amount > this.accounts.find(account => account.iban === this.fromAccountIban).balance) {
                alert('Insufficient funds')
                return
            }
            try {
                const response = await axios.post('/transactions/withdraw', {
                    iban: this.fromAccountIban,
                    amount: this.amount
                });
                alert('Withdrawal successful')
                this.accounts = response.data;
                this.amount = 0;
                this.description = "";
                this.getAccounts();
            } catch (error) {
                alert('Withdrawal failed, please check absolut limit')
                console.error(error);
            }
        },
        validateAmount() {
            if (this.amount < 0) {
                this.amount = 0;
            }
            if(this.amount > 1000)
            {
                this.amount = 1000;
            }
            if(this.amount % 0.01 != 0)
            {
                this.amount = Math.round(this.amount * 100) / 100;
            }

        }
    },
    mounted() {
        this.getAccounts();
    }
}
</script>
<style>
#label{
    margin-top: 20px;
    margin-bottom: 10px;
}
.form-control{
    margin-bottom: 10px;
    margin-top: 0;
}
</style>