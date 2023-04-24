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
  <div class="w-100 h-100">
    <form class="card bg-dark p-3 w-50 m-auto my-5">
        <!-- Email input -->
        <div class="form-outline mb-4">
            <label class="form-label" for="form2Example1">Email address</label>
            <input type="email" id="form2Example1" class="form-control" />
        </div>
    
        <!-- Password input -->
        <div class="form-outline mb-4">
            <label class="form-label" for="form2Example2">Password</label>
            <input type="password" id="form2Example2" class="form-control" />
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
        <button type="button" class="btn btn-primary bg-purple btn-block mb-4">Sign in</button>
  
        <!-- Register buttons -->
        <div class="text-center">
            <p>Not a member? <a href="#!" class="text-blue">Register</a></p>
        </div>
    </form>

  </div>
</template>