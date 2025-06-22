import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectCard from './components/ProjectCard';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import PersonalDetails from './components/PersonalDetails';
import CertificatePage from './components/CertificatePage';

import { projects as projectData } from './data/portfolioData';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-background text-primary dark:bg-background dark:text-primary transition-colors duration-300 p-6 m-4 rounded-lg relative box-border">
        <header className="flex justify-between items-center sticky top-0 bg-background/90 dark:bg-background/90 backdrop-blur-md z-60 border-b border-border/80 dark:border-border/80 p-6 shadow-md">
          <h1 className="text-h3 font-heading text-primary dark:text-primary">Welcome to Master Nithin Sai Kosuhik Portfolio</h1>
          <div className="flex items-center gap-6">
            <NavBar />
          </div>
        </header>
        <main className="max-w-screen-lg mx-auto p-4 md:p-8 space-y-16">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="about" className="my-12 scroll-mt-20 bg-accent/20 rounded-lg p-8 shadow-lg" data-aos="fade-up">
                    <h2 className="text-h1 font-heading text-primary dark:text-secondary mb-4">Nithin Sai Koushik Kancharla</h2>
                    <div className="flex flex-row items-center max-w-4xl mx-auto gap-6">
                      <p className="text-h5 font-body text-neutral2 dark:text-gray-300 leading-body whitespace-pre-line md:flex-1 text-left whitespace-pre-wrap">
                        Detail-oriented and innovative Full Stack Developer and Android Developer(mid) with a good educational foundation in computer science and business systems. good in Python, Java, HTML, CSS, and Flutter, with a passion for harnessing technology to drive business growth. Experienced in optimizing algorithms and developing AI-driven models through academic projects. Eager to contribute technical expertise and creativity to enhance software development initiatives in a collaborative environment.
                      </p>
                      <img
                        src="/images/A.JPG"
                        alt="Nithin Sai Koushik Kancharla"
                        className="w-40 h-40 rounded-full object-cover md:shrink-0"
                      />
                    </div>
                  </section>

                  {/* Projects Section */} 
                  <section id="projects" className="my-16 scroll-mt-20 bg-accent/20 rounded-lg p-8 shadow-lg" data-aos="fade-up">
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
                  <Skills data-aos="fade-up" />
                  <PersonalDetails data-aos="fade-up" />
                  
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
