<template>
    <div class="card bg-dark m-5 p-3 w-100">
        <div class="text-blue d-flex justify-content-between">
            <h3 class="text-blue">accounts</h3>
            <RouterLink to="/account/create" class="text-blue">+</RouterLink>
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