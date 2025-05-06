import React from 'react';
import { FaCode } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b">
      {/* Logo y título */}
      <div className="flex items-center text-gray-900 font-bold text-xl">
        Jane Doe <FaCode className="ml-2 text-sm text-gray-500" />
      </div>

      {/* Enlaces de navegación */}
      <ul className="flex space-x-8 text-sm font-medium text-gray-800">
        <li className="hover:text-purple-600 cursor-pointer">Home</li>
        <li className="hover:text-purple-600 cursor-pointer">Projects</li>
        <li className="hover:text-purple-600 cursor-pointer">About</li>
        <li className="hover:text-purple-600 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
