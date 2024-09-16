import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Atendimento from './pages/Atendimento';
import Mecanicos from './pages/Mecanicos';
import CadastrarMecanico from './pages/Cadastrar_mecanico';
import Reboque from './pages/Reboque';
import Integrantes from './pages/Integrantes';

const App: React.FC = () => {
  return (
    <Router>
      <main className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/atendimento" element={<Atendimento />} />
          <Route path="/mecanicos" element={<Mecanicos />} />
          <Route path="/cadastrarmecanico" element={<CadastrarMecanico />} />
          <Route path="/reboque" element={<Reboque />} />
          <Route path="/integrantes" element={<Integrantes />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
