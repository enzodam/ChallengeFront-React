import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';
import usuario from '../assets/usuario.png';
import senha from '../assets/senha.png';
import mecanico from '../assets/mecanico2.jpg';

const Login: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState('');
  
  const navigate = useNavigate();

  const checkInputs = () => {
    return !(login && password);
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    
    if (checkInputs()) {
      setErrorMessages('Por favor, preencha todos os campos.');
    } else {
      setErrorMessages('');
      navigate('/menu');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen justify-between bg-cover bg-no-repeat" style={{ backgroundImage: `url(${mecanico})` }}>
      <div className="flex justify-center items-center grow">
        <form className="bg-black bg-opacity-50 p-8 rounded-lg flex flex-col items-center space-y-4" onSubmit={handleLogin}>
          <img src={logo} alt="SOS Mecânico" className="w-24 mb-4" />
          <div className="flex items-center bg-white rounded-md p-2 w-full">
            <img src={usuario} alt="Ícone de Usuário" className="w-6 h-6" />
            <input
              type="text"
              placeholder="Login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              className="ml-2 p-2 w-full outline-none"
            />
          </div>
          <div className="flex items-center bg-white rounded-md p-2 w-full">
            <img src={senha} alt="Ícone de Senha" className="w-6 h-6" />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="ml-2 p-2 w-full outline-none"
            />
          </div>
          <button type="submit" className="bg-white text-black w-full py-2 rounded-md">
            Entrar
          </button>
          <a href="/forgot-password" className="text-white text-sm">Esqueceu sua senha?</a>
          <a href="/cadastro" className="text-white text-sm">
            Ainda não é cadastrado? <span className="underline">Cadastrar-se</span>
          </a>
          {errorMessages && <p className="text-red-500">{errorMessages}</p>}
          <button
            type="button"
            onClick={handleBack}
            className="bg-white text-black w-full py-2 rounded-md"
          >
            Voltar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
