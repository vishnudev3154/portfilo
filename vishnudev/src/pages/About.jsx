import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-[#0b0f1a] text-gray-300"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-12
          bg-gradient-to-r from-blue-400 to-purple-600
          bg-clip-text text-transparent"
        >
          About Me
        </h2>

        {/* Glass Card */}
        <div
          className="bg-white/5 backdrop-blur-xl border border-white/10
          rounded-2xl p-8 md:p-12 shadow-xl shadow-black/40"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Text */}
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Hi, I’m <span className="text-white font-semibold">Vishnudev Jayakumar</span>,
                a passionate <span className="text-blue-400">Python Full Stack Developer</span>
                who loves building clean, scalable, and user-focused web applications.
              </p>

              <p>
                I work with modern technologies to create fast, responsive,
                and visually engaging digital experiences. From backend logic
                to pixel-perfect UI, I enjoy turning ideas into real-world products.
              </p>

              <p>
                I’m always learning, experimenting, and improving—whether it’s
                exploring new frameworks, optimizing performance, or refining UX.
              </p>
            </div>

            {/* Skills / Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "Python & Django",
                "React & Tailwind",
                "REST APIs",
                "MongoDB / SQL",
                "Authentication",
                "Responsive UI",
              ].map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-3 rounded-xl text-center
                  bg-black/40 border border-white/10
                  hover:border-blue-500/50 hover:text-white
                  transition"
                >
                  {skill}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
