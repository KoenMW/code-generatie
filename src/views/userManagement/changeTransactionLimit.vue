<style>
    #changeLimit{
        margin: 0 auto;
        margin-top: 10%;
        width: 50%;
        padding: 10px;
        border-radius: 5px;
        max-width: 400px;
    }
    .btnLimit{
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
    }
    #submitB {
        background-color: #9F82EB;
    }
    #submitB:hover{
        background-color: #321A72;
    }

    #cancelLimit {
        background-color: #402583;
    }
    #cancelLimit:hover{
        background-color: #321A72;
    }
    #inputLimit{
        border-radius: 5px;
    }

</style>

<template>
    <section>
        <div id="changeLimit" class="bg-dark">
            <form ref="form">

                <h2 class="mt-3 mt-lg-5">Change transaction limit</h2>
                <h5 class="mb-4"></h5>

                <div class="input-group">
                    <p >New transaction limit</p>
                    <input id="inputLimit" type="number" v-model="userUpdate.value"  placeholder="New limit"
                        aria-label="New limit" aria-describedby="basic-addon1" required>
                </div>

                <div class="input-group mt-4">
                    <button id="submitB" @click="updateLimit()" type="button" class="btnLimit">Change limit</button>
                    <button  class="btnLimit" type="button" id="cancelLimit" @click="this.$router.push('/userOverview')">
                        Cancel
                    </button>
                </div>

                <p id="error"></p>

            </form>
        </div>
    </section>
</template>

<script>  
    import axios from "@/axios";
    import loginService from "@/stores/login";
    export default {    
    props: {
        id: String,
    },
    setup() {
        return {
            store: loginService()
        }
    },
    data() {
        return {
            userUpdate: {
                id: this.id,
                op: "update",
                key: "transactionLimit",
                value: 0
            }
        };
    },
    methods: {
        updateLimit(){
            axios.patch('/users', this.userUpdate)
                .then(response => {
                    this.$router.push('/userOverview');
                })
                .catch(error => {
                    console.log(error);
                    if (error.response.status === 403) {
                        document.getElementById("error").innerHTML = "Please fill all fields";
                    } else {
                        document.getElementById("error").innerHTML = error.response.data.message;
                    }
                })
        }
    }, 
};
</script>
