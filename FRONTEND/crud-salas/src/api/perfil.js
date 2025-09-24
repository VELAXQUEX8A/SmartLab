import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

export const obtenerPerfil = async () => {
  const token = localStorage.getItem('access');
  const response = await axios.get(`${BASE_URL}/usuarios/perfil/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const obtenerReservasUsuario = async () => {
  const token = localStorage.getItem('access');
  const response = await axios.get(`${BASE_URL}/reservas/api/mis-reservas/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
