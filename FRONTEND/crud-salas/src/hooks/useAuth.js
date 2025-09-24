import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/login");
  };

  return { logout };
};
