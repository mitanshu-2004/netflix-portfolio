import React, { useState, useEffect } from 'react';
import { aboutData } from '../data';
import { Play, Info } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

const RenderLucideIcon = ({ iconName }) => {
  const Icon = LucideIcons[iconName];
  if (!Icon) return null;
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-70">
      <Icon className="w-1/2 h-1/2 text-netflix-red" style={{ filter: 'drop-shadow(0 0 20px rgba(229, 9, 20, 1))' }} />
    </div>
  );
};

const Background = ({ item }) => {
  const [bgMediaLoaded, setBgMediaLoaded] = useState(false);
  const mediaUrl = item ? item.image : aboutData.introBackgroundImage;
  const fallbackIcon = item ? item.backgroundIcon || aboutData.fallbackImageOffIcon : aboutData.fallbackIntroIcon;
  const isVideo = mediaUrl.endsWith('.mp4');

  useEffect(() => {
    if (mediaUrl) {
      if (isVideo) {
        // For videos, we assume they load quickly and don't need a loading state
        setBgMediaLoaded(true);
      } else {
        // For images, we use the Image constructor to check if they have loaded
        const img = new Image();
        img.src = mediaUrl;
        img.onload = () => setBgMediaLoaded(true);
        img.onerror = () => setBgMediaLoaded(false);
      }
    } else {
      setBgMediaLoaded(false);
    }
  }, [mediaUrl, isVideo]);

  return (
    <>
      {/* Render the background media (video or image) if it has loaded */}
      {bgMediaLoaded ? (
        isVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-top"
          >
            <source src={mediaUrl} type="video/mp4" />
          </video>
        ) : (
          <img
            src={mediaUrl}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        )
      ) : (
        // Show a fallback icon if the media is not available or hasn't loaded
        <RenderLucideIcon iconName={fallbackIcon} />
      )}
      {/* Apply a dark overlay to improve text visibility */}
      {bgMediaLoaded ? (
        <div className="absolute inset-0 bg-black opacity-70"></div>
      ) : (
        <div className="absolute inset-0 bg-black opacity-90"></div>
      )}
    </>
  );
};

const HeroBanner = ({ selectedProject, setSelectedProject, selectedExperience, setSelectedExperience }) => {
  const selectedItem = selectedProject || selectedExperience;

  const handleGoHome = () => {
    setSelectedProject(null);
    setSelectedExperience(null);
  };

  return (
    <div
      id="hero-banner-section"
      className={`relative w-full h-screen flex items-center justify-center sm:justify-start text-white transition-all duration-500 ease-in-out border-b-8 border-[#222] overflow-hidden z-0 bg-netflix-dark-gray`}>
      <Background item={selectedItem} />
      <div className="relative z-10 max-w-[1200px] w-full px-4 sm:px-[4%] py-8 md:py-16">
        {selectedItem ? (
          <>
            <div className="flex gap-4 mb-6">
              <button
                onClick={handleGoHome}
                className="bg-netflix-red text-white border-none py-2 px-4 sm:py-3 sm:px-6 rounded font-medium text-base hover:bg-[#f40612] transition-colors duration-300"
              >
                Home
              </button>
            </div>
            <div className="flex flex-col items-start max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-4 leading-tight netflix-text-shadow-darker">{selectedItem.title}</h2>
              <p className="text-lg text-netflix-light-gray mb-6 netflix-text-shadow-darker">{selectedItem.description}</p>
              <div className="mb-8">
                <h4 className="text-2xl text-netflix-red mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tech.map((tech) => (
                    <span key={tech} className="bg-netflix-card-hover text-netflix-light-gray py-1.5 px-4 rounded text-sm">{tech}</span>
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
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[5rem] font-extrabold text-white mb-4 leading-none netflix-text-shadow-darker">
              {aboutData.name}
            </h1>
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-[2.5rem] text-netflix-red font-bold mb-6 netflix-text-shadow-darker">
              {aboutData.title}
            </h2>
            <p className="text-lg sm:text-xl text-netflix-light-gray mb-8 leading-relaxed netflix-text-shadow-darker">
              {aboutData.description}
            </p>
            <div className="mb-8">
              <h4 className="text-2xl text-netflix-red mb-3">Specialized In</h4>
              <div className="flex flex-wrap gap-2">
                {aboutData.specializations.map((specialization) => (
                  <span key={specialization} className="bg-netflix-red/20 text-netflix-red py-2 px-4 rounded text-base font-medium">
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
