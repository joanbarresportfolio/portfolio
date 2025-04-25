
import React from 'react';

const Hero = () => {
  return (
    <section>
      <div>
          <h1>
          Hi, I’m <span>John Doe</span>
          </h1>
          <p >
          I’m a web developer. I create modern and responsive web applications.
          </p>
          <button>
          View Projects
          </button>
      </div>
      <div>
          <div>
          <img src="/portrait.jpg" alt="John Doe"/>
          </div>
      </div>
    </section>
  );
};

export default Hero;