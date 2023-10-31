import "./App.css";
import About from "./components/About";
import Ads from "./components/Ads";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Reputation from "./components/Reputation";
import Service from "./components/Service";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Reputation />
      <About />
      <Service />
      <Stats/>
      <Ads />
      <Projects />
      <CTA/>
      <Footer />
    </>
  );
}

export default App;
