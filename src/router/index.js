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
import loginStore from '../stores/login.js';
import userOverview from '../views/userManagement/userOverview.vue'
import changeDailyLimit from '../views/userManagement/changeDailyLimit.vue'
import transactionLimit from '../views/userManagement/changeTransactionLimit.vue'
import newUser from '../views/userManagement/newUser.vue'
import searchUser from '../views/searchUsers.vue'


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
      component: admin,/*
      beforeEnter: (to, from, next) => {
        if (loginStore.isAdmin) {
          next()
        }
        else {
          next(from)
      }
    }*/
    },
    {
      path: '/admin/allAccounts',
      name: 'allAccount',
      component: allAccounts,/*
      beforeEnter: (to, from, next) => {
        if (loginStore.isAdmin) {
          next()
        }
        else {
          next(from)
      }
    }*/
    },
    {
      path: '/admin/noAccount',
      name: 'noAccount',
      component: noAccount/*,
      beforeEnter: (to, from, next) => {
        if (loginStore.isAdmin) {
          next()
        }
        else {
          next(from)
      }
    }*/
    },
    {
      path: '/Account/create',
      name: 'createAccount',
      component: createAccount/*,
      beforeEnter: (to, from, next) => {
        if (loginStore.isAdmin) {
          next()
        }
        else {
          next(from)
      }
    }*/
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
      component: adminTransaction,/*
      beforeEnter: (to, from, next) => {
        if (loginStore.isAdmin) {
          next()
        }
        else {
          next(from)
      }
    }*/
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
    }


  ]
})

//uncommend code when login is complete, makes the user go to login page if not logged in
/*router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !loginStore.isLoggedIn && to.name !== 'signup' && to.name !== 'forgotPassword') next({ name: 'login' })
  else next()
})*/

export default router
