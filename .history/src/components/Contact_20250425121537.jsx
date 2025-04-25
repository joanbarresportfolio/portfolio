import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center justify-center px-6 lg:px-20 py-20 bg-purple-600 text-white">
      
      {/* Título */}
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg text-white/80">
          Have a project in mind or just want to connect? Feel free to reach out!
        </p>
      </div>

      {/* Formulario */}
      <form className="bg-white text-gray-700 rounded-lg shadow-lg p-8 w-full max-w-3xl mb-12">
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="flex-1 border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="flex-1 border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <textarea 
          rows="5" 
          placeholder="Your Message" 
          className="w-full border border-gray-300 rounded-md p-4 mb-6 focus:outline-none focus:ring-2 focus:ring-purple-400"
        ></textarea>
        <button 
          type="submit" 
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-md shadow-md transition-all duration-300 w-full"
        >
          Send Message
        </button>
      </form>

      {/* Redes Sociales */}
      <div className="flex gap-6">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 text-3xl transition">
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 text-3xl transition">
          <FaGithub />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 text-3xl transition">
          <FaTwitter />
        </a>
        <a href="mailto:your-email@example.com" className="text-white hover:text-gray-300 text-3xl transition">
          <FaEnvelope />
        </a>
      </div>

    </section>
  );
};

export default Contact;
