import axios from 'axios';

export default API = axios.create({
    baseURL: 'http://192.168.1.141/marcador/API/',
    timeout: 1000
});