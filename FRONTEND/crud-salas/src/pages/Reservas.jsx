import { useNavigate } from "react-router-dom";
import { SkipBack } from "lucide-react";

import Navbar from "../UI/Navbar";
import Button from "../UI/Button";
import { useSalas } from "../hooks/useReservas";
import { LogoUcc } from "../UI/LogoUcc";

export default function Reservas() {
  const navigate = useNavigate();
  const { salas, error } = useSalas();

  const handleReservar = (salaId) => {
    navigate(`/reservar/${salaId}`);
  };

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex flex-col">
      <Navbar />

      <div className="p-6 w-full max-w-4xl mx-auto">
        <Button onClick={handleBack} className="flex items-center mb-4 hover:bg-green-400 px-0 py-0">
          <SkipBack className="w-5 h-5 mr-2" />
          Volver a Inicio
        </Button>

        <h1 className="text-2xl font-bold mb-6 text-gray-800">Salas disponibles</h1>

        {error && (
          <p className="text-red-500 mb-4">Error al cargar las salas. Inténtalo más tarde.</p>
        )}

        <ul className="grid gap-4">
          {salas.map((sala) => (
            <li
              key={sala.id}
              className="border border-gray-200 p-4 rounded-xl shadow-sm flex justify-between items-center bg-white hover:shadow-md transition"
            >
              <span className="font-semibold text-gray-700">{sala.nombre}</span>
              <Button onClick={() => handleReservar(sala.id)}>Reservar</Button>
            </li>
          ))}
        </ul>
      </div>
      <LogoUcc/>
    </div>
  );
}
