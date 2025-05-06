import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

// Variantes de animación
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
  })
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center px-6 lg:px-20 py-20 bg-white text-gray-800"
    >
      {/* Título */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">Contact Me</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I’d love to hear from you! Whether you have a question or just want to connect, feel free to reach out.
        </p>
      </motion.div>

      {/* Formulario */}
      <motion.form
        className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 md:p-12 text-gray-800 mb-16 border border-gray-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={1}
      >
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col">
            <label className="mb-2 font-semibold" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <label className="mb-2 font-semibold" htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="6"
            placeholder="Your Message"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full  border border-gray-300 bg-white text-black text-sm font-medium rounded hover:bg-gray-600 hover:text-white transition"
        >
          Send Message
        </button>
      </motion.form>

      {/* Redes sociales */}
      <motion.div
        className="flex justify-center gap-8 items-center w-full max-w-3xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.15 }
          }
        }}
      >
        {[
          { icon: <FaLinkedin />, href: "https://linkedin.com" },
          { icon: <FaGithub />, href: "https://github.com" },
          { icon: <FaTwitter />, href: "https://twitter.com" },
          { icon: <FaEnvelope />, href: "mailto:your-email@example.com" },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-indigo-500 text-3xl md:text-4xl transition"
            variants={fadeUp}
            custom={index + 2}
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;
