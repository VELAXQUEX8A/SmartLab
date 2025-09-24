import { useEffect, useState } from "react";
import axios from "axios";

export default function Laboratorios() {
  const [laboratorios, setLaboratorios] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/reservas/api/laboratorios/")
      .then(response => setLaboratorios(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Laboratorios Disponibles</h1>
      <ul>
        {laboratorios.map(lab => (
          <li key={lab.id} className="mt-2 p-2 border rounded">
            {lab.nombre} - Capacidad: {lab.capacidad}
          </li>
        ))}
      </ul>
    </div>
  );
}
