import React from 'react';
import { skillsData } from '../data';
import InfoCard from './InfoCard';

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
              <InfoCard
                info={skillCategory}
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
              <InfoCard
                info={skillCategory}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;