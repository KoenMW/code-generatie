<style>
#card{
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 10px;
    padding: 10px;
    
}

#title{
    color: #9F82EB;
}
#mainTitle{
    color: #9F82EB;
}
hr{
    color: #9F82EB;
}
#functionButton{
    background-color: #9F82EB;
}
#functionButton:hover{
    background-color: #321A72;
}
</style>

<template>
    <div class="container px-4 py-5" id="hanging-icons">
        <h2 id="title" class="pb-2  ">Admin</h2>
        <hr />
        <div  class="row g-4 py-5 row-cols-1 row-cols-lg-3 ">
            <div id="card" class="col d-flex align-items-start bg-dark">
                <div
                    class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <svg class="bi" width="1em" height="1em">
                        <use xlink:href="#toggles2" />
                    </svg>
                </div>
                <div>
                    <h3 id="mainTitle" class="fs-2">All accounts</h3>
                    <p>See all the accounts, edit accounts or add accounts. Also close accounts for users.</p>
                    <a href="/allAccount" id="functionButton" class="btn">
                        See accounts
                    </a>
                </div>
            </div>
            <div id="card" class="col d-flex align-items-start bg-dark">
                <div
                    class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <svg class="bi" width="1em" height="1em">
                        <use xlink:href="#tools" />
                    </svg>
                </div>
                <div>
                    <h3 id="mainTitle" class="fs-2">Register accounts</h3>
                    <p>See wich users do not have accounts yet and register accounts</p>
                    <a href="/noAccount" id="functionButton" class="btn ">
                        Configure accounts
                    </a>
                </div>
            </div>
            
            <div id="card" class="col d-flex align-items-start bg-dark">
                <div
                    class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <svg class="bi" width="1em" height="1em">
                        <use xlink:href="#tools" />
                    </svg>
                </div>
                <div>
                    <h3 id="mainTitle" class="fs-2">Configure accounts</h3>
                    <p>Change account limits</p><br>
                    <a href="/configureLimit" id="functionButton" class="btn ">
                        Configure accounts
                    </a>
                </div>
            </div>
            <div id="card" class="col d-flex align-items-start bg-dark">
                <div
                    class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <svg class="bi" width="1em" height="1em">
                        <use xlink:href="#cpu-fill" />
                    </svg>
                </div>
                <div>
                    <h3 id="mainTitle" class="fs-2">Transactions</h3>
                    <p>Perform transactions for accounts</p><br>
                    <a href="/adminTransaction" id="functionButton" class="btn ">
                        Make transactions
                    </a>
                </div>
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