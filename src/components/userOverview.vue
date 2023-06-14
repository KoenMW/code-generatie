<style>
    .introName{
        padding: 10px;
        padding-top: 14px;
    }
</style>

<template>
    <div class=" card bg-dark m-5 w-100">
        <h3 class="introName text-purple">Welcome {{user.firstName}} {{user.lastName}}</h3>
    </div>
</template>
<script>
import { loginService } from '../stores/login';
import axios from '../axios';

export default {
    setup() {
        return {
            store: loginService()
        }
    },
    name: "Login",
    data() {
        return {
            user: {}
        };
    },
    methods: {
        async getById(){
            try {
                const response = await axios.get(`users/${this.store.id}`);
                this.user = response.data;
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted() {
        this.getById();
    }
};
</script>