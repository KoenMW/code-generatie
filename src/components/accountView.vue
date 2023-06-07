<style>
hr {
    color: #50A0C6;
}
#accountCard{
    background-color: #50A0C6;;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    margin: 10px;
}
.labelText{
    font-weight: bold;
}
</style>

<template>
    <hr />
    <div class="d-flex justify-content-between flex-wrap">

        <div v-for="account in accounts" :key="account.id" class="mx-auto">
            <div id="accountCard" class="card">
                <label class="labelText">Iban: </label>
                <div>
                    {{ account.iban }}
                </div>
                <label class="labelText">Account type: </label>
                <div>
                    {{ account.accountType }}
                </div>
                <label class="labelText">Balance: </label>
                <div>
                    {{ formatString(account.balance) }}
                </div>
            </div>


        </div>

    </div>
</template>

<script>
import { loginService } from '../stores/login';
import axios from '../axios';
import { h } from 'vue';
import { AxiosHeaders } from 'axios';
export default {
    setup() {
        return {
            store: loginService()
        }

    },
    name: "Login",
    data() {
        return {
            accounts: [],
        };
    },
    methods: {
        //get all accounts from user
        async getAccounts() {
            try {
                //get all accounts from user with token
                const response = await axios.get('/accounts/' + this.store.id);
                this.accounts = response.data;
                console.log(this.accounts);


            }
            catch (error) {
                console.log(error);
            }
        },
        formatString(string){
            let number = parseFloat(string);
            return number.toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
    },
    mounted() {
        this.getAccounts();
    }
};
</script>