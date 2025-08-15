// src/components/ProjectCard.tsx
import React from 'react';
import { useCollapse } from '../hooks/useCollapse'; // A custom hook for Bootstrap's collapse functionality

// Import technology stack images
import pythonLogo from '../assets/imgs/python-logo-generic.svg';
import fastapiLogo from '../assets/imgs/fastapi.svg';
import bitnetLogo from '../assets/imgs/bitnet.png';
import reactLogo from '../assets/imgs/react.svg';
import viteLogo from '../assets/imgs/vite.svg';
import tsLogo from '../assets/imgs/ts.svg';
import dockerLogo from '../assets/imgs/docker.svg';

// Define the shape of the props
type ProjectCardProps = {
  title: string;
  description: string;
  frontendStack: string[];
  backendStack: string[];
  frontendLink?: string; // Make these optional
  backendLink?: string; // Make these optional
  mainLink?: string;    // Add the new optional main link
};

const techStackImages: Record<string, string> = {
  Python: pythonLogo,
  FastAPI: fastapiLogo,
  BitNet: bitnetLogo,
  React: reactLogo,
  Vite: viteLogo,
  TypeScript: tsLogo,
  Docker: dockerLogo,
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  frontendStack,
  backendStack,
  frontendLink,
  backendLink,
  mainLink,
}) => {
  const { isCollapsed: isFrontendCollapsed, toggleCollapse: toggleFrontend } = useCollapse();
  const { isCollapsed: isBackendCollapsed, toggleCollapse: toggleBackend } = useCollapse();

  const renderTechStack = (stack: string[]) => (
    <ul className="list-group shadow">
      {stack.map((tech) => (
        <li key={tech} className="list-group-item list-group-item-dark d-flex align-items-center">
          <img
            className="img-fluid me-2"
            src={techStackImages[tech]}
            alt={`${tech} Logo`}
            width="50"
            height="50"
          />
          <span className="fw-bold">{tech}</span>
        </li>
      ))}
    </ul>
  );

//   return (
//     <div className="px-4 pt-5 my-5 text-center">
//       <h1 className="display-5 fw-bold text-body-emphasis col-lg-6 mx-auto">{title}</h1>
//       <div className="col-lg-6 mx-auto">
//         <p className="lead mb-4">{description}</p>
//         <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
//           <button
//             type="button"
//             className="btn btn-primary btn-lg px-4 me-sm-3"
//             onClick={toggleFrontend}
//             aria-expanded={!isFrontendCollapsed}
//             aria-controls="frontend-collapse"
//           >
//             Frontend Stack
//           </button>
//           <button
//             type="button"
//             className="btn btn-primary btn-lg px-4"
//             onClick={toggleBackend}
//             aria-expanded={!isBackendCollapsed}
//             aria-controls="backend-collapse"
//           >
//             Backend Stack
//           </button>
//         </div>
//       </div>
//       <div className="overflow-hidden" style={{ maxHeight: '100vh' }}>
//         <div className={`collapse multi-collapse ${isFrontendCollapsed ? '' : 'show'}`} id="frontend-collapse">
//           <div className="container px-5">
//             <p className="lead mb-4 text-body-emphasis">Frontend Stack</p>
//             {renderTechStack(frontendStack)}
//             <a href={frontendLink} className="btn btn-outline-primary mt-3">
//               View Frontend Source Code
//             </a>
//           </div>
//         </div>
//         <div className={`collapse multi-collapse ${isBackendCollapsed ? '' : 'show'}`} id="backend-collapse">
//           <div className="container px-5">
//             <p className="lead mb-4 text-body-emphasis">Backend Stack</p>
//             {renderTechStack(backendStack)}
//             <a href={backendLink} className="btn btn-outline-primary mt-3">
//               View Backend Source Code
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;


 return (
    <div className="px-4 pt-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis col-lg-6 mx-auto">{title}</h1>

      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">{description}</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          {/* Main link button */}
          {mainLink && (
            <a href={mainLink} className="btn btn-primary btn-lg px-4 me-sm-3">
              View Project
            </a>
          )}
          
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4 me-sm-3"
            onClick={toggleFrontend}
            aria-expanded={!isFrontendCollapsed}
            aria-controls="frontend-collapse"
          >
            Frontend Stack
          </button>
          
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
            onClick={toggleBackend}
            aria-expanded={!isBackendCollapsed}
            aria-controls="backend-collapse"
          >
            Backend Stack
          </button>
        </div>
      </div>
      <div className="overflow-hidden" style={{ maxHeight: '100vh' }}>
        <div className={`collapse multi-collapse ${isFrontendCollapsed ? '' : 'show'}`} id="frontend-collapse">
          <div className="container px-5">
            <p className="lead mb-4 text-body-emphasis">Frontend Stack</p>
            {renderTechStack(frontendStack)}
            {frontendLink && (
              <a href={frontendLink} className="btn btn-outline-primary mt-3">
                View Frontend Source Code
              </a>
            )}
          </div>
        </div>
        <div className={`collapse multi-collapse ${isBackendCollapsed ? '' : 'show'}`} id="backend-collapse">
          <div className="container px-5">
            <p className="lead mb-4 text-body-emphasis">Backend Stack</p>
            {renderTechStack(backendStack)}
            {backendLink && (
              <a href={backendLink} className="btn btn-outline-primary mt-3">
                View Backend Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;