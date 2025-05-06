import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 px-6 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo o Nombre */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold">YourName</h3>
          <p className="text-sm text-gray-500">Full Stack Developer</p>
        </div>

        {/* Navegación */}
        <nav className="flex gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-indigo-500 transition">Home</a>
          <a href="#about" className="hover:text-indigo-500 transition">About</a>
          <a href="#projects" className="hover:text-indigo-500 transition">Projects</a>
          <a href="#contact" className="hover:text-indigo-500 transition">Contact</a>
        </nav>

        {/* Redes Sociales */}
        <div className="flex gap-5 text-lg">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-500 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-gray-600 hover:text-indigo-500 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} YourName. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
