import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import StarryBackground from './components/StarryBackground';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Maniteja Gaddam | AI Developer & Creative Technologist';
  }, []);

  return (
    // <div className="bg-black text-white min-h-screen ">
    //   <StarryBackground />
    //   <CustomCursor />
      
    //   <Header />
      
    //   <main>
    //     <Hero />
    //     <About />
    //     <Projects />
    //     <Services />
    //     <Contact />
    //   </main>
      
    //   <Footer />
    // </div>

    <div className="bg-black text-white min-h-screen flex flex-col relative">
      <StarryBackground />
      <CustomCursor />

      <Header />

      {/* Main content should grow to fill space */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;