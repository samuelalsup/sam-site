import React from "react";
import {
  Box,
  Button,
  Footer,
  ResponsiveContext,
  Text,
} from "grommet";
import { Github, Instagram, Linkedin, Twitter } from "grommet-icons";

function MyFooter(props) {
  const year = new Date().getFullYear();
  const footerLinks = [
    { icon: <Github />, href: "https://github.com/samuelalsup" },
    { icon: <Linkedin />, href: "https://www.linkedin.com/in/samuel-alsup-a184a1183/" },
    { icon: <Instagram />, href: "https://www.instagram.com/samuelalsup_" },
    { icon: <Twitter />, href: "https://www.twitter.com/sammmessi" },
  ];

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Footer justify="around"
          // background="background-front"
          direction={!["xsmall", "small"].includes(size) ? "row" : "column"}
          align="center"
          pad={{ horizontal: "medium", vertical: "small" }}
          fill="horizontal"
        >
          <Box
            direction={!["xsmall", "small"].includes(size) ? "row" : "column"}
            align={!["xsmall", "small"].includes(size) ? "center" : undefined}
            gap="xsmall"
          >
            <Text size="small">
              &copy; {year} Made with React and Grommet!
            </Text>
          </Box>
          <Box
            direction="row"
            align={!["xsmall", "small"].includes(size) ? "center" : undefined}
            gap="xsmall"
            wrap
          >
            {footerLinks.map((link) => (
              <Button icon={link.icon} key={link.icon} href={link.href}/>
            ))}
          </Box>
        </Footer>
      )}
    </ResponsiveContext.Consumer>
  );
}
export default MyFooter;
