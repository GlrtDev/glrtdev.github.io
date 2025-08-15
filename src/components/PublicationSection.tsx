import { useCollapse } from '../hooks/useCollapse'; // Import the custom hook
import pythonLogo from '../assets/imgs/python-logo-generic.svg';
import tfLogo from '../assets/imgs/TF_White_Primary_Horizontal.svg';
import numpyLogo from '../assets/imgs/numpylogolight.png';
import pandasLogo from '../assets/imgs/pandas_white.svg';
import scikitLogo from '../assets/imgs/scikit-learn-logo-notext.png';
import opencvLogo from '../assets/imgs/OpenCV_logo_white.svg';

function PublicationSection() {
  const { isCollapsed, toggleCollapse } = useCollapse();

  return (
    <div className="px-4 pt-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis col-lg-6 mx-auto">
        Publication: Assessing the attractiveness of human face based on machine learning
      </h1>
      <h4>27th International Conference on Knowledge-Based and Intelligent Information & Engineering Systems (KES 2023) · Sep 9, 2023</h4>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">This study employs three different models, each focusing on distinct features, with the belief that this approach can yield more accurate results in assessing facial attractiveness. However, these models display systematic errors when applied to the Face Research Lab London Set database, possibly due to variations in image evaluation criteria between the two datasets.</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          {/* Change button styles: first to secondary, second to primary */}
            <a href="https://mostwiedzy.pl/en/publication/assessing-the-attractiveness-of-human-face-based-on-machine-learning,161148-1" type="button" className="btn btn-primary btn-lg px-4 me-sm-3">
            Show publication
            </a>
          <button 
            type="button" 
            className="btn btn-outline-secondary btn-lg px-4" 
            onClick={toggleCollapse}
            aria-expanded={!isCollapsed}
            aria-controls="technology-collapse2"
          >
            Technology stack
          </button>

        </div>
      </div>
      <div className="overflow-hidden" style={{ maxHeight: '100vh' }}>
        <div className={`collapse multi-collapse ${isCollapsed ? '' : 'show'}`} id="technology-collapse2">
          <div className="container px-5">
            <p className="lead mb-4 text-body-emphasis">Technology stack</p>
            <ul className="list-group shadow">
              <li className="list-group-item list-group-item-dark">
                <a href="https://www.python.org/"><img className="img-fluid" src={pythonLogo} width="250" height="60" alt="Python Logo" /></a>
                <a href="https://www.tensorflow.org/"><img className="img-fluid" src={tfLogo} width="250" height="60" alt="TensorFlow Logo" /></a>
                <a href="https://numpy.org/"><img className="img-fluid" src={numpyLogo} width="145" height="65" alt="NumPy Logo" /></a>
                <a href="https://pandas.pydata.org/"><img className="img-fluid" src={pandasLogo} width="250" height="60" alt="Pandas Logo" /></a>
                <a href="https://scikit-learn.org/"><img className="img-fluid" src={scikitLogo} width="200" height="50" alt="Scikit-learn Logo" /></a>
                <a href="https://opencv.org/"><img className="img-fluid" src={opencvLogo} width="100" height="50" alt="OpenCV Logo" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicationSection;