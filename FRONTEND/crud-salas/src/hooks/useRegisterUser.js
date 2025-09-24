import { useState } from "react";
import axios from "axios";

export const useRegistroUsuario = () => {
  const [error, setError] = useState(null);

  const registrarUsuario = async ({ username, password, email }) => {
    try {
      await axios.post("http://127.0.0.1:8000/usuarios/api/usuarios/", {
        username,
        password,
        email,
      });
      setError(null);
      return true;
    } catch (err) {
      console.error("Error al registrar usuario:", err);
      setError(err.response?.data || "Error desconocido");
      return false;
    }
  };

  return { registrarUsuario, error };
};
