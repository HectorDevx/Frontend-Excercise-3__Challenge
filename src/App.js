import React, { Fragment } from "react";
import { GlobalStyle } from "./components/styles/GlobalStyle";

import { NavBar } from "./components/templates/NavBar";
import { Slider } from "./components/templates/Slider";
import CategoryBar from "./components/templates/CategoryBar";
import Highlights from "./components/templates/Highlights";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <NavBar />
      <Slider />
      <CategoryBar />
      <Highlights />
    </Fragment>
  );
}

export default App;
