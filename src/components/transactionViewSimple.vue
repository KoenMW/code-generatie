<style>
#amount{
    font-weight: bold;
}
</style>
<template>
    <hr>
    <div class="d-flex justify-content-between">
        <div id="amount">EUR {{ transaction.direction }}{{ transaction.amount }}</div>
        <div> {{ transaction.description }}</div>
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