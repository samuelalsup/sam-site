import React from "react";
import { Anchor, Box, Button, Grommet, PageHeader, ResponsiveContext } from "grommet";
import { IceCream } from "grommet-icons";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";

function FrontPage(props) {
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
                title="UCLA"
                subtitle="Maybe throw some blog stuff here. Also an idea is to have a sidebar with more options of smaller pages about my Spotify and other interests"
              />
              Here are the classes that I've taken over the years. I can honestly say that I enjoyed every single one (though not equally)
            </Box>
            <MyFooter />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}
export default FrontPage;
