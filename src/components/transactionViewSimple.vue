<template>
    <hr>
    <div class="d-flex justify-content-between">
        <div>Amount: {{ transaction.direction }}{{ transaction.amount }}</div>
        <div>Description: {{ transaction.description }}</div>
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
                description: "",
                direction: ""
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