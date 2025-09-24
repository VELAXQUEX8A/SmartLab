import { useEffect, useState } from "react";
import { getAPI_URL } from "../api/api";

export const useLaboratorios = () => {
  const [laboratorios, setLaboratorios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLaboratorios = async () => {
    try {
      const response = await getAPI_URL();
      setLaboratorios(response.data);
    } catch (err) {
      console.error("Error al cargar laboratorios:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLaboratorios();
  }, []);

  return { laboratorios, loading, error };
};
