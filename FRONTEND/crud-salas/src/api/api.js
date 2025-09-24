import axios from 'axios';

const API_URL = axios.create ({
    baseURL: "http://127.0.0.1:8000/api/laboratorios/" 
})


export const getAPI_URL = () => API_URL.get()
