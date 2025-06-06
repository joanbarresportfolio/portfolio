
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-gray-900 shadow-md">
    <div className="text-2xl font-bold text-cyan-400 mb-4 md:mb-0">Joa Barres</div>
    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-white">
        <li className="hover:text-purple-400 cursor-pointer">Home</li>
        <li className="hover:text-purple-400 cursor-pointer">About</li>
        <li className="hover:text-purple-400 cursor-pointer">Projects</li>
        <li className="hover:text-purple-400 cursor-pointer">Contact</li>
    </ul>
    </nav>
  );
};

export default Navbar;