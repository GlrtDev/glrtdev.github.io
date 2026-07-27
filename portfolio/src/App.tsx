import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import PublicationSection from './components/PublicationSection';
import GameSection from './components/GameSection';
import ThemeToggle from './components/ThemeToggle';
import ProjectCard from './components/ProjectCard';
import React from 'react';

const projects = [
  {
    title: (
      <>
        LM Studio Context Architect{' '}
        <span className="badge bg-warning text-dark fs-6 align-middle mb-2 ms-2">
          WIP
        </span>
      </>
    ) as any,
    description: 'LM-Studio-Context-Architect is a smart prompt preprocessor plugin for LM Studio. It transforms local directories into a semantic, searchable knowledge base, allowing you to chat with entire codebases without hitting context window limits or losing architectural context.',
    techStack: ['LM Studio SDK', 'Node.js', 'TypeScript'],
    mainLink: 'https://github.com/GlrtDev/LM-Studio-Context-Architect#-lm-studio-context-architect',
  },
  {
    title: 'AI CSV Agent',
    description: 'This application allows you to upload CSV files, ask natural language questions, and receive AI-generated analyses. It’s using small 1Bit BitNet LLM so it can be run on almost all consumer PCs, on 13 gen Intel Core 7 it produces response in less than 10 seconds. Both frontend and backend are containerized using Docker.',
    frontendStack: ['React', 'Vite', 'TypeScript'],
    backendStack: ['Python', 'FastAPI', 'BitNet', 'Docker'],
    mainLink: 'https://github.com/glrtdev/ai-csv-agent',
    frontendLink: 'https://github.com/glrtdev/ai-csv-agent-frontend',
    backendLink: 'https://github.com/glrtdev/ai-csv-agent-backend',
  },
];


function App() {
  return (
    <>
    <ThemeToggle/>
    <main>
      <h1 className="visually-hidden">Portfolio</h1>
      <HeroSection />
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
            techStack={project.techStack}
          />
          <div className="b-example-divider"></div>
        </React.Fragment>
      ))}
      <ProjectSection />
      <div className="b-example-divider"></div>
      <GameSection />
      <div className="b-example-divider mb-0"></div>
      <PublicationSection />
      <div className="b-example-divider mb-0"></div>
    </main>
    </>
  );
}

export default App;