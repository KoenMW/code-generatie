<template>
    <div class="card bg-dark m-5 p-3 w-100">
        <h3 class="text-purple mx-auto">Recent Transaction</h3>
        <transaction v-for="transaction in transactionData" :key="transaction.id" :transaction="transaction"></transaction>
        <RouterLink to="/transactions" >view all transactions</RouterLink>
    </div>
</template>

<script>
import transaction from './transaction.vue';
import { loginService } from '../stores/login';
import axios from '../axios';
export default {
    components: {
        transaction
    },
    data() {
        return {
            transactionData: []
        };
    },
    setup() {
        return {
            store: loginService()
        }
    },
    methods: {
        async getTransactions() {
            try {
                const response = await axios.get(`/transactions/byUser/${this.store.getId}`);
                this.transactionData = response.data.reverse().slice(0, 5);
                
            }
            catch (error) {
                console.log(error);
            }
        }
    },
    mounted() {
        this.getTransactions();
    }
}
</script>