import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-gray-200 px-6"
    >
      <motion.div
        className="max-w-3xl text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* ✅ Only ONE h1 */}
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          Hi, I’m{" "}
<span className="text-sky-400 whitespace-nowrap">
  Vishnudev Jayakumar
</span>        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed"
        >
          I build modern, scalable, and user-focused web applications —
          combining clean design with reliable backend systems.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
