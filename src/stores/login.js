import { defineStore } from 'pinia';
import axios from '../axios';


export const loginService = defineStore('loginStore', {
    state: () => ({
        username: '',
        jwt: '',
        role: '',
        id: '',
    }),
    getters: {
        isLoggedIn: (state) => state.jwt != '',
    },
    actions: {
        login(username, password) {
            return new Promise((resolve, reject) => {
                axios.post('/users/login', {
                    username: username,
                    password: password
                })
                    .then((res) => {
                        console.log(res);
                        axios.defaults.headers.common['Authorization'] = "Bearer" + res.data.jwt;
                        localStorage.setItem('token', res.data.jwt);
                        localStorage.setItem('username', res.data.username);
                        localStorage.setItem('role', res.data.role);
                        localStorage.setItem('id', res.data.id);
                        this.jwt = res.data.jwt;
                        this.username = res.data.username;
                        this.role = res.data.role;
                        this.id = res.data.id;
                        resolve();
                    }).catch((err) => {
                        console.log(err);
                        reject();
                    })
            })

        },

        autoLogin() {
            const token = localStorage.getItem('token');
            const username = localStorage.getItem('username');
            const role = localStorage.getItem('role');
            const id = localStorage.getItem('id');
            if (token && username) {
                axios.defaults.headers.common["Authorization"] =
                    "Bearer " + token;
                this.jwt = token;
                this.username = username;
                this.role = role;
                this.id = id;
            }
        },

    }
})