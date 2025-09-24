import { useReservas } from '../hooks/useGestionReservas';

import Navbar from '../UI/Navbar';
import Button from '../UI/Button';
import { LogoUcc } from '../UI/LogoUcc';

export default function GestionReservas() {
  const { reservas, cambiarEstado } = useReservas();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex-col items-center justify-start px-4">
      <Navbar />
      <h1 className="text-3xl font-bold text-center text-black mb-6">Gestión de Reservas</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reservas.map((reserva) => (
          <div key={reserva.id} className="bg-white p-4 rounded-xl shadow space-y-2">
            <p><strong>Usuario:</strong> {reserva.usuario}</p>
            <p><strong>Laboratorio:</strong> {reserva.laboratorio}</p>
            <p><strong>Fecha:</strong> {reserva.fecha}</p>
            <p><strong>Hora:</strong> {reserva.hora_inicio} - {reserva.hora_fin}</p>
            <p><strong>Estado:</strong> {reserva.estado}</p>
            <div className="flex gap-2 mt-2">
              <Button onClick={() => cambiarEstado(reserva.id, 'Aprobada')} className="bg-green-500 hover:bg-green-600">
                Aprobar
              </Button>
              <Button onClick={() => cambiarEstado(reserva.id, 'Rechazada')} className="bg-red-500 hover:bg-red-600">
                Rechazar
              </Button>
            </div>
          </div>
        ))}
      </div>
      <LogoUcc/>
    </div>
  );
}
