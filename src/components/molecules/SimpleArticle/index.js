import React, { Component } from "react";

import { Article } from "./styles";

class SimpleArticle extends Component {
  render() {
    return (
      <Article>
        <img src={this.props.image} alt="" />
        <h5>{this.props.name}</h5>
      </Article>
    );
  }
}

export default SimpleArticle;
