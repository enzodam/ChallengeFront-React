import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';

const Cadastro: React.FC = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    idade: '',
    telefone: '',
    email: '',
    carro: '',
    placa: '',
    login: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullname || !formData.email || !formData.carro || !formData.placa || !formData.login) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    alert('Cadastro realizado com sucesso!');
    navigate('/login');
  };

  const handleVoltar = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header2 />

      <div className="flex-grow bg-gray-200 p-8 shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label htmlFor="fullname">Nome Completo:</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
            maxLength={50}
            className="p-2 border rounded-md"
          />

          <label htmlFor="idade">Idade:</label>
          <input
            type="number"
            id="idade"
            name="idade"
            value={formData.idade}
            onChange={handleChange}
            min={0}
            max={130}
            className="p-2 border rounded-md"
          />

          <label htmlFor="telefone">Telefone:</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            className="p-2 border rounded-md"
          />

          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-2 border rounded-md"
          />

          <label htmlFor="carro">Modelo do Carro:</label>
          <input
            type="text"
            id="carro"
            name="carro"
            value={formData.carro}
            onChange={handleChange}
            required
            maxLength={50}
            className="p-2 border rounded-md"
          />

          <label htmlFor="placa">Placa:</label>
          <input
            type="text"
            id="placa"
            name="placa"
            value={formData.placa}
            onChange={handleChange}
            required
            maxLength={50}
            className="p-2 border rounded-md"
          />

          <label htmlFor="login">Login:</label>
          <input
            type="text"
            id="login"
            name="login"
            value={formData.login}
            onChange={handleChange}
            required
            maxLength={50}
            className="p-2 border rounded-md"
          />

          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="p-2 border rounded-md"
          />

          <label htmlFor="confirmPassword">Repetir Senha:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="p-2 border rounded-md"
          />

          <button type="submit" className="bg-indigo-950 text-white py-2 rounded-md">
            Cadastrar
          </button>
          <button type="button" onClick={handleVoltar} className="bg-indigo-950 text-white py-2 rounded-md">
            Voltar
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Cadastro;
