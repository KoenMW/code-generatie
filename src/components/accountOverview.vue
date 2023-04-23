<template>
    <div class="card bg-dark m-5 p-3 w-100">
        <h3 class="text-blue">accounts</h3>
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