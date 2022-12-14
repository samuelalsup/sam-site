import React from "react";
import { Anchor, Box, Button, Grommet, PageHeader, ResponsiveContext } from "grommet";
import { IceCream } from "grommet-icons";
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

function AboutPage(props) {
  return (
    <Grommet theme={props.theme} themeMode={props.themeMode} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <MyHeader themeMode={props.themeMode} switchDarkMode={props.switchDarkMode}/>
            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              {/* <Box flex align="center" justify="center">
                <Image fit="contain" src={heroPic} />
              </Box> */}
              <PageHeader
                title="Some things about me!"
                subtitle="I have experience working on lots of languages! I've done frontend with React, as well as Python, C++, etc"
              />
            </Box>
            <MyFooter />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}
export default AboutPage;
