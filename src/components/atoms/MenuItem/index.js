import React, { Component } from "react";

import { MItem } from "./styles";

class MenuItem extends Component {
  render() {
    return <MItem>{this.props.value}</MItem>;
  }
}

export default MenuItem;
