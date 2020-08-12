import React, { Fragment } from "react";
import { GlobalStyle } from "./components/styles/GlobalStyle";

import { NavBar } from "./components/templates/NavBar";
import { Slider } from "./components/templates/Slider";
import CategoryBar from "./components/templates/CategoryBar";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <NavBar />
      <Slider />
      <CategoryBar />
    </Fragment>
  );
}

export default App;
