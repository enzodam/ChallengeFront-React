import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import enzod from '../assets/enzo dias.jpeg';
import enzop from '../assets/enzo.jpeg';
import vini from '../assets/vini.jpg';
import Logo from '../assets/Logo.png';

const Integrantes: React.FC = () => {
    const navigate = useNavigate();

    const handleVoltar = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-300">
            <main className="flex flex-col items-center bg-gray-300 flex-grow py-4 px-4">
                <header className="w-full bg-indigo-950 text-gray-200 py-4 text-center mb-8">
                    <h1 className="text-3xl">TURMA - 1TDSR</h1>
                    <p className="text-lg mt-2">
                        Repositório:<a href="https://github.com/enzodam/ChallengeFront-React" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">
                            https://github.com/enzodam/ChallengeFront-React
                        </a>
                    </p>
                    <p className="text-lg mt-2">
                        Video:<a href="https://www.youtube.com/watch?v=8_scNzU_TsI" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">
                            https://www.youtube.com/watch?v=8_scNzU_TsI
                        </a>
                    </p>
                </header>
                <section className="w-full max-w-4xl mx-auto">
                    <div className="bg-indigo-950 text-gray-200 rounded-xl mb-4 p-4 flex flex-col sm:flex-row items-center">
                        <img className="w-1/5 sm:w-24 rounded-full mr-4 sm:mr-4 mb-4 sm:mb-0" src={vini} alt="Vinicius Prates Altafini" />
                        <div className="flex-1 text-center sm:text-left">
                            <p className="text-lg">RM: 559183</p>
                            <p className="text-lg">Aluno: Vinicius Prates Altafini</p>
                            <p className="text-lg">
                                <a href="https://github.com/vinicius945" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">
                                    https://github.com/vinicius945
                                </a>
                            </p>
                        </div>
                        <img className="w-1/5 sm:w-24 ml-4" src={Logo} alt="Logo" />
                    </div>

                    <div className="bg-indigo-950 text-gray-200 rounded-xl mb-4 p-4 flex flex-col sm:flex-row items-center">
                        <img className="w-1/5 sm:w-24 rounded-full mr-4 sm:mr-4 mb-4 sm:mb-0" src={enzop} alt="Enzo Prado Soddano" />
                        <div className="flex-1 text-center sm:text-left">
                            <p className="text-lg">RM: 557937</p>
                            <p className="text-lg">Aluno: Enzo Prado Soddano</p>
                            <p className="text-lg">
                                <a href="https://github.com/DerBrasilianer" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">
                                    https://github.com/DerBrasilianer
                                </a>
                            </p>
                        </div>
                        <img className="w-1/5 sm:w-24 ml-4" src={Logo} alt="Logo" />
                    </div>

                    <div className="bg-indigo-950 text-gray-200 rounded-xl mb-4 p-4 flex flex-col sm:flex-row items-center">
                        <img className="w-1/5 sm:w-24 rounded-full mr-4 sm:mr-4 mb-4 sm:mb-0" src={enzod} alt="Enzo Dias Alfaia Mendes" />
                        <div className="flex-1 text-center sm:text-left">
                            <p className="text-lg">RM: 558438</p>
                            <p className="text-lg">Aluno: Enzo Dias Alfaia Mendes</p>
                            <p className="text-lg">
                                <a href="https://github.com/enzodam" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">
                                    https://github.com/enzodam
                                </a>
                            </p>
                        </div>
                        <img className="w-1/5 sm:w-24 ml-4" src={Logo} alt="Logo" />
                    </div>
                </section>
                <div className="flex justify-center mt-6">
                    <button
                        className="w-64 bg-indigo-950 text-white py-5 rounded-md hover:bg-blue-800"
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

export default Integrantes;
