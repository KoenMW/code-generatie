<template>
    <div class="card bg-dark mt-5 m-auto p-3 w-75">
        <h3 class="text-purple mx-auto">All transactions</h3>
        <hr class="bg-purple">
        <div>

            <button class="btn btn-purple mb-3" @click="showFilter">
            Filter Options
            </button>

            <div v-if="filterButton">
                <div class="form-group">
                    <label class="text-purple">Filter by date</label><br>
                    <br/>
                    From: <input type="date" v-model="dateFrom" class="form-control w-25 d-inline-block" style="margin-right: 20px;">
                    To: <input type="date" v-model="dateTo" class="form-control w-25 d-inline-block">
                </div>
                <div class="form-group">
                    Filter by iban: <input type="text" v-model="iban" class="form-control w-25 d-inline-block" placeholder="Filter by IBAN">
                    <br/>
                    Filter by amount:
                    <input type="number" v-model="amount" class="form-control w-25 d-inline-block" placeholder="Filter by amount">
                    <select v-model="amountComparison" class="form-control w-25 d-inline-block">
                        <option value="equal">Equal to</option>
                        <option value="greater">Greater than</option>
                        <option value="less">Less than</option>
                    </select>
                </div>
            </div>

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
            dateTo: '',
            iban: '',
            amount: null,
            filterButton: false,
            amountComparison: 'equal',
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
        },
        showFilter(){
            this.filterButton = !this.filterButton;
        },
        checkTransactionDate(transaction){
            if(this.dateFrom != '' && this.dateTo != ''	)
            {
                if(transaction.timestamp >= this.dateFrom && transaction.timestamp <= this.dateTo)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return true;
            }
        },
        checkTransactionIban(transaction){
            if(this.iban != '')
            {
                if(transaction.fromAccount.includes(this.iban) || transaction.toAccount.includes(this.iban))
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return true;
            }
        },
        checkTransactionAmount(transaction) {
            if (this.amount !== null) {
                switch (this.amountComparison) {
                case 'equal':
                    return transaction.amount === this.amount;
                case 'greater':
                    return transaction.amount > this.amount;
                case 'less':
                    return transaction.amount < this.amount;
                default:
                    return false;
                }
            } else {
                return true;
            }
        }

    },
    mounted(){
        this.getTransactions();
    },
    
    computed:{
        filteredTransactions(){
            const filtered = [];
            this.transactions.forEach( transaction => {
                if(this.checkTransactionDate(transaction) && this.checkTransactionIban(transaction) && this.checkTransactionAmount(transaction))
                {
                    filtered.push(transaction);
                }
            });
            return filtered;

        }
    }
}
</script>

<style>
.btn{
    background-color: #9F82EB;
    margin-bottom: 20px;
}

.btn:hover{
    background-color: #321A72;
}
</style>