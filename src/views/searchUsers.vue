<style>
.error {
    background-color: tomato;
    width: 350px;
    margin: 0 auto 10px auto;
    padding: 10px 20px;
    color: white;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.item {
    background-color: #9F82EB;
    cursor: pointer;
}

.item {
    width: 350px;
    margin: 0 auto 10px auto;
    padding: 10px 20px;
    color: white;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

input {
    display: block;
    width: 350px;
    margin: 20px auto;
    padding: 10px;
    background: white url("assets/search-icon.svg") no-repeat 15px center;
    background-size: 15px 15px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}


</style>
<template>
    <div class="container px-4 py-5">
        <h2 id="title" class="pb-2  ">Search users</h2>
        <hr />
        <div id="card" class="col bg-dark">
            <input type="text" v-model="input" placeholder="Search users..." />
            <div class="item" v-for="user in filteredUsers" :key="user">
                <p>{{ user.firstName }} {{ user.lastName }}</p>
                <p v-for="account in accounts">
                <p v-if="user.id == account.userReferenceId && account.accountType == 'CHECKING'">{{ account.iban }}</p>
                </p>
            </div>
            <div class="error" v-if="input && !filteredUsers.length">
                <p>No results found!</p>
            </div>
        </div>

    </div>
</template>
<script>
import { loginService } from '../stores/login';
import axios from '../axios';

export default {
    setup() {
        return {
            store: loginService()
        }

    },
    name: "SearchUsers",
    data() {
        return {
            accounts: [],
            users: [],
            input: '',
            search: 'xuqgeyqwejhqb',
        };
    },
    methods: {
        //get all accounts from user
        async getAccounts() {
            try {
                //get all accounts from user with token
                const response = await axios.get('/accounts/search?offset=0&limit=100');
                this.accounts = response.data;
                console.log(this.accounts);


            }
            catch (error) {
                console.log(error);
            }
        },
        async getAllUsers() {
            try {
                //get all accounts from user with token
                const response = await axios.get('/users');
                this.users = response.data;
                console.log(this.users);
            }
            catch (error) {
                console.log(error);
            }
        },
        

    },
    mounted() {
        this.getAccounts();
        this.getAllUsers();
    },
    
    computed:{
        filteredUsers(){
            if(!this.input) return this.users;

            let searchText = this.input.toLowerCase();
            return this.users.filter(p =>{
                return p.firstName.toLowerCase().includes(searchText) || p.lastName.toLowerCase().includes(searchText);
            })
        }
    }
};
</script>