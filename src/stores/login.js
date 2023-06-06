import { defineStore } from 'pinia';
import axios from '../axios';



export const loginService = defineStore('loginStore', {
    state: () => ({
        jwt: '',
        role: '',
        id: '',
        username: '',
    }),
    getters: {
        isLoggedIn: (state) => state.jwt != '',
        isAdmin: (state) => state.role == 'ROLE_ADMIN',
        getId: (state) => state.id,
        getUsername: (state) => state.username,
    },
    actions: {
        login(username, password) {
            return new Promise((resolve, reject) => {
                axios.post('/auth/login', {
                    username: username,
                    password: password
                })
                    .then((res) => {
                        console.log(res);
                        axios.defaults.headers.common['Authorization'] = "Bearer " + res.data.token;
                        console.log(axios.defaults.headers.common['Authorization']);
                        localStorage.setItem('token', res.data.token);
                        var decoded = JSON.parse(atob(res.data.token.split('.')[1]));
                        
                        console.log(decoded);
                        console.log(decoded.id);

                        this.jwt = res.data.token;
                        this.role = decoded.auth;
                        this.id = decoded.id;
                        this.username = decoded.sub;
                        localStorage.setItem('role', decoded.auth);
                        localStorage.setItem('id', decoded.id);
                        localStorage.setItem('username', decoded.sub);
                        
                        
                        resolve();
                    }).catch((err) => {
                        console.log(err);
                        reject();
                    })
            })

        },

        autoLogin() {
            const token = localStorage.getItem('token');
            const role = localStorage.getItem('role');
            const id = localStorage.getItem('id');
            const username = localStorage.getItem('username');
            if (token  && id) {
                axios.defaults.headers.common["Authorization"] =
                    "Bearer " + token;
                this.jwt = token;
                this.role = role;
                this.id = id;
                this.username = username;
            }
        },

        

    }
})

export default loginService;