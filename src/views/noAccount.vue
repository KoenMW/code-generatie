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
  <RouterLink to="/admin" id="backButton" class="btn">
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
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.accounts }}</td>

          <td>
            <button id="functionButton" type="button" class="btn"
              @click="this.$router.push('/createAccountSpecific/' + user.id);">
              Add account
            </button>


          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<script>
import createAccount from "../components/createAccount.vue";
import axios from '../axios';
export default {
  name: "noAccount",
  data() {
    return {
      users: {},
      selectedRow: null,
    };
  },
  methods: {
    async getAll() {
      try {
        const response = await axios.get(`/users?isActive=true&offset=0&limit=50`);
        console.log(response);
        this.users = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getAll();
  }
};
</script>
  
