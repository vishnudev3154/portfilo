import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 from-black via-slate-900 to-black text-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Photo Section */}
        <div className="relative flex justify-center">
          {/* Glow */}
          <div className="absolute -inset-6 rounded-full bg-sky-500/20 blur-3xl" />

          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/20 shadow-2xl">
            <img
              src="/profile.jpg"
              alt="Vishnudev"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            About <span className="text-sky-400">Me</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            I’m <span className="text-gray-200 font-semibold">Vishnudev</span>, a
            passionate <span className="text-sky-400">Full-Stack Developer</span>{" "}
            who loves building clean, modern, and scalable web applications.
            I focus on performance, UI/UX, and real-world problem solving.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            I work mainly with React, Tailwind CSS, Django, and modern JavaScript
            tools to create engaging digital experiences.
          </p>

          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-sky-400 text-black font-semibold hover:bg-sky-500 transition"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3 rounded-xl border border-sky-400 text-sky-400 font-semibold hover:bg-sky-400 hover:text-black transition"
            >
              Download CV
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
