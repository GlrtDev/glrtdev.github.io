import HeroSection from './components/HeroSection';
import GameSection from './components/GameSection';
import ThemeToggle from './components/ThemeToggle';
import ProjectCard from './components/ProjectCard';
import React from 'react';
import gfxAbstract from './assets/imgs/gfx_foot_abstract.svg';
import Footer from './components/Footer';

const projects = [
  {
    title: (
      <>
        Agents United: Enterprise Unity Copilot{' '}
        <span className="badge bg-warning text-dark fs-6 align-middle mb-2 ms-2">
          WIP
        </span>
      </>
    ) as any,
    description:
      'Enterprise-grade, multi-agent AI copilot for Unity C# development. Combines a Python FastAPI backend with a C# Roslyn compilation layer, using LangGraph and Tree-Sitter AST-aware RAG to autonomously generate, compile-verify, and commit scripts within an isolated Docker sandbox.',
    techStack: [
      'Python',
      'C#',
      'FastAPI',
      'LangGraph',
      'Docker',
      'Roslyn',
      'Tree-Sitter',
      'LiteLLM',
    ],
    mainLink: 'https://github.com/GlrtDev/Agents-United',
    youtubeLink: 'https://www.youtube.com/watch?v=qsN0mCYcBXg',
  },
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
{
    title: 'Game: 8 Bit Survivor',
    description:
      'This is the first game that I finished. Started with a small plan but ended up managing a big project with over 25,000 lines of code. Applied a lot of design patterns such as factory, builder, composite, facade etc. Also, this project helped me refresh more advance programming concepts like thread synchronization, integrating third-party code and web sockets.',
    // You can add the specific languages/tools you used here, I left it empty based on the text
    techStack: [], 
    mainLink: 'https://play.google.com/store/apps/details?id=com.glrtdev.EightBitSurvivor',
    mainLinkLabel: 'Google Play',
    mainLinkIcon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        fill="currentColor" 
        className="bi bi-google-play ms-2" 
        viewBox="0 0 16 16"
      >
        <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27"/>
      </svg>
    ),
    youtubeLink: 'https://www.youtube.com/watch?v=A36u1vfFa8Y',
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
            youtubeLink={project.youtubeLink}
          />
          <div className="b-example-divider"></div>
        </React.Fragment>
      ))}
    </main>
    <Footer />
    </>
  );
}

export default App;