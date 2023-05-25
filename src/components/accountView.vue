<style>
hr {
    border: 1px solid #50A0C6;
}
</style>

<template>
    <hr />
    <div class="d-flex justify-content-between">
        
        <div v-for="account in accounts" :key="account.id">
            <div>
                {{ account.iban }}
            </div>
            <div>
                {{ account.accountType }}
                <div>
                    {{ account.balance }}
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
        }
    },
    mounted() {
        this.getAccounts();
    }
};
</script>