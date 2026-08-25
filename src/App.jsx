import { useState, useEffect } from 'react';
import NetflixPreloader from './components/NetflixPreloader';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Expertise from './components/Expertise';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Timer matching Netflix preloader animation duration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0b0b0b] min-h-screen text-white font-sans selection:bg-red-600 selection:text-white relative overflow-x-hidden">
      {/* Custom Mouse Cursor */}
      <CustomCursor />

      {/* Netflix Preloader Intro */}
      {loading && <NetflixPreloader />}

      {/* Main Portfolio Sections */}
      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <About />
        <Education />
        <Expertise />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
