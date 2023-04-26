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
        <h2 id="title" class="pb-2 ">All accounts</h2>
        <hr />

        <RouterLink to="/admin" id="newButton" class="btn">
            New account
        </RouterLink>
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Iban</th>
                    <th scope="col">Balance</th>
                    <th scope="col">User id</th>
                    <th scope="col">Account type</th>
                    <th scope="col">Account status</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Close</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">123456789</th>
                    <td>NL20INGB123132</td>
                    <td>€ 1000</td>
                    <td>23123</td>
                    <td>Savings</td>
                    <td>Active</td>

                    <td><a href="#" id="functionButton" class="btn ">
                            Edit
                        </a></td>
                    <td><a href="#" id="functionButton" class="btn ">
                            Close
                        </a></td>

                </tr>
                <tr>
                    <th scope="row">123456789</th>
                    <td>NL20INGB123132</td>
                    <td>€ 1000</td>
                    <td>23123</td>
                    <td>Credit</td>
                    <td>Active</td>

                    <td><a href="#" id="functionButton" class="btn ">
                            Edit
                        </a></td>
                    <td><a href="#" id="functionButton" class="btn ">
                            Close
                        </a></td>
                </tr>
                <tr>
                    <th scope="row">123456789</th>
                    <td>NL20INGB123132</td>
                    <td>€ 1000</td>
                    <td>23123</td>
                    <td>Savings</td>
                    <td>Active</td>

                    <td><a href="#" id="functionButton" class="btn ">
                            Edit
                        </a></td>
                    <td><a href="#" id="functionButton" class="btn ">
                            Close
                        </a></td>
                </tr>
            </tbody>
        </table>

    </div>
</template>
  
<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    },
}
</script>