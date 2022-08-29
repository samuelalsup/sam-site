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
  // const [darkMode, setDarkMode] = useState(true);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage theme={theme}/>} />
        <Route path="about" element={<AboutPage theme={theme}/>} />
        <Route path="skills+exp" element={<SkillsPage />} />
        <Route path="education" element={<EducationPage />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
