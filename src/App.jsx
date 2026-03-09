import { React, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 z-[100] origin-left"
        style={{ scaleX }}
      />
      <main className="bg-[var(--bg-color)] selection:bg-blue-500/30 selection:text-blue-200 transition-colors duration-300">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
