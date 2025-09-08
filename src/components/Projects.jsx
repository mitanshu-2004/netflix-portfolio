import React from 'react';
import { roboticsProjects, softwareProjects } from '../data';
import InfoCard from './InfoCard';


const Projects = ({ setSelectedProject, setSelectedExperience }) => {

  return (
    <div className="relative mt-12">
      <h3 className="text-xl sm:text-2xl font-bold text-netflix-light-gray mb-2">Robotics Projects</h3>
      <div className="relative group netflix-carousel-group">
        <div 
          id="robotics-projects-carousel"
          className="netflix-carousel"
        >
          {roboticsProjects.map((project, index) => (
            <div 
              key={index}
              className="netflix-card w-full sm:w-[280px] md:w-[320px] aspect-[16/9] bg-netflix-dark-gray rounded-lg overflow-hidden"
            >
              <InfoCard
                info={project}
                onClick={(project) => {
                  
                  setSelectedProject(project);
                  setSelectedExperience(null);
                }}
              />
            </div>
          ))}
        </div>
        
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-netflix-light-gray mb-2 mt-6">Software Projects</h3>
      <div className="relative group netflix-carousel-group">
        <div 
          id="software-projects-carousel"
          className="netflix-carousel"
        >
          {softwareProjects.map((project, index) => (
            <div 
              key={index}
              className="netflix-card w-full sm:w-[280px] md:w-[320px] aspect-[16/9] bg-netflix-dark-gray rounded-lg overflow-hidden"
            >
              <InfoCard
                info={project}
                onClick={(project) => {
                  
                  setSelectedProject(project);
                  setSelectedExperience(null);
                }}
              />
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Projects;