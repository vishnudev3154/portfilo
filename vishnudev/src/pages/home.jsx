
import ScrambledText from "../components/ScrambledText";
import Navbar from "../components/navbar.jsx";
import Hero from "./hero.jsx";
import Projects from "../pages/project.jsx";
import Skills from "../pages/Skils.jsx";
import About from "../pages/About.jsx";
import Contact from "./Contact.jsx";
import Footer from "../components/footer.jsx";

const Home = () => {
  return (
    <div>
      <Navbar/>
<Hero/>
       
<Projects/>

         <Skills/>
       
          <About/>
       
       <Contact/>
      
      <Footer/>
    </div>

  )
}


export default Home;
