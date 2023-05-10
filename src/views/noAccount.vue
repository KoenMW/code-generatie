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
                <tr>
                    <th scope="row">123456789</th>
                    <td>Henk</td>
                    <td>€ Bakker</td>
                    <td>0</td>

                    <td>
                        <RouterLink to="/newAccount" id="functionButton" class="btn">
                            New account
                        </RouterLink>
                    </td>


                </tr>
                <tr>
                    <th scope="row">123456789</th>
                    <td>Gerda</td>
                    <td>€ Beentjes</td>
                    <td>0</td>

                    <td>
                        <RouterLink to="/newAccount" id="functionButton" class="btn">
                            New account
                        </RouterLink>
                    </td>
                </tr>
                <tr>
                    <th scope="row">123456789</th>
                    <td>Jan-Willem</td>
                    <td>€ Postma</td>
                    <td>0</td>

                    <td>
                        <RouterLink to="/newAccount" id="functionButton" class="btn">
                            New account
                        </RouterLink>
                    </td>
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