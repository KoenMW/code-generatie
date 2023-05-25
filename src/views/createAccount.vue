<template>
    <div id="new" class="bg-dark">
        <form ref="form">
            <h2 class="mt-3 mt-lg-5">New account</h2>
            <h5 class="mb-4"></h5>


            <div class="input-group mb-3">
                <span class="input-group-text">Absolute limit</span>
                <input type="number" v-model="account.absoluteLimit" class="form-control" placeholder="Absolute limit"
                    aria-label="Absolute limit" aria-describedby="basic-addon1">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Account type</span>
                <select v-model="account.accountType">
                    <option value="SAVINGS">SAVINGS</option>
                    <option value="CURRENT">CHECKING</option>
                    <option value="CREDIT">CREDIT</option>
                </select>

            </div>




            <div class="input-group mb-3">
                <span class="input-group-text">User</span>
                <select v-model="account.userReferenceId">
                    <option v-for="user in users" :value="user.id">{{ user.username }}</option>
                </select>
            </div>



            <div class="input-group mt-4">
                <button id="submitB" @click="newAccount()" type="button" class="btn">New account</button>
                <button id="cancel" type="button" class="btn" @click="this.$router.push('/admin/allAccounts')">
                    Cancel
                </button>
            </div>
        </form>
    </div>
</template>
<style>
#submitB {
    background-color: #9F82EB;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    margin: 5px;
}

#cancel {
    background-color: #402583;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    margin: 5px;
}

#new {
    margin: 0 auto;
    margin-top: 10%;
    width: 50%;
    padding: 10px;
    border-radius: 5px;
}
</style>
<script>
import { loginService } from '../stores/login';
import axios from '../axios';

export default {
    setup() {
        return {
            store: loginService()
        }

    },
    name: "Login",
    data() {
        return {
            account: {
                userReferenceId: 0,
                accountType: "",
                absoluteLimit: 0,
            },
            users: [],
        };
    },
    methods: {
        //get all accounts from user
        newAccount() {
            axios.post('/accounts', this.account)
                .then(response => {
                    console.log(response);
                    this.$router.push('/admin/allAccounts');
                })
                .catch(error => {
                    console.log(error);
                })

        },
        getAllUsers() {
            axios.get('/users')
                .then(response => {
                    console.log(response);
                    this.users = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
        }

    },
    mounted() {
        this.getAllUsers();
    }

};
</script>