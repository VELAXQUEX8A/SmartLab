import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/usuarios/login/';

export async function loginUser(credentials) {
  return axios.post(API_URL, credentials);
}
