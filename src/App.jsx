import React, { useState, useEffect } from 'react';
import HeroBanner from './components/HeroBanner.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import Intro from './components/Intro.jsx'; // Re-enabled Intro import


function App() {
  
  const [showIntro, setShowIntro] = useState(true); // Re-enabled showIntro state
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    // Re-enabled scroll handling (if needed, otherwise remove)
    // const handleScroll = () => {
    //   setIsScrolled(window.scrollY > 50);
    // };
    // window.addEventListener('scroll', handleScroll);
    // return () => {
    //   clearTimeout(timer);
    //   window.removeEventListener('scroll', handleScroll);
    // };
    return () => clearTimeout(timer); // Clean up timer
  }, []);

  useEffect(() => { // New useEffect for scrolling
    if (selectedProject || selectedExperience) {
      document.getElementById('hero-banner-section')?.scrollIntoView({ behavior: 'smooth' });
    }
    
  }, [selectedProject, selectedExperience]); // Dependency array

  return (
    <div className="w-full min-h-screen bg-[#141414]">
      {showIntro && <Intro />} {/* Re-enabled Intro component */}
      {!showIntro && ( // Re-enabled conditional rendering
        <>
          <main className="relative">
            <div className="relative">
              <HeroBanner
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
                selectedExperience={selectedExperience}
                setSelectedExperience={setSelectedExperience}
              />
            </div>
            <div className="relative bg-[#141414]">
              <div id="projects" className="mt-12 px-[4%]">
                <h2 className="text-4xl font-bold text-netflix-light-gray mb-6 relative pl-4 netflix-text-shadow before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-10 before:bg-netflix-red">
                  Featured Projects
                </h2>
                <Projects setSelectedProject={setSelectedProject} setSelectedExperience={setSelectedExperience} />
              </div>
              <div id="experience" className="mt-12 px-[4%]">
                <h2 className="text-4xl font-bold text-netflix-light-gray mb-6 relative pl-4 netflix-text-shadow before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-10 before:bg-netflix-red">
                  Experience
                </h2>
                <Experience setSelectedExperience={setSelectedExperience} setSelectedProject={setSelectedProject} />
              </div>
              <div id="skills" className="mt-12 px-[4%]">
                <h2 className="text-4xl font-bold text-netflix-light-gray mb-6 relative pl-4 netflix-text-shadow before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-10 before:bg-netflix-red">
                  Skills & Technologies
                </h2>
                <Skills setSelectedProject={setSelectedProject} />
              </div>
              <Footer />
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default App;