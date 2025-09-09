import React from 'react';
import { roboticsProjects, softwareProjects } from '../data';
import InfoCard from './InfoCard';

const Projects = ({ setSelectedProject, setSelectedExperience }) => {
  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setSelectedExperience(null);
  };

  const renderProjectCarousel = (projects, id) => (
    <div className="relative group netflix-carousel-group">
      <div id={id} className="netflix-carousel">
        {projects.map((project) => (
          <div
            key={project.title}
            className="netflix-card w-full sm:w-[280px] md:w-[320px] aspect-[16/9] bg-netflix-dark-gray rounded-lg overflow-hidden"
          >
            <InfoCard
              info={project}
              onClick={() => handleSelectProject(project)}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative mt-12">
      <h3 className="text-xl sm:text-2xl font-bold text-netflix-light-gray mb-2">Robotics Projects</h3>
      {renderProjectCarousel(roboticsProjects, "robotics-projects-carousel")}

      <h3 className="text-xl sm:text-2xl font-bold text-netflix-light-gray mb-2 mt-6">Software Projects</h3>
      {renderProjectCarousel(softwareProjects, "software-projects-carousel")}
    </div>
  );
};

export default Projects;