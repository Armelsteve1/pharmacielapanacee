import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-800 text-white py-4 px-6 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Pharmacie La Panacée</div>
        <button
          className="block lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          <li>
            <a href="#home" className="hover:text-green-300 transition">
              Accueil
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-green-300 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-green-300 transition">
              Rayons
            </a>
          </li>
          <li>
            <a href="#comments" className="hover:text-green-300 transition">
              Avis
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-green-300 transition">
              À propos
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu - Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-green-900 shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="mt-16 space-y-6 text-center text-white">
          <li>
            <a
              href="#home"
              className="block py-2 hover:bg-green-700"
              onClick={toggleMenu}
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="block py-2 hover:bg-green-700"
              onClick={toggleMenu}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className="block py-2 hover:bg-green-700"
              onClick={toggleMenu}
            >
              Rayons
            </a>
          </li>
          <li>
            <a
              href="#comments"
              className="block py-2 hover:bg-green-700"
              onClick={toggleMenu}
            >
              Avis
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block py-2 hover:bg-green-700"
              onClick={toggleMenu}
            >
              À propos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
