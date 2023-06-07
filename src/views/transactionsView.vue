<template>
    <div class="card bg-dark m-5 p-3 w-100">
        <h3 class="text-purple mx-auto">All transactions</h3>
        <transaction v-for="transaction in transactions" :key="transaction.id" :transaction="transaction"></transaction>
    </div>
</template>

<script>
import transaction from '../components/transaction.vue';
import { loginService } from '../stores/login';
import axios from '../axios';

export default{
    components: {
        transaction
    },
    data(){
        return{
            transactions: []
        };
    },
    setup(){
        return{
            store: loginService()
        }
    },
    methods:{
        async getTransactions(){
            try{
                const response = await axios.get(`/transactions/byUser/${this.store.getId}`);
                this.transactions = response.data.reverse();
            }
            catch(error){
                console.log(error);
            }
        }
    },
    mounted(){
        this.getTransactions();
    }
}
</script>