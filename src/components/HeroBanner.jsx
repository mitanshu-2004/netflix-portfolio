import React, { useState, useEffect } from 'react';
import { aboutData } from '../data';
import { Play, Info } from 'lucide-react';
import * as LucideIcons from 'lucide-react'; // Import all Lucide icons for fallback

const HeroBanner = ({
  selectedProject,
  setSelectedProject,
  selectedExperience,
  setSelectedExperience
}) => {
  const selectedItem = selectedProject || selectedExperience;

  // State to track if the background image has loaded
  const [bgImageLoaded, setBgImageLoaded] = useState(false);

  // Effect to handle image loading for the default background
  useEffect(() => {
    if (!selectedItem) {
      const img = new Image();
      img.src = aboutData.introBackgroundImage; // Use image from data.js
      img.onload = () => setBgImageLoaded(true);
      img.onerror = () => setBgImageLoaded(false);
    } else {
      setBgImageLoaded(false); // Reset for selected item
    }
  }, [selectedItem]);

  // Effect to handle image loading for selected item background
  useEffect(() => {
    if (selectedItem && selectedItem.image) {
      const img = new Image();
      img.src = selectedItem.image;
      img.onload = () => setBgImageLoaded(true);
      img.onerror = () => setBgImageLoaded(false);
    } else if (selectedItem && !selectedItem.image) {
      setBgImageLoaded(false); // No image provided for selected item
    }
  }, [selectedItem]);

  // Helper component for rendering Lucide icons
  const RenderLucideIcon = ({ iconName }) => {
    const Icon = LucideIcons[iconName];
    if (!Icon) return null;
    return (
      <div className="absolute inset-0 flex items-center justify-center opacity-70">
        <Icon className="w-1/2 h-1/2 text-netflix-red" style={{ filter: 'drop-shadow(0 0 20px rgba(229, 9, 20, 1))' }} />
      </div>
    );
  };

  return (
    <div
      id="hero-banner-section"
      className={`relative w-full min-h-[60vh] max-h-[80vh] md:h-[85vh] ${
        selectedItem ? 'h-[80vh]' : ''
      } flex items-center justify-center sm:justify-start text-white transition-all duration-500 ease-in-out border-b-8 border-[#222] overflow-hidden z-0 bg-netflix-dark-gray}`}
    >
      {/* Background rendering logic */}
      {!selectedItem && (
        bgImageLoaded ? (
          <div
            className="absolute inset-0 w-full h-full object-cover bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${aboutData.introBackgroundImage})` }}
          />
        ) : (
          // Fallback to a default Lucide icon for introduction if image fails or not available
          <RenderLucideIcon iconName={aboutData.fallbackIntroIcon} />
        )
      )}
      {selectedItem && (
        bgImageLoaded && selectedItem.image ? (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${selectedItem.image})`
            }}
          />
        ) : (
          // Fallback to selectedItem.backgroundIcon if image fails or not available
          <RenderLucideIcon iconName={selectedItem.backgroundIcon || aboutData.fallbackImageOffIcon} />
        )
      )}
      {/* Gradients for Netflix look */}
      {/* Gradients for Netflix look */}
      {bgImageLoaded ? (
        // Lighter gradients when image is loaded
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/50 opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-transparent to-transparent opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-netflix-red/2"></div>
        </>
      ) : (
        // Darker gradients when no image is loaded (fallback to default)
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black opacity-95"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/70 to-black/95"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-85"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent opacity-85"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-netflix-red/5"></div>
        </>
      )}
      <div className="relative z-10 max-w-[1200px] w-full px-4 sm:px-[4%] py-8 md:py-16">
        {selectedItem ? (
          <>
            <div className="flex gap-4 mb-6"> 
              <button
                onClick={() => {
                  setSelectedProject(null); 
                  setSelectedExperience(null); 
                }}
                className="bg-netflix-red text-white border-none py-2 px-4 sm:py-3 sm:px-6 rounded font-medium text-base hover:bg-[#f40612] transition-colors duration-300"
              >
                Home
              </button>
              
            </div>
            
            <div className="flex flex-col items-start max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-4 leading-tight">{selectedItem.title}</h2>
              <p className="text-lg text-netflix-light-gray mb-6">{selectedItem.description}</p>
              <div className="mb-8">
                <h4 className="text-2xl text-netflix-red mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tech.map((tech, index) => (
                    <span key={index} className="bg-netflix-card-hover text-netflix-light-gray py-1.5 px-4 rounded text-sm"></span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                {selectedProject && (
                  <>
                    {selectedItem.hasLive && (
                      <a href={selectedItem.live} target="_blank" rel="noopener noreferrer" 
                        className="bg-netflix-red text-white py-2 px-4 sm:py-3 sm:px-6 rounded font-medium text-base inline-flex items-center gap-2 hover:bg-[#f40612] transition-colors duration-300"> 
                        <Play size={24} /> Play Demo
                      </a>
                    )}
                    {selectedItem.hasGithub && (
                      <a href={selectedItem.github} target="_blank" rel="noopener noreferrer" 
                        className="bg-[rgba(109,109,110,0.7)] text-white py-2 px-4 sm:py-3 sm:px-6 rounded font-medium text-base inline-flex items-center gap-2 hover:bg-[rgba(109,109,110,0.4)] transition-colors duration-300"> 
                        <Info size={24} /> More Info
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[5rem] font-extrabold text-white mb-4 leading-none netflix-text-shadow">
                {aboutData.name}
              </h1>
              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-[2.5rem] text-netflix-red font-bold mb-6 netflix-text-shadow">
                {aboutData.title}
              </h2>
              <p className="text-lg sm:text-xl text-netflix-light-gray mb-8 leading-relaxed">
                {aboutData.description}
              </p>
              <div className="mb-8">
                <h4 className="text-2xl text-netflix-red mb-3">Specialized In</h4>
                <div className="flex flex-wrap gap-2">
                  {aboutData.specializations.map((specialization, index) => (
                    <span key={index} className="bg-netflix-red/20 text-netflix-red py-2 px-4 rounded text-base font-medium">
                      {specialization}
                    </span>
                  ))}
                </div>
              </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;