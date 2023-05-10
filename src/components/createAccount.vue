<template>
    <form>
        <select class="form-select my-2">
            <option value="Current" selected>Current</option>
            <option value="savings">Savings</option>
        </select>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">€</span>
            <input type="text" class="form-control" placeholder="Amount" aria-label="Amount" aria-describedby="basic-addon1">
        </div>
        <button type="submit" id="functionButton" class="btn">Create account</button>
    </form>
</template>