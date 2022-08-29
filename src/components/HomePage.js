import React, { useState } from "react";
// import heroPic from "./images/FLEXSZN.jpeg";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import FrontPage from "./FrontPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./AboutPage";
import SkillsPage from "./SkillsPage";
import EducationPage from "./EducationPage";
import { Box, Grommet, Image, ResponsiveContext } from "grommet";
import { CaretPrevious } from "grommet-icons";


function HomePage(props) {
  return (
    <Grommet theme={props.theme} themeMode="dark" full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <MyHeader />
            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              {/* <Box flex align="center" justify="center">
                <Image fit="contain" src={heroPic} />
              </Box> */}
              <FrontPage />
            </Box>
            <MyFooter />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}
export default HomePage;