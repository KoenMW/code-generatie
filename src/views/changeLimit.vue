<template>
    <section>
        <div class="container">
            <form ref="form">
                <h2 class="mt-3 mt-lg-5">Change limit</h2>
                <h5 class="mb-4"></h5>

                <div class="input-group mb-3">
                    <span class="input-group-text">New limit</span>
                    <input type="number" v-model="accountUpdate.value" class="form-control" placeholder="New limit"
                        aria-label="New limit" aria-describedby="basic-addon1">
                </div>

                <div class="input-group mt-4">
                    <button id="submitB" @click="updateLimit()" type="button" class="btn">Change limit</button>
                    <button type="button" class="btn btn-danger" @click="this.$router.push('/configureLimit')">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>
  
<script>
import axios from '../axios';
import { loginService } from '../stores/login';
export default {
    name: "newAppointment",
    props: {
        iban: String,
    },
    setup() {
        return {
            store: loginService()
        }

    },
    data() {
        return {
            
            accountUpdate: {
                iban: this.iban,
                op: "update",
                key: "absoluteLimit",
                value: 0
            }

        };
    },
    methods: {
        updateLimit(){
            axios.patch('/accounts', this.accountUpdate)
                .then(response => {
                    console.log(response);
                    this.$router.push('/configureLimit');
                })
                .catch(error => {
                    console.log(error);
                })
        }

    },
    
};
</script>
  
<style>

</style>