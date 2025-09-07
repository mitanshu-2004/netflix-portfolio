import React, { useEffect, useState } from 'react';

const Intro = () => {
  const [animationState, setAnimationState] = useState('initial');

  useEffect(() => {
    setTimeout(() => setAnimationState('zoom'), 500);
    setTimeout(() => setAnimationState('fadeOut'), 2500);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-[9999]">
      <div className={`
        relative transition-all duration-[2000ms] ease-in-out transform
        ${animationState === 'initial' ? 'scale-100 opacity-0' : ''}
        ${animationState === 'zoom' ? 'scale-150 opacity-100' : ''}
        ${animationState === 'fadeOut' ? 'scale-[200] opacity-0' : ''}
      `}>
        <h1 className="relative font-netflix font-black tracking-wider text-[8vw] text-netflix-red">
          {/* Each letter with its own shine effect */}
          {'MITANSHU GOEL'.split('').map((letter, index) => (
            <span 
              key={index}
              className={`
                inline-block transform
                transition-all duration-300
                ${letter === ' ' ? 'mr-4' : 'hover:scale-110 hover:text-[#ff0f1f]'}
              `}
              style={{
                animationDelay: `${index * 50}ms`,
                textShadow: '0 0 10px rgba(229, 9, 20, 0.5)'
              }}
            >
              {letter}
            </span>
          ))}
          
          <div className={`
            absolute inset-0 pointer-events-none
            ${animationState === 'zoom' ? 'animate-netflixShine' : ''}
            bg-gradient-to-r from-transparent via-white to-transparent
            opacity-0
          `} />
        </h1>
      </div>
    </div>
  );
};

export default Intro;