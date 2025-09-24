import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Reservas from "../pages/Reservas";
import Laboratorios from "../components/Laboratorios";
import FormularioReserva from "../pages/FormularioReserva";
import PrivateRoutes from "./PrivateRoutes";
import GestionReservas from "../pages/GestionReservas";
import Perfil from "../pages/Perfil";

const AppRouter = () => (
  <Routes>
    {/* Rutas públicas */}
    <Route path="/" element={<Navigate to="/login" />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    {/* Rutas privadas */}
    <Route element={<PrivateRoutes />}>
      <Route path="/home" element={<Home />} />
      <Route path="/reservas" element={<Reservas />} />
      <Route path="/laboratorios" element={<Laboratorios />} />
      <Route path="/reservar/:id" element={<FormularioReserva />} />
      <Route path="/gestionar-reservas" element={<GestionReservas />} />
      <Route path="/perfil" element={<Perfil/>} />
    </Route>
  </Routes>
);

export default AppRouter;
