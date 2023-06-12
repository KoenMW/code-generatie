import axios from 'axios'
const instance = axios.create({
baseURL: 'http://localhost:8443/'
});

export default instance;