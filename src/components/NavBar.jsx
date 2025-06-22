import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Removed navLinks and scrollToSection as they are unused now


  return (
<nav className="flex items-center justify-between flex-wrap fixed w-full bg-background/90 dark:bg-background/90 backdrop-blur-md z-70 shadow-lg border-b border-border/80 dark:border-border/80">
      {/* Mobile menu button */}
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-primary border-primary hover:text-accent hover:border-accent dark:text-primary dark:border-primary dark:hover:text-accent dark:hover:border-accent transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-75 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-opacity-100 hover:scale-110"
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
        } w-full max-w-4xl mx-auto lg:static lg:flex lg:items-center lg:w-auto lg:bg-transparent dark:lg:bg-transparent border-0 rounded-md p-0 box-border overflow-hidden`} id="mobile-menu"
      >
        <div className="text-sm lg:flex-grow lg:text-right flex gap-6 justify-start">
          {/* Navigation buttons removed, so no links rendered */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
