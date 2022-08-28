import React from "react";
import {
  Button,
  Header,
  Menu,
  Nav,
  ResponsiveContext,
} from "grommet";
import {
  IceCream,
  Moon,
} from "grommet-icons";

function MyHeader(props) {
  const items = [
    { label: "Home", href: "https://www.google.com" },
    { label: "About", href: "https://www.google.com" },
    { label: "Skills + Experience", href: "https://www.google.com" },
    { label: "Education", href: "https://www.google.com" },
  ];

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Header
          background="brand"
          fill="horizontal"
          pad={{ left: "large", right: "small", vertical: "small" }}
          align="center"
        >
          <Button
            href="https://www.google.com/"
            icon={
              <IceCream
                size="large"
                gap="medium"
                pad={{ vertical: "small" }}
                responsive={false}
                direction="row"
                align="start"
              />
            }
          />
          {!["xsmall", "small"].includes(size) ? (
            <Nav direction="row" animation="fadeIn">
              {items.map((item) => (
                <Button label={item.label} key={item.label} href={item.href} />
              ))}
            </Nav>
          ) : (
            <Menu label="Menu" items={items} />
          )}
          <Button icon={<Moon />} />
        </Header>
      )}
    </ResponsiveContext.Consumer>
  );
}
export default MyHeader;
