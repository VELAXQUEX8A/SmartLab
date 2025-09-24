import { useNavigate } from "react-router-dom";
import { useLaboratorios } from "../hooks/useLaboratorios";
import Button from "../UI/Button";

export default function SalasList() {
  const { laboratorios, loading, error } = useLaboratorios();
  const navigate = useNavigate();

  if (loading) return <p className="text-blue-600 mt-4">Cargando salas disponibles...</p>;
  if (error) return <p className="text-red-600 mt-4">Error al cargar salas.</p>;

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold text-sky-800">Salas Disponibles</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-5 text-white">
        {laboratorios.map((laboratorio) => (
          <div key={laboratorio.id} className="bg-sky-400 p-4 rounded-lg shadow">
            <p><strong>Nombre:</strong> {laboratorio.nombre}</p>
            <p><strong>Capacidad:</strong> {laboratorio.capacidad}</p>
            <p><strong>Descripción:</strong> {laboratorio.descripcion}</p>
            <Button
              onClick={() => navigate(`/reservar/${laboratorio.id}`)}
              className="mt-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-lg transition"
            >
              Reservar Sala
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
