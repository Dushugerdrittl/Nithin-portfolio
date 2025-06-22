import React from 'react';
import { skills } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="my-16 scroll-mt-20 bg-neutral1 dark:bg-primary-dark rounded-lg p-8 shadow-lg">
      <h2 className="text-h2 font-heading text-neutral2 dark:text-neutral1 mb-8 text-center">
        Skills & Tech Stack
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-neutral1 dark:bg-primary-dark p-6 rounded-lg shadow-lg border-2 border-gradient-to-r border-pink-400/50
                         flex flex-col items-center justify-center gap-3
                         transform hover:scale-110 transition-transform duration-300 ease-in-out"
              tabIndex={0}
              role="img"
              aria-label={skill.name}
            >
              <div className={`${skill.color} text-4xl`}>
                {skill.icon}
              </div>
              <p className="text-base font-extrabold text-neutral2 dark:text-neutral1">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
