import React, { Fragment } from "react";
import { GlobalStyle } from "./components/styles/GlobalStyle";

import { NavBar } from "./components/templates/NavBar";
import { Slider } from "./components/templates/Slider";
import CategoryBar from "./components/templates/CategoryBar";
import Highlights from "./components/templates/Highlights";
import Footer from "./components/templates/Footer";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <NavBar />
      <Slider />
      <CategoryBar />
      <Highlights />
      <Footer />
    </Fragment>
  );
}

export default App;
