<template>
    <hr>
    <div class="d-flex justify-content-between">
        <div>{{ transaction.amount }}</div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            transaction: {
                timestamp: "",
                fromAccount: "",
                toAccount: "",
                amount: 0,
                description: ""
            }
        }
    },
    props: {
        transaction: {
            type: Object,
            required: true
        }
    },
    mounted(transaction) {
        this.transaction = transaction;
    }
    
}
</script>