import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tinderr-backend.herokuapp.com"
})

export default instance;