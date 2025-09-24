import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../UI/Navbar";
import { LogoUcc } from "../UI/LogoUcc";
function ReservaForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [fecha, setFecha] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFin, setHoraFin] = useState("");
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const token = localStorage.getItem("access");

    if (!token) {
      setError("Debes iniciar sesión para hacer una reserva.");
      return;
    }

    try {
      await axios.post(
        "http://127.0.0.1:8000/reservas/api/reservas/",
        {
          laboratorio: id,
          fecha,
          hora_inicio: horaInicio,
          hora_fin: horaFin,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMensaje("Reserva realizada exitosamente.");
      setTimeout(() => navigate("/Home"), 1500);
    } catch (err) {
      console.error(err);
      setError("No se pudo realizar la reserva. Verifica los datos.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex flex-col items-center justify-start px-4">
      <Navbar/>
      <form
        onSubmit={handleSubmit}
        className="bg-white mt-6 shadow-lg rounded-2xl p-8 w-full max-w-md space-y-4"
        >
        <h2 className="text-2xl font-bold text-center text-black">Reservar Sala</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {mensaje && <p className="text-green-600 text-center">{mensaje}</p>}

        <label className="block">
          Fecha:
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
            className="w-full mt-1 px-3 py-2 border rounded-xl"
          />
        </label>

        <label className="block">
          Hora Inicio:
          <input
            type="time"
            value={horaInicio}
            onChange={(e) => setHoraInicio(e.target.value)}
            required
            className="w-full mt-1 px-3 py-2 border rounded-xl"
          />
        </label>

        <label className="block">
          Hora Fin:
          <input
            type="time"
            value={horaFin}
            onChange={(e) => setHoraFin(e.target.value)}
            required
            className="w-full mt-1 px-3 py-2 border rounded-xl"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-green-400 text-white py-2 rounded-xl hover:bg-green-400 transition"
        >
          Reservar
        </button>
      </form>
      <LogoUcc/>
    </div>
  );
}

export default ReservaForm;
