<script>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios';

import { loginService } from './stores/login';
import { Button } from 'bootstrap';
export default (await import('vue')).defineComponent({
    title: "NovaBank",
    setup() {
        return {
            store: loginService()
        };
    },
    created() {
        //this.store.autoLogin();
        axios.defaults.headers.common["Authorization"] = "Bearer " + this.store.jwt;
    },
    methods: {
        logout() {
            this.store.username = "";
            this.store.role = "";
            this.store.id = 0;
            this.store.jwt = "";
            localStorage.clear();
            delete axios.defaults.headers.common["Authorization"];
            this.$router.push("/");
        }
    },
    components: { Button }
});

</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css';

.text-purple {
  color: #9F82EB;
  text-align: center;
}
.nav-item:hover {
  color: #ffffff;
}
.nav-item{
  margin-bottom: 5px;
}
.last{
  margin-top: 30px;
  margin-bottom: 25px;
  font-weight: 600;
}
.logo{
  margin:auto;
  margin-top: 25px;
  align-items: center;
}
.test{
  max-width: 80%;
  display: block;
  margin: auto;
}
</style>

<template>
  <div class="d-flex flex-row vh-100">
    <nav class="navbar navbar-dark bg-dark flex-column flex-grow-0 p-2">
      <RouterLink to="/" class="navbar-brand d-flex flex-column mx-auto">
      <div class="logo">
          <div class="m-auto text-purple">NovaBank</div>
          <img src="~@/assets/logo.svg" alt="Logo" class="test" />
      </div>
        
      </RouterLink>
      <ul class="navbar-nav">
        <li class="nav-item active">
          <RouterLink v-if="store.isLoggedIn" to="/home" class="nav-link">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink v-if="store.isLoggedIn" to="/" class="nav-link">Transactions</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink v-if="store.isLoggedIn" to="/transfer" class="nav-link">Transfer</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink v-if="store.isLoggedIn" to="/depositWithdraw" class="nav-link">Deposit/Withdraw</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink v-if="store.isLoggedIn" to="/profile" class="nav-link">Profile</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink v-if="store.isLoggedIn" to="/searchUser" class="nav-link">Search users</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink v-if="store.role == 'ROLE_ADMIN'" to="/admin" class="nav-link">Admin</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink v-if="!store.isLoggedIn" to="/" class="nav-link">Login</RouterLink>
          <RouterLink v-else to="/" class="nav-link" @click="logout()">Logout</RouterLink>
        </li>
      </ul>
    </nav>
    <div class="flex-grow-1 overflow-auto bg-black text-white">
      <RouterView />
    </div>
  </div>
</template>