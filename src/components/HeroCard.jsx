import React from "react";
import data from "../data/data.json";

const HeroCard = ({ language }) => {
  const englishLanguage = data.filter((e) => e.language === "english")[0]
    .summary;
  const croatianLanguage = data.filter((e) => e.language === "croatian")[0]
    .summary;

  return (
    <section className="left-side">
      <h2>Short Summary</h2>
      <div className="card-container">
        {language.value === "english" &&
          englishLanguage.map((e) => (
            <div className="card" key={e.id}>
              <h3>{e.character}</h3>
              <span>{e.relationship}</span>
              <p>{e.plot}</p>
            </div>
          ))}

        {language.value === "hrvatski" &&
          croatianLanguage.map((e) => (
            <div className="card" key={e.id}>
              <h3>{e.character}</h3>
              <span>{e.relationship}</span>
              <p>{e.plot}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default HeroCard;
