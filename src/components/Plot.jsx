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
            <p>{e.paragraphs}</p>
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
            Detailed information about Aeneas:{" "}
            <a
              href="https://www.britannica.com/topic/Aeneas"
              target="_blank"
              rel="noreferrer"
            >
              Information
            </a>
          </p>

          <p>
            Encyclopedia of Mythology:{" "}
            <a
              href="https://mythopedia.com/topics/aeneas"
              target="_blank"
              rel="noreferrer"
            >
              Aeneas
            </a>
          </p>

          <p>
            The Aeneid by Virgil: Summary, Characters, and Analysis :{" "}
            <a
              href="https://study.com/learn/lesson/aeneid-virgil-summary-characters-analysis.html"
              target="_blank"
              rel="noreferrer"
            >
              Summary
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
            Detaljnije o Eneji:{" "}
            <a
              href="https://www.britannica.com/topic/Aeneas"
              target="_blank"
              rel="noreferrer"
            >
              Detalji
            </a>
          </p>

          <p>
            Encyclopedia of Mythology:{" "}
            <a
              href="https://mythopedia.com/topics/aeneas"
              target="_blank"
              rel="noreferrer"
            >
              Eneja
            </a>
          </p>

          <p>
            The Aeneid by Virgil: Summary, Characters, and Analysis :{" "}
            <a
              href="https://study.com/learn/lesson/aeneid-virgil-summary-characters-analysis.html"
              target="_blank"
              rel="noreferrer"
            >
              Sažetak
            </a>
          </p>
        </section>
      )}
    </section>
  );
};

export default Plot;
