<style>
#transfer {
    margin: 0 auto;
    margin-top: 5%;
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
    <RouterLink to="/admin" id="backButton" class="btn">
        Back
    </RouterLink>
    <div id="transfer" class="bg-dark">

        <section>
            <div class="container">
                <div ref="form">
                    <h1 id="title">Transfer</h1>
                    <hr />
                    <h5 class="mb-4"></h5>
                    <div class="form-group">
                        <label id="label" for="fromUser">From user:</label><br>
                        <select id="accountDropdown" v-model="fromUser" class="form-control" required @change="setFromAccountList">
                            <template v-for="user in users">
                                <option v-if="checkUser(user)" :value="user.id" disabled>{{ user.username }}</option>
                                <option v-else :value="user.id">{{ user.username }}</option>
                            </template>
                            
                        </select>
                    </div>
                    <div class="form-group">
                        <label id="label" for="fromAccount">From Account:</label><br>
                        <select id="select" v-model="fromAccount" class="form-control" >
                            <template v-for="account in fromAccountList">
                                <option v-if="account.active == true" :value="account.iban" class="">Iban: {{ account.iban }} Balance: {{ account.balance }}</option>
                            </template>
                            
                        </select>
                    </div>
                    <div class="form-group">
                        <label id="label" for="toUser">To user:</label><br>
                        <select id="accountDropdown" v-model="toUser" class="form-control" required @change="setToAccountList">
                            <option v-for="user in users" :value="user.id">name: {{ user.username }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label id="label" for="toAccount">To Account:</label><br>
                        <select id="select" v-model="toAccount" class="form-control">
                            <option v-for="account in toAccountList" :value="account.iban">Iban: {{ account.iban }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label id="label" for="amount">Amount:</label><br>
                        <input type="number" id="select" v-model="amount" class="form-control" required min="0" step="0.01" @input="validateAmount">
                    </div>
                    <button type="submit" id="submitButton" class="btn" @click="transfer">Transfer</button>

                </div>
            </div>
        </section>

    </div>
</template>
  
<script>
import axios from '../axios.js'
import { loginService } from '../stores/login';
export default {
    setup() {
        return {
            store: loginService()
        }
    },
    data() {
        return {
            users: [],
            fromAccountList: [],
            toAccountList: [],
            fromUser: "",
            toUser: "",
            fromAccount: "",
            toAccount: "",
            amount: 0,
            description: "transaction made by employee",
        }
    },
    methods: {
        transfer() {
            axios.post('/transactions', {
                fromAccount: this.fromAccount,
                toAccount: this.toAccount,
                amount: this.amount,
                description: this.description,
            }).then(response => {
                alert("Transfer successful")
                this.$router.push('/home')
            })
            .catch(error => {
                console.log(error)
                alert("Transfer failed")
            })
        },
        
        validateAmount() {
            if (this.amount < 0) {
                this.amount = 0;
            }
            if(this.amount % 0.01 != 0)
            {
                this.amount = Math.round(this.amount * 100) / 100;
            }
        },
        setFromAccountList(){
            axios.get('/accounts/' + this.fromUser).then(response => {
                this.fromAccountList = response.data
            })
            .catch(error => {
                console.log(error)
            })
        },
        setToAccountList(){
            axios.get('/accounts/' + this.toUser).then(response => {
                this.toAccountList = response.data
            })
            .catch(error => {
                console.log(error)
            })
        },
        checkUser(user){
            if(user.id == this.store.getId || user.username == "Bank"){
                
                return true;
            }
            else{
                return false;
            }
        },
    },
    mounted() {
        axios.get('/users').then(response => {
            this.users = response.data
        })
        .catch(error => {
            console.log(error)
        })
    },
}
</script>
