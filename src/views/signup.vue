<template>
    <div class="container px-4 py-5">
        <h2 id="title" class="pb-2  ">Signup</h2>
        <hr />
        <form class="card bg-dark p-3 w-50 m-auto my-5">
            <div class="form-label mb-4">
                <label class="form-label" for="form2Example1">Firstname</label>
                <input v-model="firstname" class="form-control" />
            </div>
            <div class="form-label mb-4">
                <label class="form-label" for="form2Example1">Lastname</label>
                <input v-model="lastname" class="form-control" />
            </div>

            <div class="form-label mb-4">
                <label class="form-label" for="form2Example1">Username</label>
                <input v-model="username" class="form-control" />
            </div>


            <div class="form-label mb-4">
                <label for="email">Email address</label>
                <input type="email" v-model="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-label mb-4">
                <label for="password">Password</label>
                <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
            </div>
            <div class="form-label mb-4">
                <label for="password">Confirm Password</label>
                <input type="password" v-model="confirmPassword" class="form-control" id="confirmPassword" placeholder="Confirm Password">
            </div>
            <button type="submit" class="btn bg-purple">Submit</button>
        </form>

    </div>
</template>

<script>
import { signupService } from '../stores/signup';

export default {
    name: "Signup",
    data() {
        return {
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    },
    methods: {
        submit() {
            if (this.password === this.confirmPassword) {
                signupService.signup({
                    firstname: this.firstname,
                    lastname: this.lastname,
                    username: this.username,
                    email: this.email,
                    password: this.password
                
                });
            } else {
                alert("Passwords do not match");
            }
        }
    }
}

</script>