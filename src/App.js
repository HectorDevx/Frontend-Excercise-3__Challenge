import React, { Fragment } from "react";
import { GlobalStyle } from "./components/styles/GlobalStyle";

import { NavBar } from "./components/templates/NavBar";
import { Slider } from "./components/templates/Slider";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <NavBar />
      <Slider />
    </Fragment>
  );
}

export default App;
