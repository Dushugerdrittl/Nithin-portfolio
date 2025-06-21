import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeToggle from './components/ThemeToggle';
import ProjectCard from './components/ProjectCard';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import CertificatePage from './components/CertificatePage';

import { projects as projectData } from './data/portfolioData';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral1 text-primary dark:bg-primary dark:text-neutral1 transition-colors duration-300 p-6 m-4 rounded-lg relative before:absolute before:inset-0 before:rounded-lg before:border-4 before:border-gradient-to-r before:from-pink-400 before:via-purple-500 before:to-pink-400 before:pointer-events-none before:z-[-1] box-border">
        <header className="flex justify-between items-center sticky top-0 bg-neutral1/80 dark:bg-primary/80 backdrop-blur-sm z-10 border-b border-neutral-200/80 dark:border-primary-dark/80 p-4">
          <h1 className="text-h4 font-heading text-primary dark:text-secondary">Welcome to Master Nithin Sai Kosuhik Portfolio</h1>
          <div className="flex items-center gap-4">
            <NavBar />
            <ThemeToggle />
          </div>
        </header>
        <main className="container mx-auto p-4 md:p-8 space-y-16">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="about" className="my-12 text-center scroll-mt-20 bg-accent/20 rounded-lg p-8 shadow-lg">
                    <h2 className="text-h1 font-heading text-primary dark:text-secondary mb-4">Nithin Sai Koushik Kancharla</h2>
                    <p className="text-h5 font-body text-neutral2 dark:text-gray-300 max-w-3xl mx-auto leading-body whitespace-pre-line">
                      Hi, I'm Nithin 👋 — Android App Developer & Flutter Enthusiast
                      I bring ideas to life through sleek, functional mobile experiences. With hands-on internship experience, a trio of impactful college projects, and a deep passion for Flutter development, I'm ready to build, learn, and grow in the world of app innovation.
                    </p>
                  </section>

                  {/* Projects Section */}
                  <section id="projects" className="my-16 scroll-mt-20 bg-accent/20 rounded-lg p-8 shadow-lg">
                    <h2 className="text-h2 font-heading text-primary dark:text-secondary mb-8 text-center">Internships and Project Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {projectData.map((project) => {
                        const isInternship = project.title.toLowerCase().includes('internship') || project.sourceLabel === 'View Certification';
                        return (
                          <ProjectCard
                            key={project.title}
                            {...project}
                            sourceLabel={project.sourceLabel}
                            imageUrl={project.imageUrl}
                            isInternship={isInternship}
                          />
                        );
                      })}
                    </div>
                  </section>

                  {/* Skills Section */}
                  <Skills />

                  {/* Add more sections like Resume, Contact here */}
                </>
              }
            />
            <Route path="/certificate" element={<CertificatePage />} />
          </Routes>
        </main>
        <footer className="p-4 text-center text-sm text-neutral2 dark:text-neutral1 border-t border-neutral-200 dark:border-primary-dark">
          © {new Date().getFullYear()} Nithin. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
