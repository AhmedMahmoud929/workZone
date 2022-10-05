import React from "react";
// Style
import "./assets/styles/style.css";
import "./assets/styles/mediaQ.css";
// Components
import Home from "./components/Home/Home";
import Navigator from "./components/Navigator/Navigator";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import Events from "./components/Events/Events";
import Feedback from "./components/Feedback/Feedback";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CopyRights from "./components/CopyRights/CopyRights";
// Animation
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <React.Fragment>
      <Navigator />
      <Home />
      <Services />
      <About />
      <Courses />
      <Events />
      <Feedback />
      <Contact />
      <Footer />
      <CopyRights />
    </React.Fragment>
  );
}

export default App;
