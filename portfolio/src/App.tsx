import HeroSection from './components/HeroSection';
import GameSection from './components/GameSection';
import ThemeToggle from './components/ThemeToggle';
import ProjectCard from './components/ProjectCard';
import React from 'react';
import gfxAbstract from './assets/imgs/gfx_foot_abstract.svg';

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
  {
    title: 'Analysis of space-time pressure signals from foot using machine learning methods',
    description: "In my master's diploma project (Nov 2023), I focused on utilizing two different biased databases for the classification of hallux valgus and estimating the level of motion disability using machine learning methods. I proposed and implemented a gait phase recognition system based on fuzzy logic. This system allowed modifications to the databases to counteract their biases. Subsequently, I implemented machine learning methods on the modified dataset.",
    techStack: [
      'Python',
      'TensorFlow',
      'NumPy',
      'Pandas',
      'scikit-learn',
      'NiBabel',
    ],
    graphicalAbstract: gfxAbstract,
  },
  {
  title: 'Publication: Assessing the attractiveness of human face based on machine learning',
  description: (
    <>
      <h4 className="h5 text-body-secondary mb-3">
        27th International Conference on Knowledge-Based and Intelligent Information & Engineering Systems (KES 2023) · Sep 9, 2023
      </h4>
      <p>
        This study employs three different models, each focusing on distinct features, with the belief that this approach can yield more accurate results in assessing facial attractiveness. However, these models display systematic errors when applied to the Face Research Lab London Set database, possibly due to variations in image evaluation criteria between the two datasets.
      </p>
    </>
  ) as any,
  mainLink: 'https://mostwiedzy.pl/en/publication/assessing-the-attractiveness-of-human-face-based-on-machine-learning,161148-1',
  mainLinkLabel: (
    <>
      Show publication
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        className="bi bi-box-arrow-up-right ms-2"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
        />
        <path
          fillRule="evenodd"
          d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
        />
      </svg>
    </>
  ) as any,
  techStack: ['Python', 'TensorFlow', 'NumPy', 'Pandas', 'scikit-learn', 'OpenCV'],
},
];


function App() {
  return (
    <>
    <ThemeToggle/>
    <main>
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
            mainLinkLabel={project.mainLinkLabel}
            techStack={project.techStack}
            graphicalAbstract={project.graphicalAbstract}
          />
          <div className="b-example-divider"></div>
        </React.Fragment>
      ))}
      <GameSection />
    </main>
    </>
  );
}

export default App;