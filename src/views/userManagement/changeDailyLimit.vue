<style>
    #changeLimit{
        margin: 0 auto;
        margin-top: 10%;
        width: 50%;
        padding: 10px;
        border-radius: 5px;
        max-width: 400px;
    }
    #submitB {
        background-color: #9F82EB;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        
    }
    #submitB:hover{
        background-color: #321A72;
    }

    #cancel {
        background-color: #402583;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        margin: 5px;
    }
    #cancel:hover{
        background-color: #321A72;
    }
</style>

<template>
    <section>
        <div id="changeLimit" class="bg-dark">
            <form ref="form">
                <h2 class="mt-3 mt-lg-5">Change day limit</h2>
                <h5 class="mb-4"></h5>

                <div class="input-group mb-3">
                    <span>New day limit</span>
                    <input type="number" v-model="userUpdate.value"  placeholder="New limit"
                        aria-label="New limit" aria-describedby="basic-addon1" required>
                </div>

                <div class="input-group mt-4">
                    <button id="submitB" @click="updateLimit()" type="button" class="btn">Change limit</button>
                    <button type="button" id="cancel" @click="this.$router.push('/userOverview')">
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
                key: "dayLimit",
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
                    document.getElementById("error").innerHTML = "Something went wrong, please try again";
                })
        }
    }, 
};
</script>
