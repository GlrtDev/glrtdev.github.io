import React from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';

const projects = [
  {
    title: 'Analysis of space-time pressure signals from foot using machine learning methods',
    date: 'Nov 2023',
    description: "In my master's diploma project, I focused on utilizing two different biased databases for the classification of hallux valgus and estimating the level of motion disability using machine learning methods. I proposed and implemented a gait phase recognition system based on fuzzy logic. This system allowed modifications to the databases to counteract their biases. Subsequently, I implemented machine learning methods on the modified dataset.",
    technologies: [
      { name: 'Python', url: 'https://www.python.org/', logo: 'python-logo-generic.svg', width: 250, height: 60 },
      { name: 'TensorFlow', url: 'https://www.tensorflow.org/', logo: 'TF_White_Primary_Horizontal.svg', width: 250, height: 60 },
      { name: 'Numpy', url: 'https://numpy.org/', logo: 'numpylogolight.png', width: 145, height: 65 },
      { name: 'Pandas', url: 'https://pandas.pydata.org/', logo: 'pandas_white.svg', width: 250, height: 60 },
      { name: 'scikit-learn', url: 'https://scikit-learn.org/', logo: 'scikit-learn-logo-notext.png', width: 200, height: 50 },
      { name: 'NiBabel', url: 'https://nipy.org/nibabel/', logo: 'nibabel-logo.svg', width: 100, height: 60 },
    ],
    graphicalAbstract: 'ANG gfx abstract v2.svg',
  },
  {
    title: 'Game: 8 Bit Survivor',
    date: 'Fab 2024',
    description: 'This is the first game that I finished. Started with a small plan but ended up managing a big project with over 25,000 lines of code. Applied a lot of design patterns such as factory, builder, composite, facade etc. Also, this project helped me refresh more advance programming concepts like thread synchronization, integrating third-party code and web sockets.',
    youtubeUrl: 'https://www.youtube.com/embed/A36u1vfFa8Y?si=8lvOUV6bTBmRt2KZ',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.glrtdev.EightBitSurvivor',
    isReversed: true,
  },
  {
    title: 'Publication: Assessing the attractiveness of human face based on machine learning',
    date: '27th International Conference on Knowledge-Based and Intelligent Information & Engineering Systems (KES 2023) · Sep 9, 2023',
    description: 'This study employs three different models, each focusing on distinct features, with the belief that this approach can yield more accurate results in assessing facial attractiveness. However, these models display systematic errors when applied to the Face Research Lab London Set database, possibly due to variations in image evaluation criteria between the two datasets.',
    technologies: [
        { name: 'Python', url: 'https://www.python.org/', logo: 'python-logo-generic.svg', width: 250, height: 60 },
        { name: 'TensorFlow', url: 'https://www.tensorflow.org/', logo: 'TF_White_Primary_Horizontal.svg', width: 250, height: 60 },
        { name: 'Numpy', url: 'https://numpy.org/', logo: 'numpylogolight.png', width: 145, height: 65 },
        { name: 'Pandas', url: 'https://pandas.pydata.org/', logo: 'pandas_white.svg', width: 250, height: 60 },
        { name: 'scikit-learn', url: 'https://scikit-learn.org/', logo: 'scikit-learn-logo-notext.png', width: 200, height: 50 },
        { name: 'OpenCV', url: 'https://opencv.org/', logo: 'OpenCV_logo_white.svg', width: 100, height: 50 },
    ],
    publicationUrl: 'https://mostwiedzy.pl/en/publication/assessing-the-attractiveness-of-human-face-based-on-machine-learning,161148-1',
  },
];

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        {projects.map((project, index) => (
          <React.Fragment key={project.title}>
            <ProjectCard {...project} />
            {index < projects.length - 1 && <div className="b-example-divider"></div>}
          </React.Fragment>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default App;
