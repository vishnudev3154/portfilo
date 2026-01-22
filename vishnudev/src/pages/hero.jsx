import React from "react";

const Hero = () => {
  return (
    <section   id='home' className="min-h-screen flex items-center justify-center text-gray-200 px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Hi, I’m <span className="text-sky-400">Vishnudev Jayakumar</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-10">
          Full-Stack Developer building fast, modern, and scalable web
          applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-sky-400 text-black font-semibold hover:bg-sky-500 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-xl border border-sky-400 text-sky-400 font-semibold hover:bg-sky-400 hover:text-black transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
