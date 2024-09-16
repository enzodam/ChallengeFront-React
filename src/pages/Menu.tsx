import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';

const Menu: React.FC = () => {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <Header2 />
      <main className="flex-grow p-4 flex flex-col items-center justify-start">
        <div className="w-full flex flex-col items-center">
          <div className="w-1/2 bg-white p-4 mb-4 border border-gray-300 rounded-md text-center">
            <a href="/atendimento" className="text-gray-900 hover:bg-gray-800 hover:text-white block py-2 px-4 rounded-md">
              Atendimento On-line
            </a>
          </div>
          <div className="w-1/2 bg-white p-4 mb-4 border border-gray-300 rounded-md text-center">
            <a href="/mecanicos" className="text-gray-900 hover:bg-gray-800 hover:text-white block py-2 px-4 rounded-md">
              Listar Mecânicos Na Área
            </a>
          </div>
          <div className="w-1/2 bg-white p-4 mb-4 border border-gray-300 rounded-md text-center">
            <a href="/cadastrarmecanico" className="text-gray-900 hover:bg-gray-800 hover:text-white block py-2 px-4 rounded-md">
              Cadastrar Mecânico
            </a>
          </div>
          <div className="w-1/2 bg-white p-4 mb-4 border border-gray-300 rounded-md text-center">
            <a href="/reboque" className="text-gray-900 hover:bg-gray-800 hover:text-white block py-2 px-4 rounded-md">
              Chamar Reboque
            </a>
          </div>
          <button
            className="w-1/2 bg-indigo-950 text-white py-2 rounded-md hover:bg-blue-800 mb-4"
            onClick={handleVoltar}
          >
            Voltar
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
