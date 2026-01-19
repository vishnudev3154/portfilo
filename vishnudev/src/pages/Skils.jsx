import React from "react";

const skills = {
  "Frontend": ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  "Backend": ["Python", "Django", "REST APIs"],
  "Database": ["MySQL", "SQLite", "MongoDB"],
  "Tools & Others": ["Git", "GitHub", "Postman", "VS Code"],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 bg-[#0b0f1a] text-gray-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-16
          bg-gradient-to-r from-blue-400 to-purple-600
          bg-clip-text text-transparent"
        >
          Skills
        </h2>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-4 gap-8">

          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="
                bg-white/5 backdrop-blur-xl
                border border-white/10
                rounded-2xl p-6
                shadow-xl shadow-black/40
                hover:border-blue-500/50
                transition
              "
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {category}
              </h3>

              <ul className="space-y-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="
                      px-3 py-2 rounded-lg
                      bg-black/40 border border-white/10
                      hover:text-white hover:border-purple-500/50
                      transition
                    "
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;
