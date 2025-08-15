function GameSection() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="shadow rounded-3 mw-100" width="640" height="360" src="https://www.youtube.com/embed/A36u1vfFa8Y?si=8lvOUV6bTBmRt2KZ" title="YouTube video player" frameBorder="0" allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Game: 8 Bit Survivor</h1>
          <h4>Fab 2024</h4>
          <p className="lead">This is the first game that I finished. Started with a small plan but ended up managing a big project with over 25,000 lines of code. Applied a lot of design patterns such as factory, builder, composite, facade etc. Also, this project helped me refresh more advance programming concepts like thread synchronization, integrating third-party code and web sockets.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href="https://play.google.com/store/apps/details?id=com.glrtdev.EightBitSurvivor" type="button" className="btn btn-primary btn-lg px-4 me-md-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-google-play" viewBox="0 0 16 16">
                <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27"/>
              </svg> Google Play
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameSection;