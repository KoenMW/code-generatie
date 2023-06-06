<template>
    <div class="card bg-dark m-5 p-3 w-100">
        <h3 class="text-purple mx-auto">Recent Transaction</h3>
        <transaction v-for="transaction in transactions" :key="transaction.id" :transaction="transaction"></transaction>
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
            transactions: []
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
                console.log("getTransactions");
                console.log( {userId: this.store.getId});
                const response = await axios.post('/transactions/byUser', {userId: this.store.getId});
                this.transactions = response.data;
                console.log(this.transactions);
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