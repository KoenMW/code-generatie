<style>
#card {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 10px;
    padding: 10px;

}

#title {
    color: #9F82EB;
}

#mainTitle {
    color: #9F82EB;
}

hr {
    color: #9F82EB;
}

#functionButton {
    background-color: #9F82EB;
    
}

#functionButton:hover {
    background-color: #321A72;
}

#newButton {
    background-color: #9F82EB;
    margin-bottom: 20px;
}

#newButton:hover {
    background-color: #321A72;
}

#backButton {
    background-color: #9F82EB;
    margin: 20px;
}

#backButton:hover {
    background-color: #321A72;
}
#textLabel{
    color: #9F82EB;
}
#field{
    max-width: 200px;
    margin-bottom: 20px;
    margin-right: 1100px;
}
</style>

<template>
    <RouterLink to="/admin" id="backButton" class="btn">
        Back
    </RouterLink>
    <div class="container px-4 py-5" id="hanging-icons">
        <h2 id="title" class="pb-2 ">All accounts</h2>
        <hr />

        <RouterLink to="/Account/create" id="newButton" class="btn">
            New account
        </RouterLink><br>
        <label id="textLabel">Limit:</label>
        <input id="field" type="text" v-model="limit" class="form-control" placeholder="Limit" aria-label="Limit" aria-describedby="basic-addon1">
        <label id="textLabel">Offset:</label>
        <input id="field" type="text" v-model="offset" class="form-control" placeholder="Offset" aria-label="Offset" aria-describedby="basic-addon1">
        <table class="table table-dark table-striped">
            <thead>
                <tr>

                    <th scope="col">Iban</th>
                    <th scope="col">Balance</th>
                    <th scope="col">User id</th>
                    <th scope="col">Account type</th>
                    <th scope="col">Account status</th>
                    
                    <th scope="col">Close</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="account in accounts" :key="account.iban">

                    <td>{{account.iban}}</td>
                    <td>{{account.balance}}</td>
                    <td>{{account.userReferenceId}}</td>
                    <td>{{account.accountType}}</td>
                    <td v-if="account.active == true" >Active</td>
                    <td v-else>Innactive</td>
                    
                    <td>
                        <button v-if="!checkUser(account)" id="functionButton" @click="setAccountInnactive(account.iban,'update','active',false)" type="button" class="btn">
                            Close
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

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
    name: "Login",
    data() {
        return {
            accounts: [],
            accountUpdate: {
                iban:"",
                op: "update",
                key: "active",
                value: false	
            },
            limit: 100,
            offset: 0
        };
    },
    methods: {
        //get all accounts from user
        async getAccounts() {
            try {
                //get all accounts from user with token
                const response = await axios.get('/accounts?offset='+this.offset+'&limit='+this.limit+'');
                this.accounts = response.data;
                console.log(this.accounts);
            }
            catch (error) {
                console.log(error);
            }
        },
        setAccountInnactive(iban,op,key,value) {
            this.accountUpdate.iban = iban;
            this.accountUpdate.op = op;
            this.accountUpdate.key = key;
            this.accountUpdate.value = value;
            console.log(this.accountUpdate);
            axios.patch('/accounts', this.accountUpdate)
                .then(response => {
                    this.getAccounts();
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                    alert(error.response.data.message);
                })
        },
        checkUser(account){
            if(account.userReferenceId == this.store.getId || account.iban == 'NL01INHO0000000001'){
                
                return true;
            }
            else{
                return false;
            }
        },
    },
    watch: {
        limit:{
            immediate: true,
            handler(){
                this.getAccounts();
            }
        },
        offset:{
            immediate: true,
            handler(){
                this.getAccounts();
            }
        }
    },
    mounted() {
        this.getAccounts();
    }
};
</script>