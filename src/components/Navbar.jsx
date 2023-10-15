import React from "react";
import AnimatedBackground from "./AnimatedBackground";

const Navbar = ({ language, setLanguage }) => {
  return (
    <nav>
      <AnimatedBackground language={language} setLanguage={setLanguage} />
    </nav>
  );
};

export default Navbar;
