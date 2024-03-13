import axios from 'axios';

const api = axios.create({
    baseURL: "https://backend-projetofinal-utd-js.vercel.app/api"
});

export default api;