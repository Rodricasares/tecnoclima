import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Areas from "./components/Areas/Areas";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import Tech from "./components/Tech/Tech";
import WhyUs from "./components/WhyUs/WhyUs";
import Projects from "./components/Projects/Projects";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Areas />
      <Projects />
      <Tech />
      <Contact />
      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default App;