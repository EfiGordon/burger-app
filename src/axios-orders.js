import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-dc8cb.firebaseio.com/'
})

export default instance;