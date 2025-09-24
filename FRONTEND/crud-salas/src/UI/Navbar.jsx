import { LogOut, UserCircle, Home, CalendarDays } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-green-400 text-white px-6 py-4 shadow-md flex justify-between items-center rounded-b-2xl">
      <div
        onClick={() => navigate("/home")}
        className="text-xl font-bold cursor-pointer hover:text-blue-200 transition"
        
      >
      <div className="flex items-center gap-2">
        <p className="text-lg font-semibold">SmartLab</p>
        <img
          src="/src/icons/Logo_SmartLab (1).png"
          alt="Logo SmartLab"
          className="w-10 h-10 rounded-full border-2 bg-amber-50 border-white"
        />
     </div>

        </div>
      
      <div className="flex gap-6 items-center">
        <button
          onClick={() => navigate("/home")}
          className="flex items-center gap-1 hover:text-blue-200 transition"
        >
          <Home className="w-5 h-5" />
          Inicio
        </button>

        <button
          onClick={() => navigate("/reservas")}
          className="flex items-center gap-1 hover:text-blue-200 transition"
        >
          <CalendarDays className="w-5 h-5" />
          Reservas
        </button>


        <button
          onClick={() => navigate("/gestionar-reservas")}
          className="flex items-center gap-1 hover:text-blue-200 transition"
        >
          <CalendarDays className="w-5 h-5" />
          Gestionar Reservas
        </button>

        <button
            onClick={() => navigate("/perfil")}
            className="flex items-center gap-1 hover:text-blue-200 transition"
        >
            <UserCircle className="w-6 h-6 " />
            Perfil
        </button>

        <button
          onClick={logout}
          className="flex items-center gap-1 bg-red-500 px-3 py-1 rounded-xl hover:bg-red-600 transition"
        >
          <LogOut className="w-4 h-4" />
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
}
