import React from "react";
import { Anchor, Box, Button, Grommet, PageHeader, ResponsiveContext } from "grommet";
import { IceCream } from "grommet-icons";
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

function AboutPage(props) {
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
              <PageHeader
                title="About me!"
                subtitle="Some info."
                parent={<Anchor label="Parent Page" />}
                actions={<Button label="View my resume" primary />}
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
