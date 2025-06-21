import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    // { name: 'Resume', href: '/resume.pdf' }, // Example for a resume link
    // { name: 'Contact', href: '#contact' }, // Placeholder for future section
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    // Remove the '#' from the id to get the raw element ID
    const sectionId = id.substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after clicking a link
    }
  };

  return (
    <nav className="flex items-center justify-between flex-wrap">
      {/* Mobile menu button */}
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-neutral2 border-neutral2 hover:text-primary hover:border-primary dark:text-neutral1 dark:border-neutral1 dark:hover:text-secondary dark:hover:border-secondary"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* Navigation links */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full absolute top-full left-0 bg-neutral1 dark:bg-primary lg:static lg:flex lg:items-center lg:w-auto lg:bg-transparent dark:lg:bg-transparent`} id="mobile-menu"
      >
        <div className="text-sm lg:flex-grow lg:text-right">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block mt-4 lg:inline-block lg:mt-0 text-neutral2 hover:text-primary mr-4
                         dark:text-neutral1 dark:hover:text-secondary transition-colors duration-200 text-body font-body p-2 lg:p-0"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
