import React, { useState } from "react";
import heroPic from "./images/FLEXSZN.jpeg";
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import FrontPage from "./components/FrontPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import SkillsPage from "./components/SkillsPage";
import EducationPage from "./components/EducationPage";
import { Box, Grommet, Image, ResponsiveContext } from "grommet";
import { CaretPrevious } from "grommet-icons";
import HomePage from "./components/HomePage";
import { grommet } from "grommet";

const theme = {
  global: {
    colors: {
      brand: "#324ab2",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  function switchDarkMode () {
    setDarkMode(!darkMode);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage theme={grommet} themeMode={darkMode ? "dark" : "light" } switchDarkMode={switchDarkMode}/>} />
        <Route path="about" element={<AboutPage theme={grommet} themeMode={darkMode ? "dark" : "light" } switchDarkMode={switchDarkMode}/>} />
        <Route path="skills+exp" element={<SkillsPage theme={grommet} themeMode={darkMode ? "dark" : "light" } switchDarkMode={switchDarkMode}/>} />
        <Route path="education" element={<EducationPage theme={grommet} themeMode={darkMode ? "dark" : "light" } switchDarkMode={switchDarkMode}/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
