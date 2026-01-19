import { useEffect, useState } from "react";

const sections = ["home", "projects", "skills", "about", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          portfolio
        </div>

        <div className="hidden md:flex gap-8">
          {sections.map(item => (
            <a
              key={item}
              href={`#${item}`}
              className={`relative font-medium transition
                ${active === item ? "text-white" : "text-gray-400 hover:text-white"}`}
            >
              {item.toUpperCase()}
              {active === item && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-blue-400 to-purple-600" />
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
