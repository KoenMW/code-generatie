<style>
#card {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 10px;
    padding: 10px;

}

#title {
    color: #9F82EB;
}

#mainTitle {
    color: #9F82EB;
}

hr {
    color: #9F82EB;
}

#functionButton {
    background-color: #9F82EB;

}

#functionButton:hover {
    background-color: #321A72;
}

#newButton {
    background-color: #9F82EB;
    margin-bottom: 20px;
}

#newButton:hover {
    background-color: #321A72;
}

#backButton {
    background-color: #9F82EB;
    margin: 20px;
}

#backButton:hover {
    background-color: #321A72;
}
</style>

<template>
    <RouterLink to="" id="backButton" class="btn">
      Back
    </RouterLink>
    <div class="container px-4 py-5" id="hanging-icons">
      <h2 id="title" class="pb-2 ">All users without account</h2>
      <hr />
  
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Accounts</th>
            <th scope="col">New account</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in rows" :key="index">
            <th scope="row">{{ row.id }}</th>
            <td>{{ row.firstName }}</td>
            <td>{{ row.lastName }}</td>
            <td>{{ row.accounts }}</td>
  
            <td>
              <button v-if="selectedRow !== index" @click="selectedRow = index" id="functionButton" class="btn">
                New account
              </button>
              <createAccount v-else />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import createAccount from "../components/createAccount.vue";
  
  export default {
    components: {
      createAccount,
    },
    data() {
      return {
        rows: [
          {
            id: "123456789",
            firstName: "Henk",
            lastName: "€ Bakker",
            accounts: 0,
          },
          {
            id: "123456789",
            firstName: "Gerda",
            lastName: "€ Beentjes",
            accounts: 0,
          },
          {
            id: "123456789",
            firstName: "Jan-Willem",
            lastName: "€ Postma",
            accounts: 0,
          },
        ],
        selectedRow: null,
      };
    },
  };
  </script>
  
