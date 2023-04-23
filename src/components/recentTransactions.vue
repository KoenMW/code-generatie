<template>
    <div class="card bg-dark m-5 p-3">
        <h3 class="text-purple mx-auto">Recente transacties</h3>
        
    <transaction/>
    </div>
</template>

<script>
import transaction from './transaction.vue';
export default {
    components: {
        transaction
    }
}
</script>