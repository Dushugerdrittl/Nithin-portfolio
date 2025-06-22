
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { personalDetails } from '../data/personalData';

const iconMap = {
  linkedin: <FaLinkedin className="h-6 w-6" />,
  github: <FaGithub className="h-6 w-6" />,
  twitter: <FaTwitter className="h-6 w-6" />,
  facebook: <FaFacebook className="h-6 w-6" />,
  discord: <FaDiscord className="h-6 w-6" />,
};

const PersonalDetails = () => {
  return (
    <section id="personal-details" className="my-16 scroll-mt-20 bg-neutral1 dark:bg-primary-dark rounded-lg p-8 shadow-lg">
      <h2 className="text-h2 font-heading text-neutral2 dark:text-neutral1 mb-12 text-center">Personal Details</h2>
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Removed About Me section as per user request */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-neutral1 dark:bg-primary-dark rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-h3 font-extrabold text-neutral2 dark:text-neutral1 mb-6 border-b border-neutral2 dark:border-neutral1 pb-2">Education</h3>
            <ul className="space-y-5 text-body font-body text-neutral2 dark:text-neutral1">
              {personalDetails.education.map((edu, index) => (
                <li key={index} className="mb-3">
                  <strong className="text-primary dark:text-secondary">{edu.institution}</strong> - <span className="italic">{edu.degree}</span> ({edu.year})
                  <br />
                  <span className="text-sm text-neutral2 dark:text-gray-400">{edu.details}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-neutral1 dark:bg-primary-dark rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-h3 font-heading text-neutral2 dark:text-neutral1 mb-6 border-b border-neutral2 dark:border-neutral1 pb-2 font-bold">Hobbies</h3>
          <div>
            <ul className="list-disc list-inside text-body font-body text-neutral2 dark:text-neutral1">
              {personalDetails.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>
          </div>
        </div>
          <div className="bg-neutral1 dark:bg-primary-dark rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md mx-auto">
            <h3 className="text-h3 font-heading text-neutral2 dark:text-neutral1 mb-6 border-b border-neutral2 dark:border-neutral1 pb-2 text-center font-bold">Social Media</h3>
            <div className="flex gap-8 justify-center">
              {personalDetails.socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral2 dark:text-neutral1 hover:text-secondary dark:hover:text-accent transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-75"
                  aria-label={social.name}
                >
                  {iconMap[social.icon]}
                </a>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
};

export default PersonalDetails;
