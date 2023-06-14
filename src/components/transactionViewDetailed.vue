<template>
    <hr class="bg-white">
    <div class="transaction">
        <div id="amountTop">Amount: EUR {{ transaction.direction }}{{ transaction.amount }}</div>
        <hr class="bg-blue">
        <div>Description: {{ transaction.description }}</div>
        <hr class="bg-blue">
        <div>From: {{ transaction.fromAccount }}</div>
        <hr class="bg-blue">
        <div>To: {{ transaction.toAccount }}</div>
        <hr class="bg-blue">
        <div>Date: {{formatDate(transaction.timestamp) }}</div>
        
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
    },
    methods: {
        formatDate(date) {
            var d = new Date(date);
            var day = d.getDate();
            var month = d.getMonth() + 1;
            var year = d.getFullYear();
            var hour = d.getHours();
            var minute = d.getMinutes();
            var second = d.getSeconds();
            return day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + second;
        }
    },
    
}
</script>

<style>
.bg-blue{
    border-color: #50A0C6;    
}

.bg-white{
    border-color: #FFFFFF;
    border-width: 1px;
}

.transaction{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px;
    border: #9F82EB;
    border-style: solid;
    padding: 20px;
}
#amountTop{
    font-weight: bold;
    background-color: rgba(159, 130, 235, 0.4);
    border-radius: 5px;
    padding: 10px;
}

@media (min-width: 1800) {
    .transaction{
        flex-direction: row;
    }
    
}

</style>