import { LogIn, LogOut, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import SalasList from "../components/SalasList";
import Button from "../UI/Button";
import Navbar from "../UI/Navbar";
import { LogoUcc } from "../UI/LogoUcc";

export default function Home() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex flex-col items-center justify-start px-4">
      <Navbar />

      <div className="bg-white mt-6 rounded-2xl shadow-xl max-w w-full p-8 text-center space-y-6">
        <div className="flex justify-center">
          <img
            src="/src/icons/Logo_SmartLab (1).png"
            alt="Logo SmartLab"
            className="w-16 h-16 rounded-full border-2 border-blue-500"
          />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Hola, ¡Bienvenido a SmartLab!</h1>
        <p className="text-gray-600 text-lg">
          Esta es la página de inicio. Aquí podrás gestionar tus laboratorios, reservas y más.
        </p>
        <Button
          onClick={() => navigate("/reservas")}
          className="flex items-center justify-center mt-5 mb-5 gap-2 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-800 transition duration-200 mx-auto"
        >
          <LogIn className="w-5 h-5" />
          Reservar Salas
        </Button>
        <SalasList />
      </div>
      <LogoUcc/>
    </div>
  );
}