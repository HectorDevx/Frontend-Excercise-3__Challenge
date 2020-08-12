import React, { Component } from "react";

import Points from "../../molecules/Points";

import { ImageSliderContainer } from "./styles";

class ImageSlider extends Component {
  render() {
    return (
      <ImageSliderContainer>
        <img src="" alt="" />
        <Points />
      </ImageSliderContainer>
    );
  }
}

export default ImageSlider;
