import React from 'react'; // Removed useState
import { skillsData } from '../data';
import * as LucideIcons from 'lucide-react'; // Removed specific Lucide icon imports

const IconBackground = ({ icon }) => {
  const Icon = LucideIcons[icon];
  if (!Icon) return null;
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-70">
      <Icon className="w-1/2 h-1/2 text-netflix-red" style={{ filter: 'drop-shadow(0 0 20px rgba(229, 9, 20, 1))' }} />
    </div>
  );
};

const SkillCard = ({ skillCategory, onSkillClick }) => {
  return (
    <div
      className="netflix-card w-[350px] aspect-[16/9] rounded-lg overflow-hidden relative
                 bg-netflix-black transform transition-all duration-300 group-hover:z-20 group
                 border-2 border-transparent cursor-default !important group-hover:transform-none"
    >
      <IconBackground icon={skillCategory.backgroundIcon} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>

      <div className="relative z-10 flex flex-col justify-between p-4 h-full">
      <h3 className="text-white text-2xl font-extrabold netflix-text-shadow mb-4">
        {skillCategory.title}
      </h3>
      <div className="flex flex-wrap gap-2 max-h-20 overflow-y-auto custom-scrollbar">
        {skillCategory.skills.map((skill, index) => {
          return (
            <span 
              key={index} 
              className="netflix-skill-badge text-xs"
            >
              {skill.name}
            </span>
          );
        })}
      </div>
    </div>
  </div>
  );
};

const Skills = ({ setSelectedProject }) => {
  

  return (
    <div className="relative mt-0">
      <div className="relative group netflix-carousel-group">
        <div 
          id="skills-carousel-1"
          className="netflix-carousel"
        >
          {skillsData.slice(0, Math.ceil(skillsData.length / 2)).map((skillCategory, index) => (
            <div 
              key={index}
              className="netflix-card w-full sm:w-[300px] md:w-[350px] aspect-[16/9] bg-netflix-black rounded-lg overflow-hidden"
            >
              <SkillCard
                skillCategory={skillCategory}
                onSkillClick={setSelectedProject}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative group netflix-carousel-group mt-8">
        <div 
          id="skills-carousel-2"
          className="netflix-carousel"
        >
          {skillsData.slice(Math.ceil(skillsData.length / 2)).map((skillCategory, index) => (
            <div 
              key={index}
              className="netflix-card w-full sm:w-[300px] md:w-[350px] aspect-[16/9] bg-netflix-black rounded-lg overflow-hidden"
            >
              <SkillCard
                skillCategory={skillCategory}
                onSkillClick={setSelectedProject}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;