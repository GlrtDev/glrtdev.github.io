import React from 'react';

interface ProjectCardProps {
  title: string;
  date: string;
  description: string;
  technologies?: { name: string; url: string; logo: string; width: number; height: number }[];
  graphicalAbstract?: string;
  youtubeUrl?: string;
  googlePlayUrl?: string;
  publicationUrl?: string;
  isReversed?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  date,
  description,
  technologies,
  graphicalAbstract,
  youtubeUrl,
  googlePlayUrl,
  publicationUrl,
  isReversed,
}) => {
  const technologyCollapseId = `technology-collapse-${title.replace(/\s/g, '-')}`;
  const gfxAbstractCollapseId = `gfx-abstract-collapse-${title.replace(/\s/g, '-')}`;

  const content = (
    <>
      <div className={`col-lg-6 ${isReversed ? 'order-lg-2' : ''}`}>
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{title}</h1>
        <h4>{date}</h4>
        <p className="lead">{description}</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          {technologies && (
            <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3" data-bs-toggle="collapse" data-bs-target={`#${technologyCollapseId}`}>
              Technology stack
            </button>
          )}
          {graphicalAbstract && (
            <button type="button" className="btn btn-primary btn-lg px-4" data-bs-toggle="collapse" data-bs-target={`#${gfxAbstractCollapseId}`}>
              Graphical abstract
            </button>
          )}
          {publicationUrl && (
            <a href={publicationUrl} type="button" className="btn btn-outline-primary btn-lg px-4 me-sm-3">
              Show publication
            </a>
          )}
          {googlePlayUrl && (
            <a href={googlePlayUrl} type="button" className="btn btn-primary btn-lg px-4 me-md-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-google-play" viewBox="0 0 16 16">
                <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27" />
              </svg> Google Play
            </a>
          )}
        </div>
      </div>
      {youtubeUrl && (
        <div className={`col-10 col-sm-8 col-lg-6 ${isReversed ? 'order-lg-1' : ''}`}>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="shadow rounded-3 mw-100" width="640" height="360" src={youtubeUrl} title="YouTube video player" frameBorder="0" allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      )}
    </>
  );

  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        {content}
      </div>
      <div className="overflow-hidden" style={{ maxHeight: '100vh' }}>
        {technologies && (
          <div className="collapse multi-collapse" id={technologyCollapseId}>
            <div className="container px-5">
              <p className="lead mb-4 text-body-emphasis">Technology stack</p>
              <ul className="list-group shadow">
                <li className="list-group-item list-group-item-dark">
                  {technologies.map(tech => (
                    <a key={tech.name} href={tech.url}><img className="img-fluid" src={`src/assets/imgs/${tech.logo}`} width={tech.width} height={tech.height} alt={tech.name}/></a>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        )}
        {graphicalAbstract && (
          <div className="collapse multi-collapse" id={gfxAbstractCollapseId}>
            <div className="container px-5">
              <p className="lead mb-4 text-body-emphasis">Graphical abstract</p>
              <img src={`src/assets/imgs/${graphicalAbstract}`} className="img-fluid border rounded-3 shadow mb-4" alt="gfx abstract" width="700" height="1600" loading="lazy" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
