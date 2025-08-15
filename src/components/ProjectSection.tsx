// src/components/ProjectSection.tsx
import pythonLogo from '../assets/imgs/python-logo-generic.svg';
import tfLogo from '../assets/imgs/TF_White_Primary_Horizontal.svg';
import numpyLogo from '../assets/imgs/numpylogolight.png';
import pandasLogo from '../assets/imgs/pandas_white.svg';
import scikitLogo from '../assets/imgs/scikit-learn-logo-notext.png';
import nibabelLogo from '../assets/imgs/nibabel-logo.svg';
import gfxAbstract from '../assets/imgs/ANG gfx abstract v2.svg';

function ProjectSection() {
  return (
    <div className="px-4 pt-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis col-lg-6 mx-auto">
        Analysis of space-time pressure signals from foot using machine learning methods
      </h1>
      <h4>Nov 2023</h4>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">In my master's diploma project, I focused on utilizing two different biased databases for the classification of hallux valgus and estimating the level of motion disability using machine learning methods. I proposed and implemented a gait phase recognition system based on fuzzy logic. This system allowed modifications to the databases to counteract their biases. Subsequently, I implemented machine learning methods on the modified dataset.</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3" data-bs-toggle="collapse" data-bs-target="#gfx-abstract-collapse">Graphical abstract</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4" data-bs-toggle="collapse" data-bs-target="#technology-collapse">Technology stack</button>
        </div>
      </div>
      <div className="overflow-hidden" style={{ maxHeight: '100vh' }}>
        <div className="collapse multi-collapse" id="technology-collapse">
          <div className="container px-5">
            <p className="lead mb-4 text-body-emphasis">Technology stack</p>
            <ul className="list-group shadow">
              <li className="list-group-item list-group-item-dark">
                <a href="https://www.python.org/"><img className="img-fluid" src={pythonLogo} width="250" height="60" alt="Python Logo" /></a>
                <a href="https://www.tensorflow.org/"><img className="img-fluid" src={tfLogo} width="250" height="60" alt="TensorFlow Logo" /></a>
                <a href="https://numpy.org/"><img className="img-fluid" src={numpyLogo} width="145" height="65" alt="NumPy Logo" /></a>
                <a href="https://pandas.pydata.org/"><img className="img-fluid" src={pandasLogo} width="250" height="60" alt="Pandas Logo" /></a>
                <a href="https://scikit-learn.org/"><img className="img-fluid" src={scikitLogo} width="200" height="50" alt="Scikit-learn Logo" /></a>
                <p className="nibabel-text">
                  <a href="https://nipy.org/nibabel/"><img className="img-fluid" src={nibabelLogo} width="100" height="60" alt="NiBabel Logo" /> NiBabel</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse multi-collapse" id="gfx-abstract-collapse">
          <div className="container px-5">
            <p className="lead mb-4 text-body-emphasis">Graphical abstract</p>
            <img src={gfxAbstract} className="img-fluid border rounded-3 shadow mb-4" alt="gfx abstract" width="700" height="1600" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;