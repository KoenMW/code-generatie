<script>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css';
.text-purple {
  color: #9F82EB;
}
</style>

<template>
  <div class="d-flex flex-row vh-100">
    <nav class="navbar navbar-dark bg-dark flex-column flex-grow-0">
      <RouterLink to="/" class="navbar-brand d-flex flex-column">
        <div class="m-auto text-purple">NovaBank</div>
        <img src="~@/assets/logo.svg" alt="Logo" class="m-auto"/>
      </RouterLink>
      <ul class="navbar-nav">
        <li class="nav-item active">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/about" class="nav-link">About</RouterLink>
        </li>
      </ul>
    </nav>
    <div class="flex-grow-1 overflow-auto bg-black text-white">
      <RouterView/>
      <!-- Rest of your content goes here -->
    </div>
  </div>
</template>