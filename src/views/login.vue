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
  <div class="container px-4 py-5">
      <h2 id="title" class="pb-2  ">Login</h2>
      <hr />
    <form class="card bg-dark p-3 w-50 m-auto my-5">
        <!-- Email input -->
        <div class="form-outline mb-4">
            <label class="form-label" for="form2Example1">User name</label>
            <input id="form2Example1" v-model="username" class="form-control" />
        </div>
    
        <!-- Password input -->
        <div class="form-outline mb-4">
            <label class="form-label" for="form2Example2">Password</label>
            <input type="password" id="form2Example2" v-model="password" class="form-control" />
        </div>
    
        <!-- 2 column grid layout for inline styling -->
        <div class="d-flex mb-4">
            <div class="col d-flex justify-content-center">
                <!-- Checkbox -->
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                    <label class="form-check-label" for="form2Example31"> Remember me </label>
                </div>
            </div>
        
            <div class="col text">
                <!-- Simple link -->
                <RouterLink to="/forgotPassword" class="text-blue">Forgot password?</RouterLink>
            </div>
        </div>
    
        <!-- Submit button -->
        <RouterLink to="/" class="w-100 mx-auto btn bg-purple">
          Sign in
        </RouterLink>
  
        <!-- Register buttons -->
        <div class="text-center">
            <p>
              Not a member? 
              <RouterLink to="/signup" class="text-blue">signup</RouterLink>
            </p>
        </div>
    </form>
  </div>
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
