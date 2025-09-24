import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useRegistroUsuario } from '../hooks/useRegisterUser';

import Button from '../UI/Button';
import Input from '../UI/Input';
import Card from '../UI/Card';
import Heading from '../UI/Heading';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { registrarUsuario, error } = useRegistroUsuario();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const exito = await registrarUsuario({ username, password, email });
    if (exito) navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Card className="max-w-md w-full p-8 space-y-6">
        <Heading title="Crear Cuenta" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && (
            <p className="text-red-500 text-sm">{typeof error === 'string' ? error : 'Error al registrar.'}</p>
          )}
          <Button type="submit" className="w-full">Registrarse</Button>
        </form>
        <p className="text-center text-gray-600">
          ¿Ya tienes una cuenta?{' '}
          <Link to="/login" className="text-green-400 hover:underline font-medium">
            Inicia sesión
          </Link>
        </p>
      </Card>
    </div>
  );
}

export default Register;
