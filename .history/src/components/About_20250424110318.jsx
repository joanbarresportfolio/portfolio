import React from 'react';

const About = () => {
    return (
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-12 gap-100 bd-white-100 border">
      <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          How am I <span className="text-purple-500">About me</span>
          </h1>
          <p className="text-lg text-gray-400 mb-6">
          know my experience working like web developer
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl shadow-md">
          go Aboutme
          </button>
      </div>
      </section>
    );
  };

  export default About;