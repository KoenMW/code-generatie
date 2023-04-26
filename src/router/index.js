import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login.vue'
import home from '../views/home.vue'
import transfer from '../views/transaction.vue'
import admin from '../views/adminPanel.vue'
import allAccounts from '../views/allAccounts.vue'
import noAccount from '../views/noAccount.vue'
import createAccount from '../views/createAccount.vue'

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
    }

  ]
})

export default router
