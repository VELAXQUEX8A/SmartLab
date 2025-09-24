import Navbar from "../UI/Navbar";
import { usePerfil } from "../hooks/usePerfil";

export default function Perfil() {
  const { perfil, reservas, loading } = usePerfil();

  if (loading) return <p className="text-center mt-10">Cargando perfil...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white felx flex-col items-center justify-center px-4">
      
      <Navbar />
      <div className="max-w-3xl mx-auto mt-5 bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-blue-800">Mi Perfil</h1>

        <div className="space-y-2 text-gray-700 mb-6">
          <p><strong>Usuario:</strong> {perfil.username}</p>
          <p><strong>Correo:</strong> {perfil.email}</p>
        </div>

        <h2 className="text-xl font-semibold text-blue-700 mb-2">Mis Reservas</h2>
        {reservas.length === 0 ? (
          <p className="text-gray-500">No tienes reservas registradas.</p>
        ) : (
          <ul className="space-y-3">
            {reservas.map((reserva) => (
              <li
                key={reserva.id}
                className="border p-4 rounded-lg shadow-sm bg-gray-50"
              >
                <p><strong>Laboratorio:</strong> {reserva.laboratorio}</p>
                <p><strong>Fecha:</strong> {reserva.fecha}</p>
                <p><strong>Hora:</strong> {reserva.hora_inicio} - {reserva.hora_fin}</p>
                <p><strong>Estado:</strong> {reserva.estado}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
