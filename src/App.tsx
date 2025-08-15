import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import PublicationSection from './components/PublicationSection';
import GameSection from './components/GameSection';
import ThemeToggle from './components/ThemeToggle';
import ProjectCard from './components/ProjectCard';
import React from 'react';

const projects = [
  {
    title: 'AI CSV Agent',
    description: 'This application allows you to upload CSV files, ask natural language questions, and receive AI-generated analyses. It’s using small 1Bit BitNet LLM so it can be run on almost all consumer PCs, on Intel Core 7 13700k it produces response in less than 10 seconds. Both frontend and backend are containerized using Docker.',
    frontendStack: ['React', 'Vite', 'TypeScript'],
    backendStack: ['Python', 'FastAPI', 'BitNet', 'Docker'],
    mainLink: 'https://github.com/glrtdev/ai-csv-agent', // Example main repository link
    frontendLink: 'https://github.com/glrtdev/ai-csv-agent-frontend', // Replace with actual links
    backendLink: 'https://github.com/glrtdev/ai-csv-agent-backend',   // Replace with actual links
  },
  // Add other projects here
];


function App() {
  return (
    <>
    <ThemeToggle/>
    <main>
      <h1 className="visually-hidden">Portfolio</h1>
      <HeroSection />
      <div className="b-example-divider"></div>
      <ProjectSection />
      <div className="b-example-divider"></div>
      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <ProjectCard
            title={project.title}
            description={project.description}
            frontendStack={project.frontendStack}
            backendStack={project.backendStack}
            frontendLink={project.frontendLink}
            backendLink={project.backendLink}
            mainLink={project.mainLink}
          />
          <div className="b-example-divider"></div>
        </React.Fragment>
      ))}
      <GameSection />
      <div className="b-example-divider mb-0"></div>
      <PublicationSection />
      <div className="b-example-divider mb-0"></div>
    </main>
    </>
  );
}

export default App;