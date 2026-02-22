import axios from 'axios'
const productsApi = axios.create({
    baseURL: 'https://6937e7f34618a71d77ce17a8.mockapi.io/product',
    // baseURL: 'http://localhost:3500/products',
    timeout: 5000
})
export default productsApi