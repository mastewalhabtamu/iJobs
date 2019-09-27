import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://gcelab-235621.firebaseio.com/'
});


export default instance
