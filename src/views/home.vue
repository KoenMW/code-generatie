<template>
    <div class="d-flex justify-content-around gap-5">
        <div>
            <userOverview/>
            <accountOverview/>
            <totalBalance/>
        </div>
        <recentTransactions/>
    </div>
</template>

<script>
import userOverview from '../components/userOverview.vue';
import recentTransactions from '../components/recentTransactions.vue'
import accountOverview from '../components/accountOverview.vue';
import totalBalance from "@/components/totalBalance.vue";
export default {
    components: {
        userOverview,
        recentTransactions,
        accountOverview,
        totalBalance
    }
}
</script>