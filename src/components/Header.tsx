import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <img className="d-block mx-auto mb-4" src="src/assets/imgs/logo.png" alt="" width="60" height="60" />
      <h1 className="display-5 fw-bold text-body-emphasis">M. Gielert - Portfolio</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">I'm a graduate with a Master's degree in Artificial Intelligence in Biomedical Enginering. I spent two years as a Python Developer in a corporate setting and one year as a freelance developer, specializing mainly in C#. Here are the main projects that i have been working on beside work.</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a type="button" className="btn btn-primary btn-lg px-4 gap-3" href="https://www.linkedin.com/in/maciej-gielert/">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg> Connect</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
