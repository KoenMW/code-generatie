<style scoped>
#title {
    color: #9F82EB;
    padding: 10px;
}
.container {
    margin: 0 auto;
    margin-top: 6%;
    width: 50%;
    padding: 10px;
    border-radius: 5px;
}
.listItem{
    font-weight: bold;
    margin-top: 25px;
    margin-bottom: 5px;
    list-style: none;
}
.listContent{
    color: #c9c9c9;
    list-style: none;
}
</style>

<template>
    <section>
        <div class="container bg-dark">
            <h1 id="title">Profile</h1>
            <hr />
            <ul >
                <li class="listItem">Name</li>
                <li class="listContent">{{user.firstName}} {{ user.lastName }}</li>
                <li class="listItem">Username</li>
                <li class="listContent">{{user.username}}</li>
                <li class="listItem">Email</li>
                <li class="listContent">{{user.email}}</li>
                <div v-for="account in accounts">
                    <li class="listItem">IBAN ({{account.accountType}})</li>
                    <li class="listContent">{{account.iban}}</li>
                </div>
                <li class="listItem">Day limit</li>
                <li class="listContent">EUR {{user.dayLimit}}</li>
                <li class="listItem">Transaction limit</li>
                <li class="listContent">EUR {{user.transactionLimit}}</li>
                <li class="listItem">Remaining day limit</li>
                <li class="listContent">EUR {{login.getRemainingDailyLimit}}</li>
            </ul>
        </div>
    </section>
</template>

<script>
import axios from '../axios';
import loginService from '../stores/login';

//on page load get the remaining daily limit from /users/dailylimit/{id} and display it
export default {
    name: "profile",
    data() {
        return {
            login: loginService(),
            remainingDailyLimit: 0,
            user: {},
            accounts: {}
        }
    },
    setup() {
        return {
            login: loginService(),
        }
    },
    methods: {
        async getRemainingDailyLimit() {
            try {
                const response = await axios.get(`users/dailylimit/${this.login.id}`);
                this.remainingDailyLimit = response.data;
            } catch (error) {
                console.log(error);
            }
        },
        async getById(){
            try {
                const response = await axios.get(`users/${this.login.id}`);
                this.user = response.data;
            } catch (error) {
                console.log(error);
            }
        },
        async getByUserId(){
            try{
                const response = await axios.get(`accounts/${this.login.id}`);
                this.accounts = response.data;
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted() {
        this.login.setRemainingDailyLimit();
        this.getById();
        this.getByUserId();
    }
}
</script>

