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
    <section id="personal-details" className="my-16 scroll-mt-20 bg-accent/20 rounded-lg p-8 shadow-lg">
      <h2 className="text-h2 font-heading text-primary dark:text-secondary mb-12 text-center">Personal Details</h2>
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Removed About Me section as per user request */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-accent/20 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-h3 font-heading text-primary dark:text-secondary mb-6 border-b border-primary dark:border-secondary pb-2">Education</h3>
            <ul className="space-y-4 text-body font-body text-neutral2 dark:text-gray-300">
              {personalDetails.education.map((edu, index) => (
                <li key={index} className="mb-2">
                  <strong className="text-primary dark:text-secondary">{edu.institution}</strong> - <span className="italic">{edu.degree}</span> ({edu.year})
                  <br />
                  <span className="text-sm text-neutral2 dark:text-gray-400">{edu.details}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-accent/20 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-h3 font-heading text-primary dark:text-secondary mb-6 border-b border-primary dark:border-secondary pb-2">Hobbies</h3>
          <div>
            <ul className="list-disc list-inside text-body font-body text-neutral2 dark:text-gray-300">
              {personalDetails.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>
          </div>
        </div>
        <div className="bg-accent/20 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md mx-auto">
          <h3 className="text-h3 font-heading text-primary dark:text-secondary mb-6 border-b border-primary dark:border-secondary pb-2 text-center">Social Media</h3>
          <div className="flex gap-8 justify-center">
            {personalDetails.socialMedia.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-neutral1 hover:text-secondary dark:hover:text-accent transition-transform transform hover:scale-110"
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
