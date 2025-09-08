import React from 'react';
import { experienceData } from '../data';
import InfoCard from './InfoCard';


const Experience = ({ setSelectedProject, setSelectedExperience }) => {

  return (
    <div className="relative mt-0">
      <div className="relative group netflix-carousel-group">
        <div 
          id="experience-carousel"
          className="netflix-carousel"
        >
          {experienceData.map((experience, index) => (
            <div 
              key={index}
              className="netflix-card w-full sm:w-[280px] md:w-[320px] aspect-[16/9] bg-netflix-dark-gray rounded-lg overflow-hidden"
            >
              <InfoCard
                info={experience}
                onClick={() => {
                  setSelectedExperience(experience);
                  setSelectedProject(null);
                }}
              />
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Experience;