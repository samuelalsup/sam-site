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
import { Link } from "react-router-dom";

function MyHeader(props) {
  const items = [
    { label: "Home", href: "https://www.google.com", url: "/" },
    { label: "About", href: "https://www.google.com", url: "/about"},
    { label: "Skills + Experience", href: "https://www.google.com", url:'/skills+exp' },
    { label: "Education", href: "https://www.google.com", url: '/education' },
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
            href="/"
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
                <Link to={item.url}>
                <Button label={item.label} key={item.label} 
                // href={item.href} 

                />
                </Link>
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
