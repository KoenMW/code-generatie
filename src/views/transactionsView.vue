<template>
    <div class="card bg-dark mt-5 m-auto p-3 w-75">
        <h3 class="text-purple mx-auto">All transactions</h3>
        <hr class="bg-purple">
        <div>
            <label class="text-purple">Filter by date</label><br>
            <input type="date" v-model="dateFrom" class="form-control w-25 d-inline-block" style="margin-right: 20px;">
            <input type="date" v-model="dateTo" class="form-control w-25 d-inline-block">
        </div>
        <transaction v-for="transaction in filteredTransactions" :key="transaction.id" :transaction="transaction"></transaction>
    </div>
</template>

<script>
import transaction from '../components/transactionViewDetailed.vue';
import { loginService } from '../stores/login';
import axios from '../axios';

export default{
    components: {
        transaction
    },
    data(){
        return{
            transactions: [],
            dateFrom: '',
            dateTo: ''
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
    },
    
    computed:{
        filteredTransactions(){
        //filter all transactions and check if they are between two dates 
            if(!this.dateFrom || !this.dateTo){
                return this.transactions;
            }
            return this.transactions.filter(transaction => {
                return transaction.timestamp >= this.dateFrom && transaction.timestamp <= this.dateTo;
            });
        }
    }
}
</script>