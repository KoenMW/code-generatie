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

#login{
  background-color: #9F82EB;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
}
</style>

<template>
  <div class="container px-4 py-5">
      <h2 id="title" class="pb-2  ">Login</h2>
      <hr />
    <form class="card bg-dark p-3 w-50 m-auto my-5">
        <!-- Email input -->
        <div class="form-outline mb-4">
            <label class="form-label" for="form2Example1">Username</label>
            <input id="form2Example1" v-model="username" class="form-control" />
        </div>
    
        <!-- Password input -->
        <div class="form-outline mb-4">
            <label class="form-label" for="form2Example2">Password</label>
            <input type="password" id="form2Example2" v-model="password" class="form-control" />
        </div>
   
    
        <button id="login" type="button" @click=login() name="loginButton" class="btn">Login</button>

        
        <router-link to="/newUserAnon" class="text-blue">Create Account</router-link>
  
        
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
        this.$router.push('/home');
      }
      catch(error){
        console.log(error);
      }
    }
  }
};




</script>
