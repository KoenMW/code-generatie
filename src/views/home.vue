<template>
    <div class="container px-4 py-5">
        <h2 id="title" class="pb-2  ">Home</h2>
        <hr />
        <div class="row">
            <div class="col mx-5">
                <userOverview/>
                <accountOverview/>            
                <totalBalance/>     
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