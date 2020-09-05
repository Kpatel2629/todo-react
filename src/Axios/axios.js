import axios from 'axios';

const instance = axios.create({
    baseURL:"https://chato-c2d8a.firebaseio.com/"
});

export default instance;