import React from 'react';

import * as LucideIcons from 'lucide-react';

const IconBackground = ({ icon }) => {
  const IconComponent = LucideIcons[icon];

  if (!IconComponent) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-70">
      <IconComponent className="w-1/2 h-1/2 text-netflix-red" style={{ filter: 'drop-shadow(0 0 20px rgba(229, 9, 20, 1))' }} />
    </div>
  );
};

const Project = ({ project, onProjectClick }) => {
  return (
    <div
      onClick={() => {
        onProjectClick(project);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onProjectClick(project);
        }
      }}
      role="button"
      tabIndex="0"
      className="group relative w-full h-full overflow-hidden rounded-lg cursor-pointer bg-netflix-black"
    >
      <IconBackground icon={project.backgroundIcon} />
      <div className="netflix-card-shine" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
      <div className="absolute inset-x-0 top-0 p-4">
        <h3 className="text-white text-xl font-bold netflix-text-shadow mb-4">
          {project.title}
        </h3>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="flex flex-wrap gap-2">
          {project.tech?.slice(0, 3).map((tech, index) => (
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

export default Project;
