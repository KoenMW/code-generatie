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



#backButton {
    background-color: #9F82EB;
    margin: 20px;
}

#backButton:hover {
    background-color: #321A72;
}
</style>

<template>
    <RouterLink to="/admin" id="backButton" class="btn">
        Back
    </RouterLink>
    <div class="container px-4 py-5" id="hanging-icons">
        <h2 id="title" class="pb-2 ">All accounts</h2>
        <hr />

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
                    <th scope="col">Limit</th>
                    <th scope="col">Configure limit</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="account in accounts" :key="account.iban">

                    <td>{{ account.iban }}</td>
                    <td>{{ account.balance }}</td>
                    <td>{{ account.userReferenceId }}</td>
                    <td>{{ account.accountType }}</td>
                    <td>{{ account.active }}</td>
                    <td>{{ account.absoluteLimit }}</td>

                    <td>
                        <button v-if="!checkUser(account)" id="functionButton" type="button" class="btn"
                            @click="this.$router.push('/changeLimit/' + account.iban);">
                            Configure limit
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
                iban: "",
                op: "update",
                key: "absoluteLimit",
                value: 0
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


            }
            catch (error) {
                console.log(error);
            }
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

    },
    
};
</script>