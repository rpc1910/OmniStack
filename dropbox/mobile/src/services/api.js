import axios from 'axios'

const api = axios.create({
    baseURL: 'https://rpc1910-omnistack.herokuapp.com/',
})

export default api