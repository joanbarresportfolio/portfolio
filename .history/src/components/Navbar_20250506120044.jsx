import React, { useState } from 'react';
import { FaCode, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-sm border-b fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo y título */}
        <div className="flex items-center text-gray-900 font-bold text-xl">
          Joan Barres <FaCode className="ml-2 text-sm text-gray-500" />
        </div>

        {/* Botón hamburguesa para móviles */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Enlaces de navegación para escritorio */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-800">
          <li className="hover:text-purple-600 cursor-pointer">Home</li>
          <li className="hover:text-purple-600 cursor-pointer">Projects</li>
          <li className="hover:text-purple-600 cursor-pointer">About</li>
          <li className="hover:text-purple-600 cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Menú desplegable para móviles */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg px-4 py-4 space-y-4">
          <li onClick={closeMenu} className="hover:text-gray-500 cursor-pointer">Home</li>
          <li onClick={closeMenu} className="hover:text-gray-500 cursor-pointer">Projects</li>
          <li onClick={closeMenu} className="hover:text-gray-500 cursor-pointer">About</li>
          <li onClick={closeMenu} className="hover:text-gray-500 cursor-pointer">Contact</li>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
