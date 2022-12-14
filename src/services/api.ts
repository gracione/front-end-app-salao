import axios from 'axios';

const api = axios.create({
  baseURL: "http://salao.localhost/api",
})

const token = localStorage.getItem('token');

console.log(localStorage.getItem('token'));
console.log(localStorage.getItem('id_usuario'));
console.log(localStorage.getItem('tipo_usuario'));

if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default api;