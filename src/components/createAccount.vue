<template>
    <form>
        <select class="form-select my-2">
            <option value="Current" selected>Current</option>
            <option value="savings">Savings</option>
        </select>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">€</span>
            <input type="text" class="form-control" placeholder="daily limit" aria-label="Amount" aria-describedby="basic-addon1">
        </div>
        <button id="functionButton" class="btn" onclick="test()">Create account</button>
    </form>
</template>

<script>
import loginService from '../stores/login';

export default {
    name: "createAccount",
    setup() {
        return {
            store: loginService()
        }
    }
}
</script>