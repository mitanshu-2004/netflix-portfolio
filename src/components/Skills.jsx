import React from 'react';
import { skillsData } from '../data';
import InfoCard from './InfoCard';

const Skills = () => {
  const midIndex = Math.ceil(skillsData.length / 2);
  const skillsFirstHalf = skillsData.slice(0, midIndex);
  const skillsSecondHalf = skillsData.slice(midIndex);

  const renderSkillsCarousel = (skills, id) => (
    <div className="relative group netflix-carousel-group">
      <div id={id} className="netflix-carousel">
        {skills.map((skillCategory) => (
          <div
            key={skillCategory.title}
            className="netflix-card w-full sm:w-[280px] md:w-[320px] aspect-[16/9] bg-netflix-dark-gray rounded-lg overflow-hidden"
          >
            <InfoCard info={skillCategory} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative mt-0">
      {renderSkillsCarousel(skillsFirstHalf, "skills-carousel-1")}
      <div className="mt-8" />
      {renderSkillsCarousel(skillsSecondHalf, "skills-carousel-2")}
    </div>
  );
};

export default Skills;