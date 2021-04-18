import React from "react";
import { Loader, Dimmer } from "semantic-ui-react";

// stateless functional component 
const Spinner = () => (
  <Dimmer active>
    <Loader size="huge" content={"Preparing Chat..."} />
  </Dimmer>
);

export default Spinner;
