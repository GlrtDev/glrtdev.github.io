// src/components/ProjectCard.tsx
import React from 'react';
import { useCollapse } from '../hooks/useCollapse';
import Button from './Button';

import pythonLogo from '../assets/imgs/python-logo-generic.png';
import fastapiLogo from '../assets/imgs/fastapi.svg';
import bitnetLogo from '../assets/imgs/bitnet.png';
import reactLogo from '../assets/imgs/react.svg';
import viteLogo from '../assets/imgs/vite.svg';
import tsLogo from '../assets/imgs/ts.svg';
import dockerLogo from '../assets/imgs/docker.svg';
import lmstudio from '../assets/imgs/lmstudio.png';
import nodejs from '../assets/imgs/nodejs.svg';

type ProjectCardProps = {
  title: string;
  description: string;
  techStack?: string[];        // Combined tech stack
  frontendStack?: string[];    // Optional split stack
  backendStack?: string[];     // Optional split stack
  frontendLink?: string;
  backendLink?: string;
  mainLink?: string;
};

const techStackImages: Record<string, string> = {
  Python: pythonLogo,
  FastAPI: fastapiLogo,
  BitNet: bitnetLogo,
  React: reactLogo,
  Vite: viteLogo,
  TypeScript: tsLogo,
  Docker: dockerLogo,
  'LM Studio SDK': lmstudio,
  'Node.js': nodejs,
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack = [],
  frontendStack = [],
  backendStack = [],
  frontendLink,
  backendLink,
  mainLink,
}) => {
  const { isCollapsed: isMainCollapsed, toggleCollapse: toggleMain } = useCollapse();
  const { isCollapsed: isFrontendCollapsed, toggleCollapse: toggleFrontend } = useCollapse();
  const { isCollapsed: isBackendCollapsed, toggleCollapse: toggleBackend } = useCollapse();

  // Helper to render stack lists
  const renderTechStack = (stack: string[]) => (
    <div className="d-flex flex-wrap justify-content-center gap-3 my-3">
      {stack.map((tech) => (
        <div 
          key={tech} 
          className="d-flex align-items-center bg-body-tertiary border rounded-pill px-3 pt-2 pb-2 shadow-sm"
        >
          {techStackImages[tech] && (
            <img
              className="me-2"
              src={techStackImages[tech]}
              alt={`${tech} Logo`}
              style={{ height: '22px', width: 'auto', objectFit: 'contain' }}
            />
          )}
          <span className="fw-semibold text-body-emphasis fs-6">{tech}</span>
        </div>
      ))}
    </div>
  );

  const hasUnifiedStack = techStack.length > 0;

return (
    <div className="px-4 pt-2 mb-5 mt-4 text-center">
      <h1 className="h1 fw-bold text-body-emphasis col-lg-8 mx-auto">{title}</h1>

      <div className="col-lg-7 mx-auto">
        <p className="lead text-secondary mb-4">{description}</p>
        
        {/* Action Buttons Group */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {mainLink && (
            <Button 
              variant="primary" 
              size="lg" 
              href={mainLink} 
              target="_blank"
            >
              View Project
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </Button>
          )}

          {/* Unified Tech Stack Toggle */}
          {hasUnifiedStack && (
            <Button
              variant="outline-secondary"
              size="lg"
              onClick={toggleMain}
              isCollapsed={isMainCollapsed}
              controlsId="main-stack-collapse"
            >
              Technology Stack
            </Button>
          )}

          {/* Frontend Toggle */}
          {frontendStack.length > 0 && (
            <Button
              variant="outline-secondary"
              size="lg"
              onClick={toggleFrontend}
              isCollapsed={isFrontendCollapsed}
              controlsId="frontend-collapse"
            >
              Frontend Stack
            </Button>
          )}

          {/* Backend Toggle */}
          {backendStack.length > 0 && (
            <Button
              variant="outline-secondary"
              size="lg"
              onClick={toggleBackend}
              isCollapsed={isBackendCollapsed}
              controlsId="backend-collapse"
            >
              Backend Stack
            </Button>
          )}
        </div>
      </div>

      {/* Collapsible Sections */}
      <div className="col-lg-8 mx-auto">
        {/* Unified Stack Content */}
        {hasUnifiedStack && (
          <div className={`collapse ${isMainCollapsed ? '' : 'show'}`} id="main-stack-collapse">
            <div className="p-3 mb-4 rounded-4 bg-body-tertiary border">
              <h3 className="h5 fw-bold text-body-emphasis mb-3 mt-2">Technologies Used</h3>
              {renderTechStack(techStack)}
            </div>
          </div>
        )}

        {/* Frontend Split Content */}
        {frontendStack.length > 0 && (
          <div className={`collapse ${isFrontendCollapsed ? '' : 'show'}`} id="frontend-collapse">
            <div className="p-4 mb-4 rounded-4 bg-body-tertiary border">
              <h3 className="h5 fw-bold text-body-emphasis mb-3">Frontend Architecture</h3>
              {renderTechStack(frontendStack)}
              {frontendLink && (
                <a href={frontendLink} className="btn btn-sm btn-outline-primary mt-2" target="_blank" rel="noopener noreferrer">
                  View Frontend Source Code
                </a>
              )}
            </div>
          </div>
        )}

        {/* Backend Split Content */}
        {backendStack.length > 0 && (
          <div className={`collapse ${isBackendCollapsed ? '' : 'show'}`} id="backend-collapse">
            <div className="p-4 mb-4 rounded-4 bg-body-tertiary border">
              <h3 className="h5 fw-bold text-body-emphasis mb-3">Backend Architecture</h3>
              {renderTechStack(backendStack)}
              {backendLink && (
                <a href={backendLink} className="btn btn-sm btn-outline-primary mt-2" target="_blank" rel="noopener noreferrer">
                  View Backend Source Code
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;