import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";

export default function App() {
   useEffect(() => {
    // Remove hash from URL on refresh
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname
      );
    }

    // Force scroll to top
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer /> {/* ✅ THIS WAS MISSING */}
    </>
  );
}
