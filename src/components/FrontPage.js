import React from "react";
// import AnimatedText from "react-animated-text-content";
import { Anchor, Box, Button, Heading, PageHeader, Text } from "grommet";
import { IceCream } from "grommet-icons";
// import TextAnimation from "react-animate-text";
import ReactTypingEffect from "react-typing-effect";

function FrontPage(props) {
  return (
    <PageHeader
      title={
        <Box>
          <Heading>
            <ReactTypingEffect text={["Hey! I'm Sam Alsup"]} />
          </Heading>
        </Box>
      }
      subtitle="A computer science student at UCLA."
      parent={<Anchor label="Parent Page" />}
      actions={<Button label="View my resume" primary />}
    />
  );
}
export default FrontPage;
