import React, { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDjango,
  SiMysql,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React", icon: FaReact, color: "text-sky-400" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Python", icon: FaPython, color: "text-yellow-300" },
  { name: "Django", icon: SiDjango, color: "text-green-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "GitHub", icon: FaGithub, color: "text-gray-200" },
  { name: "Postman", icon: SiPostman, color: "text-orange-400" },
  { name: "VS Code", icon: FaCode, color: "text-blue-400" },
];

const Skills = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [gyroEnabled, setGyroEnabled] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // 🧭 Gyroscope listener
  useEffect(() => {
    if (!gyroEnabled) return;

    const handleOrientation = (e) => {
      // beta = front/back tilt, gamma = left/right
      const x = Math.max(-15, Math.min(15, e.beta || 0));
      const y = Math.max(-15, Math.min(15, e.gamma || 0));

      setTilt({ x, y });
    };

    window.addEventListener("deviceorientation", handleOrientation, true);
    return () =>
      window.removeEventListener("deviceorientation", handleOrientation);
  }, [gyroEnabled]);

  // 📱 Enable gyro (required for iOS)
  const enableGyro = async () => {
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      const permission = await DeviceOrientationEvent.requestPermission();
      if (permission === "granted") setGyroEnabled(true);
    } else {
      setGyroEnabled(true);
    }
  };

  // 🖱 Desktop hover tilt
  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 10;
    const rotateY = (x - rect.width / 2) / 10;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)
      scale(1.05)
    `;
  };

  const resetTilt = (card) => {
    card.style.transform = "";
  };

  return (
    <section
      id="skills"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMouse({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      className="relative py-28 overflow-hidden text-gray-200"
    >
      {/* Mouse glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(
            600px at ${mouse.x}px ${mouse.y}px,
            rgba(56,189,248,0.15),
            transparent 70%
          )`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Skills & <span className="text-sky-400">Tools</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Technologies I work with
          </p>

          {/* Mobile button */}
          <button
            onClick={enableGyro}
            className="
              mt-6 md:hidden
              px-5 py-2 rounded-full
              bg-sky-500/20 border border-sky-400/30
              text-sky-300
            "
          >
            Enable Motion 🎮
          </button>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
          {skills.map(({ name, icon: Icon, color }, index) => (
            <div
              key={name}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => resetTilt(e.currentTarget)}
              className="skill-float relative h-32 rounded-2xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                flex flex-col items-center justify-center
                will-change-transform"
              style={{
                transformStyle: "preserve-3d",
                animationDelay: `${index * 0.15}s`,
                transform: gyroEnabled
                  ? `perspective(1000px)
                     rotateX(${tilt.x / 3}deg)
                     rotateY(${tilt.y / 3}deg)`
                  : undefined,
              }}
            >
              <Icon
                className={`text-4xl ${color}`}
                style={{ transform: "translateZ(30px)" }}
              />
              <span
                className="mt-3 text-sm opacity-80"
                style={{ transform: "translateZ(20px)" }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Animation */}
      <style>{`
        .skill-float {
          animation: float3d 6s ease-in-out infinite;
        }
        @keyframes float3d {
          0% {
            transform: perspective(1000px) translateY(0);
          }
          50% {
            transform: perspective(1000px) translateY(-12px);
          }
          100% {
            transform: perspective(1000px) translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
