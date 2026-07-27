import logo from '../assets/imgs/logo.png';
import Button from './Button';

function HeroSection() {
  return (
    <div className="container px-4 py-4 my-3 text-center position-relative">
      <div className="d-flex justify-content-center mb-3">
        <img 
          src={logo} 
          alt="Logo" 
          width="90" 
          height="90" 
          className="rounded-circle border border-secondary-subtle"
          style={{ objectFit: 'cover' }}
        />
      </div>

    <div className="d-inline-flex align-items-center gap-3 mb-3">
      <h1 className="h1 fw-bold text-body-emphasis mb-0">Maciej Gielert</h1>
      
      <Button 
        variant="outline-secondary" 
        size="sm" 
        href="https://www.linkedin.com/in/maciej-gielert/" 
        target="_blank"
        className="mt-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
        </svg>
        LinkedIn
      </Button>
    </div>
      
      {/* Streamlined Skill Badges */}
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
        <span className="badge bg-primary text-white shadow-sm rounded-pill px-3 py-2 fw-semibold">
          Full-Stack
        </span>
        <span className="badge bg-primary text-white shadow-sm rounded-pill px-3 py-2 fw-semibold">
          GenAI & LLM Tooling
        </span>
        <span className="badge bg-secondary-subtle text-secondary-emphasis border border-secondary-subtle rounded-pill px-3 py-2">
          Python
        </span>
        <span className="badge bg-secondary-subtle text-secondary-emphasis border border-secondary-subtle rounded-pill px-3 py-2">
          C# .NET
        </span>
        <span className="badge bg-secondary-subtle text-secondary-emphasis border border-secondary-subtle rounded-pill px-3 py-2">
          TypeScript
        </span>
      </div>

      {/* Focused Hero Pitch */}
      <div className="col-lg-7 mx-auto">
        <p className="lead fw-semibold text-body-emphasis mb-3">
          Senior Software Engineer specializing in full-stack architecture, cloud-native systems, and high-performance Machine Learning integrations.
        </p>
        
        <p className="text-secondary fs-5 mb-4">
          I build scalable software solutions with a recent focus on practical local GenAI - developing custom developer tooling, context optimization plugins, and lightweight LLM workflows.
        </p>

        <p className="small text-uppercase fw-bold tracking-wider text-muted mb-0">
          Explore featured projects & research below
        </p>
      </div>
    </div>
  );
}

export default HeroSection;