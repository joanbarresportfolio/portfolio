import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center justify-center px-6 lg:px-20 py-20 bg-purple-600 text-white">
      
      {/* Título */}
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg text-white/80">
          I'd love to hear from you! Whether you have a question or just want to say hi, feel free to reach out.
        </p>
      </div>

      {/* Formulario */}
      <form className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8 text-gray-800 mb-16">
        <div className="flex flex-col mb-6">
          <label className="mb-2 font-semibold" htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Your Name" className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600" />
        </div>
        <div className="flex flex-col mb-6">
          <label className="mb-2 font-semibold" htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Your Email" className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600" />
        </div>
        <div className="flex flex-col mb-6">
          <label className="mb-2 font-semibold" htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Your Message" className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"></textarea>
        </div>
        <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition">
          Send Message
        </button>
      </form>

      {/* Iconos de redes sociales */}
      <div className="flex justify-around items-center w-full max-w-2xl">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 text-6xl">
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 text-6xl">
          <FaGithub />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 text-6xl">
          <FaTwitter />
        </a>
        <a href="mailto:your-email@example.com" className="text-white hover:text-gray-300 text-6xl">
          <FaEnvelope />
        </a>
      </div>

    </section>
  );
};

export default Contact;
