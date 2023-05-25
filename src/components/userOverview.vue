<template>
    <div class="card bg-dark m-5 p-3 w-100">
        <h3 class="text-purple">user overview</h3>
        <div class="d-flex justify-content-between">
            <div>
                <div>
                    {{ this.store.username }}
                </div>
                <div>
                    
                </div>
            </div>
            <h5>
                
            </h5>
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
                const response = await axios.get('/accounts/' + this.store.id);
                this.accounts = response.data;
                console.log(this.accounts);


            }
            catch (error) {
                console.log(error);
            }
        },
        
    },
    mounted() {
        this.getAccounts();
        
    }
};
</script>