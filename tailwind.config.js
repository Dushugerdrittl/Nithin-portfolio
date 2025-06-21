/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode via class strategy
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ed6094',  // Pink, love and sweetness
        'primary-dark': '#282828', // Dark gray for dark mode cards
        secondary: '#b3b4b0', // Soft gray, luxury
        accent: '#f5f3ee',    // Light cream, background
        neutral1: '#f6e1d6',   // Light pink-beige, for backgrounds and subtle elements
        neutral2: '#282828',   // Dark gray, for text and less prominent UI
      },
      fontFamily: {
        heading: ['"Poppins"', 'sans-serif'], // Modern, geometric sans-serif
        body: ['"Roboto"', 'sans-serif'],    // Clean, readable sans-serif
      },
      fontSize: {
        'h1': '3rem',        // 48px
        'h2': '2.25rem',      // 36px
        'h3': '1.75rem',      // 28px
        'h4': '1.5rem',       // 24px
        'h5': '1.25rem',      // 20px
        'body': '1rem',       // 16px
        'small': '0.875rem',  // 14px
      },
      lineHeight: {
        'heading': '1.2',     // Tighter leading for headings
        'body': '1.6',        // More spacious leading for body text
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Subtle shadow for depth
        'button': '0 2px 4px 0 rgba(0, 0, 0, 0.1)', // Slight lift for buttons
      },
      borderRadius: {
        'lg': '0.5rem',       // 8px - Softly rounded corners
      },
      borderWidth: {
        'DEFAULT': '1px',     // Standard border width
      },
      gridTemplateColumns: {
        'auto-fr': 'auto 1fr', // Useful for sidebar layouts
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Adds a set of prose classes for styling content
  ],
}
