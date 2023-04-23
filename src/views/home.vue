<template>
    <div class="d-flex justify-content-around gap-5">
        <div>
            <accountOverview/>
            <rekeningOverzicht/>            
        </div>
        <recentTransactions/>
    </div>
</template>

<script>
import accountOverview from '../components/accountOverview.vue'
import recentTransactions from '../components/recentTransactions.vue'
import rekeningOverzicht from '../components/rekeningOverzicht.vue'
export default {
    components: {
        accountOverview,
        recentTransactions,
        rekeningOverzicht
    }
}
</script>