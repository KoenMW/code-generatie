<style>
hr {
    color: #50A0C6;
}
#accountCard{
    background-color: #50A0C6;;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    margin: 10px;
}
.labelText{
    font-weight: bold;
}
</style>

<template>
    <div class="d-flex justify-content-between flex-wrap m-auto h-100">
        <div id="accountCard" class="card">
            <label class="labelText">Iban: </label>
            <div>
                {{ account.iban }}
            </div>
            <label class="labelText">Account type: </label>
            <div>
                {{ account.accountType }}
            </div>
            <label class="labelText">Balance: </label>
            <div>
                {{ formatString(account.balance) }}
            </div>
        </div>
    </div>
</template>

<script>
import { loginService } from '../stores/login';
export default {
    setup() {
        return {
            store: loginService()
        }

    },
  props: {
    account: {
      type: Object,
      default: null
    }
  },
  methods: {
    formatString(string) {
      let number = parseFloat(string);
      return number.toLocaleString("nl-NL", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
  }
};
</script>