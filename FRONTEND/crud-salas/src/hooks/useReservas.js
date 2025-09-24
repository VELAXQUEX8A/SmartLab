import { useState, useEffect } from "react";
import { fetchLaboratorios } from "../api/reservas";

export function useSalas() {
  const [salas, setSalas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadSalas = async () => {
      try {
        const response = await fetchLaboratorios();
        setSalas(response.data);
      } catch (err) {
        console.error("Error al cargar las salas:", err);
        setError(err);
      }
    };

    loadSalas();
  }, []);

  return { salas, error };
}
