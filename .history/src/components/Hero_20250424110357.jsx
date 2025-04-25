
import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-12 gap-100 bd-white-100 border">
    <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
        Hi, I’m <span className="text-purple-500">Joan Barres</span>
        </h1>
        <p className="text-lg text-gray-400 mb-6">
        I’m a web developer. I create modern and responsive web applications.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl shadow-md">
        View Projects
        </button>
    </div>
    <div className="w-full lg:w-1/2 flex justify-center">
        <div className="rounded-full border-4 border-purple-600 p-1 shadow-lg">
        <img
            src="/portrait.jpg"
            alt="John Doe"
            className="rounded-full w-40 h-40 sm:w-48 sm:h-48 object-cover"
        />
        </div>
    </div>
    </section>
  );
};

export default Hero;