import React, { useState } from "react";
import heroPic from "./images/FLEXSZN.jpeg";
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import FrontPage from './components/FrontPage';
import {
  Box,
  Grommet,
  Image,
  ResponsiveContext,
} from "grommet";
import {
  CaretPrevious,
} from "grommet-icons";

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
    <Grommet theme={theme} themeMode="dark" full>
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

export default App;
