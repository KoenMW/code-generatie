<template>
    <div id="new" class="bg-dark">
        <form ref="form">
            <h2 class="mt-3 mt-lg-5">New account</h2>
            <h5 class="mb-4"></h5>


            <div class="mb-3">
                
                <label for="accountType" class="labelText">Absolute limit</label>
                <input class="inputField" type="number" v-model="account.absoluteLimit"  placeholder="Absolute limit">
            </div>

            <div class="mb-3">
                <label for="accountType" class="labelText">Account type</label><br>
                <select v-model="account.accountType">
                    <option value="SAVINGS">SAVINGS</option>
                    <option value="CHECKING">CHECKING</option>
                    <option value="CREDIT">CREDIT</option>
                </select>

            </div>




            <div class="mb-3">
                <label for="accountType" class="labelText">User</label><br>
                <select  v-model="account.userReferenceId">
                    <template v-for="user in users">
                        <option v-if="checkUser(user)" :value="user.id" disabled>{{ user.username }}</option>
                        <option v-else :value="user.id">{{ user.username }}</option>
                    </template>
                    
                </select>
            </div>



            <div class="mt-2">
                <button id="submitB" @click="newAccount()" type="button" class="btn">New account</button>
                <button id="cancel" type="button" class="btn" @click="this.$router.push('/admin/allAccounts')">
                    Cancel
                </button>
            </div>
            <p id="error"></p>
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
    
}
#submitB:hover{
    background-color: #321A72;
}
.labelText{
    color: white;
    margin-bottom: 5px;
}

.inputField{
    background-color: white;
    max-width: 300px;
    border-radius: 5px;
    margin-right: 80px;
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
#cancel:hover{
    background-color: #321A72;
}

#new {
    margin: 0 auto;
    margin-top: 10%;
    width: 50%;
    padding: 10px;
    border-radius: 5px;
    max-width: 400px;
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
            console.log(this.account);
            axios.post('/accounts', this.account)
                .then(response => {
                    console.log(response);
                    this.$router.push('/admin/allAccounts');
                })
                .catch(error => {
                    console.log(error);
                    document.getElementById("error").innerHTML = "Please fill in every field";
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
        },
        checkUser(user) {
            if (user.username == this.store.getUsername|| user.username == "Bank") {
                
                return true;
            } else {
                return false;
            }
        },
    

    },
    mounted() {
        this.getAllUsers();
    }

};
</script>