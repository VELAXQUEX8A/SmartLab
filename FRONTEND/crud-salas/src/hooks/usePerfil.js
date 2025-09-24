import { useState, useEffect } from 'react';
import { obtenerPerfil, obtenerReservasUsuario } from '../api/perfil';

export function usePerfil() {
  const [perfil, setPerfil] = useState(null);
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [perfilData, reservasData] = await Promise.all([
        obtenerPerfil(),
        obtenerReservasUsuario(),
      ]);
      setPerfil(perfilData);
      setReservas(reservasData);
    } catch (error) {
      console.error('Error al obtener datos del perfil:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { perfil, reservas, loading };
}
