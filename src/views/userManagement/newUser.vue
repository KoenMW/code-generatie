<style>
    #newUser{
        padding-right: 50px;
        padding-left: 50px;
        padding-bottom: 50px;
    }
    #newUser{
        margin: 0 auto;
        margin-top: 10%;
        width: 50%;
        padding: 10px;
        border-radius: 5px;
    }
    .inputType{
        display:block;
        width: 25%;
        height: 25%;
        align-self: center;
        margin-bottom: 10px;
    }
    .btnNewUser{
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
    }

</style>

<template>
    <div id="newUser" class="bg-dark">
        <form ref="form">
            <h2 class="mt-3 mt-lg-5">New user</h2>
            <h5 class="mb-4"></h5>

            <div class="input-group mb-3">
                <span class="input-group-text inputType">First name</span>
                <input type="text" v-model="user.firstName" class="form-control input" placeholder="First name"
                       aria-label="First name" >
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text inputType">Last name</span>
                <input type="text" v-model="user.lastName" class="form-control" placeholder="Last name"
                       aria-label="Last name" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text inputType">Username</span>
                <input type="text" v-model="user.username" class="form-control" placeholder="Username"
                       aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text inputType">E-mail address</span>
                <input type="email" v-model="user.email" class="form-control" placeholder="E-mail address"
                       aria-label="email" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text inputType">Password</span>
                <input type="password" v-model="user.password" class="form-control" placeholder="Password"
                       aria-label="Password" aria-describedby="basic-addon1">
            </div>

            <div class="input-group mt-4">
                <button id="submitB" @click="add()" type="button" class="btnNewUser">New user</button>
                <button id="cancel" type="button" class="btnNewUser" @click="this.$router.push('/userOverview')">
                    Cancel
                </button>
            </div>
            <p id="error"></p>
        </form>
    </div>
</template>
<script>
import axios from "@/axios";
import loginService from "@/stores/login";

export default {
    setup() {
        return {
            store: loginService()
        }
    },
    name: "newUser",
    data() {
        return {
            user: {
                firstName: "",
                lastName: "",
                username: "",
                password: "",
                email: "",
            },
            users: [],
        };
    },
    methods: {
        add() {
            if(this.user.password.length < 7){
                document.getElementById("error").innerHTML = "Password needs to be at least 7 characters long";
                return;
            }
            else {
                axios.post('/users', this.user)
                    .then(response => {
                        this.$router.push('/userOverview');
                    })
                    .catch(error => {
                        console.log(error);
                        document.getElementById("error").innerHTML = error.response.data.message;
                    })
            }
        },
    },
};
</script>