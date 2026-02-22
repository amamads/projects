import axios from 'axios'
const usersApi = axios.create({
    baseURL: 'https://6937e7f34618a71d77ce17a8.mockapi.io/users',
    // baseURL: 'http://localhost:3500/users',
    timeout: 5000
})
export default usersApi