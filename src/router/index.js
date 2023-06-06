import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login.vue'
import signup from '../views/signup.vue'
import forgotPassword from '../views/forgotPassword.vue'
import home from '../views/home.vue'
import transfer from '../views/transaction.vue'
import admin from '../views/adminPanel.vue'
import allAccounts from '../views/allAccounts.vue'
import noAccount from '../views/noAccount.vue'
import createAccount from '../views/createAccount.vue'

import profile from "../views/profile.vue";
import totalBalance from "@/components/totalBalance.vue";

import configureLimit from '../views/configureLimit.vue'
import adminTransaction from '../views/adminTransaction.vue'
import bankOwnAccount from '../views/bankOwnAccount.vue'
import changeLimit from '../views/changeLimit.vue'
import userOverview from '../views/userManagement/userOverview.vue'
import changeDailyLimit from '../views/userManagement/changeDailyLimit.vue'
import transactionLimit from '../views/userManagement/changeTransactionLimit.vue'
import newUser from '../views/userManagement/newUser.vue'
import searchUser from '../views/searchUsers.vue'
import depositWithdraw from '../views/depositWithdraw.vue'
import newUserAnon from '../views/userManagement/newUserAnon.vue'
import createAccountSpecific from '../views/createAccountSpecific.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
        path: '/signup',
        name: 'signup',
        component: signup
    },
    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      component: forgotPassword
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: transfer
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      beforeEnter: checkAdminRole
    },
    {
      path: '/admin/allAccounts',
      name: 'allAccount',
      component: allAccounts,
      beforeEnter: checkAdminRole
    },
    {
      path: '/admin/noAccount',
      name: 'noAccount',
      component: noAccount,
      beforeEnter: checkAdminRole
    },
    {
      path: '/Account/create',
      name: 'createAccount',
      component: createAccount,
      beforeEnter: checkAdminRole
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
        path: '/totalBalance',
        name: 'totalBalance',
        component: totalBalance
    },
    {
      path: '/configureLimit',
      name: 'configureLimit',
      component: configureLimit
    },
    {
      path: '/admin/transaction',
      name: 'adminTransaction',
      component: adminTransaction,
      beforeEnter: checkAdminRole
    },
    {
      path: '/admin/bankOwnAccount',
      name: 'bankOwnAccount',
      component: bankOwnAccount
    },
    {
      path: '/changeLimit/:iban',
      name: 'changeLimit',
      component: changeLimit,
      props:true
    },
    {
      path: '/userOverview',
      name: 'userOverview',
      component: userOverview
    },
    {
      path: '/changeDailyLimit/:username',
      name: 'changeDailyLimit',
      component: changeDailyLimit,
      props:true
    },
    {
      path: '/transactionLimit/:username',
      name: 'transactionLimit',
      component: transactionLimit,
      props:true
    },
    {
      path: '/newUser',
      name: 'newUser',
      component: newUser
    },
    {
      path: '/searchUser',
      name: 'searchUser',
      component: searchUser
    },
    {
      path: '/depositWithdraw',
      name: 'depositWithdraw',
      component: depositWithdraw
    },
    {
      path: '/newUserAnon',
      name: 'newUserAnon',
      component: newUserAnon,
      
    },
    {
      path: '/createAccountSpecific/:id',
      name: 'createAccountSpecific',
      component: createAccountSpecific,
      props:true
    },





  ]
})


function checkAdminRole(to, from, next) {
  console.log(localStorage.getItem('role'))
  console.log(to.name)
  if(localStorage.getItem('role') !== 'ROLE_ADMIN'){
    //console.log('not admin')
    next(from)
  }
  console.log('admin')
  next()
}

router.beforeEach((to, from, next) => {
  if(!localStorage.getItem('role') && to.name !== 'login'){
    //console.log("storage isn't set yet and should redirect to login")
    next('/')
  }
  else
    next()
})


export default router
