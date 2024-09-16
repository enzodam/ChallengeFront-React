import Logo from '../assets/Logo.png';

function Header2() {
  return (
    <header className="bg-indigo-950 p-4 text-white flex justify-center items-center">
      <div className="flex items-center">
        <img src={Logo} alt="SOS Mecânico" className="w-40 h-auto" />
      </div>
    </header>
  );
}

export default Header2;
