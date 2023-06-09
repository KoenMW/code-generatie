<template>
    <div class="container px-4 py-5">
        <h2 id="title" class="pb-2  ">Deposit/Withdraw</h2>
        <hr />

            <div id="transfer" class="bg-dark w-75">
                <div class="container form depositWithdraw w-100">
                    <div class="w-100">
                        
                    <label id="label" for="fromAccount">From Account:</label><br>
                    <select id="accountDropdown" v-model="fromAccountIban" class="form-control" required @change="setSelectAccount">
                        <option v-for="account in getCheckingAccounts" :value="account.iban">iban: {{ account.iban }}</option>
                    </select>

                    <label id="label" for="amount">Amount:</label><br>
                    <input type="number" id="select" v-model="amount" class="form-control" required min="0" step="0.01" @input="validateAmount">

                    <div class="d-flex justify-content-around w-100">
                        <button type="submit" id="submitButton" class="btn m-auto" @click="deposit">Deposit</button>
                        <button type="submit" id="submitButton" class="btn m-auto" @click="withdraw">Withdraw</button>
                        

                    </div>
                    </div>
                    <singleAccountView v-model="fromAccountIban" :account="selectedAccount"></singleAccountView>

                </div>
            </div>
                
            
    </div>
        
    <div class="alert alert-danger m-5" role="alert" v-if="errorMessage">
        <strong>Error:</strong> {{ errorMessage }}
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
            fromAccountIban: "",
            amount: 0,
            selectedAccount: {
                absoluteLimit: 0,
                accountType: "",
                active: false,
                balance: 0,
                iban: "",
                userReferenceId: 0
            },
            errorMessage: ""
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
                this.fromAccountIban = this.accounts[0].iban;
                this.setSelectAccount();
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
                this.accounts = response.data;
                this.amount = 0;
                this.description = "";
                this.getAccounts();
            } catch (error) {
                this.errorMessage = error.response.data.message;
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

        },
        setSelectAccount() {
            this.selectedAccount = this.accounts.find(
                account => account.iban === this.fromAccountIban
            );
        }
    },
    mounted() {
        this.getAccounts();
    },
    computed: {
        getCheckingAccounts() {
            //get accounts were account.accountType == "CHECKING":
            return this.accounts.filter(account => account.accountType == "CHECKING");
        }
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

.depositWithdraw{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

@media (max-width: 1000px) {
    .depositWithdraw{
        flex-direction: column;
    }
}
</style>