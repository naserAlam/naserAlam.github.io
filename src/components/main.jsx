import Navbar from "./navbar/navbar";
import Hero from "./hero/hero";
import Projects from "./projects/projects";
import Footer from "./footer/footer";
import Contact from "./contact/contact";

function Main() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;
