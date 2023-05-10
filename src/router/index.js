import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login.vue'
import signup from '../views/signup.vue'
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



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
        path: '/signup',
        name: 'signup',
        component: signup
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: transfer
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/admin/allAccounts',
      name: 'allAccount',
      component: allAccounts
    },
    {
      path: '/admin/noAccount',
      name: 'noAccount',
      component: noAccount
    },
    {
      path: '/Account/create',
      name: 'createAccount',
      component: createAccount
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
      path: '/adminTransaction',
      name: 'adminTransaction',
      component: adminTransaction

    },
    {
      path: '/bankOwnAccount',
      name: 'bankOwnAccount',
      component: bankOwnAccount
    }
  ]
})

export default router
