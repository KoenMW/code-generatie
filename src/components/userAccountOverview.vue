<template>
    <div class="card bg-dark m-5 p-3 w-100">
        <div class="text-blue d-flex justify-content-between">
            <h3 class="text-blue">Accounts</h3>
            
        </div>
        <account/>
    </div>
</template>

<script>
import account from './accountView.vue'
export default {
    components: {
        account
    }
}
</script>