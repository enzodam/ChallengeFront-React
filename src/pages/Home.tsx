import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import logo1 from '../assets/SOS-Logo1.png';
import assistencia from '../assets/icone assistencia tecnica.jpg';
import reboque from '../assets/icone reboque.jpg';
import uber from '../assets/logo uber.png';
import taxi from '../assets/logo 99.png';
import google from '../assets/logo google.jpg';
import apple from '../assets/logo apple.jpg';
import Footer from '../components/Footer';
import mecanico from '../assets/mecanico.jpg';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      
      {/* Área do Cliente */}
      <section
        id="container1"
        className="h-64 bg-center bg-cover flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${mecanico})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Link to="/login" className="text-4xl font-bold">
          Área do Cliente
        </Link>
      </section>

      <main className="p-8 bg-gray-300">
        {/* Cadastrar-se */}
        <nav id="cadastro" className="my-8 text-center">
          <h3 className="text-xl mb-2">Ainda não é cadastrado?</h3>
          <h1>
            <Link to="/cadastro" className="text-3xl text-blue-600 hover:underline">
              Cadastrar-se
            </Link>
          </h1>
        </nav>

        {/* Como Funciona */}
        <section id="container2" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Como funciona?</h2>
          <ol className="list-decimal pl-5">
            <li>Faça seu cadastro.</li>
            <li>
              Escolha uma das opções:
              <ul className="list-disc pl-5">
                <li>Atendimento On-line</li>
                <li>Listar mecânicos na Área</li>
                <li>Cadastrar Mecânico</li>
                <li>Chamar Reboque</li>
              </ul>
            </li>
            <li>O nosso chat irá te guiar para a solução do seu problema.</li>
          </ol>
        </section>

        {/* Serviços */}
        <div id="container3" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Serviços</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <img src={logo1} alt="SOS" className="w-20 h-auto" />
              <h3>SOS: Solicite ajuda imediata.</h3>
            </div>
            <div className="text-center">
              <img src={assistencia} alt="Mecânico" className="w-20 h-auto" />
              <h3>Mecânicos: Localize serviços mecânicos e centros de reparo.</h3>
            </div>
            <div className="text-center">
              <img src={reboque} alt="Reboque" className="w-20 h-auto" />
              <h3>Serviço de reboque: Solicite um reboque com apenas alguns toques.</h3>
            </div>
          </div>
        </div>

        {/* Parcerias Exclusivas */}
        <div id="container4" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Parcerias Exclusivas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="text-center">
              <img src={uber} alt="Uber" className="w-20 h-auto" />
              <img src={taxi} alt="99" className="w-20 h-auto" />
              <h3>Para motoristas de aplicativo: Junte pontos e troque por ofertas em oficinas parceiras</h3>
            </div>
          </div>
        </div>

        {/* Baixar o App */}
        <div id="container5" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Baixe nosso App</h2>
          <div className="flex justify-center space-x-4">
            <img src={google} alt="Google Play" className="w-40 h-auto" />
            <img src={apple} alt="Apple Store" className="w-40 h-auto" />
          </div>
        </div>

        {/* Integrantes */}
        <nav id="integrantes" className="text-center">
          <h2>
            <Link to="/integrantes" className=" hover:underline">
              Integrantes
            </Link>
          </h2>
        </nav>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
