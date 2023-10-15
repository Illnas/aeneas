import React from "react";
import HeroCard from "./HeroCard";
import Plot from "./Plot";

const Main = ({ language }) => {
  return (
    <main className="main">
      <HeroCard language={language} />
      <Plot language={language} />
    </main>
  );
};

export default Main;
