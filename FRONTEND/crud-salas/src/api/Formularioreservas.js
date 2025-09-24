import axios from "axios";

const API_BASE = "http://127.0.0.1:8000/reservas/api/reservas/";

export const getLaboratorioNombre = async (id) => {
  const response = await axios.get(`${API_BASE}${id}/`);
  return response.data.nombre;
};

export const crearReserva = async (data, token) => {
  return axios.post(API_BASE, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
