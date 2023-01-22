import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Cursor from "react-cursor-follow";
import AnimatedCursor from "react-animated-cursor";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import MobileAbout from "./components/MobileAbout";
import MobileContact from "./components/MobileContact";
function App() {
  return (
    <div className="">
      <div className="hidden lg:block">
        <Cursor hollow opacity={0.2} color={"white"} duration={0} size={45} />
      </div>
      <AnimatedCursor color={[255, 255, 255]} outerAlpha={0} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/info" element={<MobileAbout />} />
        <Route path="/contactme" element={<MobileContact />} />
      </Routes>
    </div>
  );
}

export default App;
