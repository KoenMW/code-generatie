<style>
@media screen and (max-width: 800px) {
  .w-50 {
    width: 100% !important;
  }    
}

.bg-purple {
  background-color: #9F82EB;
}

.bg-purple:hover {
  background-color: #321A72;
}

.text-blue {
  color: #50A0C6;
}
</style>

<template>
    <form class="card bg-dark p-3 w-50 m-auto mt-5">
        <!-- Email input -->
        <div class="form-outline mb-4">
            <input type="email" id="form2Example1" v-model="username" class="form-control" />
            <label class="form-label" for="form2Example1">Email address</label>
        </div>
    
        <!-- Password input -->
        <div class="form-outline mb-4">
            <input type="password" id="form2Example2" v-model="password" class="form-control" />
            <label class="form-label" for="form2Example2">Password</label>
        </div>
    
        <!-- 2 column grid layout for inline styling -->
        <div class="row mb-4">
            <div class="col d-flex justify-content-center">
                <!-- Checkbox -->
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                    <label class="form-check-label" for="form2Example31"> Remember me </label>
                </div>
            </div>
        
            <div class="col text">
                <!-- Simple link -->
                <a href="#!" class="text-blue">Forgot password?</a>
            </div>
        </div>
    
        <!-- Submit button -->
        <button type="button" @click=login() class="btn btn-primary bg-purple btn-block mb-4">Sign in</button>
  
        <!-- Register buttons -->
        <div class="text-center">
            <p>Not a member? <a href="#!" class="text-blue">Register</a></p>
        </div>
    </form>
</template>

<script>
import { loginService } from '../stores/login';
export default {
  setup() {
    return {
       store : loginService()
    }

  },
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {

      try{
        await this.store.login(this.username, this.password)
        this.$router.push('/');
      }
      catch(error){
        console.log(error);
      }
    }
  }
};




</script>