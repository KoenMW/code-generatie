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

#transfer {
    margin: 0 auto;
    margin-top: 10%;
    width: 50%;
    padding: 10px;
    border-radius: 5px;

}

#accountName {
    color: #9F82EB;
}
</style>

<template>
    <RouterLink to="/admin" id="backButton" class="btn">
        Back
    </RouterLink>
    <div class="container px-4 py-5" id="hanging-icons">
        <h2 id="title" class="pb-2  ">Novabank account</h2>
        <hr />
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3 ">
            <div id="transfer" class="bg-dark">
                <h3 id="accountName">Account</h3>
                <hr />
                <div v-for="account in accounts" :key="account.id">
                    <div v-if="account.iban == 'NL01INHO0000000001'">
                        <div>
                            Iban: 
                            {{ account.iban }}
                        </div>
                        <div>
                            Account type:
                            {{ account.accountType }}
                            <div>
                                Balance:
                                {{ account.balance }}
                            </div>
                        </div>
                    </div>
                </div>
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
                const response = await axios.get('/accounts/' + 2);
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