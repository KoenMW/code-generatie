<template>
    <hr class="bg-white">
    <div class="transaction">
        <div>Amount: {{ transaction.direction }}{{ transaction.amount }}</div>
        <hr class="bg-blue">
        <div>Description: {{ transaction.description }}</div>
        <hr class="bg-blue">
        <div>From: {{ transaction.fromAccount }}</div>
        <hr class="bg-blue">
        <div>To: {{ transaction.toAccount }}</div>
        <hr class="bg-blue">
        <div>Date: {{ transaction.timestamp }}</div>
        <hr class="bg-blue">
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

<style>
.bg-blue{
    border-color: #50A0C6;    
}

.bg-white{
    border-color: #FFFFFF;
    border-width: 3px;
}

.transaction{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

@media (min-width: 1800) {
    .transaction{
        flex-direction: row;
    }
    
}

</style>