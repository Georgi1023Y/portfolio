import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DevelopmentProcess from "./components/DevelopmentProcess";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <DevelopmentProcess />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
