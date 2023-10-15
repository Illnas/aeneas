import React from "react";
import Select from "react-select";

const AnimatedBackground = ({ language, setLanguage }) => {
  const languageOptions = [
    { value: "hrvatski", label: "HR" },
    { value: "english", label: "EN" },
  ];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "white",
      backgroundColor: state.isFocused ? "purple" : null,
      // match with the menu
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "yellow" : "green",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "purple" : "purple",
      },
    }),
    menu: (base) => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // kill the gap
      marginTop: 0,
    }),
    menuList: (base) => ({
      ...base,
      // kill the white space on first and last option
      padding: 0,
    }),
  };

  const handleChange = (selectedOption) => {
    setLanguage(selectedOption);
  };

  return (
    <>
      <div className="header">
        <div className="title">
          <h1>{language.value === "english" ? "Aeneas" : "Eneja"}</h1>
        </div>

        <Select
          defaultValue={languageOptions[1]}
          label="Single select"
          options={languageOptions}
          styles={customStyles}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default AnimatedBackground;
