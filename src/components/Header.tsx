import Logo from '../assets/Logo.png';

function Header() {
    return (
      <header className="bg-indigo-950 p-4 text-white flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="SOS Mecânico" className="w-12 h-12" />
          <h1 className="ml-4 text-2xl">SOS Mecânico</h1>
        </div>
      </header>
    );
  }
  
  export default Header;
  