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
        <h2 id="title" class="pb-2 ">All users</h2>
        <hr />

        <RouterLink to="/newUser" id="newButton" class="btn">
            New user
        </RouterLink>
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Role</th>
                    <th scope="col">Daily limit</th>
                    <th scope="col">Transaction limit</th>
                    <th scope="col">Change daily</th>
                    <th scope="col">Change transaction</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{user.username}}</td>
                    <td>{{user.role}}</td>
                    <td>{{user.dayLimit}}</td>
                    <td>{{user.transactionLimit}}</td>

                    <td>
                        <button v-if = "checkUser(user) == true" id="functionButton" type="button" class="btn"
                            @click="this.$router.push('/changeDailyLimit/' + user.id);">
                            Change day limit
                        </button>
                    </td>
                    <td>
                        <button v-if = "checkUser(user) == true" id="functionButton" type="button" class="btn"
                            @click="this.$router.push('/changeTransactionLimit/' + user.id);">
                            Change transaction limit
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>
  
<script>
import { loginService } from '../../stores/login';
import axios from '../../axios';

export default {
    setup() {
        return {
            store: loginService()
        }
    },
    name: "UserOverview",
    data() {
        return {
            users: [],
        };
    },
    methods: {
        //get all users
        async getUsers() {
            try {
                const response = await axios.get('/users');
                this.users = response.data;
            } catch (error) {
                console.error(error);
            }
        },
        checkUser(user) {
            if (user.id == this.store.id) {
                return false
            } else if(user.id == 2){ //bank
                return false
            }else {
                return true;
            }
        }
    },
    mounted() {
        this.getUsers();
    }
};
</script>