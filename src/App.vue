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
}
</style>

<template>
  <div class="d-flex flex-row vh-100">
    <nav class="navbar navbar-dark bg-dark flex-column flex-grow-0 p-2">
      <RouterLink to="/" class="navbar-brand d-flex flex-column mx-auto">
        <div class="m-auto text-purple">NovaBank</div>
        <div class="w-100">
          <img src="~@/assets/logo.svg" alt="Logo" class="m-auto" />

        </div>
      </RouterLink>
      <ul class="navbar-nav">
        <li class="nav-item active">
          <RouterLink v-if="store.username.length != 0" to="/home" class="nav-link">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink v-if="store.username.length != 0" to="/" class="nav-link">Transactions</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink v-if="store.username.length != 0" to="/transfer" class="nav-link">Transfer</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink v-if="store.username.length != 0" to="/about" class="nav-link">Deposit/Withdraw</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink v-if="store.username.length != 0" to="/profile" class="nav-link">Profile</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink v-if="store.username.length != 0" to="/searchUser" class="nav-link">Search users</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink v-if="store.username.length == 0" to="/" class="nav-link">Login</RouterLink>
          <RouterLink v-else to="/" class="nav-link" @click="logout()">Logout</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink v-if="store.role == 'ROLE_ADMIN'" to="/admin" class="nav-link">Admin</RouterLink>
        </li>
        
      </ul>
    </nav>
    <div class="flex-grow-1 overflow-auto bg-black text-white">
      <RouterView />
    </div>
  </div>
</template>