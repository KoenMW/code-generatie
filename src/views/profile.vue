<style scoped>
#title {
    color: #9F82EB;
    padding: 10px;
}
.container {
    margin: 0 auto;
    margin-top: 6%;
    width: 50%;
    padding: 10px;
    border-radius: 5px;
}
.listItem{
    font-weight: bold;
    margin-top: 25px;
    margin-bottom: 5px;
    list-style: none;
}
.listContent{
    color: #c9c9c9;
    list-style: none;
}
</style>
<template>

    <section>
        <div class="container bg-dark">
            <h1 id="title">Profile</h1>
            <hr />
            <ul>
                <li class="listItem">Name</li>
                <li class="listContent">Piet</li>
                <li class="listItem">Email</li>
                <li class="listContent">Piet@gmai.com</li>
                <li class="listItem">IBAN</li>
                <li class="listContent">NL55 INHO 0000 0000 01</li>
                <li class="listItem">Day limit</li>
                <li class="listContent">EUR 5000</li>
                <li class="listItem">Transaction limit</li>
                <li class="listContent">EUR 2000</li>
                <li class="listItem">Remaining day limit today</li>
                <li class="listContent">EUR {{remainingDailyLimit}}</li>
            </ul>
        </div>

    </section>

</template>

<script>
import axios from '../axios';
import loginService from '../stores/login';

//on page load get the remaining daily limit from /users/dailylimit/{id} and display it

export default {
    name: "profile",
    data() {
        return {
            remainingDailyLimit: 0,
            login: loginService()
        }
    },
    setup() {
        return {
            login: loginService()
        }
    },
    methods: {
        async getRemainingDailyLimit() {
            try {
                const response = await axios.get(`users/dailylimit/${this.login.id}`);
                console.log(response);
                this.remainingDailyLimit = response.data;
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted() {
        this.getRemainingDailyLimit();
    }
}
</script>

