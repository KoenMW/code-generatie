<template>
<<<<<<< HEAD
    <div class="container mt-5 mx-auto">
        <div class="row">
            <div class="col mx-5">
                <userOverview/>
                <accountOverview/>            
            </div>
            <div class="col mx-5">
                <recentTransactions />
            </div>
=======
    <div class="d-flex justify-content-around gap-5">
        <div>
            <userOverview/>
            <accountOverview/>
            <totalBalance/>
>>>>>>> origin/Development
        </div>
    </div>
</template>

<script>
import userOverview from '../components/userOverview.vue';
import recentTransactions from '../components/recentTransactions.vue'
<<<<<<< HEAD
import accountOverview from '../components/userAccountOverview.vue';
=======
import accountOverview from '../components/accountOverview.vue';
import totalBalance from "@/components/totalBalance.vue";
>>>>>>> origin/Development
export default {
    components: {
        userOverview,
        recentTransactions,
        accountOverview,
        totalBalance
    }
}
</script>