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

const InfoCard = ({ info, onClick }) => {
  const [bgImageLoaded, setBgImageLoaded] = useState(false);

  useEffect(() => {
    if (info.image) {
      const img = new Image();
      img.src = info.image;
      img.onload = () => setBgImageLoaded(true);
      img.onerror = () => setBgImageLoaded(false);
    } else {
      setBgImageLoaded(false); // No image provided
    }
  }, [info.image]);

  const cardProps = onClick ? {
    onClick: () => onClick(info),
    onKeyDown: (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        onClick(info);
      }
    },
    role: 'button',
    tabIndex: 0,
    className: 'group relative w-full h-full overflow-hidden rounded-lg cursor-pointer bg-netflix-black'
  } : {
    className: 'group relative w-full h-full overflow-hidden rounded-lg bg-netflix-black'
  };


  return (
    <div {...cardProps}>
      {bgImageLoaded && info.image ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${info.image})` }}
        />
      ) : (
        <IconBackground icon={info.backgroundIcon || aboutData.fallbackImageOffIcon} />
      )}
      <div className="netflix-card-shine" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90" />
      <div className="absolute inset-x-0 top-0 p-4">
        <h3 className="text-white text-xl font-bold netflix-text-shadow-strong mb-4">
          {info.title}
        </h3>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="flex flex-wrap gap-2">
          {(info.tech || info.skills)?.slice(0, 3).map((item, index) => (
            <span 
              key={index} 
              className="netflix-skill-badge text-xs"
            >
              {item.name || item}
            </span>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default InfoCard;