import React from "react";

const projects = [
  {
    title: "Petmart",
    description:"PetMart is a full-stack e-commerce web application designed for purchasing pet products such as food, accessories, and care essentials. The platform focuses on delivering a smooth shopping experience with secure authentication, cart management, and order processing.",
    tech: ["HTML", "CSS", "Python", "Django"],
    link: "#",
  },
  {
    title: "Book My Show",
    description:
"BookMyShow Clone is a full-stack web application that replicates the core functionality of an online movie ticket booking platform. It allows users to discover movies, select showtimes, choose seats, and book tickets through an intuitive and responsive interface.",
    tech: ["HTML", "CSS","Python", "Django"],
    link: "#",
  },
  {
    title: "Gallery Vault",
    description:
"Gallery Vault is a secure web application designed to store, organize, and protect personal images and media files. The platform focuses on privacy, authentication, and controlled access, allowing users to safely manage their digital gallery.",
    tech: ["HTML", "CSS","Python", "Django"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 bg-[#0b0f1a] text-gray-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-16
          bg-gradient-to-r from-blue-400 to-purple-600
          bg-clip-text text-transparent"
        >
          Projects
        </h2>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-white/5 backdrop-blur-xl
                border border-white/10
                rounded-2xl p-6
                shadow-xl shadow-black/40
                hover:-translate-y-2 hover:border-blue-500/50
                transition-all duration-300
              "
            >
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="
                      px-3 py-1 text-sm rounded-full
                      bg-black/40 border border-white/10
                      text-gray-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block text-blue-400 font-medium
                  hover:text-purple-400 transition
                "
              >
                View Project →
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
