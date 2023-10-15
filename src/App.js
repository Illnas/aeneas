import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const [language, setLanguage] = useState({ value: "english", label: "EN" });

  useEffect(() => {
    document.title = "Aeneas";
    language.value === "english"
      ? (document.title = "Aeneas")
      : (document.title = "Eneja");
  }, [language]);

  return (
    <main>
      <Navbar language={language} setLanguage={setLanguage}></Navbar>
      <Main language={language}></Main>
    </main>
  );
}

export default App;
