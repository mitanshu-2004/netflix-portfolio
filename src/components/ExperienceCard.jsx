import React, { useState, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { aboutData } from '../data'; // Import aboutData

const IconBackground = ({ icon }) => {
  const Icon = LucideIcons[icon];
  if (!Icon) return null;
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-70">
      <Icon className="w-1/2 h-1/2 text-netflix-red" style={{ filter: 'drop-shadow(0 0 20px rgba(229, 9, 20, 1))' }} />
    </div>
  );
};

const ExperienceCard = ({ experience, onExperienceClick }) => {
  const [bgImageLoaded, setBgImageLoaded] = useState(false);

  useEffect(() => {
    if (experience.image) {
      const img = new Image();
      img.src = experience.image;
      img.onload = () => setBgImageLoaded(true);
      img.onerror = () => setBgImageLoaded(false);
    } else {
      setBgImageLoaded(false); // No image provided
    }
  }, [experience.image]);

  return (
    <div
      onClick={() => onExperienceClick(experience)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onExperienceClick(experience);
        }
      }}
      role="button"
      tabIndex="0"
      className="group relative w-full h-full overflow-hidden rounded-lg cursor-pointer bg-netflix-black"
    >
      {bgImageLoaded && experience.image ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${experience.image})` }}
        />
      ) : (
        <IconBackground icon={experience.backgroundIcon || aboutData.fallbackImageOffIcon} />
      )}
      <div className="netflix-card-shine" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
      <div className="absolute inset-x-0 top-0 p-4">
        <h3 className="text-white text-xl font-bold netflix-text-shadow mb-4">
          {experience.title}
        </h3>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="flex flex-wrap gap-2">
          {experience.tech?.slice(0, 3).map((tech, index) => (
            <span 
              key={index} 
              className="netflix-skill-badge text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ExperienceCard;