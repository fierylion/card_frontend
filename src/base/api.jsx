import axios from 'axios';
const api = axios.create({
  baseURL: 'https://card-api-8dfa.onrender.com/',
})
export default api;