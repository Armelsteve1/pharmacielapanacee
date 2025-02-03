import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-800 text-white py-4 px-6 shadow-lg">
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
            <a
              href="#home"
              className="hover:text-green-300 transition duration-300"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-green-300 transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className="hover:text-green-300 transition duration-300"
            >
              Rayons
            </a>
          </li>
          <li>
            <a
              href="#comments"
              className="hover:text-green-300 transition duration-300"
            >
              Avis
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-green-300 transition duration-300"
            >
              À propos
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4">
          <ul className="space-y-4">
            <li>
              <a
                href="#home"
                className="block text-center hover:text-green-300 transition duration-300"
                onClick={toggleMenu}
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block text-center hover:text-green-300 transition duration-300"
                onClick={toggleMenu}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="block text-center hover:text-green-300 transition duration-300"
                onClick={toggleMenu}
              >
                Rayons
              </a>
            </li>
            <li>
              <a
                href="#comments"
                className="block text-center hover:text-green-300 transition duration-300"
                onClick={toggleMenu}
              >
                Avis
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-center hover:text-green-300 transition duration-300"
                onClick={toggleMenu}
              >
                À propos
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
