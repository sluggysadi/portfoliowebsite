import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Aurora from './components/Aurora';
import Work from "./components/Work/Work";

const App = () => {
  return (
    
    <div className="bg-[#0f0f0f]">

      <Aurora
       colorStops={["#ff9966", "#ff5e62", "#6a11cb"]}
      blend={0.5}
      amplitude={1.0}
    speed={0.5}
    />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Experience />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </div>

    </div>
  );
};

export default App;
