import React, { Fragment } from "react";
import { GlobalStyle } from "./components/styles/GlobalStyle";

import { NavBar } from "./components/templates/NavBar";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <NavBar />
    </Fragment>
  );
}

export default App;
