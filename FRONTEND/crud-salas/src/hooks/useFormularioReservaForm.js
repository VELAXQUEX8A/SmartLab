import { useEffect, useState } from "react";
import { getLaboratorioNombre, crearReserva } from "../api/Formularioreservas";
import { mostrarErrorReserva } from "../helpers/alertsReserva";
import { useNavigate } from "react-router-dom";

export const useReservaForm = (id) => {
  const navigate = useNavigate();
  const [nombreLaboratorio, setNombreLaboratorio] = useState("");
  const [formData, setFormData] = useState({
    fecha: "",
    hora_inicio: "",
    hora_fin: "",
    descripcion: "",
    motivo: "",
  });

  useEffect(() => {
    getLaboratorioNombre(id)
      .then(setNombreLaboratorio)
      .catch((error) => console.error("No se pudo cargar el laboratorio", error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access");
    if (!token) {
      alert("Usuario no autenticado. Por favor inicia sesión.");
      return;
    }

    try {
      await crearReserva(
        {
          laboratorio: id,
          fecha: formData.fecha,
          hora_inicio: formData.hora_inicio,
          hora_fin: formData.hora_fin,
          estado: "Pendiente",
          descripcion: formData.motivo,
        },
        token
      );
      alert("✅ Reserva realizada con éxito");
      navigate("/home");
    } catch (error) {
      mostrarErrorReserva(error);
    }
  };

  return { formData, handleChange, handleSubmit, nombreLaboratorio };
};
