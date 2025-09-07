import React from 'react'; // Removed useState
import { roboticsProjects, softwareProjects } from '../data';
import Project from './Project';


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
              className="netflix-card w-full sm:w-[300px] md:w-[350px] aspect-[16/9] bg-netflix-dark-gray rounded-lg overflow-hidden"
            >
              <Project
                project={project}
                onProjectClick={(project) => {
                  
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
              className="netflix-card w-full sm:w-[300px] md:w-[350px] aspect-[16/9] bg-netflix-dark-gray rounded-lg overflow-hidden"
            >
              <Project
                project={project}
                onProjectClick={(project) => {
                  
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