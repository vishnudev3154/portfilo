import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-sky-400 font-semibold">Vishnudev</span>.  
          All rights reserved.
        </p>

        {/* Center */}
        <ul className="flex gap-6 text-sm">
          <li>
            <a href="#home" className="hover:text-sky-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-sky-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-sky-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Right */}
        <div className="flex gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
