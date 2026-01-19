
import Ballpit from "../components/Ballpit";
import ScrambledText from "../components/ScrambledText";
import useReveal from "../hooks/useReveal";
import Navbar from "../components/Navbar";

const Section = ({ id, children }) => {
  const [ref, show] = useReveal();

  return (
    <section
      id={id}
      ref={ref}
      className={`min-h-screen px-6 py-24 transition-all duration-700
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {children}
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Navbar />

      {/* HERO – FULL SCREEN */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center bg-[#0b0f1a]"
      >
        <Ballpit
          count={120}
          gravity={0.01}
          friction={0.997}
          wallBounce={0.95}
          colors={["#5227FF", "#7cff67", "#ff6b6b"]}
        />

        <div className="absolute z-10 text-center">
          <ScrambledText
            className="text-4xl md:text-6xl font-extrabold
              bg-gradient-to-r from-blue-400 to-purple-600
              bg-clip-text text-transparent"
          >
            Vishnudev Jayakumar <br />
            Python Full Stack Developer
          </ScrambledText>
        </div>

        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* PROJECTS */}
      <Section id="projects">
        <h2 className="text-4xl font-bold text-white mb-6">Projects</h2>
      </Section>

      {/* SKILLS */}
      <Section id="skills">
        <h2 className="text-4xl font-bold text-white mb-6">Skills</h2>
      </Section>

      {/* ABOUT */}
      <Section id="about">
        <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <h2 className="text-4xl font-bold text-white mb-6">Contact</h2>
      </Section>
    </>
  );
};

export default Home;
