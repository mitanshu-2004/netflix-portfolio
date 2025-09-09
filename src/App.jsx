import React, { useState, useEffect } from 'react';
import HeroBanner from './components/HeroBanner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Intro from './components/Intro';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (selectedProject || selectedExperience) {
      document.getElementById('hero-banner-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedProject, selectedExperience]);

  const renderSection = (id, title, component) => (
    <div id={id} className="mt-12 px-[4%]">
      <h2 className="text-4xl font-bold text-netflix-light-gray mb-6 relative pl-4 netflix-text-shadow before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-10 before:bg-netflix-red">
        {title}
      </h2>
      {component}
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-[#141414]">
      {showIntro && <Intro />}
      {!showIntro && (
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
              {renderSection("projects", "Featured Projects", <Projects setSelectedProject={setSelectedProject} setSelectedExperience={setSelectedExperience} />)}
              {renderSection("experience", "Experience", <Experience setSelectedExperience={setSelectedExperience} setSelectedProject={setSelectedProject} />)}
              {renderSection("skills", "Skills & Technologies", <Skills setSelectedProject={setSelectedProject} />)}
              <Footer />
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default App;