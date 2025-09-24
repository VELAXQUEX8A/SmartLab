import { useEffect, useState } from 'react';
import { getReservas, actualizarEstadoReserva } from '../api/gestionReservas';

export function useReservas() {
  const [reservas, setReservas] = useState([]);

  const fetchReservas = async () => {
    try {
      const data = await getReservas();
      setReservas(data);
    } catch (error) {
      console.error('Error al obtener reservas:', error);
    }
  };

  const cambiarEstado = async (id, nuevoEstado) => {
    try {
      await actualizarEstadoReserva(id, nuevoEstado);
      fetchReservas();
    } catch (error) {
      console.error('Error al actualizar estado:', error);
    }
  };

  useEffect(() => {
    fetchReservas();
  }, []);

  return { reservas, cambiarEstado };
}
