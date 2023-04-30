import { defineStore } from 'pinia';
import axios from '../axios';

export const signupService = defineStore('signupStore', {
    state: () => ({
        firsname: '',
        lastname: '',
        username: '',
        email: '',
        password: ''
    }),
    actions: {
        signup(firsname, lastname, username, email, password) {
            return new Promise((resolve, reject) => {
                axios.post('/users/signup', {
                    firsname: firsname,
                    lastname: lastname,
                    username: username,
                    email: email,
                    password: password
                })
                    .then((res) => {
                        console.log(res);
                        resolve();
                    }).catch((err) => {
                        console.log(err);
                        reject();
                    })
            })
        }
    }
})