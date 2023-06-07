<style>
hr {
    border: 1px solid #50A0C6;
}
</style>

<template>
    <div class="card bg-dark m-5 p-3 w-100">
        <hr/>
        <div class="d-flex justify-content-between">
            <div>
                <h5>
                    Total balance
                </h5>
            </div>
            <h5>
                EUR {{ totalBalance() }}
            </h5>
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
        //get total balance from user
        totalBalance(){
            let totalBalance = 0;
            for(let i = 0; i < this.accounts.length; i++){
                totalBalance += this.accounts[i].balance;
            }
            return totalBalance.toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
    },
    mounted() {
        this.getAccounts();
    }
};
</script>