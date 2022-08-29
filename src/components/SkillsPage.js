import React from "react";
import {
    Anchor,
    Button,
    PageHeader,
  } from "grommet";
  import {
    IceCream,
  } from "grommet-icons";

function FrontPage(props) {
  return (
    <PageHeader
      title="Hey, I'm Sam Alsup."
      subtitle="A computer science student at UCLA."
      parent={<Anchor label="Parent Page" />}
      actions={<Button label="View my resume" primary />}
    />
  );
}
export default FrontPage;