import React from "react";
import data from "../data/data.json";

const Plot = ({ language }) => {
  const englishLanguage = data.filter((e) => e.language === "english")[0].text;
  const croatianLanguage = data.filter((e) => e.language === "croatian")[0]
    .text;
  return (
    <section className="right-side">
      {language.value === "english" &&
        englishLanguage.map((e) => (
          <section key={e.id}>
            <h2>{e.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: e.paragraphs }}></p>
          </section>
        ))}

      {language.value === "hrvatski" &&
        croatianLanguage.map((e) => (
          <section key={e.id}>
            <h2>{e.title}</h2>
            <p>{e.paragraphs}</p>
          </section>
        ))}

      {language.value === "english" && (
        <section>
          <h2>Sources</h2>
          <p>
            Journey of the Aeneas:{" "}
            <a
              href="https://www.worldhistory.org/image/16056/the-journey-of-aeneas-from-troy-to-rome/"
              target="_blank"
              rel="noreferrer"
            >
              Journey
            </a>
          </p>

          <p>
            The Aeneid by Virgil
            <a
              href="https://www.theoi.com/Text/VirgilAeneid1.html"
              target="_blank"
              rel="noreferrer"
            >
              Aeneid, Book One
            </a>
          </p>
        </section>
      )}

      {language.value === "hrvatski" && (
        <section>
          <h2>Izvori</h2>
          <p>
            Enejino putovanje:{" "}
            <a
              href="https://www.worldhistory.org/image/16056/the-journey-of-aeneas-from-troy-to-rome/"
              target="_blank"
              rel="noreferrer"
            >
              Itinerar
            </a>
          </p>

          <p>
            Vergilijeva Eneida
            <a
              href="https://www.theoi.com/Text/VirgilAeneid1.html"
              target="_blank"
              rel="noreferrer"
            >
              Eneida, Prva Knjiga
            </a>
          </p>
        </section>
      )}
    </section>
  );
};

export default Plot;
