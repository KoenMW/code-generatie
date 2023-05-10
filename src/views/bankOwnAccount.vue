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

#transfer {
  margin: 0 auto;
  margin-top: 10%;
  width: 50%;
  padding: 10px;
  border-radius: 5px;

}

#accountName{
    color: #9F82EB;
}
</style>

<template>
    <RouterLink to="/admin" id="backButton" class="btn">
        Back
    </RouterLink>
    <div class="container px-4 py-5" id="hanging-icons">
        <h2 id="title" class="pb-2  ">Novabank account</h2>
        <hr />
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3 ">
            <div id="transfer" class="bg-dark">
                <h3 id="accountName">Account</h3>
                <hr />
                <p id="accountNumber">Account number: IBAN NL01INHO0000000001</p>
                <p id="accountBalance">Balance: 102131312</p>
                
                    
            </div>
        </div>
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