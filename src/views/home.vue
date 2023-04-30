<template>
    <div class="container mt-5 mx-auto">
        <div class="row">
            <div class="col mx-5">
                <userOverview/>
                <accountOverview/>            
            </div>
            <div class="col mx-5">
                <recentTransactions />
            </div>
        </div>
    </div>
</template>

<script>
import userOverview from '../components/userOverview.vue';
import recentTransactions from '../components/recentTransactions.vue'
import accountOverview from '../components/userAccountOverview.vue';
export default {
    components: {
        userOverview,
        recentTransactions,
        accountOverview
    }
}
</script>