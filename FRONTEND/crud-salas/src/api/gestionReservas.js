import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/reservas/api/reservas/';

export const getReservas = async () => {
  const token = localStorage.getItem('access');
  const response = await axios.get(BASE_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const actualizarEstadoReserva = async (id, nuevoEstado) => {
  const token = localStorage.getItem('access');
  await axios.patch(
    `${BASE_URL}${id}/`,
    { estado: nuevoEstado },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
