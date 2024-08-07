export const legacyIndex = `<!doctype html>
<html lang="en" data-bs-theme="auto">
  <head><script src="./assets/js/color-modes.js"></script>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Maciej Gielert">
    <title>Portfolio</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  

    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .b-example-divider {
        width: 100%;
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }

      .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
      }

      .bi {
        vertical-align: -.125em;
        fill: currentColor;
      }
      
      .nibabel-text {
        color: #2F83C8;
        font-size: 200%;
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }

      .btn-bd-primary {
        --bd-violet-bg: #712cf9;
        --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

        --bs-btn-font-weight: 600;
        --bs-btn-color: var(--bs-white);
        --bs-btn-bg: var(--bd-violet-bg);
        --bs-btn-border-color: var(--bd-violet-bg);
        --bs-btn-hover-color: var(--bs-white);
        --bs-btn-hover-bg: #6528e0;
        --bs-btn-hover-border-color: #6528e0;
        --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
        --bs-btn-active-color: var(--bs-btn-hover-color);
        --bs-btn-active-bg: #5a23c8;
        --bs-btn-active-border-color: #5a23c8;
      }

      .bd-mode-toggle {
        z-index: 1500;
      }

      .bd-mode-toggle .dropdown-menu .active .bi {
        display: block !important;
      }
    </style>

    
    <!-- Custom styles for this template -->
    <link href="heroes.css" rel="stylesheet">
  </head>
  <body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
      <symbol id="check2" viewBox="0 0 16 16">
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
      </symbol>
      <symbol id="circle-half" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
      </symbol>
      <symbol id="moon-stars-fill" viewBox="0 0 16 16">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
      </symbol>
      <symbol id="sun-fill" viewBox="0 0 16 16">
        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
      </symbol>
    </svg>

    <div class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
      <button class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
              id="bd-theme"
              type="button"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              aria-label="Toggle theme (auto)">
        <svg class="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#circle-half"></use></svg>
        <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
      </button>
      <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
            <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#sun-fill"></use></svg>
            Light
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
            <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>
            Dark
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
            <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#circle-half"></use></svg>
            Auto
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
      </ul>
    </div>

    
<main>
  <h1 class="visually-hidden">Portfolio</h1>

  <div class="px-4 py-5 my-5 text-center">
    <img class="d-block mx-auto mb-4" src="./assets/imgs/logo.png" alt="" width="60" height="60">
    <h1 class="display-5 fw-bold text-body-emphasis">M. Gielert - Portfolio</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">I'm a graduate with a Master's degree in Artificial Intelligence in Biomedical Enginering. I spent two years as a Python Developer in a corporate setting and one year as a freelance developer, specializing mainly in C#. Here are the main projects that i have been working on beside work.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <a type="button" class="btn btn-primary btn-lg px-4 gap-3" href="https://www.linkedin.com/in/maciej-gielert/">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
        </svg> Connect</a>
      </div>
    </div>
  </div>

  <div class="b-example-divider"></div>

  <div class="px-4 pt-5 my-5 text-center">
    <h1 class="display-5 fw-bold text-body-emphasis col-lg-6  mx-auto">
      Analysis of space-time pressure signals from foot using machine learning methods</h1>
      <h4>Nov 2023</h4>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">In my master's diploma project, I focused on utilizing two different biased databases for the classification of hallux valgus and estimating the level of motion disability using machine learning methods. I proposed and implemented a gait phase recognition system based on fuzzy logic. This system allowed modifications to the databases to counteract their biases. Subsequently, I implemented machine learning methods on the modified dataset.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3" data-bs-toggle="collapse" data-bs-target="#gfx-abstract-collapse">Graphical abstract</button>
        <button type="button" class="btn btn-primary btn-lg px-4" data-bs-toggle="collapse" data-bs-target="#technology-collapse">Technology stack</button>
      </div>
    </div>
    <div class="overflow-hidden" style="max-height: 100vh;">

      <div class="collapse multi-collapse" id="technology-collapse">
        <div class="container px-5">
          <p class="lead mb-4 text-body-emphasis">Technology stack</p>
            <ul class="list-group shadow">
              <li class="list-group-item list-group-item-dark">
                <a href="https://www.python.org/"><img class="img-fluid" src="./assets/imgs/python-logo-generic.svg" width="250" height="60"></a>
                <a href="https://www.tensorflow.org/"><img class="img-fluid" src="./assets/imgs/TF_White_Primary_Horizontal.svg" width="250" height="60"></a>
                <a href="https://numpy.org/"><img class="img-fluid" src="./assets/imgs/numpylogolight.png" width="145" height="65"></a>
                <a href="https://pandas.pydata.org/"><img class="img-fluid" src="./assets/imgs/pandas_white.svg" width="250" height="60"></a>
                <a href="https://scikit-learn.org/"><img class="img-fluid" src="./assets/imgs/scikit-learn-logo-notext.png" width="200" height="50"></a>
                <p class="nibabel-text">
                  <a href="https://nipy.org/nibabel/"></a><img class="img-fluid" src="./assets/imgs/nibabel-logo.svg" width="100" height="60"> NiBabel</a>
                </p> </li>
            </ul>
        </div>
      </div>

      <div class="collapse multi-collapse" id="gfx-abstract-collapse">
        <div class="container px-5">
          <p class="lead mb-4 text-body-emphasis">Graphical abstract</p>
          <img src="./assets/imgs/ANG gfx abstract v2.svg" class="img-fluid border rounded-3 shadow mb-4" alt="gfx abstract" width="700" height="1600" loading="lazy">
        </div>
      </div>

    </div>
  </div>


  <div class="b-example-divider"></div>

  <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="shadow rounded-3 mw-100" width="640" height="360" src="https://www.youtube.com/embed/A36u1vfFa8Y?si=8lvOUV6bTBmRt2KZ" title="YouTube video player" frameborder="0" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Game: 8 Bit Survivor</h1>
        <h4>Fab 2024</h4>
        <p class="lead">This is the first game that I finished. Started with a small plan but ended up managing a big project with over 25,000 lines of code. Applied a lot of design patterns such as factory, builder, composite, facade etc. Also, this project helped me refresh more advance programming concepts like thread synchronization, integrating third-party code and web sockets.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <a href="https://play.google.com/store/apps/details?id=com.glrtdev.EightBitSurvivor" type="button" class="btn btn-primary btn-lg px-4 me-md-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-google-play" viewBox="0 0 16 16">
            <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27"/>
          </svg> Google Play</a>
        </div>
      </div>
    </div>
  </div>

  <div class="b-example-divider mb-0"></div>

  


  <div class="px-4 pt-5 my-5 text-center">
    <h1 class="display-5 fw-bold text-body-emphasis col-lg-6  mx-auto">
      Publication: Assessing the attractiveness of human face based on machine learning</h1>
    <h4>27th International Conference on Knowledge-Based and Intelligent Information & Engineering Systems (KES 2023) · Sep 9, 2023</h4>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">This study employs three different models, each focusing on distinct features, with the belief that this approach can yield more accurate results in assessing facial attractiveness. However, these models display systematic errors when applied to the Face Research Lab London Set database, possibly due to variations in image evaluation criteria between the two datasets.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button type="button" class="btn btn-primary btn-lg px-4" data-bs-toggle="collapse" data-bs-target="#technology-collapse2">Technology stack</button>
        <a href="https://mostwiedzy.pl/en/publication/assessing-the-attractiveness-of-human-face-based-on-machine-learning,161148-1" type="button" class="btn btn-outline-primary btn-lg px-4 me-sm-3">Show publication</a>
      </div>
    </div>
    <div class="overflow-hidden" style="max-height: 100vh;">

      <div class="collapse multi-collapse" id="technology-collapse2">
        <div class="container px-5">
          <p class="lead mb-4 text-body-emphasis">Technology stack</p>
            <ul class="list-group shadow">
              <li class="list-group-item list-group-item-dark">
                <a href="https://www.python.org/"><img class="img-fluid" src="./assets/imgs/python-logo-generic.svg" width="250" height="60"></a>
                <a href="https://www.tensorflow.org/"><img class="img-fluid" src="./assets/imgs/TF_White_Primary_Horizontal.svg" width="250" height="60"></a>
                <a href="https://numpy.org/"><img class="img-fluid" src="./assets/imgs/numpylogolight.png" width="145" height="65"></a>
                <a href="https://pandas.pydata.org/"><img class="img-fluid" src="./assets/imgs/pandas_white.svg" width="250" height="60"></a>
                <a href="https://scikit-learn.org/"><img class="img-fluid" src="./assets/imgs/scikit-learn-logo-notext.png" width="200" height="50"></a>
                <a href="https://opencv.org/"><img class="img-fluid" src="./assets/imgs/OpenCV_logo_white.svg" width="100" height="50"></a></li>
            </ul>
        </div>
      </div>

    </div>
  </div>

  <div class="b-example-divider mb-0"></div>
</main>

    </body>
</html>`
