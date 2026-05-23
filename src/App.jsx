import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [selectedService, setSelectedService] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(darkMode ? "dark" : "light");

    //  Cambia tamaño global de toda la página
    document.documentElement.style.fontSize = fontSize + "px";
  }, [darkMode, fontSize]);

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        fontSize={fontSize}
        setFontSize={setFontSize}
      />

      <Hero />
      <About />
      <Services setSelectedService={setSelectedService} />
      <Testimonials />
      <FAQ />
      <Contact selectedService={selectedService} />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
