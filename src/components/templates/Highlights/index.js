import React, { Component } from "react";

import { HighlightArticles } from "../../organisms/HighlightArticles";
import { HighlightAd } from "../../molecules/HighlightAd";

import { HighlightsContainer } from "./styles";

class Highlights extends Component {
  render() {
    return (
      <HighlightsContainer>
        <HighlightArticles />
        <HighlightAd />
      </HighlightsContainer>
    );
  }
}

export default Highlights;
