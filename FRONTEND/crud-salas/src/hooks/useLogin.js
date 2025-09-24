import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/login';

export function useLogin() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const login = async (username, password) => {
    setError('');
    try {
      const response = await loginUser({ username, password });
      localStorage.setItem('access', response.data.access);
      localStorage.setItem('refresh', response.data.refresh);
      navigate('/Home');
    } catch (err) {
      console.error('Error al iniciar sesión:', err);
      setError('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  return { error, login };
}
