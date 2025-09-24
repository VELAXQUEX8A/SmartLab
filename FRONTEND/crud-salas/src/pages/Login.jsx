import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../UI/Button';
import Input from '../UI/Input';
import Card from '../UI/Card';
import Heading from '../UI/Heading';
import { useLogin } from '../hooks/useLogin';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { error, login } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access');
    if (token) {
      navigate('/Home');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Card className="max-w-md w-full p-8 space-y-6">
        <Heading title="Iniciar Sesión" />
        {error && <p className="text-center text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" className="w-full">Iniciar sesión</Button>
        </form>
        <p className="text-center text-gray-600">
          ¿No tienes una cuenta?{' '}
          <Link to="/register" className="text-green-400 hover:underline font-medium">
            Regístrate aquí
          </Link>
        </p>
        <p className="text-center text-gray-600">
          ¿Olvidaste tu contraseña?{' '}
          <Link to="/reset-password" className="text-green-400 hover:underline font-medium">
            Restablecer contraseña
          </Link>
        </p>
      </Card>
    </div>
  );
}

export default Login;
