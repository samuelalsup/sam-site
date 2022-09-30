import React from "react";
// import AnimatedText from "react-animated-text-content";
import {
  Anchor,
  Box,
  Button,
  Heading,
  Image,
  PageHeader,
  Paragraph,
  Text,
} from "grommet";
import { IceCream } from "grommet-icons";
// import TextAnimation from "react-animate-text";
import ReactTypingEffect from "react-typing-effect";
import heroPic from ".././images/FLEXSZN.jpeg";
import me from '.././images/me.jpg';

function FrontPage(props) {
  return (
    // <Box background="#E97451">
    <Box>
      <PageHeader
        title={
          <Box>
            <Heading margin="small">
              {/* <ReactTypingEffect text={["Hey! I'm Sam Alsup"]} /> */}
              Hey! I'm Sam Alsup
            </Heading>
            <Paragraph></Paragraph>
          </Box>
        }
        subtitle=<Text margin="small" fontSize="large" >I'm a 21 year old developer, currently finishing up my last year
            studying computer science at UCLA</Text>
        // actions={<Button label="View my resume" primary />}
      />
      <Box flex align="right" justify="center">
        <Image fit="contain" src={me} />
      </Box>
    </Box>
  );
}
export default FrontPage;
