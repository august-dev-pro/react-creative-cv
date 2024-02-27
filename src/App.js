import "./App.css";
import "./css/main.css";
import "./css/bootstrap.min.css";
import "./css/aos.css";

/* js import */
//import "./dist/js/core/jquery.3.2.1.min.js";
//import "./dist/js/core/popper.min.js";
//import "./js/core/bootstrap.min.js";
//import "./dist/js/now-ui-kit.js";
//import "./dist/js/aos.js";
import "./scripts/main.js";

import Footer from "./components/Footer";
import Hearder from "./components/Hearder";
import About from "./components/page-contents/About";
import Contact from "./components/page-contents/Contact";
import Education from "./components/page-contents/Education";
import Experience from "./components/page-contents/Experience";
import Portfolio from "./components/page-contents/Portfolio";
import Profil from "./components/page-contents/Profil";
import Reference from "./components/page-contents/Reference";
import Skill from "./components/page-contents/Skill";

function App() {
  return (
    <div className="App" id="top">
      <Hearder />
      <div class="page-content">
        <div>
          <Profil />
          <About />
          <Skill />
          <Portfolio />
          <Experience />
          <Education />
          <Reference />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
